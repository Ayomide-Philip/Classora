import { Clock, MapPin } from "lucide-react";
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const schedule = [
  {
    day: "Monday",
    time: "09:00 - 10:30",
    venue: "Science Block A, Room 201",
  },
  {
    day: "Wednesday",
    time: "09:00 - 10:30",
    venue: "Science Block A, Room 201",
  },
  {
    day: "Friday",
    time: "14:00 - 16:00",
    venue: "Physics Lab 3",
    type: "Lab",
  },
];
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
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Schedule
      </h2>
      <div className="space-y-3">
        {schedule.map((slot, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className={`h-10 w-1 rounded-full bg-sky-500`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-900 dark:text-white">
                  {slot.day}
                </span>
                {slot.type && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400`}
                  >
                    {slot.type}
                  </span>
                )}
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {slot.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {slot.venue}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
