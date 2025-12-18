import SettingsAccountOverview from "@/components/dashboard/settings/accountOverview";
import PersonalInformation from "@/components/dashboard/settings/personalInformation";
import AcademicInformation from "@/components/dashboard/settings/academicInformation";
import {
  User,
  Lock,
  Bell,
  Palette,
  Shield,
  LogOut,
  Mail,
  Phone,
  MapPin,
  Code,
  Edit,
  Hash,
  Book,
  Award,
  Calendar,
  Clock,
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Users as UsersIcon,
} from "lucide-react";

export default function Page() {
  const user = {
    name: "Amara Johnson",
    username: "amaraj",
    email: "amara.j@classboard.edu",
    role: "admin",
    board: {
      code: "CSC-2024",
      role: "owner",
    },
    location: "Lagos, Nigeria",
    studentId: "67609afd1234567890abcdef",
    createdAt: "2023-09-18T00:00:00.000Z",
  };

  const profile = {
    bio: "Passionate about software development and classroom collaboration. Working on making class coordination seamless for everyone.",
    phoneNumber: "+234 801 234 5678",
    gender: "Female",
    department: "Computer Science",
    faculty: "Engineering",
    degree: "B.Sc. Computer Science",
    currentLevel: "300 Level",
    enrollmentYear: 2021,
    socialHandles: {
      instagram: "amaraj.tech",
      twitter: "amaraj_codes",
      github: "amaraj-dev",
      linkedin: "amara-johnson",
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full">
        <header className="border-b border-slate-200 bg-white px-4 py-6 sm:px-6 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Settings
          </h1>
          <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Manage your profile, academic info, and preferences
          </p>
        </header>

        <div className="overflow-auto">
          <div className="px-4 py-6 sm:px-6 sm:py-8 mx-auto max-w-4xl space-y-8 sm:space-y-10">
            {/* Account Overview */}
            <SettingsAccountOverview user={user} />

            {/* Personal Information */}
            <PersonalInformation user={user} profile={profile} />

            {/* Academic Information */}
            <AcademicInformation user={user} profile={profile} />

            {/* Social Links */}
            <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Social Links
                </h3>
                <button className="w-full sm:w-auto rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 flex items-center justify-center sm:justify-start gap-1">
                  <Edit className="h-3.5 w-3.5" /> Edit
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    label: "Instagram",
                    value: profile.socialHandles.instagram,
                    icon: Instagram,
                    color: "text-pink-500",
                  },
                  {
                    label: "Twitter",
                    value: profile.socialHandles.twitter,
                    icon: Twitter,
                    color: "text-blue-400",
                  },
                  {
                    label: "GitHub",
                    value: profile.socialHandles.github,
                    icon: Github,
                    color: "text-slate-700 dark:text-slate-300",
                  },
                  {
                    label: "LinkedIn",
                    value: profile.socialHandles.linkedin,
                    icon: Linkedin,
                    color: "text-blue-600",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  const hasValue = Boolean(item.value);
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 p-4 rounded-lg border ${
                        hasValue
                          ? "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                          : "bg-slate-50/60 dark:bg-slate-800/30 border-dashed border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${item.color} mt-0.5`} />
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          {item.label}
                        </p>
                        <p
                          className={`mt-1 text-slate-900 dark:text-white ${
                            hasValue ? "" : "text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          {hasValue ? item.value : "Not added"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Notifications */}
            <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Notifications
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { label: "Email Notifications", enabled: true },
                  { label: "Course Updates", enabled: true },
                  { label: "Assignment Reminders", enabled: true },
                  { label: "Class Announcements", enabled: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg bg-slate-50 p-3 sm:p-4 dark:bg-slate-800/50"
                  >
                    <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">
                      {item.label}
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked={item.enabled}
                      className="h-5 w-5 rounded border-slate-300 text-sky-600 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Security */}
            <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Security
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-lg bg-slate-50 p-3 sm:p-4 dark:bg-slate-800/50">
                  <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400 mb-2">
                    Password
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-sm sm:text-base text-slate-900 dark:text-white">
                      ••••••••
                    </p>
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 flex items-center justify-center gap-1 whitespace-nowrap">
                      <Edit className="h-3.5 w-3.5" />
                      Change
                    </button>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-3 sm:p-4 dark:bg-slate-800/50">
                  <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400 mb-2">
                    Two-Factor Authentication
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p className="text-sm sm:text-base text-slate-900 dark:text-white">
                      Not enabled
                    </p>
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 whitespace-nowrap">
                      Enable
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Board */}
            <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Board Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Board Code", value: user.board.code, icon: Code },
                  { label: "Board Role", value: user.board.role, icon: Shield },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50"
                    >
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30 shrink-0">
                        <Icon className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
                          {item.label}
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Sign Out */}
            <section className="mb-8">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 transition border border-red-200 dark:border-red-800">
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
