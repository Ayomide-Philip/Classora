import Link from "next/link";
import { Github, Instagram, Twitter } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-linear-to-br from-[#040b15] via-[#071226] to-[#03060d] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-96 w-96 rounded-full bg-[#0ea5e9]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-112 w-md rounded-full bg-[#22d3ee]/15 blur-3xl" />

      <main className="relative z-20 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 md:flex-row md:items-center md:gap-16 md:px-8 md:py-24">
        <section className="flex w-full max-w-xl flex-col gap-6 text-center md:text-left">
          <span className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-teal-200/90 md:self-start">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Error 404
          </span>
          <div className="space-y-4">
            <p className="text-6xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#34d399] via-[#22d3ee] to-[#6366f1]">
              404
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">Not Found!</h1>
            <p className="text-base text-indigo-100/90 md:text-lg">
              The page you are looking for can’t be found. It may have moved to
              another path or never existed. Let’s get you back to familiar
              territory.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-[#34d399] via-[#22d3ee] to-[#6366f1] px-8 text-sm font-semibold text-slate-900 transition hover:-translate-y-px hover:shadow-lg hover:shadow-[#22d3ee]/35"
            >
              Back to safety
            </Link>
            <Link
              href="/support"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              Contact support
            </Link>
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-indigo-100/60 md:flex-row md:gap-4">
            <span>Follow us</span>
            <div className="flex items-center gap-3 text-indigo-100/90">
              <Link
                href="https://twitter.com"
                className="rounded-full border border-white/10 p-2 transition hover:border-white hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com"
                className="rounded-full border border-white/10 p-2 transition hover:border-white hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com"
                className="rounded-full border border-white/10 p-2 transition hover:border-white hover:text-white"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
