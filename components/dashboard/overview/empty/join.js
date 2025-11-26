import { Users, UserPlus } from "lucide-react";
export default function EmptyBoardJoin() {
  return (
    <div
      id="joinboard"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/5"
    >
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
            Paste the six-digit code from your facilitator or class lead to
            unlock the shared workspace instantly. You will gain access to
            modules, shared files, and discussion threads.
          </p>
        </div>
        <form className="grid gap-4">
          <label className="space-y-2 text-sm">
            <h1 className="text-slate-600 mb-2 dark:text-white/70">
              Enter join code
            </h1>
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
  );
}
