import OverviewActivity from "@/components/dashboard/overview/activity";
import OverviewAnnoucement from "@/components/dashboard/overview/annoucements";
import OverviewStats from "@/components/dashboard/overview/stats";
export default function ActiveBoard({ board }) {
  console.log(board);
  return (
    <>
      <div className="mb-5 overflow-hidden rounded-b-xl border border-slate-200 bg-white px-6 py-8 shadow-xl dark:border-slate-800/70 dark:bg-slate-900/80 dark:shadow-2xl dark:shadow-slate-950/40">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30">
              <span className="text-lg font-bold">
                {(board?.name || "CB").slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Welcome back
              </p>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                {board?.name || "ClassBoard"}
              </h1>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Here&apos;s what&apos;s new since your last visit.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              {new Date().toLocaleDateString()}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              {board?.students?.length ?? 0} members
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 w-full px-4 mb-10">
        <OverviewStats />
        <OverviewAnnoucement />
        <OverviewActivity />
      </div>
    </>
  );
}
