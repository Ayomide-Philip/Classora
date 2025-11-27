export default function CreateStepOne({ handleFieldChange }) {
  return (
    <div className="grid gap-6">
      {/* board name */}
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Board name
        </label>
        <input
          type="text"
          placeholder="e.g. Advanced UI Design"
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
        />
      </div>
      {/* tagline */}
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Tagline
        </label>
        <input
          type="text"
          placeholder="Summarise your board in one sentence"
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
        />
      </div>
      {/* description */}
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Description
        </label>
        <textarea
          rows={4}
          placeholder="Outline the goals of this board so learners know what to expect."
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40 resize-none"
        />
      </div>
      {/* dropdown */}
      <div className="grid gap-2 md:max-w-sm">
        <div className="flex items-baseline justify-between gap-3">
          <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
            Board type
          </label>
          <span className="text-xs font-medium text-slate-400 dark:text-white/45">
            Set the vibe for this space
          </span>
        </div>
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/80 px-5 py-4 shadow-sm shadow-slate-900/10 transition dark:border-white/12 dark:bg-slate-900/60 dark:shadow-[0_40px_140px_-90px_rgba(34,211,238,0.45)]">
          <div
            className="pointer-events-none absolute inset-0 border border-white/40 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 dark:border-white/10"
            aria-hidden="true"
          />
          <div className="relative flex items-center gap-3">
            <span className="h-10 w-10 shrink-0 rounded-xl bg-linear-to-br from-[#34d399]/35 via-[#22d3ee]/30 to-[#6366f1]/30 text-[#0f172a] shadow-inner shadow-white/30 dark:from-[#34d399]/25 dark:via-[#22d3ee]/25 dark:to-[#6366f1]/25 dark:text-white/90">
              <span className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-wide">
                BT
              </span>
            </span>
            <div className="relative flex-1">
              <select
                defaultValue=""
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-inner shadow-white/40 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-slate-900/70 dark:text-white dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:focus:ring-[#22d3ee]/40"
              >
                <option value="" disabled>
                  Choose board type
                </option>
                <option value="school">School</option>
                <option value="projects">Projects</option>
                <option value="group">Group</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500 dark:text-white/50">
                ▾
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
