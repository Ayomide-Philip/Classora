import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  FileText,
  CheckCircle2,
  Download,
  Paperclip,
} from "lucide-react";

export default function Page() {
  // Static assignment payload; replace with real data when wiring backend
  const assignment = {
    title: "Data Structures Implementation",
    course: "CS 301 - Data Structures",
    description:
      "Implement a binary search tree with insertion, deletion, and traversal methods. Include time complexity analysis for each operation.",
    postedDate: "Dec 10, 2025",
    dueDate: "Dec 25, 2025",
    dueTime: "11:59 PM",
    submittedCount: 32,
    totalStudents: 45,
    attachments: [
      { name: "assignment-brief.pdf", size: "240 KB" },
      { name: "bst-starter.zip", size: "1.2 MB" },
    ],
    requirements: [
      "Support insert, search, delete, inorder, preorder, and postorder traversals",
      "Handle duplicate keys with a deterministic rule (e.g., count field)",
      "Provide complexity analysis for each operation in the README",
      "Include unit tests covering edge cases (empty tree, duplicates, skewed trees)",
    ],
    resources: [
      "CLRS Chapter 12 (Binary Search Trees)",
      "Course slide deck: Trees and Traversals",
      "Sample input/output formats provided in the brief",
    ],
  };

  const completionRate = Math.round(
    (assignment.submittedCount / assignment.totalStudents) * 100
  );

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8 ">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Assignment
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {assignment.title}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {assignment.course}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            {completionRate}% submitted
          </div>
        </div>

        {/* Meta cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <MetaCard
            icon={Calendar}
            label="Posted"
            value={assignment.postedDate}
          />
          <MetaCard
            icon={Clock}
            label="Due"
            value={`${assignment.dueDate} • ${assignment.dueTime}`}
          />
          <MetaCard
            icon={Users}
            label="Submissions"
            value={`${assignment.submittedCount} / ${assignment.totalStudents}`}
          />
          <MetaCard
            icon={FileText}
            label="Completion"
            value={`${completionRate}%`}
          />
        </div>

        {/* Content card */}
        <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Overview
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {assignment.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Requirements
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {assignment.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Resources
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {assignment.resources.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-slate-300 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Attachments
                </h3>
                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                  <Download className="h-4 w-4" />
                  Download All
                </button>
              </div>
              <div className="space-y-2">
                {assignment.attachments.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Paperclip className="h-4 w-4 text-slate-400" />
                      <span>{file.name}</span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {file.size}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function MetaCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
          <Icon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {label}
          </p>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
