import AssignmentsCard from "./assignmentscard";
export default function AssignmentsGrid({ assignments }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {assignments.map((assignment) => {
        const submissionRate = Math.round(
          (assignment.submittedCount / assignment.totalStudents) * 100
        );
        const isFullySubmitted =
          assignment.submittedCount === assignment.totalStudents;

        return (
          <AssignmentsCard
            key={assignment.id}
            assignment={assignment}
            submissionRate={submissionRate}
            isFullySubmitted={isFullySubmitted}
          />
        );
      })}
    </div>
  );
}
