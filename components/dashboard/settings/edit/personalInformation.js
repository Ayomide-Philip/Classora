import { useState } from "react";
import { Save } from "lucide-react";
export default function EditPersonalInformation({ user, setEditing }) {
  const [phoneNumber, setPhoneNumber] = useState(
    user?.profileId?.phoneNumber || ""
  );
  const [gender, setGender] = useState(user?.profileId?.gender || "");
  async function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted");
  }
  return (
    <>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Edit Personal Information
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

      <form className="space-y-6" onSubmit={handleSubmit}>
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
              defaultValue={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Gender
            </label>
            <select
              name="gender"
              defaultValue={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
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
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700"
          >
            <Save className="h-5 w-5 mr-4 " />
            Save
          </button>
        </div>
      </form>
    </>
  );
}
