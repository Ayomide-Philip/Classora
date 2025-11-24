import OverviewActivity from "@/components/dashboard/overview/activity";
import OverviewAnnoucement from "@/components/dashboard/overview/annoucements";
import OverviewStats from "@/components/dashboard/overview/stats";
import { FiSearch } from "react-icons/fi";

export default function Page() {
  return (
    <>
      <header className="block md:hidden border border-slate-200 bg-white px-6 py-5 shadow-xl dark:border-slate-800/70 dark:bg-slate-900/75 dark:shadow-2xl dark:shadow-slate-950/40">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Hey Eleanor 👋
            </p>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Classora Board
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search courses, students..."
                className="w-60 rounded-full border border-slate-300 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col space-y-6 w-full px-4 mb-10">
        <OverviewStats />
        <OverviewAnnoucement />
        <OverviewActivity />
      </div>
    </>
  );
}
