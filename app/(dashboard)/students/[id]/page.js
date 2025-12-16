"use client";
import {
  UserCheck,
  UserX,
  Mail,
  Calendar,
  Shield,
  User,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function Page({ params }) {
  // Static student data - replace with your API call later
  const student = {
    _id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    board: {
      role: "member", // Can be: "owner", "admin", or "member"
    },
    createdAt: new Date().toISOString(),
  };

  const isAdmin = student?.board?.role === "admin";
  const isOwner = student?.board?.role === "owner";
  const isMember = student?.board?.role === "member";
  const canManageRoles = true; // Set based on current user's role

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/students"
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Students
        </Link>

        {/* Student Profile Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-8 sm:px-8">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  {student.name}
                </h1>
                <p className="text-sky-100 mt-1">@{student.username}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 py-6 sm:px-8 space-y-6">
            {/* Student Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                Student Information
              </h2>

              <div className="grid gap-4">
                {/* Email */}
                <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <Mail className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Email Address
                    </p>
                    <p className="text-slate-900 dark:text-white mt-1">
                      {student.email}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <Shield className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Role
                    </p>
                    <div className="mt-1">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                          isOwner
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                            : isAdmin
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-600 dark:text-slate-300"
                        }`}
                      >
                        {student?.board?.role?.charAt(0).toUpperCase() +
                          student?.board?.role?.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Joined Date */}
                <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Joined
                    </p>
                    <p className="text-slate-900 dark:text-white mt-1">
                      {new Date(student.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Management Section - THE BUTTONS */}
            {canManageRoles && !isOwner && (
              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Role Management
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Manage administrative privileges for this student
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Make Admin Button */}
                  {!isAdmin && (
                    <button
                      type="button"
                      onClick={() => {
                        // Add your API call here to make the student an admin
                        console.log("Make admin clicked for student:", id);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all active:scale-[0.98]"
                    >
                      <UserCheck className="h-5 w-5" />
                      Make Admin
                    </button>
                  )}

                  {/* Remove Admin Button */}
                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() => {
                        // Add your API call here to remove admin privileges
                        console.log("Remove admin clicked for student:", id);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all active:scale-[0.98]"
                    >
                      <UserX className="h-5 w-5" />
                      Remove Admin
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
