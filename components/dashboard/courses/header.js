import { BookOpen, User, Calendar, Star } from "lucide-react";
export default function CourseHeader({ course }) {
  return (
    <header className="mb-8">
      <div className={`h-2 w-20 rounded-full bg-sky-500 mb-4`} />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 mb-2`}
          >
            {course?.courseCode}
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {course?.courseTitle}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {course?.courseCoordinator}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {course?.courseUnit} Unit
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {course?.semester}
            </span>
          </div>
        </div>
        {/* Star button */}
        <div className="flex flex-col items-end gap-1">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors group"
            title="Star this course"
          >
            <Star className="h-5 w-5 text-slate-400 group-hover:text-amber-500 dark:text-slate-500 dark:group-hover:text-amber-400 transition-colors" />
          </button>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {course?.stared?.length || 0} stars
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {course?.courseDescription}
      </p>
    </header>
  );
}
