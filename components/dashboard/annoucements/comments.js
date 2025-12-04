export default function Comments({ comments, userId }) {
  const DEFAULTS = [
    {
      id: 1,
      author: "Dr. Mensah",
      text: "Note: bring safety goggles to the rescheduled lab.",
      createdAt: new Date().toISOString(),
    },
    {
      id: 4,
      author: "Student A",
      text: "Thanks for the heads up — will there be an extra lab session for those who miss it?",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      author: "Ms. Okoye",
      text: "Homework 7 is graded out of 20. Show all workings.",
      createdAt: new Date().toISOString(),
    },
    {
      id: 5,
      author: "Student B",
      text: "Is there a sample problem set we can practice with?",
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      author: "History Dept.",
      text: "Parents: remember permission slips for the museum trip.",
      createdAt: new Date().toISOString(),
    },
    {
      id: 6,
      author: "Parent C",
      text: "Submitted the permission slip yesterday — please confirm receipt.",
      createdAt: new Date().toISOString(),
    },
  ];

  return (
    <section className="mt-6">
      <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
        Comments
      </h3>

      <div className="mb-4 flex items-start gap-3">
        <div className="flex-none">
          <div className="h-10 w-10 rounded-full bg-slate-100 text-sm font-semibold text-slate-800 dark:bg-slate-800 dark:text-white flex items-center justify-center">
            U
          </div>
        </div>
        <div className="flex-1">
          <textarea
            placeholder="Write a comment..."
            rows={3}
            className="w-full resize-none rounded-xl border border-slate-200 bg-white/50 px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200"
          />
          <div className="mt-2 flex justify-end">
            <button
              disabled
              className="inline-flex items-center gap-2 rounded-full bg-slate-300 px-4 py-2 text-sm font-semibold text-white dark:bg-slate-700/60"
            >
              Post comment
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {DEFAULTS.map((c) => {
          const getInitials = (name) => {
            if (!name) return "U";
            const parts = name.trim().split(/\s+/);
            if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
            return (parts[0][0] + (parts[1][0] || "")).toUpperCase();
          };

          return (
            <div
              key={c.id}
              className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex-none">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-800 dark:bg-slate-800 dark:text-white">
                  {getInitials(c.author)}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {c.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <p className="mt-2 text-slate-700 dark:text-slate-200">
                  {c.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
