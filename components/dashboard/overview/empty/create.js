import { PlusCircle } from "lucide-react";

export default function EmptyBoardCreate() {
  return (
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
            Name your board, describe the mission, and choose who can join.
            Customize modules, permissions, and branding once the space is live.
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
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 font-medium  text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-slate-600 dark:text-white/70">
              Short description
            </span>
            <textarea
              rows={4}
              placeholder="What will learners achieve together?"
              className=" w-full rounded-xl border border-slate-200 bg-white p-2 font-medium  text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/30 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40 resize-none"
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
  );
}
