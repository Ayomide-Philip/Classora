import { BellOff } from "lucide-react";
import Link from "next/link";

export default function EmptyAnnoucements({ role }) {
  return (
    <section className="mx-auto max-w-5xl px-2 py-5">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 md:p-10">
        <div className="md:flex md:items-start md:gap-8">
          <div className="flex-none">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400">
              <BellOff className="h-8 w-8" />
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex-1">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white md:text-xl">
              No announcements yet
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Announcements keep your class informed. Share quick updates,
              reminders, or links to resources so everyone stays on the same
              page.
            </p>

            <ul className="mt-4 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  Post homework and due dates
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  Share exam and schedule notices
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              {role === "admin" || role === "owner" ? (
                <Link
                  href="/announcements/create"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
                >
                  Create announcement
                </Link>
              ) : null}

              <Link
                href="/overview"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-transparent dark:text-slate-200"
              >
                Overview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
