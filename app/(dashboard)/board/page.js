import BoardGrid from "@/components/dashboard/board/boardGrid";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { BASE_URL } from "@/libs/config";
import { CalendarDays } from "lucide-react";
import { cookies } from "next/headers";

export default async function Page() {
  const { boardId } = await getUserInfomation();
  const request = await fetch(`${BASE_URL}/api/boards/${boardId}/classes/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });

  const { courses } = await request.json();
  
  // Weekly recurring schedule (Mon–Fri)
  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        {
          id: "physics-101",
          time: "09:00 – 10:30",
          title: "Physics 101",
          teacher: "Dr. Mensah",
          venue: "Science Block, Lab A",
          mapUrl: "https://maps.google.com/?q=Science+Block+Lab+A",
          color: "bg-sky-500",
        },
        {
          id: "algebra-ii",
          time: "11:00 – 12:30",
          title: "Algebra II",
          teacher: "Ms. Okoye",
          venue: "Main Building, Room 12",
          mapUrl: "https://maps.google.com/?q=Main+Building+Room+12",
          color: "bg-emerald-500",
        },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        {
          id: "chemistry",
          time: "10:00 – 11:30",
          title: "Chemistry",
          teacher: "Dr. Amadi",
          venue: "Science Block, Lab B",
          mapUrl: "https://maps.google.com/?q=Science+Block+Lab+B",
          color: "bg-rose-500",
        },
        {
          id: "history",
          time: "13:00 – 14:30",
          title: "History",
          teacher: "Mr. Clarke",
          venue: "Arts Wing, Room 3",
          mapUrl: "https://maps.google.com/?q=Arts+Wing+Room+3",
          color: "bg-indigo-500",
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        {
          id: "english-literature",
          time: "09:30 – 11:00",
          title: "English Literature",
          teacher: "Ms. Ramos",
          venue: "Library Annex, Room 7",
          mapUrl: "https://maps.google.com/?q=Library+Annex+Room+7",
          color: "bg-amber-500",
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        {
          id: "biology",
          time: "08:30 – 10:00",
          title: "Biology",
          teacher: "Dr. Lee",
          venue: "Science Block, Lab C",
          mapUrl: "https://maps.google.com/?q=Science+Block+Lab+C",
          color: "bg-teal-500",
        },
        {
          id: "art-design",
          time: "14:00 – 15:30",
          title: "Art & Design",
          teacher: "Ms. Gray",
          venue: "Creative Arts Studio",
          mapUrl: "https://maps.google.com/?q=Creative+Arts+Studio",
          color: "bg-fuchsia-500",
        },
      ],
    },
    {
      day: "Friday",
      classes: [
        {
          id: "geography",
          time: "10:00 – 11:30",
          title: "Geography",
          teacher: "Mr. Stone",
          venue: "Main Building, Room 9",
          mapUrl: "https://maps.google.com/?q=Main+Building+Room+9",
          color: "bg-sky-600",
        },
        {
          id: "physical-education",
          time: "12:00 – 13:00",
          title: "Physical Education",
          teacher: "Coach Ndu",
          venue: "Sports Complex, Gym",
          mapUrl: "https://maps.google.com/?q=Sports+Complex+Gym",
          color: "bg-lime-500",
        },
      ],
    },
  ];

  const totalClasses = weeklySchedule.reduce(
    (sum, d) => sum + d.classes.length,
    0
  );

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
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
                {totalClasses} classes per week • Repeats every week
              </p>
            </div>
          </div>
        </header>

        {/* Schedule list */}
        <div className="space-y-5 sm:space-y-6">
          <BoardGrid weeklySchedule={weeklySchedule} courses={courses} />
        </div>

        {/* Footer note */}
        <p className="mt-6 sm:mt-8 text-center text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
          This schedule repeats weekly until the semester ends.
        </p>
      </div>
    </main>
  );
}
