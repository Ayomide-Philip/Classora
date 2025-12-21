export default function EditPersonalInformation({ user }) {
  return (
    <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Edit Personal Information
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700"
          >
            Save
          </button>
        </div>
      </div>

      <form className="space-y-6">
        <input type="hidden" name="userId" defaultValue={user?._id || ""} />

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email || ""}
              readOnly
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="e.g. +234 801 234 5678"
              defaultValue={user?.profileId?.phoneNumber || ""}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Gender
            </label>
            <select
              name="gender"
              defaultValue={user?.profileId?.gender || ""}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="">Unchanged</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Student ID
            </label>
            <input
              type="text"
              name="studentId"
              defaultValue={user?._id || ""}
              readOnly
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
