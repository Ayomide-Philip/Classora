import {
  BookOpen,
  FileText,
  ChevronRight,
  Clock,
  CheckCircle2,
  Circle,
} from "lucide-react";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <Link
      key={course.id}
      href={`/courses/${course.id}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Colored top band */}
      <div className={`h-2 bg-indigo-500`} />

      <div className="p-4">
        {/* Course code badge & credits */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${course.colorLight} ${course.colorText}`}
          >
            {course.code}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            {course.credits} credits
          </span>
        </div>

        {/* Title & Teacher */}
        <h2 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">
          {course.title}
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {course.teacher}
        </p>

        {/* Assignment progress */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-slate-500 dark:text-slate-400">
              Assignments
            </span>
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {course.assignments.completed} of {course.assignments.total}
            </span>
          </div>
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {Array.from({ length: course.assignments.total }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < course.assignments.completed
                    ? course.color
                    : "bg-slate-200 dark:bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom info row */}
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              {course.materials}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {course.nextClass}
            </span>
          </div>

          <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 dark:text-slate-500" />
        </div>
      </div>
    </Link>
  );
}
