export default function Page() {
  const courses = [
    {
      title: "Physics 101",
      nextEvent:
        "Lorem Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae  ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae ",
      badge: "Lab",
    },
    {
      title: "Advanced Algebra",
      nextEvent: "Homework 7 due",
      badge: "Assignments",
    },
    {
      title: "World History",
      nextEvent: "Parent note posted",
      badge: "Updates",
    },
  ];
  return (
    <div className="px-3">
      <h1 className="text-center md:text-start text-2xl font-semibold text-slate-900 dark:text-slate-100">
        Annoucement
      </h1>
      <p className=" text-sm">
        Here are the latest annoucement for your departement
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                className={`rounded-full px-3 py-1 text-xs font-medium bg-indigo-600 text-white`}
              >
                {course.badge}
              </span>
            </div>
            <p className="mt-4 text-sm h-full text-slate-500 dark:text-slate-400">
              {course.nextEvent}
            </p>
            <div className="flex justify-end text-sm mt-3">
              <span>
                {new Date().toLocaleDateString("en-Us", {
                  hour: "2-digit",
                  minute: "numeric",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
