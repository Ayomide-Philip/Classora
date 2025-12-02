export default function AnnoucementsHeader() {
  return (
    <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Announcements
        </h2>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Recent updates across your courses and departments
        </p>
      </div>

      <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:w-auto">
        <label htmlFor="ann-search" className="sr-only">
          Search announcements
        </label>
        <input
          id="ann-search"
          placeholder="Search"
          className="w-full rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 sm:w-44 dark:border-slate-700 dark:bg-slate-900/60 dark:placeholder:text-slate-500"
        />
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-900/70 dark:text-white">
          Filter
        </button>
      </div>
    </div>
  );
}
