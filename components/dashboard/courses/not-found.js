import { BookX, Search, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function CourseNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <div className="mx-auto max-w-md text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              <BookX className="h-10 w-10 text-slate-400 dark:text-slate-500" />
            </div>
            <div className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/30">
              <Search className="h-4 w-4 text-rose-600 dark:text-rose-400" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          Course Not Found
        </h1>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          We couldn&apos;t find the course you&apos;re looking for. It may have
          been removed, renamed, or the link might be incorrect.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-700 transition-colors active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>
          <Link
            href="/overview"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors active:scale-[0.98]"
          >
            <Home className="h-4 w-4" />
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
