import { FileText, ChevronRight, Star, School } from "lucide-react";
import Link from "next/link";

export default function CourseCard({ course, userId }) {
  let {
    _id,
    courseTitle,
    courseCode,
    courseCoordinator,
    courseUnit,
    semester,
    stared,
    resources,
    assignments,
  } = course;
  return (
    <Link
      href={`/courses/${_id}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900"
    >
      <div className={`h-2 bg-sky-500`} />

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400`}
          >
            {courseCode}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            {courseUnit} Units
          </span>
        </div>

        <h2 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">
          {courseTitle}
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {courseCoordinator}
        </p>

        <AssignmentsProgress assignments={assignments} userId={userId} />

        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              {resources?.length || 0}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              {stared?.length || 0}
            </span>
            <span className="flex items-center gap-1">
              <School className="h-3.5 w-3.5" />
              {semester}
            </span>
          </div>

          <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 dark:text-slate-500" />
        </div>
      </div>
    </Link>
  );
}

export function AssignmentsProgress({ assignments, userId }) {
  let numberOfAssignmentsSubmitted = assignments.filter((assignment) => {
    return assignment.studentsSubmitted.find((a) => {
      return a === userId;
    });
  });

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs mb-2">
        <span className="text-slate-500 dark:text-slate-400">Assignments</span>
        <span className="font-medium text-slate-700 dark:text-slate-300">
          {numberOfAssignmentsSubmitted?.length} of {assignments?.length}
        </span>
      </div>
      <div className="flex gap-1.5">
        {assignments?.length <= 0 ? (
          <>
            <div
              className={`h-1.5 flex-1 rounded-full transition-colors bg-slate-200 dark:bg-slate-700`}
            />
          </>
        ) : (
          <>
            {assignments.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < numberOfAssignmentsSubmitted?.length
                    ? "bg-sky-500"
                    : "bg-slate-200 dark:bg-slate-700"
                }`}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
