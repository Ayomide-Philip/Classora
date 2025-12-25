import AssignmentGrid from "@/components/dashboard/assignments/assignmentgrid";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { BASE_URL } from "@/libs/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Page() {
  const { boardId } = await getUserInfomation();
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Assignments
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Track and manage all your course assignments
          </p>
        </div>

        {/* Assignments Grid */}
        <AssignmentGrid assignments={assignments} />
      </div>
    </main>
  );
}
