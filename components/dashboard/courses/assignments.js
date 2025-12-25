import { CheckCircle2, Circle, ChevronRight } from "lucide-react";
export default async function CourseAssignments({ assignments, userId }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Assignments
      </h2>

      {/* Pending */}
      <PendingAssignments assignments={assignments} userId={userId} />

      {/* Completed */}
      {assignments.length > 0 && (
        <div>
          <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
            Completed ({assignments.length})
          </h3>
          <div className="space-y-2">
            {assignments.map((a, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <CheckCircle2
                  className={`h-5 w-5 shrink-0 text-sky-600 dark:text-sky-400`}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white truncate">
                    {a.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Submitted: {a.dueDate}
                  </p>
                </div>
                <span
                  className={`text-sm font-semibold text-sky-600 dark:text-sky-400`}
                >
                  {a.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function PendingAssignments({ assignments, userId }) {
  console.log(assignments);

  function getPendingAssignments() {
    let pendingAssignments = [];
    assignments.filter((assignment) => {
      if (new Date() < new Date(assignment?.dueDate)) {
        assignment?.studentsSubmitted.filter((student) => {
          if (student === userId) {
            return;
          } else {
            pendingAssignments.push(assignment);
          }
        });
      }
    });
    console.log(pendingAssignments);
  }

  getPendingAssignments();
  return (
    <>
      {assignments.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
            Pending ({assignments.length})
          </h3>
          <div className="space-y-2">
            {assignments.map((a, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <Circle className="h-5 w-5 text-slate-300 dark:text-slate-600 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white truncate">
                    {a.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Due: {a.dueDate}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
