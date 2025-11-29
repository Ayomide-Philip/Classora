"use client";
import { X, Link2, Copy } from "lucide-react";
import { toast } from "react-toastify";

export default function FormOverlay({ visible, code, onClose }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-100/80 px-4 py-10 backdrop-blur-sm dark:bg-slate-950/80"
      role="dialog"
      aria-modal="true"
      aria-label="Share join code"
    >
      <div className="relative w-full max-w-md overflow-visible rounded-3xl bg-white pt-14 pb-8 px-6 text-center shadow-xl dark:bg-slate-900 sm:px-8">
        {/* Floating icon */}
        <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-slate-100 shadow-lg dark:border-slate-900 dark:bg-slate-800">
          <Link2 className="h-8 w-8 text-slate-500 dark:text-slate-300" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
          Share with Friends
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Learning is more effective when
          <br />
          you collaborate with others!
        </p>

        {/* Code section */}
        <div className="mt-8">
          <h3 className="mb-2 text-left text-sm font-semibold text-slate-900 dark:text-white">
            Share your code
          </h3>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-800">
            <code className="flex-1 text-left text-base font-medium tracking-wide text-slate-700 dark:text-slate-200">
              {code}
            </code>
            <button
              onClick={handleCopy}
              aria-label="Copy code"
              className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-white"
            >
              <Copy className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Share to section */}
        <div className="mt-8">
          <h3 className="mb-4 text-left text-sm font-semibold text-slate-900 dark:text-white">
            Share to
          </h3>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/?text=Join%20my%20classroom%20with%20code%3A%20${code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-xs text-slate-500 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span>WhatsApp</span>
            </a>

            {/* X (Twitter) */}
            <a
              href={`https://twitter.com/intent/tweet?text=Join%20my%20classroom%20with%20code%3A%20${code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-xs text-slate-500 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              <span>X</span>
            </a>

            {/* Telegram */}
            <a
              href={`https://t.me/share/url?url=Join%20my%20classroom&text=Use%20code%3A%20${code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-xs text-slate-500 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </span>
              <span>Telegram</span>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://classboard.app&summary=Join%20with%20code%3A%20${code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-xs text-slate-500 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
