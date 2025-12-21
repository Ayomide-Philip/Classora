import { useState } from "react";
import { toast } from "react-toastify";

export default function EditAcademicInformation({ user, setEditing }) {
  const [department, setDepartment] = useState(
    user?.profileId?.department || ""
  );
  const [faculty, setFaculty] = useState(user?.profileId?.faculty || "");
  const [degree, setDegree] = useState(user?.profileId?.degree || "");
  const [currentLevel, setCurrentLevel] = useState(
    user?.profileId?.currentLevel || ""
  );
  let [enrollmentYear, setEnrollementYear] = useState(
    user?.profileId?.enrollmentYear || ""
  );

  async function handleSubmit(e) {
    e.preventDefault();
    // verifying academic info
    if (department && department.trim().length < 10) {
      return toast.error("Department cant be less than 10 characters");
    }
    // validating faculty
    if (faculty && faculty.trim().length < 10) {
      return toast.error("Faculty cant be less than 10 characters");
    }
    // validating degree
    if (degree && degree.trim().length < 3) {
      return toast.error("Degree cant be less than 3 characters");
    }
    // validating current level
    if (currentLevel && currentLevel.trim().length < 3) {
      return toast.error("Current Level cant be less than 3 characters");
    }
    // update it in my backend
    try {
      const request = await fetch(`/api/users/`, {
        method: "PUT",
        body: JSON.stringify({
          department: department,
          faculty: faculty,
          degree: degree,
          currentLevel: currentLevel,
          enrollmentYear: enrollmentYear,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const response = await request.json();
      if (!request.ok || response?.error) {
        return toast.error(`${response?.error}`);
      }
      toast.success("Profile successfully updated");
      window.location.reload();
    } catch (err) {
      console.error(err);
      return toast.error("Network Error");
    }
  }

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
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              placeholder="Enter your department"
              defaultValue={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
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
              defaultValue={faculty}
              onChange={(e) => {
                setFaculty(e.target.value);
              }}
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
              defaultValue={degree}
              onChange={(e) => {
                setDegree(e.target.value);
              }}
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
              defaultValue={currentLevel}
              onChange={(e) => {
                setCurrentLevel(e.target.value);
              }}
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
              defaultValue={enrollmentYear}
              onChange={(e) => {
                setEnrollementYear(e.target.value);
              }}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Board Role
            </label>
            <input
              name="boardRole"
              defaultValue={user?.board?.role || "No Board Yet"}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              readOnly
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            type="submit"
            className="w-full cursor-pointer px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}
