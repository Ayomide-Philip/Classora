import SettingsAccountOverview from "@/components/dashboard/settings/accountOverview";
import SettingsPersonalInformation from "@/components/dashboard/settings/personalInformation";
import SettingsAcademicInformation from "@/components/dashboard/settings/academicInformation";
import SettingsSocialLinks from "@/components/dashboard/settings/socialLinks";
import SettingsNotification from "@/components/dashboard/settings/notification";
import SettingsSecurity from "@/components/dashboard/settings/security";
import SettingsBoardInfo from "@/components/dashboard/settings/boardInfo";
import SettingsLogOut from "@/components/dashboard/settings/logOut";
import { BASE_URL } from "@/libs/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const request = await fetch(`${BASE_URL}/api/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });
  const response = await request.json();
  console.log(response);
  if (!request.ok || response?.error) {
    return redirect("/login");
  }
  const { user } = response;

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
            <SettingsPersonalInformation user={user} />
            <SettingsAcademicInformation user={user} />
            <SettingsSocialLinks user={user} />
            <SettingsNotification user={user} />
            <SettingsSecurity />
            <SettingsBoardInfo user={user} />
            <SettingsLogOut />
          </div>
        </div>
      </div>
    </main>
  );
}
