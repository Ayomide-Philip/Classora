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
  BookOpen,
  Code,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="px-4 py-6 sm:py-8 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Settings
            </h1>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              Manage your account, preferences, and board settings
            </p>
          </div>
        </header>

        {/* User Profile Card */}
        <div className="mb-8 overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <div className="relative bg-gradient-to-r from-sky-500 to-sky-600 h-24" />
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 mb-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 text-3xl font-bold text-white shadow-lg ring-4 ring-white dark:ring-slate-900">
                AJ
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Amara Johnson
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Class Administrator
                </p>
              </div>
            </div>

            {/* Board & Role Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Board Code */}
              <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-4 dark:from-purple-900/20 dark:to-purple-900/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-200 dark:bg-purple-800/50">
                  <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wider">
                    Board Code
                  </p>
                  <p className="text-lg font-bold text-purple-900 dark:text-purple-300">
                    CSC-2024
                  </p>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 dark:from-emerald-900/20 dark:to-emerald-900/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-200 dark:bg-emerald-800/50">
                  <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    Role
                  </p>
                  <p className="text-lg font-bold text-emerald-900 dark:text-emerald-300">
                    Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Navigation */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: User, label: "Account", id: "account", color: "sky" },
            {
              icon: Bell,
              label: "Notifications",
              id: "notifications",
              color: "emerald",
            },
            {
              icon: Palette,
              label: "Appearance",
              id: "appearance",
              color: "amber",
            },
            { icon: Lock, label: "Security", id: "security", color: "purple" },
            { icon: Shield, label: "Privacy", id: "privacy", color: "red" },
          ].map((item) => {
            const Icon = item.icon;
            const colorMap = {
              sky: "border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20 hover:bg-sky-100 dark:hover:bg-sky-900/40",
              emerald:
                "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40",
              amber:
                "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 hover:bg-amber-100 dark:hover:bg-amber-900/40",
              purple:
                "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40",
              red: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40",
            };
            return (
              <button
                key={item.id}
                className={`flex items-center gap-3 rounded-xl border-2 bg-white px-5 py-4 text-left transition ${
                  colorMap[item.color]
                } dark:bg-slate-900`}
              >
                <Icon
                  className={`h-6 w-6 text-${item.color}-600 dark:text-${item.color}-400`}
                />
                <span className="font-semibold text-slate-900 dark:text-white">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Account Settings */}
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-sky-600 shadow-lg">
              <User className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Account Settings
            </h2>
          </div>

          <div className="space-y-5 rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
            {/* Form Fields */}
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2.5">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Amara Johnson"
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2.5">
                  Email Address
                </label>
                <div className="flex items-center rounded-xl border-2 border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
                  <Mail className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <input
                    type="email"
                    defaultValue="amara.j@classboard.edu"
                    className="ml-3 w-full border-none bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white dark:placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2.5">
                  Phone Number
                </label>
                <div className="flex items-center rounded-xl border-2 border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
                  <Phone className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <input
                    type="tel"
                    defaultValue="+234 801 234 5678"
                    className="ml-3 w-full border-none bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white dark:placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2.5">
                  Location
                </label>
                <div className="flex items-center rounded-xl border-2 border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
                  <MapPin className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <input
                    type="text"
                    defaultValue="Lagos, Nigeria"
                    className="ml-3 w-full border-none bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white dark:placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Save Button */}
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:to-sky-700 transition-all active:scale-[0.98]">
                <Save className="h-5 w-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Password Settings */}
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Security
            </h2>
          </div>

          <div className="space-y-5 rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
            {/* Change Password */}
            <div>
              <h3 className="mb-5 font-semibold text-slate-900 dark:text-white text-lg">
                Change Password
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2.5">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-purple-400 dark:focus:ring-purple-400/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2.5">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-purple-400 dark:focus:ring-purple-400/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2.5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-purple-400 dark:focus:ring-purple-400/10 transition-all"
                  />
                </div>
                <button className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-500/30 hover:to-purple-700 hover:shadow-xl hover:shadow-purple-500/40 transition-all active:scale-[0.98]">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Notifications
            </h2>
          </div>

          <div className="space-y-3 rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
            {[
              { label: "Email Notifications", checked: true },
              { label: "Course Updates", checked: true },
              { label: "Assignment Reminders", checked: true },
              { label: "Class Announcements", checked: false },
              { label: "Grade Changes", checked: true },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 p-4 dark:from-slate-800/50 dark:to-slate-800 hover:shadow-md transition-shadow"
              >
                <label className="text-slate-900 dark:text-white font-semibold">
                  {item.label}
                </label>
                <input
                  type="checkbox"
                  defaultChecked={item.checked}
                  className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Appearance
            </h2>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-5 font-semibold text-slate-900 dark:text-white text-lg">
              Theme
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Light", value: "light" },
                { name: "Dark", value: "dark" },
                { name: "System", value: "system" },
              ].map((theme) => (
                <label key={theme.value} className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    defaultChecked={theme.value === "system"}
                    className="sr-only"
                  />
                  <div className="rounded-xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-5 text-center font-semibold text-slate-900 has-[:checked]:border-amber-500 has-[:checked]:from-amber-50 has-[:checked]:to-amber-100 has-[:checked]:text-amber-900 dark:border-slate-700 dark:from-slate-800 dark:to-slate-800 dark:text-white dark:has-[:checked]:border-amber-500 dark:has-[:checked]:from-amber-900/20 dark:has-[:checked]:to-amber-900/10 dark:has-[:checked]:text-amber-300 transition-all shadow-sm hover:shadow-md">
                    {theme.name}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Logout Section */}
        <div className="mb-8">
          <div className="rounded-2xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-8 shadow-lg dark:border-red-900/30 dark:from-red-900/10 dark:to-red-900/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg text-red-900 dark:text-red-300">
                  Sign Out
                </h3>
                <p className="mt-1.5 text-sm text-red-800 dark:text-red-400">
                  Sign out from your account on this device. You can log back in
                  anytime.
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/30 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/40 transition-all active:scale-[0.98] whitespace-nowrap">
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
