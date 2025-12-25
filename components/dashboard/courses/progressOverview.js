export default function CourseProgressOverview({ assignments, userId }) {
  let numberOfAssignmentsSubmitted = assignments.filter((assignment) => {
    return assignment.studentsSubmitted.find((a) => {
      return a === userId;
    });
  });
  return (
    <section className="mb-8 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
        Course Progress
      </h2>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex gap-1">
            {assignments.map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  i < numberOfAssignmentsSubmitted.length
                    ? "bg-sky-500"
                    : "bg-slate-200 dark:bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {numberOfAssignmentsSubmitted.length}/{assignments.length}
        </span>
      </div>
    </section>
  );
}
