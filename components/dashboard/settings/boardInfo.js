import { Shield, Code } from "lucide-react";
export default function SettingsBoardInfo({ user }) {
  return (
    <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
        Board Information
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: "Board Code", value: user.board.code, icon: Code },
          { label: "Board Role", value: user.board.role, icon: Shield },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50"
            >
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30 shrink-0">
                <Icon className="h-5 w-5 text-sky-600 dark:text-sky-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
                  {item.label}
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
