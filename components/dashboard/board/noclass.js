import { CalendarX2 } from "lucide-react";

export default function BoardDayNoClass() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800/50 mb-4">
        <CalendarX2 className="h-8 w-8 text-slate-400 dark:text-slate-500" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
        No Classes Today
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 text-center max-w-xs">
        There are no scheduled classes for this day
      </p>
    </div>
  );
}
