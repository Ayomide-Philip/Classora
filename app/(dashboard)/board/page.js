"use client";
import {
  CalendarDays,
  Clock,
  MapPin,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
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
          {weeklySchedule.map((daySchedule) => (
            <section key={daySchedule.day}>
              {/* Day header */}
              <div className="mb-2 sm:mb-3 flex items-center gap-3">
                <h2 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  {daySchedule.day}
                </h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                  {daySchedule.classes.length} class
                  {daySchedule.classes.length !== 1 ? "es" : ""}
                </span>
              </div>

              {/* Classes */}
              <div className="space-y-2 sm:space-y-3">
                {daySchedule.classes.map((c) => (
                  <Link
                    key={c.id}
                    href={`/board/${c.id}`}
                    className="group block rounded-xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md active:scale-[0.99] dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`mt-0.5 h-full min-h-[3rem] sm:min-h-[3.5rem] w-1 rounded-full ${c.color}`}
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                              {c.title}
                            </h3>
                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 truncate">
                              {c.teacher}
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:translate-x-0.5 dark:text-slate-500" />
                        </div>

                        <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          {/* Time */}
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                            <Clock className="h-3 w-3 flex-shrink-0" />
                            <span>{c.time}</span>
                          </div>

                          {/* Venue */}
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                            <MapPin className="h-3 w-3 flex-shrink-0" />
                            <span className="truncate">{c.venue}</span>
                          </div>
                        </div>

                        {/* Map button — stops propagation */}
                        <div className="mt-2 sm:mt-3">
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(
                                c.mapUrl,
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }}
                            className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-slate-700 transition hover:bg-sky-600 hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-sky-600 dark:hover:text-white cursor-pointer"
                          >
                            <MapPin className="h-3 w-3" />
                            View on Map
                            <ExternalLink className="h-2.5 w-2.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-6 sm:mt-8 text-center text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
          This schedule repeats weekly until the semester ends.
        </p>
      </div>
    </main>
  );
}
