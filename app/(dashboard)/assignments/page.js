import { Clock, Users, FileText, Calendar, TrendingUp } from "lucide-react";

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

        {/* Assignments List */}
        <div className="space-y-6">
          {assignments.map((assignment) => {
            const submissionRate = Math.round(
              (assignment.submittedCount / assignment.totalStudents) * 100
            );
            const isFullySubmitted =
              assignment.submittedCount === assignment.totalStudents;

            return (
              <div
                key={assignment.id}
                className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
              >
                {/* Main Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/30">
                          <FileText className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {assignment.title}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                            {assignment.course}
                          </p>
                          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                            {assignment.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button className="lg:mt-0 px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-medium hover:bg-sky-700">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Stats Footer */}
                <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 px-5 sm:px-6 py-4">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Expires
                        </p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {assignment.expiresAt}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Posted
                        </p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {assignment.postedDate}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-slate-400" />
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Submissions
                        </p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {assignment.submittedCount} /{" "}
                          {assignment.totalStudents}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-slate-400" />
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Completion Rate
                        </p>
                        <div className="flex items-center gap-2">
                          <p
                            className={`text-sm font-medium ${
                              isFullySubmitted
                                ? "text-green-600 dark:text-green-400"
                                : "text-slate-900 dark:text-white"
                            }`}
                          >
                            {submissionRate}%
                          </p>
                          <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden max-w-[60px]">
                            <div
                              className={`h-full ${
                                isFullySubmitted ? "bg-green-500" : "bg-sky-500"
                              }`}
                              style={{ width: `${submissionRate}%` }}
                            />
                          </div>
                        </div>
                      </div>
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
