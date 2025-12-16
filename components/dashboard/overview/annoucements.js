import AnnoucementsCourses from "../annoucements/courses";
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";
import EmptyAnnoucements from "@/components/dashboard/annoucements/emptyannoucements";

export default async function OverviewAnnoucement() {
  const { boardId, role } = await getUserInfomation();
  const annoucementRequest = await fetch(
    `${BASE_URL}/api/boards/${boardId}/announcements`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    }
  );

  const { announcement } = await annoucementRequest.json();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Annoucements
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Here are the latest annoucements in the past days
          </p>
        </div>
        <button className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-200">
          View all
        </button>
      </div>
      <div className="mt-3">
        {announcement?.length === 0 || !annoucementRequest.ok ? (
          <EmptyAnnoucements role={role} />
        ) : (
          <AnnoucementsCourses annoucements={announcement} />
        )}
      </div>  
    </div>
  );
}
