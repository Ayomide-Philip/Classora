import SettingsAccountOverview from "@/components/dashboard/settings/accountOverview";
import SettingsPersonalInformation from "@/components/dashboard/settings/personalInformation";
import SettingsAcademicInformation from "@/components/dashboard/settings/academicInformation";
import { LogOut } from "lucide-react";
import SettingsSocialLinks from "@/components/dashboard/settings/socialLinks";
import SettingsNotification from "@/components/dashboard/settings/notification";
import SettingsSecurity from "@/components/dashboard/settings/security";
import SettingsBoardInfo from "@/components/dashboard/settings/boardInfo";

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
            <SettingsPersonalInformation user={user} profile={profile} />

            {/* Academic Information */}
            <SettingsAcademicInformation user={user} profile={profile} />

            {/* Social Links */}
            <SettingsSocialLinks user={user} profile={profile} />

            {/* Notifications */}
            <SettingsNotification />

            {/* Security */}
            <SettingsSecurity />

            {/* Board */}
            <SettingsBoardInfo user={user} />

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
