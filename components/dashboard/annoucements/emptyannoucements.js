import { BellOff } from "lucide-react";
import Link from "next/link";

export default function EmptyAnnoucements() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-white to-sky-50/60 p-6 shadow-md dark:from-slate-900/80 dark:to-slate-800/70 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-12 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -bottom-16 h-48 w-48 rounded-full bg-emerald-200/30 blur-2xl dark:bg-emerald-900/15"
        />

        <div className="relative z-10 md:flex md:items-center md:gap-8">
          <div className="flex flex-none items-center justify-center rounded-2xl bg-white/60 p-5 shadow-sm dark:bg-slate-900/60 md:p-8">
            <BellOff className="h-12 w-12 text-slate-400 dark:text-slate-500" />
          </div>

          <div className="mt-5 text-center md:mt-0 md:text-left">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white md:text-2xl">
              No announcements yet
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400 md:text-base">
              Announcements help keep the class on the same page — share
              updates, reminders, or quick resources. Start by creating a fresh
              announcement or use one of the templates below.
            </p>

            <div className="mt-5 flex flex-col items-center gap-3 md:flex-row md:items-center">
              {/* <Link
                href="/announcements/create"
                className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 md:w-auto"
              >
                Create announcement
              </Link> */}

              <Link
                href="/overview"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 md:w-auto"
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
