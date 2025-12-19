import { Shield, Code, User, Mail, Clock, Edit } from "lucide-react";
export default function SettingsAccountOverview({ user }) {
  return (
    <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-sky-600 text-xl sm:text-2xl font-bold text-white shrink-0">
            AJ
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
              {user.name}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              @{user.username}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-200">
                <Code className="h-3.5 w-3.5" />{" "}
                {user?.board?.role || "No Role"}
              </span>
            </div>
          </div>
        </div>
        <button className="rounded-lg border border-slate-200 bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 whitespace-nowrap">
          Change Photo
        </button>
      </div>

      <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
        {[
          { label: "Full Name", value: user?.name, icon: User },
          { label: "Email", value: user?.email, icon: Mail },
          {
            label: "Member Since",
            value: new Date(user?.createdAt).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
              day: "numeric",
            }),
            icon: Clock,
          },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-lg bg-slate-50 p-3 sm:p-4 dark:bg-slate-800/50"
            >
              <div className="flex items-start gap-3 w-full sm:w-auto">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0">
                  <Icon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm sm:text-base text-slate-900 dark:text-white wrap-break-word">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
