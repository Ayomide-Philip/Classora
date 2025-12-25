import AssignmentsCard from "./assignmentscard";
export default function AssignmentsGrid({ assignments }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {assignments.map((assignment) => {
        return <AssignmentsCard key={assignment._id} assignment={assignment} />;
      })}
    </div>
  );
}
