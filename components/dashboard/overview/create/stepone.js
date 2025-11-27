/* eslint-disable @next/next/no-img-element */
const BOARD_TYPES = [
  {
    id: "school",
    title: "School",
    blurb: "Perfect for classrooms, lectures, and cohorts.",
    accent: "from-[#34d399]/25 via-[#22d3ee]/25 to-[#6366f1]/30",
    badge: "SCH",
  },
  {
    id: "projects",
    title: "Projects",
    blurb: "Centralise briefs, sprints, and stand-ups.",
    accent: "from-[#f97316]/25 via-[#fb7185]/25 to-[#6366f1]/30",
    badge: "PRJ",
  },
  {
    id: "group",
    title: "Group",
    blurb: "Coordinate clubs, communities, or study circles.",
    accent: "from-[#8b5cf6]/25 via-[#6366f1]/25 to-[#22d3ee]/30",
    badge: "GRP",
  },
  {
    id: "personal",
    title: "Personal",
    blurb: "Track your own learning goals and resources.",
    accent: "from-[#22d3ee]/25 via-[#34d399]/25 to-[#0ea5e9]/30",
    badge: "PXL",
  },
];

import {
  findSchoolCountry,
  findSchoolLogo,
  findSchoolShortName,
} from "@/libs/find-school-logo";
import schools from "@/public/school.json";

export default function CreateStepOne({ handleFieldChange, formData }) {
  const selectedBoardType = formData?.boardType ?? "";
  const selectedSchool = formData?.school ?? "";

  const cardBaseClasses =
    "relative flex flex-col gap-3 overflow-hidden rounded-2xl border p-5 shadow-sm shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/40 dark:shadow-[0_35px_140px_-90px_rgba(34,211,238,0.45)] dark:hover:shadow-[0_35px_160px_-90px_rgba(34,211,238,0.65)]";
  const cardDefaultClasses =
    "border-slate-200 bg-white/70 dark:border-white/10 dark:bg-slate-900/60";
  const cardSelectedClasses =
    "border-transparent bg-linear-to-br from-[#34d399]/12 via-[#22d3ee]/15 to-[#6366f1]/18 shadow-md shadow-[#22d3ee]/15 dark:from-[#34d399]/10 dark:via-[#22d3ee]/15 dark:to-[#6366f1]/15";

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Board name
        </label>
        <input
          type="text"
          placeholder="e.g. Advanced UI Design"
          value={formData?.name ?? ""}
          onChange={(event) => handleFieldChange("name", event.target.value)}
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Tagline
        </label>
        <input
          type="text"
          placeholder="Summarise your board in one sentence"
          value={formData?.tagline ?? ""}
          onChange={(event) => handleFieldChange("tagline", event.target.value)}
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Description
        </label>
        <textarea
          rows={4}
          placeholder="Outline the goals of this board so learners know what to expect."
          value={formData?.description ?? ""}
          onChange={(event) =>
            handleFieldChange("description", event.target.value)
          }
          className="resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
        />
      </div>

      <div className="grid gap-4">
        <div className="flex items-baseline justify-between gap-3">
          <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
            Board type
          </label>
          <span className="text-xs font-medium text-slate-400 dark:text-white/45">
            Pick the environment that fits best
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {BOARD_TYPES.map((type) => {
            const isSelected = selectedBoardType === type.id;

            return (
              <label key={type.id} className="relative block">
                <input
                  type="radio"
                  name="board-type"
                  value={type.id}
                  checked={isSelected}
                  onChange={(event) =>
                    handleFieldChange("boardType", event.target.value)
                  }
                  className="peer sr-only"
                />
                <div
                  className={`${cardBaseClasses} ${
                    isSelected ? cardSelectedClasses : cardDefaultClasses
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${
                      type.accent
                    } transition-opacity duration-200 ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-white/35">
                        {type.badge}
                      </span>
                      <span className="text-lg font-semibold text-slate-900 dark:text-white">
                        {type.title}
                      </span>
                    </div>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                        isSelected
                          ? "border-transparent bg-[#22d3ee]/15 text-[#0f172a] shadow shadow-[#22d3ee]/30 dark:bg-[#22d3ee]/20 dark:text-white"
                          : "border-slate-200 bg-white text-slate-500 dark:border-white/15 dark:bg-slate-900/70 dark:text-white/60"
                      }`}
                    >
                      ●
                    </span>
                  </div>
                  <p
                    className={`relative text-sm transition ${
                      isSelected
                        ? "text-slate-600 dark:text-white/70"
                        : "text-slate-500 dark:text-white/55"
                    }`}
                  >
                    {type.blurb}
                  </p>
                </div>
              </label>
            );
          })}
        </div>

        {selectedBoardType === "school" && (
          <div className="grid gap-2 md:max-w-sm">
            <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
              Select school
            </label>
            <div className="relative">
              <span
                className="pointer-events-none absolute inset-y-0 left-3 flex items-center"
                aria-hidden="true"
              >
                {!selectedSchool?.logo ? (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-[#22d3ee] via-[#34d399] to-[#0ea5e9] text-xs font-semibold uppercase tracking-[0.25em] text-white/95 shadow shadow-[#22d3ee]/35">
                    {selectedSchool?.name
                      ? selectedSchool.name.slice(0, 2).toUpperCase()
                      : "?"}
                  </span>
                ) : (
                  <img
                    src={selectedSchool.logo}
                    alt={`${selectedSchool.name} logo`}
                    className="h-8 w-8 rounded-full object-contain"
                  />
                )}
              </span>
              <select
                value={selectedSchool.name}
                onChange={(event) =>
                  handleFieldChange("school", {
                    name: event.target.value,
                    logo: findSchoolLogo(event.target.value),
                    shortName: findSchoolShortName(event.target.value),
                    country: findSchoolCountry(event.target.value),
                  })
                }
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-14 pr-12 text-sm font-medium text-slate-900 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-slate-900/70 dark:text-white dark:focus:ring-[#22d3ee]/40"
              >
                <option value="" disabled>
                  Choose a school
                </option>
                {schools.universities.map(({ name }, idx) => (
                  <option key={idx} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500 dark:text-white/50">
                ▾
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
