"use client";
import { toast } from "react-toastify";
export default function FormOverlay({ visible, code, onClose }) {
  console.log(code);
  const handleCopy = () => {
    try {
      navigator.clipboard?.writeText(code);
      toast.success("Code copied to clipboard!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to copy code. Please try again.");
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-3 py-6 bg-slate-950/70 backdrop-blur-lg sm:items-center sm:px-4 sm:py-10"
      role="dialog"
      aria-modal="true"
      aria-label="Join board code"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200/60 bg-white/95 text-slate-900 shadow-2xl shadow-sky-500/10 dark:border-white/10 dark:bg-slate-900/95 dark:text-slate-50 max-h-[calc(100vh-3rem)] sm:max-w-xl md:max-w-2xl md:max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-5rem)]">
        <div
          className=" absolute -top-24 right-6 h-64 w-64 rounded-full bg-linear-to-br from-sky-400/40 via-indigo-400/30 to-purple-500/40 blur-3xl sm:right-20"
          aria-hidden="true"
        />

        <button
          onClick={onClose}
          aria-label="Close join code overlay"
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-600 transition hover:scale-105 hover:border-slate-300 hover:text-slate-800 dark:border-white/20 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-white/30 dark:hover:text-white z-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative z-10 flex max-h-full flex-col gap-6 overflow-y-auto p-6 sm:gap-8 sm:p-8 md:p-10">
          <header className="space-y-3 sm:space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300">
              Instant Access
            </span>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Share your classroom in one click
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                Send this secure code to teammates or learners so they can join
                without needing an invite link. Codes refresh automatically once
                a board is created.
              </p>
            </div>
          </header>

          <section className="flex flex-col gap-4 rounded-2xl border border-slate-200/60 bg-slate-50/80 p-5 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-slate-800/50 sm:p-6">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <div className="flex w-full flex-col gap-1 sm:w-auto">
                <span className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Join Code
                </span>
                <code className="w-full rounded-xl border border-slate-200/60 bg-white px-4 py-3 text-center text-xl font-bold tracking-[0.2em] text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-900/70 dark:text-white sm:px-6 sm:py-4 sm:text-3xl sm:tracking-[0.4em]">
                  {code}
                </code>
              </div>

              <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:items-end">
                <button
                  onClick={handleCopy}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-indigo-500/30 sm:w-auto"
                >
                  Copy code
                </button>
              </div>
            </div>
          </section>

          <footer className="hidden md:flex flex-col gap-4 border-t border-slate-200/60 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3 sm:items-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-sky-500/15 to-indigo-500/10 text-sky-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v2m6.364.636l-1.414 1.414M22 12h-2M6.05 6.05L4.636 4.636M4 12H2m16.364 5.364l-1.414-1.414M12 20v2m-6.364-3.636l1.414-1.414"
                  />
                </svg>
              </span>
              <p>
                Need to share later? Re-open this overlay anytime from your
                board settings.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
