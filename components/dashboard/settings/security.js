import { Edit } from "lucide-react";

export default function SettingsSecurity() {
  return (
    <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
        Security
      </h3>
      <div className="space-y-3 sm:space-y-4">
        <div className="rounded-lg bg-slate-50 p-3 sm:p-4 dark:bg-slate-800/50">
          <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400 mb-2">
            Password
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm sm:text-base text-slate-900 dark:text-white">
              ••••••••
            </p>
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 flex items-center justify-center gap-1 whitespace-nowrap">
              <Edit className="h-3.5 w-3.5" />
              Change
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 p-3 sm:p-4 dark:bg-slate-800/50">
          <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400 mb-2">
            Two-Factor Authentication
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm sm:text-base text-slate-900 dark:text-white">
              Not enabled
            </p>
            <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 whitespace-nowrap">
              Enable
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
