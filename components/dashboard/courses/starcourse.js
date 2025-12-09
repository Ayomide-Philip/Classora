import { Star } from "lucide-react";
export default function StarCourse({ course }) {
  return (
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
  );
}
