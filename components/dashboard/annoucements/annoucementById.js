import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import Comments from "./comments";
export default function AnnoucementById({ announcement }) {
  console.log(announcement);
  const { tag, title, description, createdAt, userId, comments } = announcement;

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="mb-4">
          <Link
            href="/announcements"
            className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </div>

        <article className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
          <header className="mb-4 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center">
                <span className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  {tag}
                </span>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  {title}
                </h1>
              </div>
              <div className="mt-2 flex flex-col items-center gap-2 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:gap-3">
                <span className="inline-flex items-center gap-1">
                  <User className="h-3 w-3" /> {userId?.name}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />{" "}
                  {new Date(createdAt).toLocaleString([], {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>

            <div className="mt-3 flex w-full justify-center gap-2 sm:mt-0 sm:w-auto sm:justify-end">
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  title
                )}&body=${encodeURIComponent(description)}`}
                className="inline-flex w-full justify-center rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium dark:border-slate-700 dark:bg-slate-900/70 sm:w-auto"
              >
                Share
              </a>
            </div>
          </header>

          <div className="max-w-none text-slate-700 dark:text-slate-200">
            {description.split("\n").map((para, idx) => (
              <p
                key={idx}
                className="mb-4 leading-relaxed text-sm sm:text-base"
              >
                {para}
              </p>
            ))}
          </div>

          <footer className="mt-8 border-t pt-4 text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
            <p>
              Posted on{" "}
              {new Date(createdAt).toLocaleDateString([], {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
              .
            </p>
          </footer>
        </article>
      </div>

      <div className="mt-6 mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <Comments comments={comments} userId={userId?._id} />
        </div>
      </div>
    </>
  );
}
