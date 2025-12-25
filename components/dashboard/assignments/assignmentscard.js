import { Clock, Users, FileText, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AssignmentsCard({ assignment }) {
  const { boardId, studentsSubmitted } = assignment;
  return (
    <Link
      href={`/assignments/${assignment._id}`}
      className="group cursor-pointer rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-700 transition-all duration-200 overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30">
            <FileText className="h-5 w-5 text-sky-600 dark:text-sky-400" />
          </div>
          <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
        </div>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2 mb-1">
          {assignment?.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          {assignment?.courseId?.courseTitle}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {assignment.description.split(".")[0]}.
        </p>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800"></div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            Expires
          </span>
          <span className="font-medium text-slate-900 dark:text-white">
            {new Date(assignment?.dueDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <Calendar className="h-3.5 w-3.5" />
            Posted
          </span>
          <span className="font-medium text-slate-900 dark:text-white">
            {new Date(assignment?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <Users className="h-3.5 w-3.5" />
            Submissions
          </span>
          <span className="font-medium text-slate-900 dark:text-white">
            {studentsSubmitted.length} / {boardId?.students?.length}
          </span>
        </div>

        <div className="pt-2">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-slate-500 dark:text-slate-400">
              Completion
            </span>
            <span
              className={`font-semibold ${
                studentsSubmitted.length === boardId?.students?.length
                  ? "text-green-600 dark:text-green-400"
                  : "text-sky-600 dark:text-sky-400"
              }`}
            >
              {(studentsSubmitted.length / boardId?.students?.length) * 100}%
            </span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                studentsSubmitted.length === boardId?.students?.length
                  ? "bg-green-500"
                  : "bg-sky-500"
              }`}
              style={{
                width: `${
                  (studentsSubmitted.length / boardId?.students?.length) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
