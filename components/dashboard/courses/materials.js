import { Download, FileText } from "lucide-react";

export default function CourseMaterials() {
  const materials = [
    { id: 1, title: "Course Syllabus", type: "PDF", date: "Sep 2" },
    {
      id: 2,
      title: "Chapter 1: Motion & Forces",
      type: "PDF",
      date: "Sep 5",
    },
    { id: 3, title: "Chapter 2: Energy & Work", type: "PDF", date: "Sep 12" },
    {
      id: 4,
      title: "Lab Manual - Experiment 1",
      type: "PDF",
      date: "Sep 15",
    },
    { id: 5, title: "Midterm Study Guide", type: "PDF", date: "Oct 10" },
    { id: 6, title: "Chapter 3: Waves", type: "PDF", date: "Oct 20" },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Course Materials
      </h2>
      <div className="space-y-2">
        {materials.map((m) => (
          <div
            key={m.id}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 cursor-pointer"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 dark:bg-sky-950/40`}
            >
              <FileText className={`h-5 w-5 text-sky-600 dark:text-sky-400`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-slate-900 dark:text-white truncate">
                {m.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {m.type} • {m.date}
              </p>
            </div>
            <Download className="h-4 w-4 text-slate-400" />
          </div>
        ))}
      </div>
    </section>
  );
}
