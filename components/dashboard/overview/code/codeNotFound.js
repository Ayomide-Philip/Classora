import Link from "next/link";
import { ShieldAlert, KeyRound, Link2, Home, Search } from "lucide-react";

export default async function CodeNotFound({ code }) {
  const displayCode = code || "Unknown";

  return (
    <div className="min-h-[70vh] w-full px-4 py-3">
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-10 text-slate-900 shadow-xl shadow-slate-900/10 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 dark:text-white">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-rose-500 to-amber-400 text-white shadow-lg shadow-rose-500/30">
            <ShieldAlert className="h-7 w-7" />
          </div>
          <h1 className="mt-4 text-2xl font-bold">Invalid or expired code</h1>
          <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300">
            We couldn&apos;t match the code you entered to any active board. It
            may be incorrect, expired, or you might not have access yet.
          </p>

          {/* Entered code pill */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-mono text-sm font-semibold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-white">
            <KeyRound className="h-4 w-4" /> {displayCode}
          </div>
        </div>

        {/* Reasons row */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-700 dark:bg-slate-900/70">
            <p className="font-semibold">Typo or case</p>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              Codes can be case‑sensitive. Check similar characters.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-700 dark:bg-slate-900/70">
            <p className="font-semibold">Expired invite</p>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              The board may have closed or the code expired.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm dark:border-slate-700 dark:bg-slate-900/70">
            <p className="font-semibold">Wrong link</p>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              Use the latest link from your school or owner.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/dashboard/overview/join"
            className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-sky-500 via-indigo-500 to-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
          >
            <Search className="h-4 w-4" /> Enter a different code
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white"
          >
            <Home className="h-4 w-4" /> Go home
          </Link>
          <a
            href="mailto:support@school"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white"
          >
            <Link2 className="h-4 w-4" /> Contact owner
          </a>
        </div>
      </div>
    </div>
  );
}
