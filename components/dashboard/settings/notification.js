export default function SettingsNotification({ user }) {
  return (
    <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
        Notifications
      </h3>
      <div className="space-y-2 sm:space-y-3">
        {[
          {
            label: "Allow Post",
            enabled: user?.board?.boardId?.allowPost || false,
          },
          {
            label: "Allow Comments",
            enabled: user?.board?.boardId?.allowComments || false,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-lg bg-slate-50 p-3 sm:p-4 dark:bg-slate-800/50"
          >
            <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">
              {item.label}
            </span>
            <input
              type="checkbox"
              defaultChecked={item.enabled}
              className={`h-5 w-5 rounded border-slate-300 text-sky-600 cursor-pointer disabled:text-sky-600`}
              disabled={user?.board?.role !== "owner"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
