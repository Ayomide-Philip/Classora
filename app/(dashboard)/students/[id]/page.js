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
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Users as UsersIcon,
} from "lucide-react";
import Link from "next/link";

export default function Page({ params }) {
  // Static student data - combines User model + Profile model
  const student = {
    // From User model
    _id: "67609afd1234567890abcdef",
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    board: {
      role: "member", // Can be: "owner", "admin", or "member"
    },
    createdAt: new Date().toISOString(),

    // From Profile model
    bio: "Passionate about software development and artificial intelligence. Always eager to learn new technologies and contribute to innovative projects.",
    phoneNumber: "+1 (555) 123-4567",
    gender: "Male",
    department: "Computer Science",
    faculty: "Engineering",
    degree: "Bachelor of Science",
    currentLevel: "3rd Year",
    enrollmentYear: 2024,
    socialHandles: {
      instagram: "johndoe_dev",
      twitter: "johndoe_code",
      github: "johndoe-dev",
      linkedin: "johndoe-developer",
    },
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
          <div className="bg-linear-to-r from-sky-500 to-blue-600 px-6 py-8 sm:px-8">
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

              <div className="flex flex-col sm:flex-row gap-2">
                {/* Make Admin Button */}

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all active:scale-[0.98]"
                >
                  <UserCheck className="h-4 w-4" />
                  Make Admin
                </button>

                {/* Remove Admin Button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all active:scale-[0.98]"
                >
                  <UserX className="h-4 w-4" />
                  Remove Admin
                </button>
              </div>
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
                    <p className="text-slate-900 dark:text-white mt-1 wrap-break-word">
                      {student.email}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                {student.phoneNumber && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Phone className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Phone Number
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.phoneNumber}
                      </p>
                    </div>
                  </div>
                )}

                {/* Gender */}
                {student.gender && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <UsersIcon className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Gender
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.gender}
                      </p>
                    </div>
                  </div>
                )}

                {/* Student ID */}
                {student._id && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Hash className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Student ID
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1 wrap-break-word text-sm">
                        {student._id}
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

                {/* Faculty */}
                {student.faculty && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Award className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Faculty
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.faculty}
                      </p>
                    </div>
                  </div>
                )}

                {/* Degree */}
                {student.degree && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Award className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Degree
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.degree}
                      </p>
                    </div>
                  </div>
                )}

                {/* Current Level */}
                {student.currentLevel && (
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Clock className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Current Level
                      </p>
                      <p className="text-slate-900 dark:text-white mt-1">
                        {student.currentLevel}
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

            {/* Social Handles */}
            {(student.socialHandles?.instagram ||
              student.socialHandles?.twitter ||
              student.socialHandles?.github ||
              student.socialHandles?.linkedin) && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                  Social Links
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Instagram */}
                  {student.socialHandles?.instagram && (
                    <a
                      href={`https://instagram.com/${student.socialHandles.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                    >
                      <Instagram className="h-5 w-5 text-pink-500 group-hover:text-pink-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Instagram
                        </p>
                        <p className="text-slate-900 dark:text-white mt-1 group-hover:underline">
                          @{student.socialHandles.instagram}
                        </p>
                      </div>
                    </a>
                  )}

                  {/* Twitter */}
                  {student.socialHandles?.twitter && (
                    <a
                      href={`https://twitter.com/${student.socialHandles.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                    >
                      <Twitter className="h-5 w-5 text-blue-400 group-hover:text-blue-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          Twitter
                        </p>
                        <p className="text-slate-900 dark:text-white mt-1 group-hover:underline">
                          @{student.socialHandles.twitter}
                        </p>
                      </div>
                    </a>
                  )}

                  {/* GitHub */}
                  {student.socialHandles?.github && (
                    <a
                      href={`https://github.com/${student.socialHandles.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                    >
                      <Github className="h-5 w-5 text-slate-700 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          GitHub
                        </p>
                        <p className="text-slate-900 dark:text-white mt-1 group-hover:underline">
                          {student.socialHandles.github}
                        </p>
                      </div>
                    </a>
                  )}

                  {/* LinkedIn */}
                  {student.socialHandles?.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${student.socialHandles.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600 group-hover:text-blue-700 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          LinkedIn
                        </p>
                        <p className="text-slate-900 dark:text-white mt-1 group-hover:underline">
                          {student.socialHandles.linkedin}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            )}

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
      </div>
    </main>
  );
}
