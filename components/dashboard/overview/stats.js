import { FiTrendingUp } from "react-icons/fi";

export default function OverviewStats({ board }) {
  const classes = board?.classes || [];
  const students = board?.students || [];
  const posts = board?.posts || [];
  const stats = [
    {
      label: "Total Classes",
      value: classes.length,
      color: "from-emerald-400 to-cyan-400",
    },
    {
      label: "Active Students",
      value: students.length,
      color: "from-sky-400 to-indigo-500",
    },
    {
      label: "Assignments Due",
      value: posts.length,
      color: "from-amber-400 to-orange-500",
    },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((card) => (
        <div
          key={card.label}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div
            className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br ${card.color} text-slate-900`}
          >
            <FiTrendingUp />
          </div>
          <p className="mt-4 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {card.label}
          </p>
          <div className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}
