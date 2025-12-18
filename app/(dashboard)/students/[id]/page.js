import StudentProfileCard from "@/components/dashboard/students/studentProfileCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { BASE_URL } from "@/libs/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;
  const { boardId } = await getUserInfomation();
  const request = await fetch(
    `${BASE_URL}/api/boards/${boardId}/students/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    }
  );

  const response = await request.json();
  if (response.error || !request.ok) {
    return redirect("/students");
  }
  console.log(response);
  const { student } = response;

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/students"
          className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Students
        </Link>

        <StudentProfileCard student={student} boardId={boardId} />
      </div>
    </main>
  );
}
