export default function OverviewActivity() {
  const activityFeed = [
    { time: "2h ago", text: "Alice submitted Physics Lab 4" },
    { time: "4h ago", text: "New announcement in Algebra" },
    { time: "Yesterday", text: "Gradebook updated for History" },
    { time: "Yesterday", text: "Scheduled parent-teacher conference" },
  ];

  const assignments = [
    { course: "Physics", due: "Fri, 10:00" },
    { course: "Algebra", due: "Fri, 14:00" },
    { course: "Design", due: "Mon, 09:00" },
  ];
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Activity
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Recent events
          </span>
        </div>
        <ul className="mt-6 space-y-4">
          {activityFeed.map((item) => (
            <li key={item.text} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-linear-to-br from-emerald-400 to-cyan-400" />
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {item.text}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Upcoming deadlines
          </h3>
          <button className="text-xs text-slate-500 dark:text-slate-400">
            See calendar
          </button>
        </div>
        <div className="mt-6 space-y-3">
          {assignments.map((item) => (
            <div
              key={item.course}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-800 dark:bg-slate-950/40"
            >
              <div>
                <p className="font-medium text-slate-900 dark:text-slate-100">
                  {item.course}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Due {item.due}
                </p>
              </div>
              <button className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Review
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
