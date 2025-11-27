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

function extractDomain(logoUrl) {
  if (!logoUrl || typeof logoUrl !== "string") {
    return null;
  }

  const withoutProtocol = logoUrl.replace(/^https?:\/\//, "");
  const [host] = withoutProtocol.split("/");
  return host ? host.toLowerCase() : null;
}

function findSchoolEntry(query) {
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
  if (exactMatch) {
    return exactMatch;
  }

  const shortNameMatch = schools.find((school) => {
    if (!school.shortName) {
      return false;
    }
    return normalise(school.shortName) === normalisedQuery;
  });
  if (shortNameMatch) {
    return shortNameMatch;
  }

  const partialMatch = schools.find((school) =>
    normalise(school.name).startsWith(normalisedQuery)
  );
  if (partialMatch) {
    return partialMatch;
  }

  const domainMatch = schools.find((school) => {
    const domain = extractDomain(school.logo);
    return domain
      ? domain.includes(normalisedQuery.replace(/\s+/g, ""))
      : false;
  });

  return domainMatch ?? null;
}

export function findSchoolLogo(query) {
  const school = findSchoolEntry(query);
  return school?.logo ?? null;
}

export function findSchoolShortName(query) {
  const school = findSchoolEntry(query);
  return school?.shortName ?? null;
}
