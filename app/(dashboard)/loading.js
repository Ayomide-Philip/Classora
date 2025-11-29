export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center gap-6 px-6 py-12">
        <div
          role="status"
          aria-live="polite"
          className="flex flex-col items-center gap-4"
        >
          <svg
            className="w-14 h-14 text-indigo-600 animate-spin"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="5"
            />
            <path
              d="M45 25a20 20 0 00-9.6-16"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Loading Classora…
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Preparing your dashboard — this should only take a moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
