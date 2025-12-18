export default function StudentCardBio({ student }) {
  return (
    <>
      {student.bio && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
            About
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {student.bio}
          </p>
        </div>
      )}
    </>
  );
}
