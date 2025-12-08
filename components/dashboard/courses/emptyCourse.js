import { BookOpen, Plus, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function EmptyCourse() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="mx-auto max-w-md text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            <BookOpen className="h-10 w-10 text-slate-400 dark:text-slate-500" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          No Courses Yet
        </h2>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          No Course has be created yet. Here are the thing you can gain access
          to in this course page
        </p>

        {/* Features */}
        <div className="mb-8 space-y-3 text-left">
          <div className="flex items-start gap-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30">
              <GraduationCap className="h-4 w-4 text-sky-600 dark:text-sky-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Track Progress
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Monitor assignments and grades
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Access Materials
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Download course content anytime
              </p>
            </div>
          </div>
        </div>

        {/* Action */}
        <Link
          href="/courses"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-700 transition-colors active:scale-[0.98]"
        >
          <Plus className="h-4 w-4" />
          Create Course
        </Link>
      </div>
    </div>
  );
}
