import { Save } from "lucide-react";

export default function EditAcademicInformation({ user, setEditing }) {
  return (
    <>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Edit Academic Information
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="rounded-lg border cursor-pointer border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            Cancel
          </button>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              placeholder="Enter your department"
              defaultValue={user?.profileId?.department || ""}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Faculty
            </label>
            <input
              type="text"
              name="faculty"
              placeholder="Enter your faculty"
              defaultValue={user?.profileId?.faculty || ""}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Degree
            </label>
            <input
              type="text"
              name="degree"
              placeholder="Enter your degree"
              defaultValue={user?.profileId?.degree || ""}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Current Level
            </label>
            <input
              type="text"
              name="currentLevel"
              placeholder="Enter your current level"
              defaultValue={user?.profileId?.currentLevel || ""}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Enrollment Year
            </label>
            <input
              type="text"
              name="enrollmentYear"
              placeholder="Enter enrollment year"
              defaultValue={user?.profileId?.enrollmentYear || ""}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Board Role
            </label>
            <select
              name="boardRole"
              defaultValue={user?.board?.role || ""}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="owner">Owner</option>
              <option value="member">Member</option>
              <option value="student">Student</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            type="submit"
            className="w-full px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}
