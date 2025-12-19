import SettingsAccountOverview from "@/components/dashboard/settings/accountOverview";
import SettingsPersonalInformation from "@/components/dashboard/settings/personalInformation";
import SettingsAcademicInformation from "@/components/dashboard/settings/academicInformation";
import SettingsSocialLinks from "@/components/dashboard/settings/socialLinks";
import SettingsNotification from "@/components/dashboard/settings/notification";
import SettingsSecurity from "@/components/dashboard/settings/security";
import SettingsBoardInfo from "@/components/dashboard/settings/boardInfo";
import SettingsLogOut from "@/components/dashboard/settings/logOut";

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
            <SettingsAccountOverview user={user} />
            <SettingsPersonalInformation user={user} profile={profile} />
            <SettingsAcademicInformation user={user} profile={profile} />
            <SettingsSocialLinks user={user} profile={profile} />
            <SettingsNotification />
            <SettingsSecurity />
            <SettingsBoardInfo user={user} />
            <SettingsLogOut />
          </div>
        </div>
      </div>
    </main>
  );
}
