"use client";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  UserPlus,
  Users,
  PlusCircle,
  BookOpen,
} from "lucide-react";

const suggestedBoards = [
  {
    title: "UI Foundations",
    code: "UI-204",
    members: 38,
    focus: "Design Systems",
    accent: "from-[#34d399] via-[#22d3ee] to-[#6366f1]",
  },
  {
    title: "Data Science Cohort",
    code: "DS-312",
    members: 24,
    focus: "Machine Learning",
    accent: "from-[#8b5cf6] via-[#6366f1] to-[#0ea5e9]",
  },
  {
    title: "Product Strategy Guild",
    code: "PS-118",
    members: 41,
    focus: "PM Frameworks",
    accent: "from-[#f97316] via-[#fb7185] to-[#6366f1]",
  },
];

export default function OverviewPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,197,197,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(14,197,197,0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-96 w-96 rounded-full bg-[#0ea5e9]/10 blur-3xl dark:bg-[#0ea5e9]/15" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-112 w-md rounded-full bg-[#22d3ee]/10 blur-3xl dark:bg-[#22d3ee]/12" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-14 md:px-10">
        <header className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.38em] text-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-teal-200/80">
              <Sparkles className="h-3 w-3" />
              Classboards
            </span>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold md:text-5xl">
                Your classrooms, organized
              </h1>
              <p className="max-w-xl text-sm text-slate-600 md:text-base dark:text-indigo-100/80">
                Join existing Classora boards to collaborate with your peers or
                launch a new board to lead a fresh cohort. Manage lessons,
                assignments, and conversations from one dashboard.
              </p>
            </div>
          </div>
          <Link
            href="#templates"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 px-6 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:border-white dark:hover:bg-white/5"
          >
            <BookOpen className="h-4 w-4" />
            Browse templates
          </Link>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_40px_160px_-80px_rgba(34,211,238,0.55)]">
          <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#34d399]/10 blur-2xl dark:bg-[#34d399]/20" />
          <div className="pointer-events-none absolute -right-14 top-10 h-36 w-36 rounded-full bg-[#6366f1]/15 blur-3xl dark:bg-[#6366f1]/25" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-white/65">
                <span className="h-2 w-2 rounded-full bg-[#34d399]" />
                No boards yet
              </div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Kickstart your first board in seconds
              </h2>
              <p className="max-w-lg text-sm text-slate-600 md:text-base dark:text-indigo-100/80">
                You are moments away from joining a learning space. Use a join
                code shared by your facilitator or launch a new board to invite
                others. All resources, assignments, and discussions stay synced
                across devices.
              </p>
            </div>
            <div className="grid gap-3 md:w-64">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#34d399] via-[#22d3ee] to-[#6366f1] px-6 text-sm font-semibold text-white shadow-md shadow-[#22d3ee]/10 transition hover:-translate-y-px hover:shadow-lg hover:shadow-[#22d3ee]/35 dark:text-slate-900">
                <UserPlus className="h-4 w-4" />
                Join with a code
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-6 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-200 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white dark:hover:bg-white/15">
                <PlusCircle className="h-4 w-4" />
                Create a new board
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/5">
            <div className="pointer-events-none absolute -right-20 top-12 h-48 w-48 rounded-full bg-[#22d3ee]/10 blur-[120px] dark:bg-[#22d3ee]/20" />
            <div className="pointer-events-none absolute -left-16 bottom-6 h-36 w-36 rounded-full bg-[#34d399]/12 blur-3xl dark:bg-[#34d399]/25" />
            <div className="relative flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-teal-600 dark:border-white/15 dark:bg-white/10 dark:text-teal-200/80">
                <Users className="h-3 w-3" />
                Join board
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                  Have a join code?
                </h3>
                <p className="text-sm text-slate-600 dark:text-indigo-100/80">
                  Paste the six-digit code from your facilitator or class lead
                  to unlock the shared workspace instantly. You will gain access
                  to modules, shared files, and discussion threads.
                </p>
              </div>
              <form className="grid gap-4">
                <label className="space-y-2 text-sm">
                  <span className="text-slate-600 dark:text-white/70">
                    Enter join code
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. CLS-482"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 font-medium tracking-[0.3em] uppercase text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#34d399] via-[#22d3ee] to-[#6366f1] px-6 text-sm font-semibold text-white shadow-md shadow-[#22d3ee]/10 transition hover:-translate-y-px hover:shadow-lg hover:shadow-[#22d3ee]/35 dark:text-slate-900"
                >
                  <UserPlus className="h-4 w-4" />
                  Join board
                </button>
              </form>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/5">
            <div className="pointer-events-none absolute -right-16 -top-6 h-40 w-40 rounded-full bg-[#8b5cf6]/15 blur-3xl dark:bg-[#8b5cf6]/25" />
            <div className="pointer-events-none absolute -left-10 bottom-8 h-48 w-48 rounded-full bg-[#fb7185]/12 blur-3xl dark:bg-[#fb7185]/20" />
            <div className="relative flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-600 dark:border-white/15 dark:bg-white/10 dark:text-white/70">
                <PlusCircle className="h-3 w-3" />
                Create board
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
                  Build a new classroom hub
                </h3>
                <p className="text-sm text-slate-600 dark:text-indigo-100/80">
                  Name your board, describe the mission, and choose who can
                  join. Customize modules, permissions, and branding once the
                  space is live.
                </p>
              </div>
              <form className="grid gap-4">
                <label className="space-y-2 text-sm">
                  <span className="text-slate-600 dark:text-white/70">
                    Board name
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Growth Marketing Sprint"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/25 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#8b5cf6]/40"
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="text-slate-600 dark:text-white/70">
                    Short description
                  </span>
                  <textarea
                    rows={3}
                    placeholder="What will learners achieve together?"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/25 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#8b5cf6]/40"
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-6 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-200 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white dark:hover:bg-white/15"
                >
                  <PlusCircle className="h-4 w-4" />
                  Draft your board
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="templates" className="space-y-5 pb-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
              Suggested boards
            </h2>
            <Link
              href="#"
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-800 dark:text-white/70 dark:hover:text-white"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {suggestedBoards.map((board) => (
              <article
                key={board.code}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                <div
                  className={`absolute inset-x-6 top-6 h-1 rounded-full bg-linear-to-r ${board.accent}`}
                />
                <div className="flex items-start justify-between pt-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                      {board.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-indigo-100/70">
                      Focus: {board.focus}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                    <Users className="h-3.5 w-3.5" />
                    {board.members}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-white/70">
                  Code: {board.code}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-500 dark:text-teal-200/80 dark:hover:text-teal-200">
                  Preview board
                  <Layers className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
