import {
  User,
  Lock,
  Bell,
  Palette,
  Shield,
  LogOut,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Save,
  Code,
  Edit,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const settingsNav = [
    { id: "account", label: "Account", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "board", label: "Board", icon: Code },
    { id: "privacy", label: "Privacy & Safety", icon: Shield },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white px-4 py-6 sm:px-6 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Settings
          </h1>
          <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Manage your account and application preferences
          </p>
        </header>

        {/* Main Content */}
        <div className="overflow-auto">
          <div className="px-4 py-6 sm:px-6 sm:py-8 mx-auto max-w-4xl">
            {/* Account Settings */}
            <div className="mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Account
              </h2>

              {/* Profile Section */}
              <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-xl sm:text-2xl font-bold text-white flex-shrink-0">
                    AJ
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                      Amara Johnson
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Class Administrator
                    </p>
                  </div>
                </div>
                <button className="rounded-lg border border-slate-200 bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 whitespace-nowrap">
                  Change Photo
                </button>
              </div>

              {/* Settings Items */}
              <div className="space-y-3 sm:space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                {[
                  { label: "Name", value: "Amara Johnson" },
                  { label: "Email", value: "amara.j@classboard.edu" },
                  { label: "Phone", value: "+234 801 234 5678" },
                  { label: "Location", value: "Lagos, Nigeria" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-lg bg-slate-50 p-3 sm:p-4 dark:bg-slate-800/50"
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm sm:text-base text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 flex items-center gap-1 whitespace-nowrap sm:ml-auto">
                      <Edit className="h-3.5 w-3.5" />
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Board Info */}
            <div className="mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Board Information
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: "Board Code", value: "CSC-2024", icon: Code },
                  { label: "Role", value: "Owner", icon: Shield },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 p-3 sm:p-4 dark:from-slate-800/50 dark:to-slate-800"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30 flex-shrink-0">
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
                      <ChevronRight className="h-5 w-5 text-slate-400 dark:text-slate-500 hidden sm:block flex-shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Notifications */}
            <div className="mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Notifications
              </h2>

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
            </div>

            {/* Appearance */}
            <div className="mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Appearance
              </h2>

              <div>
                <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-slate-600 uppercase dark:text-slate-400">
                  Theme
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {["Light", "Dark", "System"].map((theme) => (
                    <button
                      key={theme}
                      className="rounded-lg border-2 border-slate-200 bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-900 hover:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-sky-600 transition flex-1 sm:flex-none"
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Security
              </h2>

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
            </div>

            {/* Sign Out Button */}
            <div className="mb-8">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 transition border border-red-200 dark:border-red-800">
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
