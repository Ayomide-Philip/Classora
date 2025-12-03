import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-[60vh] bg-transparent px-4 py-10">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Create announcement
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Add a short title, pick a tag, and write the announcement
            description.
          </p>
        </header>

        <form className="space-y-6 rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              placeholder="e.g. Homework: Chapter 3"
              className="mt-2 w-full rounded-md border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
            />
          </div>

          <div>
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Tag
            </label>
            <input
              id="tag"
              name="tag"
              list="tags-list"
              placeholder="Choose or type a tag (e.g. Homework)"
              className="mt-2 w-full rounded-md border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
            />
            <datalist id="tags-list">
              <option value="General" />
              <option value="Homework" />
              <option value="Exam" />
              <option value="Update" />
            </datalist>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              You can type a custom tag or pick from the suggestions above.
            </p>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              placeholder="Write the announcement here (use line breaks for lists, links, etc.)"
              className="mt-2 w-full resize-y rounded-md border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
              >
                Save announcement
              </button>
              <Link
                href="/dashboard/announcements"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                Cancel
              </Link>
            </div>

            <div className="text-sm text-slate-500 dark:text-slate-400">
              Tip: Use clear titles for faster scanning
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
