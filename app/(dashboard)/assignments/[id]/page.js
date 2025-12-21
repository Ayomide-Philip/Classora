import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  FileText,
  Paperclip,
  Download,
} from "lucide-react";

export default function Page() {
  // Static data; swap with real backend payload later
  const assignment = {
    title: "Data Structures Implementation",
    course: "CS 301 - Data Structures",
    summary:
      "Build a binary search tree that supports insert, delete, and traversals. Include complexity analysis and tests.",
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
      "Support insert, search, delete, inorder, preorder, and postorder",
      "Handle duplicates deterministically (e.g., count field)",
      "Document complexity for each operation",
      "Add unit tests for edge cases (empty, skewed, duplicates)",
    ],
    resources: [
      "CLRS Chapter 12 (Binary Search Trees)",
      "Course slides: Trees and Traversals",
      "Sample I/O formats in the brief",
    ],
  };

  const completionRate = Math.round(
    (assignment.submittedCount / assignment.totalStudents) * 100
  );

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Hero */}
        <section className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <div className="p-4 sm:p-6 lg:p-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-3">
                <button className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Assignment</p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {assignment.title}
                  </h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{assignment.course}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {assignment.summary}
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-auto rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                  <span>Submissions</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {assignment.submittedCount} / {assignment.totalStudents}
                  </span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full bg-sky-500"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Completion rate</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {completionRate}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <MetaTile icon={Calendar} label="Posted" value={assignment.postedDate} />
              <MetaTile icon={Clock} label="Due" value={`${assignment.dueDate} • ${assignment.dueTime}`} />
              <MetaTile
                icon={Users}
                label="Submissions"
                value={`${assignment.submittedCount} / ${assignment.totalStudents}`}
              />
              <MetaTile icon={FileText} label="Completion" value={`${completionRate}%`} />
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            <Card title="What to do">
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {assignment.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Resources">
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {assignment.resources.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Side column */}
          <div className="space-y-6">
            <Card title="Timeline">
              <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <Row icon={Calendar} label="Posted" value={assignment.postedDate} />
                <Row icon={Clock} label="Due" value={`${assignment.dueDate} at ${assignment.dueTime}`} />
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-700">
                  Submit work
                </button>
                <button className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">
                  Ask question
                </button>
              </div>
            </Card>

            <Card title="Attachments">
              <div className="space-y-2">
                {assignment.attachments.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  >
                    <div className="flex items-center gap-2">
                      <Paperclip className="h-4 w-4 text-slate-400" />
                      <span>{file.name}</span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{file.size}</span>
                  </div>
                ))}
              </div>
              <button className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700">
                <Download className="h-4 w-4" />
                Download all
              </button>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}

function MetaTile({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-white border border-slate-200 dark:border-slate-700 dark:bg-slate-800">
          <Icon className="h-4 w-4 text-slate-600 dark:text-slate-200" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Row({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
        <Icon className="h-4 w-4 text-slate-400" />
        <span>{label}</span>
      </div>
      <span className="text-sm font-semibold text-slate-900 dark:text-white">{value}</span>
    </div>
  );
}
