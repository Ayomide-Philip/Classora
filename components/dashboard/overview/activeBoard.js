import OverviewActivity from "@/components/dashboard/overview/activity";
import OverviewAnnoucement from "@/components/dashboard/overview/annoucements";
import OverviewStats from "@/components/dashboard/overview/stats";
import { FiSearch } from "react-icons/fi";
export default function ActiveBoard({ board }) {
  console.log(board);
  return (
    <>
      <div className="block border border-slate-200 bg-white px-6 py-5 shadow-xl dark:border-slate-800/70 dark:bg-slate-900/75 dark:shadow-2xl dark:shadow-slate-950/40 mb-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Welcome Back to board
            </p>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {board?.name}
            </h1>
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
