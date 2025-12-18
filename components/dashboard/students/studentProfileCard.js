import {
  Shield,
  Clock,
  Instagram,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import StudentProfileCardHeader from "./studentParentCardHeader";
import StudentCardBio from "./studentCardBio";
import StudentCardPersonalInfo from "./studentCardPersonalInfo";
import StudentCardAcademicsInfo from "./studentCardAcademicInfo";
import StudentCardSocialHandles from "./studentCardSocialHandles";
export default async function StudentProfileCard({ student }) {
  const isAdmin = student?.board?.role === "admin";
  const isOwner = student?.board?.role === "owner";
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Header Section */}
      <StudentProfileCardHeader student={student} />

      <div className="px-6 py-6 sm:px-8 space-y-6">
        <StudentCardBio student={student} />

        {/* Personal Information */}
        <StudentCardPersonalInfo student={student} />

        {/* Academic Information */}
        <StudentCardAcademicsInfo student={student} />

        {/* Social Handles */}
        <StudentCardSocialHandles student={student} />

        {/* Course Statistics */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
            Member Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Member Since */}
            <div className="p-4 bg-linear-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-800/50 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Member Since
                  </p>
                  <p className="text-lg font-bold text-purple-900 dark:text-purple-100">
                    {new Date(student.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Board Role */}
            <div className="p-4 bg-linear-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    isOwner
                      ? "bg-purple-100 dark:bg-purple-800/50"
                      : isAdmin
                      ? "bg-blue-100 dark:bg-blue-800/50"
                      : "bg-slate-100 dark:bg-slate-700"
                  }`}
                >
                  <Shield
                    className={`h-5 w-5 ${
                      isOwner
                        ? "text-purple-600 dark:text-purple-400"
                        : isAdmin
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  />
                </div>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      isOwner
                        ? "text-purple-600 dark:text-purple-400"
                        : isAdmin
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    Board Role
                  </p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    {student?.board?.role?.charAt(0).toUpperCase() +
                      student?.board?.role?.slice(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
