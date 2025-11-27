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

function serialize(universities) {
  return universities
    .map((entry) => ({
      name: entry.name,
      country: entry.country,
      state: entry["state-province"] || null,
      alphaTwoCode: entry.alpha_two_code,
      domains: entry.domains ?? [],
      webPages: entry.web_pages ?? [],
      logo:
        Array.isArray(entry.domains) && entry.domains.length > 0
          ? `https://logo.clearbit.com/${entry.domains[0]}`
          : null,
    }))
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
