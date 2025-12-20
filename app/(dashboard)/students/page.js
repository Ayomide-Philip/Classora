import StudentPageBody from "@/components/dashboard/students/studentsBody";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { BASE_URL } from "@/libs/config";
import { Users } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const { boardId, role } = await getUserInfomation();
  if (!boardId) {
    return redirect("/overview");
  }
  const request = await fetch(`${BASE_URL}/api/boards/${boardId}/students/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });

  const response = await request.json();
  if (!request.ok || response?.error) {
    return redirect("/overview");
  }
  const { students } = response;

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Students
              </h1>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Manage and view all enrolled students
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2.5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30">
                <Users className="h-5 w-5 text-sky-600 dark:text-sky-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Total Students
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {students?.length}
                </p>
              </div>
            </div>
          </div>
        </header>

        <StudentPageBody students={students} />
      </div>
    </main>
  );
}
