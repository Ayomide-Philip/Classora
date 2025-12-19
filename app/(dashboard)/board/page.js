import BoardGrid from "@/components/dashboard/board/boardGrid";
import CreateButton from "@/components/dashboard/createButton";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { BASE_URL } from "@/libs/config";
import { CalendarDays } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const { boardId, role } = await getUserInfomation();
  if (!boardId) {
    return redirect("/overview");
  }
  const request = await fetch(`${BASE_URL}/api/boards/${boardId}/classes/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });

  const { courses } = await request.json();

  return (
    <>
      <main className="px-4 py-6 sm:py-8 md:px-8">
        <div className="mx-auto max-w-4xl">
          <header className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
                <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                  Class Timetable
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {courses?.length || 0} classes per week • Repeats every week
                </p>
              </div>
            </div>
          </header>

          <div className="space-y-5 sm:space-y-6">
            <BoardGrid courses={courses} />
          </div>

          <p className="mt-6 sm:mt-8 text-center text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
            This schedule repeats weekly until the semester ends.
          </p>
        </div>
      </main>
      {role === "admin" || role === "owner" ? (
        <CreateButton path={`/board/create`} />
      ) : null}
    </>
  );
}
