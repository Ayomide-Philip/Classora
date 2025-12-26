import AssignmentGrid from "@/components/dashboard/assignments/assignmentgrid";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { BASE_URL } from "@/libs/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ClipboardList } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const { boardId, role } = await getUserInfomation();
  if (!boardId) return redirect("/overview");
  const request = await fetch(`${BASE_URL}/api/boards/${boardId}/assignments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });
  const response = await request.json();
  if (response.error || !request.ok) return redirect("/overview");
  const { assignments } = response;

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Assignments
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track and manage all your course assignments
          </p>
        </div>

        {assignments && assignments.length > 0 ? (
          <AssignmentGrid assignments={assignments} />
        ) : (
          <div className="flex items-center justify-center py-16">
            <div className="text-center max-w-md">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-sky-50 to-sky-100 dark:from-sky-950/30 dark:to-sky-900/20">
                <ClipboardList className="h-10 w-10 text-sky-600 dark:text-sky-400" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                No assignments yet
              </h3>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Get started by creating your first assignment. Set due dates,
                track submissions, and keep your students organized.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                {role === "admin" || role === "owner" ? (
                  <Link
                    href="/assignments/create"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-500 transition-colors shadow-sm"
                  >
                    <ClipboardList className="h-4 w-4" />
                    Create Assignment
                  </Link>
                ) : null}

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
