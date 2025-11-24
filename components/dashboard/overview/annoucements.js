export default async function OverviewAnnoucement() {
  const courses = [
    {
      title: "Physics 101",
      nextEvent:
        "Lorem Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae  ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae ",
      badge: "Lab",
      color: "bg-emerald-500/20 text-emerald-200",
    },
    {
      title: "Advanced Algebra",
      nextEvent: "Homework 7 due",
      badge: "Assignments",
      color: "bg-sky-500/20 text-sky-200",
    },
    {
      title: "World History",
      nextEvent: "Parent note posted",
      badge: "Updates",
      color: "bg-purple-500/20 text-purple-200",
    },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Annoucements
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Here are the list of all the latest annoucements in the past days
          </p>
        </div>
        <button className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-200">
          View all
        </button>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.title}
            className="rounded-2xl border flex flex-col justify-between border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/40"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {course.title}
              </h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${course.color}`}
              >
                {course.badge}
              </span>
            </div>
            <p className="mt-4 text-sm h-full text-slate-500 dark:text-slate-400">
              {course.nextEvent}
            </p>
            <div className="flex justify-end text-sm">
              {new Date().toLocaleDateString("en-Us", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
