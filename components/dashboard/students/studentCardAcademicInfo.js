import { Calendar, Shield, Book, Award, Clock } from "lucide-react";
export default function StudentCardAcademicsInfo({ student }) {
  const { board, profileId } = student;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
        Academic Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <Book className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Department
            </p>
            <p className="text-slate-900 dark:text-white mt-1 capitalize">
              {profileId?.department ? profileId?.department : "nill"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <Award className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Faculty
            </p>
            <p className="text-slate-900 dark:text-white mt-1 capitalize">
              {profileId?.faculty ? profileId?.faculty : "nill"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <Award className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Degree
            </p>
            <p className="text-slate-900 dark:text-white mt-1 capitalize">
              {profileId?.degree ? profileId?.degree : "nill"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <Clock className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Current Level
            </p>
            <p className="text-slate-900 dark:text-white mt-1 capitalize">
              {profileId?.currentLevel ? profileId?.currentLevel : "nill"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <Calendar className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Enrollment Year
            </p>
            <p className="text-slate-900 dark:text-white mt-1 capitalize">
              {profileId?.enrollmentYear > 0
                ? profileId?.enrollmentYear
                : "nill"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <Shield className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Board Role
            </p>
            <div className="mt-1">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                  board?.role === "owner"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : board?.role
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    : "bg-slate-100 text-slate-700 dark:bg-slate-600 dark:text-slate-300"
                }`}
              >
                {board?.role?.charAt(0).toUpperCase() + board?.role?.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
