export default function CourseCode() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Course Code
        </label>
        <input
          type="text"
          placeholder="e.g., PHY101"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Unique identifier for the course
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Course Title
        </label>
        <input
          type="text"
          placeholder="e.g., Physics 101"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
        />
      </div>
    </div>
  );
}
