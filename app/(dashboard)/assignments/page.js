import {
  Calendar,
  Clock,
  FileText,
  AlertCircle,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export default function Page() {
  const assignments = [
    {
      id: 1,
      title: "Data Structures Implementation",
      course: "CS 301 - Data Structures",
      dueDate: "2025-12-25",
      dueTime: "11:59 PM",
      status: "pending",
      priority: "high",
      description:
        "Implement a binary search tree with insertion, deletion, and traversal methods.",
    },
    {
      id: 2,
      title: "Machine Learning Project Report",
      course: "CS 401 - Machine Learning",
      dueDate: "2025-12-28",
      dueTime: "05:00 PM",
      status: "pending",
      priority: "medium",
      description:
        "Submit final project report with model evaluation and analysis.",
    },
    {
      id: 3,
      title: "Database Design Assignment",
      course: "CS 302 - Database Systems",
      dueDate: "2025-12-30",
      dueTime: "11:59 PM",
      status: "pending",
      priority: "low",
      description:
        "Design a normalized database schema for an e-commerce application.",
    },
    {
      id: 4,
      title: "Web Development Portfolio",
      course: "CS 201 - Web Development",
      dueDate: "2025-12-20",
      dueTime: "11:59 PM",
      status: "completed",
      priority: "high",
      description:
        "Create a personal portfolio website using modern web technologies.",
    },
  ];

  const stats = [
    {
      label: "Total Assignments",
      value: "12",
      icon: FileText,
      color: "bg-blue-500",
    },
    { label: "Pending", value: "8", icon: AlertCircle, color: "bg-orange-500" },
    {
      label: "Completed",
      value: "4",
      icon: CheckCircle2,
      color: "bg-green-500",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Assignments
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track and manage all your course assignments in one place
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center gap-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <button className="px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-medium">
            All
          </button>
          <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            Pending
          </button>
          <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            Completed
          </button>
          <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
            Overdue
          </button>
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {assignments.map((assignment) => {
            const isCompleted = assignment.status === "completed";
            const priorityColors = {
              high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
              medium:
                "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
              low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
            };

            return (
              <div
                key={assignment.id}
                className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {assignment.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                            <BookOpen className="h-3.5 w-3.5" />
                            {assignment.course}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              priorityColors[assignment.priority]
                            }`}
                          >
                            {assignment.priority.charAt(0).toUpperCase() +
                              assignment.priority.slice(1)}{" "}
                            Priority
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                          {assignment.description}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {assignment.dueDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {assignment.dueTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col gap-2">
                    {isCompleted ? (
                      <button className="px-4 py-2 rounded-lg border border-green-200 bg-green-50 text-green-700 text-sm font-medium dark:border-green-800 dark:bg-green-900/30 dark:text-green-300">
                        View Submission
                      </button>
                    ) : (
                      <>
                        <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-sky-600 text-white text-sm font-medium hover:bg-sky-700">
                          Submit
                        </button>
                        <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                          View Details
                        </button>
                      </>
                    )}
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
