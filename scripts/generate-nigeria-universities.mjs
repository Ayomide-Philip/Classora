#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { request } from "node:https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_PATH = resolve(__dirname, "../public/school.json");
const SOURCE_URL =
  "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";
const SOURCE_LICENSE = "MIT";

async function downloadJson(url) {
  return new Promise((resolvePromise, rejectPromise) => {
    const req = request(url, (res) => {
      if (res.statusCode !== 200) {
        rejectPromise(new Error(`Unexpected status code ${res.statusCode}`));
        res.resume();
        return;
      }

      let raw = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        raw += chunk;
      });
      res.on("end", () => {
        try {
          resolvePromise(JSON.parse(raw));
        } catch (parseError) {
          rejectPromise(parseError);
        }
      });
    });

    req.on("error", rejectPromise);
    req.end();
  });
}

async function fetchNigeriaUniversities() {
  const payload = await downloadJson(SOURCE_URL);
  return payload.filter((entry) => entry.country === "Nigeria");
}

const STOP_WORDS = new Set([
  "of",
  "and",
  "the",
  "for",
  "in",
  "at",
  "on",
  "with",
  "by",
  "to",
]);
const TYPE_WORDS = new Set([
  "university",
  "polytechnic",
  "college",
  "institute",
  "school",
  "academy",
  "technology",
  "technological",
  "agriculture",
  "agricultural",
  "education",
  "science",
  "sciences",
  "health",
  "medical",
  "management",
  "business",
  "arts",
  "law",
  "engineering",
]);

function sanitiseToken(token) {
  return token.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
}

function deriveDomainCandidate(entry) {
  const firstDomain = Array.isArray(entry.domains) ? entry.domains[0] : null;
  if (!firstDomain || typeof firstDomain !== "string") {
    return null;
  }

  const label = firstDomain.split(".")[0] ?? "";
  const candidate = label.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  return candidate.length > 0 ? candidate : null;
}

function trimDomainByLocation(domainCandidate, locationTokens) {
  if (!domainCandidate) {
    return null;
  }

  let trimmed = domainCandidate;

  for (const token of locationTokens) {
    const sanitized = sanitiseToken(token);
    if (!sanitized) {
      continue;
    }

    if (trimmed.endsWith(sanitized) && trimmed.length - sanitized.length >= 3) {
      trimmed = trimmed.slice(0, trimmed.length - sanitized.length);
    }
  }

  return trimmed;
}

function createShortName(entry) {
  const name = entry.name ?? "";
  if (!name) {
    return null;
  }

  const tokens = name
    .replace(/\([^)]*\)/g, "")
    .replace(/&/g, " and ")
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean);

  const coreLetters = [];
  const typeLetters = [];
  const locationTokens = [];

  let encounteredType = false;

  for (const rawToken of tokens) {
    const lower = rawToken.toLowerCase();
    if (STOP_WORDS.has(lower)) {
      continue;
    }

    if (!encounteredType) {
      coreLetters.push(rawToken[0].toUpperCase());
    }

    if (TYPE_WORDS.has(lower)) {
      typeLetters.push(rawToken[0].toUpperCase());
      encounteredType = true;
      continue;
    }

    if (encounteredType) {
      locationTokens.push(rawToken);
    }
  }

  let base = [...coreLetters, ...typeLetters].join("");
  if (base.length === 0) {
    base = tokens
      .slice(0, 4)
      .map((token) => token[0].toUpperCase())
      .join("");
  }

  const domainCandidate = deriveDomainCandidate(entry);
  const trimmedDomain = trimDomainByLocation(domainCandidate, locationTokens);

  if (
    base.length <= 1 &&
    trimmedDomain &&
    trimmedDomain.length >= 2 &&
    trimmedDomain.length <= 6
  ) {
    return trimmedDomain;
  }

  if (
    trimmedDomain &&
    trimmedDomain.length >= 2 &&
    trimmedDomain.length <= 6 &&
    (trimmedDomain.startsWith(base) ||
      trimmedDomain.length <= 4 ||
      base.length <= 3)
  ) {
    return trimmedDomain;
  }

  if (base.length > 6) {
    return base.slice(0, 6);
  }

  return base || trimmedDomain || null;
}

function serialize(universities) {
  return universities
    .map((entry) => {
      const firstDomain = Array.isArray(entry.domains)
        ? entry.domains[0]
        : null;

      return {
        name: entry.name,
        shortName: createShortName(entry),
        country: entry.country,
        state: entry["state-province"] || null,
        alphaTwoCode: entry.alpha_two_code,
        logo: firstDomain ? `https://logo.clearbit.com/${firstDomain}` : null,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

async function writeOutput(universities) {
  const payload = {
    generatedAt: new Date().toISOString(),
    source: {
      url: SOURCE_URL,
      license: SOURCE_LICENSE,
      note: "Dataset maintained by Hipo/university-domains-list",
    },
    universities,
  };

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, JSON.stringify(payload, null, 2), "utf8");
}

async function main() {
  console.log("⬇️  Fetching Nigerian university dataset...");
  const rawUniversities = await fetchNigeriaUniversities();
  console.log(`📚 Retrieved ${rawUniversities.length} records.`);

  console.log("🧹 Normalising data...");
  const serialised = serialize(rawUniversities);

  console.log("💾 Writing public/school.json...");
  await writeOutput(serialised);
  console.log("🎉 Done.");
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : null;
const currentPath = fileURLToPath(import.meta.url);

if (!invokedPath || invokedPath === currentPath) {
  main().catch((error) => {
    console.error("❌ Generation failed:", error);
    process.exitCode = 1;
  });
}
