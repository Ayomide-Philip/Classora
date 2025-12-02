export default function Comments({ announcementId }) {
  const DEFAULTS = {
    "physics-101": [
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
    ],
    "advanced-algebra": [
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
    ],
    "world-history": [
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
    ],
  };

  const comments = DEFAULTS[announcementId] ?? [
    {
      id: "sample-1",
      author: "Staff",
      text: "No specific comments for this announcement yet.",
      createdAt: new Date().toISOString(),
    },
  ];

  return (
    <section className="mt-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
        Comments
      </h3>

      {/* Static, non-functional form to show UI */}
      <div className="mb-4 grid gap-2">
        <textarea
          placeholder="Write a comment..."
          rows={3}
          className="w-full resize-none rounded-md border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400"
        />
        <div className="flex justify-end">
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-full bg-slate-300 px-4 py-2 text-sm font-semibold text-white dark:bg-slate-700/60"
          >
            Post comment
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {comments.map((c) => (
          <div
            key={c.id}
            className="rounded-lg border border-slate-200 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-900/70"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {c.author}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {new Date(c.createdAt).toLocaleString()}
              </div>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-200">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
