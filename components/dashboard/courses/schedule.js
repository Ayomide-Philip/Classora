import { Clock, MapPin } from "lucide-react";
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CourseSchedule({ courseId }) {
  const { boardId } = await getUserInfomation();
  const request = await fetch(
    `${BASE_URL}/api/boards/${boardId}/courses/${courseId}/class`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    }
  );

  const response = await request.json();
  if (!request.ok || response?.error) return redirect("/courses");
  const { classes } = response;
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Schedule
      </h2>
      <div className="space-y-3">
        {classes && classes.length > 0 ? (
          <>
            {classes.map(({ venue, day, type, time }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className={`h-10 w-1 rounded-full bg-sky-500`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-900 dark:text-white">
                      {day}
                    </span>
                    {type && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400`}
                      >
                        {type}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {`${time?.startTime} - ${time?.endTime}`}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {venue?.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 py-12 px-4 dark:border-slate-700">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
              No Classes Scheduled
            </h3>
            <p className="mt-1 text-center text-sm text-slate-500 dark:text-slate-400">
              This course doesn&apos;t have any scheduled classes yet. Check
              back later for updates!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
