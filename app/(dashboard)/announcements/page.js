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
    <main className="px-4 py-6 md:px-8 lg:px-10">
      {/* Compact inline header - fits under global header */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Announcements
            </h2>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Recent updates across your courses and departments
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:w-auto">
            <label htmlFor="ann-search" className="sr-only">
              Search announcements
            </label>
            <input
              id="ann-search"
              placeholder="Search"
              className="w-full rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 sm:w-44 dark:border-slate-700 dark:bg-slate-900/60 dark:placeholder:text-slate-500"
            />
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-900/70 dark:text-white">
              Filter
            </button>
          </div>
        </div>

        {/* Full-width cards but compact */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/70 h-full"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-4 dark:text-slate-300">
                    {course.nextEvent}
                  </p>
                </div>
                <div className="ml-3 shrink-0">
                  <span className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                    {course.badge}
                  </span>
                </div>
              </div>

              <footer className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <time dateTime={new Date().toISOString()}>
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  ·{" "}
                  {new Date().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                <div className="">
                  <a href="#" className="text-sky-500 hover:underline">
                    Read more
                  </a>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

//  <article
//             key={course.title}
//             className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/70"
//           >
//             <div className="flex items-start justify-between gap-3">
//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
//                   {course.title}
//                 </h3>
//                 <p className="mt-3 text-sm text-slate-600 line-clamp-4 dark:text-slate-300">
//                   {course.nextEvent}
//                 </p>
//               </div>
//               <div className="ml-3 flex-shrink-0">
//                 <span className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
//                   {course.badge}
//                 </span>
//               </div>
//             </div>

//             <footer className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
//               <time dateTime={new Date().toISOString()}>
//                 {new Date().toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}{" "}
//                 ·{" "}
//                 {new Date().toLocaleDateString("en-GB", {
//                   day: "2-digit",
//                   month: "short",
//                   year: "numeric",
//                 })}
//               </time>
//               <div className="opacity-0 transition group-hover:opacity-100">
//                 <a href="#" className="text-sky-500 hover:underline">
//                   Read more
//                 </a>
//               </div>
//             </footer>
//           </article>
