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
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Settings
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Manage your account and application preferences
          </p>
        </header>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="px-8 py-8">
            {/* Account Settings */}
            <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Account
              </h2>

              {/* Profile Section */}
              <div className="mb-8 flex items-start justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-2xl font-bold text-white">
                    AJ
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Amara Johnson
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Class Administrator
                    </p>
                  </div>
                </div>
                <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                  Change Photo
                </button>
              </div>

              {/* Settings Items */}
              <div className="space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                {[
                  { label: "Name", value: "Amara Johnson" },
                  { label: "Email", value: "amara.j@classboard.edu" },
                  { label: "Phone", value: "+234 801 234 5678" },
                  { label: "Location", value: "Lagos, Nigeria" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50"
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 flex items-center gap-1">
                      <Edit className="h-3.5 w-3.5" />
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Board Info */}
            <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Board Information
              </h2>

              <div className="space-y-4">
                {[
                  { label: "Board Code", value: "CSC-2024", icon: Code },
                  { label: "Role", value: "Owner", icon: Shield },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800/50 dark:to-slate-800"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30">
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
                      <ChevronRight className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Notifications */}
            <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Notifications
              </h2>

              <div className="space-y-3">
                {[
                  { label: "Email Notifications", enabled: true },
                  { label: "Course Updates", enabled: true },
                  { label: "Assignment Reminders", enabled: true },
                  { label: "Class Announcements", enabled: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50"
                  >
                    <span className="font-medium text-slate-900 dark:text-white">
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
            <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Appearance
              </h2>

              <div>
                <p className="mb-4 text-sm font-semibold text-slate-600 uppercase dark:text-slate-400">
                  Theme
                </p>
                <div className="flex gap-4">
                  {["Light", "Dark", "System"].map((theme) => (
                    <button
                      key={theme}
                      className="rounded-lg border-2 border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-sky-600 transition"
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Security
              </h2>

              <div className="space-y-4">
                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                  <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400 mb-2">
                    Password
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-900 dark:text-white">••••••••</p>
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 flex items-center gap-1">
                      <Edit className="h-3.5 w-3.5" />
                      Change
                    </button>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
                  <p className="text-xs font-semibold text-slate-500 uppercase dark:text-slate-400 mb-2">
                    Two-Factor Authentication
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-900 dark:text-white">
                      Not enabled
                    </p>
                    <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                      Enable
                    </button>
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
