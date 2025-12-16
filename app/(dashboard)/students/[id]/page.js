"use client";
import {
  UserCheck,
  UserX,
  Mail,
  Calendar,
  Shield,
  User,
  ArrowLeft,
  Phone,
  MapPin,
  Book,
  Award,
  Clock,
  Hash,
} from "lucide-react";
import Link from "next/link";

export default function Page({ params }) {
  // Static student data - replace with your API call later
  const student = {
    _id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
    studentId: "STU-2024-001",
    department: "Computer Science",
    enrollmentYear: "2024",
    gpa: "3.85",
    completedCourses: 12,
    activeCourses: 4,
    bio: "Passionate about software development and artificial intelligence. Always eager to learn new technologies and contribute to innovative projects.",
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    {student.name}
                  </h1>
                  <p className="text-sky-100 mt-1">@{student.username}</p>
                </div>
              </div>

              {/* Admin Buttons on the opposite side */}
              {canManageRoles && !isOwner && (
                <div className="flex flex-col sm:flex-row gap-2">
                  {/* Make Admin Button */}
                  {!isAdmin && (
                    <button
                      type="button"
                      onClick={() => {
                        // Add your API call here to make the student an admin
                        console.log(
                          "Make admin clicked for student:",
                          student._id
                        );
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all active:scale-[0.98]"
                    >
                      <UserCheck className="h-4 w-4" />
                      Make Admin
                    </button>
                  )}

                  {/* Remove Admin Button */}
                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() => {
                        // Add your API call here to remove admin privileges
                        console.log(
                          "Remove admin clicked for student:",
                          student._id
                        );
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all active:scale-[0.98]"
                    >
                      <UserX className="h-4 w-4" />
                      Remove Admin
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 py-6 sm:px-8 space-y-6">
            {/* Bio Section */}
            {student.bio && (
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                  About
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {student.bio}
                </p>
              </div>
            )}

            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <Mail className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Email Address
                    </p>
                    <p className="text-slate-900 dark:text-white mt-1 break-words">
                      {student.email}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                {student.phone && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Phone className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Phone Number
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.phone}
                      </p>
                    </div>
                  </div>
                )}

                {/* Student ID */}
                {student.studentId && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Hash className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Student ID
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.studentId}
                      </p>
                    </div>
                  </div>
                )}

                {/* Address */}
                {student.address && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Address
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.address}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                Academic Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Department */}
                {student.department && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Book className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Department
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.department}
                      </p>
                    </div>
                  </div>
                )}

                {/* Enrollment Year */}
                {student.enrollmentYear && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Enrollment Year
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.enrollmentYear}
                      </p>
                    </div>
                  </div>
                )}

                {/* GPA */}
                {student.gpa && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Award className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        GPA
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.gpa} / 4.00
                      </p>
                    </div>
                  </div>
                )}

                {/* Role */}
                <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <Shield className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Board Role
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
              </div>
            </div>

            {/* Course Statistics */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                Course Statistics
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Completed Courses */}
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-800/50 rounded-lg">
                      <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">
                        Completed
                      </p>
                      <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                        {student.completedCourses || 0}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active Courses */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-lg">
                      <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Active
                      </p>
                      <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                        {student.activeCourses || 0}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Member Since */}
                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-800/50 rounded-lg">
                      <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        Member Since
                      </p>
                      <p className="text-lg font-bold text-purple-900 dark:text-purple-100">
                        {new Date(student.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
