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
const STATE_ABBREVIATIONS = {
  Abia: "AB",
  Adamawa: "AD",
  "Akwa Ibom": "AK",
  Anambra: "AN",
  Bauchi: "BA",
  Bayelsa: "BY",
  Benue: "BE",
  Borno: "BO",
  "Cross River": "CR",
  Delta: "DE",
  Ebonyi: "EB",
  Edo: "ED",
  Ekiti: "EK",
  Enugu: "EN",
  Gombe: "GO",
  Imo: "IM",
  Jigawa: "JI",
  Kaduna: "KD",
  Kano: "KN",
  Katsina: "KT",
  Kebbi: "KB",
  Kogi: "KG",
  Kwara: "KW",
  Lagos: "LA",
  Nasarawa: "NA",
  Niger: "NI",
  Ogun: "OG",
  Ondo: "OD",
  Osun: "OS",
  Oyo: "OY",
  Plateau: "PL",
  Rivers: "RV",
  Sokoto: "SO",
  Taraba: "TA",
  Yobe: "YO",
  Zamfara: "ZA",
  "Federal Capital Territory": "FCT",
};
const STATE_ALIAS_OVERRIDES = {
  Abuja: "Federal Capital Territory",
  FCT: "Federal Capital Territory",
  Ilorin: "Kwara",
  Maiduguri: "Borno",
  "Port Harcourt": "Rivers",
  Portharcourt: "Rivers",
  Jos: "Plateau",
  Mkar: "Benue",
  Uyo: "Akwa Ibom",
  Owo: "Ondo",
  Ede: "Osun",
  "Ile Ife": "Osun",
  "Ile-Ife": "Osun",
  Ilishan: "Ogun",
  Remo: "Ogun",
  Igbesa: "Ogun",
  Imota: "Lagos",
  Abeokuta: "Ogun",
  Karu: "Nasarawa",
  Ikere: "Ekiti",
  Oju: "Benue",
  Ibadan: "Oyo",
  Unwana: "Ebonyi",
  Ota: "Ogun",
  Otta: "Ogun",
  Obong: "Akwa Ibom",
  Achievers: "Ondo",
  Adeleke: "Osun",
  Bowen: "Osun",
  Babcock: "Ogun",
  Baze: "Federal Capital Territory",
  Bingham: "Nasarawa",
  Caleb: "Lagos",
  Caritas: "Enugu",
  Covenant: "Ogun",
  Crawford: "Ogun",
  Crescent: "Ogun",
  Oduduwa: "Osun",
  Obafemi: "Osun",
  Afe: "Ekiti",
};
const STATE_ALIAS_LOOKUP = (() => {
  const lookup = new Map();
  const normaliseForSearch = (value) =>
    value
      .toUpperCase()
      .replace(/[^A-Z0-9]+/g, " ")
      .trim();

  for (const stateName of Object.keys(STATE_ABBREVIATIONS)) {
    const alias = normaliseForSearch(stateName);
    if (alias) {
      lookup.set(alias, stateName);
    }
  }

  for (const [aliasSource, stateName] of Object.entries(
    STATE_ALIAS_OVERRIDES
  )) {
    const alias = normaliseForSearch(aliasSource);
    if (alias && !lookup.has(alias)) {
      lookup.set(alias, stateName);
    }
  }

  return { lookup, normaliseForSearch };
})();
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

function findCanonicalStateName(text) {
  if (!text || typeof text !== "string") {
    return null;
  }

  const normalised = STATE_ALIAS_LOOKUP.normaliseForSearch(text);
  if (!normalised) {
    return null;
  }

  const padded = ` ${normalised} `;

  for (const [alias, canonical] of STATE_ALIAS_LOOKUP.lookup) {
    if (padded.includes(` ${alias} `)) {
      return canonical;
    }
  }

  return null;
}

function deriveStateInfo(entry) {
  const sources = [];

  if (typeof entry["state-province"] === "string") {
    sources.push(entry["state-province"]);
  }

  if (typeof entry.name === "string") {
    sources.push(entry.name);
  }

  if (Array.isArray(entry.web_pages)) {
    sources.push(...entry.web_pages.filter((item) => typeof item === "string"));
  }

  if (Array.isArray(entry.domains)) {
    sources.push(...entry.domains.filter((item) => typeof item === "string"));
  }

  for (const source of sources) {
    const canonical = findCanonicalStateName(source);
    if (canonical) {
      return {
        state: canonical,
        stateCode: STATE_ABBREVIATIONS[canonical] ?? null,
      };
    }
  }

  const rawState =
    typeof entry["state-province"] === "string"
      ? entry["state-province"].trim() || null
      : null;

  return {
    state: rawState,
    stateCode: null,
  };
}

function serialize(universities) {
  const enriched = universities.map((entry) => {
    const firstDomain = Array.isArray(entry.domains) ? entry.domains[0] : null;
    const shortName = createShortName(entry);
    const { state, stateCode } = deriveStateInfo(entry);

    return {
      entry,
      baseShortName: shortName,
      state,
      stateCode,
      logo: firstDomain ? `https://logo.clearbit.com/${firstDomain}` : null,
    };
  });

  const grouped = new Map();
  for (const item of enriched) {
    const key = item.baseShortName || null;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }

    grouped.get(key).push(item);
  }

  const resolved = [];

  for (const items of grouped.values()) {
    if (items.length === 1) {
      const [{ entry, baseShortName, state, stateCode, logo }] = items;
      resolved.push({
        name: entry.name,
        shortName: baseShortName,
        country: entry.country,
        state,
        stateCode,
        alphaTwoCode: entry.alpha_two_code,
        logo,
      });
      continue;
    }

    const suffixUsage = new Map();
    const leftovers = [];

    // Deterministic order keeps output stable between runs.
    const sortedItems = [...items].sort((a, b) =>
      a.entry.name.localeCompare(b.entry.name)
    );

    for (const item of sortedItems) {
      const { entry, baseShortName, state, stateCode, logo } = item;

      if (!baseShortName) {
        leftovers.push({ entry, baseShortName, state, stateCode, logo });
        continue;
      }

      if (!stateCode) {
        leftovers.push({ entry, baseShortName, state, stateCode, logo });
        continue;
      }

      const count = (suffixUsage.get(stateCode) ?? 0) + 1;
      suffixUsage.set(stateCode, count);

      const suffix = count === 1 ? stateCode : `${stateCode}${count}`;
      resolved.push({
        name: entry.name,
        shortName: `${baseShortName}${suffix}`,
        country: entry.country,
        state,
        stateCode,
        alphaTwoCode: entry.alpha_two_code,
        logo,
      });
    }

    if (leftovers.length > 0) {
      let fallbackIndex = 1;

      for (const item of leftovers) {
        const { entry, baseShortName, state, stateCode, logo } = item;
        const fallbackSuffix = String(fallbackIndex).padStart(2, "0");
        fallbackIndex += 1;

        resolved.push({
          name: entry.name,
          shortName: baseShortName ? `${baseShortName}${fallbackSuffix}` : null,
          country: entry.country,
          state,
          stateCode,
          alphaTwoCode: entry.alpha_two_code,
          logo,
        });
      }
    }
  }

  return resolved.sort((a, b) => a.name.localeCompare(b.name));
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
