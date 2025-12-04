import { CalendarDays, Clock, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Page() {
  // Weekly recurring schedule (Mon–Fri)
  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        {
          time: "09:00 – 10:30",
          title: "Physics 101",
          venue: "Science Block, Lab A",
          mapUrl: "https://maps.google.com/?q=Science+Block+Lab+A",
          color: "bg-sky-500",
        },
        {
          time: "11:00 – 12:30",
          title: "Algebra II",
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
          time: "10:00 – 11:30",
          title: "Chemistry",
          venue: "Science Block, Lab B",
          mapUrl: "https://maps.google.com/?q=Science+Block+Lab+B",
          color: "bg-rose-500",
        },
        {
          time: "13:00 – 14:30",
          title: "History",
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
          time: "09:30 – 11:00",
          title: "English Literature",
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
          time: "08:30 – 10:00",
          title: "Biology",
          venue: "Science Block, Lab C",
          mapUrl: "https://maps.google.com/?q=Science+Block+Lab+C",
          color: "bg-teal-500",
        },
        {
          time: "14:00 – 15:30",
          title: "Art & Design",
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
          time: "10:00 – 11:30",
          title: "Geography",
          venue: "Main Building, Room 9",
          mapUrl: "https://maps.google.com/?q=Main+Building+Room+9",
          color: "bg-sky-600",
        },
        {
          time: "12:00 – 13:00",
          title: "Physical Education",
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
    <main className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
                Class Timetable
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {totalClasses} classes per week • Repeats every week
              </p>
            </div>
          </div>
        </header>

        {/* Schedule list */}
        <div className="space-y-6">
          {weeklySchedule.map((daySchedule) => (
            <section key={daySchedule.day}>
              {/* Day header */}
              <div className="mb-3 flex items-center gap-3">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {daySchedule.day}
                </h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {daySchedule.classes.length} class
                  {daySchedule.classes.length !== 1 ? "es" : ""}
                </span>
              </div>

              {/* Classes */}
              <div className="space-y-3">
                {daySchedule.classes.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-1 h-10 w-1 rounded-full ${c.color}`}
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                              {c.title}
                            </h3>
                            <div className="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                              <Clock className="h-3 w-3" />
                              <span>{c.time}</span>
                            </div>
                          </div>
                        </div>

                        {/* Venue with map link */}
                        <div className="mt-3 flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800/50">
                          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <MapPin className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                            <span>{c.venue}</span>
                          </div>
                          <Link
                            href={c.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-sky-500"
                          >
                            View Map
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          This schedule repeats weekly until the semester ends.
        </p>
      </div>
    </main>
  );
}
