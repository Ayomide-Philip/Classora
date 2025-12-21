import { Clock, Users, FileText, Calendar, ArrowRight } from "lucide-react";

export default function Page() {
  const assignments = [
    {
      id: 1,
      title: "Data Structures Implementation",
      course: "CS 301 - Data Structures",
      expiresAt: "Dec 25, 2025 at 11:59 PM",
      totalStudents: 45,
      submittedCount: 32,
      description:
        "Implement a binary search tree with insertion, deletion, and traversal methods.",
      postedDate: "Dec 10, 2025",
    },
    {
      id: 2,
      title: "Machine Learning Project Report",
      course: "CS 401 - Machine Learning",
      expiresAt: "Dec 28, 2025 at 05:00 PM",
      totalStudents: 38,
      submittedCount: 15,
      description:
        "Submit final project report with model evaluation and analysis.",
      postedDate: "Dec 15, 2025",
    },
    {
      id: 3,
      title: "Database Design Assignment",
      course: "CS 302 - Database Systems",
      expiresAt: "Dec 30, 2025 at 11:59 PM",
      totalStudents: 50,
      submittedCount: 8,
      description:
        "Design a normalized database schema for an e-commerce application.",
      postedDate: "Dec 18, 2025",
    },
    {
      id: 4,
      title: "Web Development Portfolio",
      course: "CS 201 - Web Development",
      expiresAt: "Dec 20, 2025 at 11:59 PM",
      totalStudents: 42,
      submittedCount: 42,
      description:
        "Create a personal portfolio website using modern web technologies.",
      postedDate: "Dec 05, 2025",
    },
    {
      id: 5,
      title: "Algorithm Analysis Report",
      course: "CS 301 - Data Structures",
      expiresAt: "Jan 05, 2026 at 11:59 PM",
      totalStudents: 45,
      submittedCount: 12,
      description: "Analyze time and space complexity of sorting algorithms.",
      postedDate: "Dec 20, 2025",
    },
    {
      id: 6,
      title: "React Native Mobile App",
      course: "CS 201 - Web Development",
      expiresAt: "Jan 10, 2026 at 11:59 PM",
      totalStudents: 42,
      submittedCount: 5,
      description:
        "Build a cross-platform mobile application using React Native.",
      postedDate: "Dec 19, 2025",
    },
  ];

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Assignments
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track and manage all your course assignments
          </p>
        </div>

        {/* Assignments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => {
            const submissionRate = Math.round(
              (assignment.submittedCount / assignment.totalStudents) * 100
            );
            const isFullySubmitted =
              assignment.submittedCount === assignment.totalStudents;

            return (
              <div
                key={assignment.id}
                className="group cursor-pointer rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-700 transition-all duration-200 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30">
                      <FileText className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2 mb-1">
                    {assignment.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    {assignment.course}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {assignment.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200 dark:border-slate-800"></div>

                {/* Card Stats */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <Clock className="h-3.5 w-3.5" />
                      Expires
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {assignment.expiresAt.split(" at ")[0]}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      Posted
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {assignment.postedDate}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <Users className="h-3.5 w-3.5" />
                      Submissions
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {assignment.submittedCount} / {assignment.totalStudents}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-slate-500 dark:text-slate-400">
                        Completion
                      </span>
                      <span
                        className={`font-semibold ${
                          isFullySubmitted
                            ? "text-green-600 dark:text-green-400"
                            : "text-sky-600 dark:text-sky-400"
                        }`}
                      >
                        {submissionRate}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          isFullySubmitted ? "bg-green-500" : "bg-sky-500"
                        }`}
                        style={{ width: `${submissionRate}%` }}
                      />
                    </div>
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
