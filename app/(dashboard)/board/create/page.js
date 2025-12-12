import BoardForm from "@/components/dashboard/board/create/form";
import { BASE_URL } from "@/libs/config";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  // getting the board id
  const { boardId } = await getUserInfomation();
  const request = await fetch(`${BASE_URL}/api/boards/${boardId}/courses/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });

  const response = await request.json();

  if (!request.ok || response?.error) {
    redirect("/board");
  }

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/board"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Board
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Schedule a Class
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Add a new class to the timetable
              </p>
            </div>
          </div>
        </header>

        <BoardForm course={response?.course} boardId={boardId} />
      </div>
    </main>
  );
}
