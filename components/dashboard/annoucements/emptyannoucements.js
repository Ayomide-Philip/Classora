import Link from "next/link";

export default function EmptyAnnoucements() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500"
        >
          <path
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 8l-6 6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
          No announcements yet
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          There are currently no announcements for this board. Create one to
          keep everyone informed.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/dashboard/announcements/new"
            className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
          >
            Create announcement
          </Link>

          <Link
            href="/dashboard/announcements"
            className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            Browse announcements
          </Link>
        </div>
      </div>
    </div>
  );
}
