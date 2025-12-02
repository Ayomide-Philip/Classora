export default function AnnoucementsCourses({ annoucements }) {
  console.log(annoucements);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {annoucements.map(({ title, description, tag, createdAt }, idx) => (
        <article
          key={idx}
          className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/70 h-full"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 line-clamp-4 dark:text-slate-300">
                {description}
              </p>
            </div>
            <div className="ml-3 shrink-0">
              <span className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                {tag}
              </span>
            </div>
          </div>

          <footer className="mt-auto flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <time dateTime={new Date(createdAt).toISOString()}>
              {new Date(createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              ·{" "}
              {new Date(createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </time>
            <div>
              <a href="#" className="text-sky-500 hover:underline">
                Read more
              </a>
            </div>
          </footer>
        </article>
      ))}
    </div>
  );
}
