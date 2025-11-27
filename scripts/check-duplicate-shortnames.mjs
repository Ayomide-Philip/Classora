import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

async function loadCatalog() {
  const filePath = resolve("./public/school.json");
  const content = await readFile(filePath, "utf8");
  return JSON.parse(content);
}

const catalog = await loadCatalog();
const entries = Array.isArray(catalog.universities) ? catalog.universities : [];

const duplicates = entries.reduce((acc, entry) => {
  if (!entry.shortName) {
    return acc;
  }
  const key = entry.shortName.toUpperCase();
  if (!acc.has(key)) {
    acc.set(key, []);
  }
  acc.get(key).push(entry);
  return acc;
}, new Map());

let duplicateCount = 0;

for (const [shortName, schools] of duplicates.entries()) {
  if (schools.length > 1) {
    duplicateCount += 1;
    console.log(
      `Short name "${shortName}" is used by ${schools.length} schools:`
    );
    schools.forEach((school) => {
      console.log(`  • ${school.name}`);
    });
    console.log("");
  }
}

if (duplicateCount === 0) {
  console.log("✅ All short names are unique.");
} else {
  console.log(`⚠️ Found ${duplicateCount} duplicated short name(s).`);
}
