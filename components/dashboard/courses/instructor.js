export default function CourseInstructor({ course }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Instructor
      </h2>
      <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${course.colorLight}`}
          >
            <span
              className={`text-lg font-semibold text-sky-600 dark:text-sky-400`}
            >
              {course.teacher
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 dark:text-white">
              {course.teacher}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {course.teacherEmail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
