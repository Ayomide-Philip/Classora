import {
  BookOpen,
  FileText,
  ChevronRight,
  Clock,
  CheckCircle2,
  Circle,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const courses = [
    {
      id: "physics-101",
      title: "Physics 101",
      teacher: "Dr. Mensah",
      code: "PHY101",
      color: "bg-sky-500",
      colorLight: "bg-sky-50 dark:bg-sky-950/40",
      colorText: "text-sky-600 dark:text-sky-400",
      credits: 3,
      nextClass: "Mon, 09:00",
      materials: 12,
      assignments: { completed: 5, total: 8 },
    },
    {
      id: "algebra-ii",
      title: "Algebra II",
      teacher: "Ms. Okoye",
      code: "MTH202",
      color: "bg-emerald-500",
      colorLight: "bg-emerald-50 dark:bg-emerald-950/40",
      colorText: "text-emerald-600 dark:text-emerald-400",
      credits: 3,
      nextClass: "Mon, 11:00",
      materials: 15,
      assignments: { completed: 6, total: 7 },
    },
    {
      id: "chemistry",
      title: "Chemistry",
      teacher: "Dr. Amadi",
      code: "CHM101",
      color: "bg-rose-500",
      colorLight: "bg-rose-50 dark:bg-rose-950/40",
      colorText: "text-rose-600 dark:text-rose-400",
      credits: 4,
      nextClass: "Tue, 10:00",
      materials: 18,
      assignments: { completed: 4, total: 9 },
    },
    {
      id: "history",
      title: "History",
      teacher: "Mr. Clarke",
      code: "HIS101",
      color: "bg-indigo-500",
      colorLight: "bg-indigo-50 dark:bg-indigo-950/40",
      colorText: "text-indigo-600 dark:text-indigo-400",
      credits: 3,
      nextClass: "Tue, 13:00",
      materials: 22,
      assignments: { completed: 7, total: 8 },
    },
    {
      id: "english-literature",
      title: "English Literature",
      teacher: "Ms. Ramos",
      code: "ENG201",
      color: "bg-amber-500",
      colorLight: "bg-amber-50 dark:bg-amber-950/40",
      colorText: "text-amber-600 dark:text-amber-400",
      credits: 3,
      nextClass: "Wed, 09:30",
      materials: 14,
      assignments: { completed: 3, total: 6 },
    },
    {
      id: "biology",
      title: "Biology",
      teacher: "Dr. Lee",
      code: "BIO101",
      color: "bg-teal-500",
      colorLight: "bg-teal-50 dark:bg-teal-950/40",
      colorText: "text-teal-600 dark:text-teal-400",
      credits: 4,
      nextClass: "Thu, 08:30",
      materials: 20,
      assignments: { completed: 5, total: 7 },
    },
    {
      id: "art-design",
      title: "Art & Design",
      teacher: "Ms. Gray",
      code: "ART101",
      color: "bg-fuchsia-500",
      colorLight: "bg-fuchsia-50 dark:bg-fuchsia-950/40",
      colorText: "text-fuchsia-600 dark:text-fuchsia-400",
      credits: 2,
      nextClass: "Thu, 14:00",
      materials: 8,
      assignments: { completed: 2, total: 4 },
    },
    {
      id: "geography",
      title: "Geography",
      teacher: "Mr. Stone",
      code: "GEO101",
      color: "bg-cyan-500",
      colorLight: "bg-cyan-50 dark:bg-cyan-950/40",
      colorText: "text-cyan-600 dark:text-cyan-400",
      credits: 3,
      nextClass: "Fri, 10:00",
      materials: 16,
      assignments: { completed: 4, total: 6 },
    },
  ];

  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            My Courses
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {courses.length} courses • {totalCredits} credit hours
          </p>
        </header>

        {/* Course grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const progress = Math.round(
              (course.assignments.completed / course.assignments.total) * 100
            );
            return (
              <div
                key={course.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Colored top band */}
                <div className={`h-2 ${course.color}`} />

                <div className="p-4">
                  {/* Course code badge & credits */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${course.colorLight} ${course.colorText}`}
                    >
                      {course.code}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {course.credits} credits
                    </span>
                  </div>

                  {/* Title & Teacher */}
                  <h2 className="text-base font-semibold text-slate-900 dark:text-white leading-tight">
                    {course.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {course.teacher}
                  </p>

                  {/* Assignment progress */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-slate-500 dark:text-slate-400">
                        Assignments
                      </span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {course.assignments.completed} of{" "}
                        {course.assignments.total}
                      </span>
                    </div>
                    {/* Progress dots */}
                    <div className="flex gap-1.5">
                      {Array.from({ length: course.assignments.total }).map(
                        (_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 flex-1 rounded-full transition-colors ${
                              i < course.assignments.completed
                                ? course.color
                                : "bg-slate-200 dark:bg-slate-700"
                            }`}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Bottom info row */}
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <FileText className="h-3.5 w-3.5" />
                        {course.materials}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {course.nextClass}
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.id}`}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 dark:text-slate-500" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
