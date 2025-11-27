import schoolCatalog from "../public/school.json";

const schools = Array.isArray(schoolCatalog?.universities)
  ? schoolCatalog.universities
  : [];

function normalise(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function findSchoolLogo(query) {
  if (!query || typeof query !== "string") {
    return null;
  }

  const normalisedQuery = normalise(query);
  if (!normalisedQuery) {
    return null;
  }

  const exactMatch = schools.find(
    (school) => normalise(school.name) === normalisedQuery
  );
  if (exactMatch?.logo) {
    return exactMatch.logo;
  }

  const partialMatch = schools.find((school) =>
    normalise(school.name).startsWith(normalisedQuery)
  );
  if (partialMatch?.logo) {
    return partialMatch.logo;
  }

  const domainFallback = schools.find((school) =>
    school.domains?.some((domain) =>
      normalise(domain).includes(normalisedQuery)
    )
  )?.logo;

  return domainFallback ?? null;
}
