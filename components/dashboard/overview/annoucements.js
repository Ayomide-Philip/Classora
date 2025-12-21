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
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 py-12 px-4 dark:border-slate-700">
            <svg
              className="mb-4 h-16 w-16 text-slate-300 dark:text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
              No Announcements Yet
            </h3>
            <p className="mt-1 text-center text-sm text-slate-500 dark:text-slate-400">
              There are no announcements to display at the moment. Check back
              later for updates!
            </p>
          </div>
        ) : (
          <AnnoucementsCourses annoucements={announcement} />
        )}
      </div>
    </div>
  );
}
