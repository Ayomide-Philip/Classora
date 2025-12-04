import { CalendarDays, ChevronRight } from "lucide-react";

export default function Page() {
  const schedule = [
    {
      day: "Monday",
      short: "Mon",
      date: "9",
      classes: [
        {
          time: "09:00",
          title: "Physics 101",
          room: "Lab A",
          color: "bg-sky-500",
        },
        {
          time: "11:00",
          title: "Algebra II",
          room: "Rm 12",
          color: "bg-emerald-500",
        },
      ],
    },
    {
      day: "Tuesday",
      short: "Tue",
      date: "10",
      classes: [
        {
          time: "10:00",
          title: "Chemistry",
          room: "Lab B",
          color: "bg-rose-500",
        },
        {
          time: "13:00",
          title: "History",
          room: "Rm 3",
          color: "bg-indigo-500",
        },
      ],
    },
    {
      day: "Wednesday",
      short: "Wed",
      date: "11",
      classes: [
        {
          time: "09:30",
          title: "English Lit",
          room: "Rm 7",
          color: "bg-amber-500",
        },
      ],
    },
    {
      day: "Thursday",
      short: "Thu",
      date: "12",
      classes: [
        {
          time: "08:30",
          title: "Biology",
          room: "Lab C",
          color: "bg-teal-500",
        },
        {
          time: "14:00",
          title: "Art",
          room: "Studio",
          color: "bg-fuchsia-500",
        },
      ],
    },
    {
      day: "Friday",
      short: "Fri",
      date: "13",
      classes: [
        {
          time: "10:00",
          title: "Geography",
          room: "Rm 9",
          color: "bg-sky-600",
        },
        { time: "12:00", title: "PE", room: "Gym", color: "bg-lime-500" },
      ],
    },
    { day: "Saturday", short: "Sat", date: "14", classes: [] },
    { day: "Sunday", short: "Sun", date: "15", classes: [] },
  ];

  const todayIndex = 2; // Wednesday

  return (
    <main className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
            <CalendarDays className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
              This Week
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              December 9 – 15, 2025
            </p>
          </div>
        </header>

        {/* Day tabs — horizontally scrollable */}
        <div className="-mx-4 mb-6 overflow-x-auto px-4">
          <div className="flex gap-2">
            {schedule.map((d, i) => {
              const isToday = i === todayIndex;
              return (
                <button
                  key={d.day}
                  className={`flex flex-col items-center rounded-xl px-4 py-2 text-center transition ${
                    isToday
                      ? "bg-sky-600 text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-50 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="text-xs font-medium">{d.short}</span>
                  <span className="text-lg font-semibold">{d.date}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Today's schedule */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              {schedule[todayIndex].day}&apos;s Classes
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {schedule[todayIndex].classes.length} class
              {schedule[todayIndex].classes.length !== 1 ? "es" : ""}
            </span>
          </div>

          {schedule[todayIndex].classes.length === 0 ? (
            <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-400 dark:border-slate-700">
              No classes scheduled
            </div>
          ) : (
            <div className="space-y-3">
              {schedule[todayIndex].classes.map((c, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition hover:border-slate-200 hover:bg-white dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700 dark:hover:bg-slate-900/70"
                >
                  <div className={`h-12 w-1 rounded-full ${c.color}`} />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {c.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {c.time} • {c.room}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400 opacity-0 transition group-hover:opacity-100 dark:text-slate-500" />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Upcoming */}
        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Upcoming
          </h2>
          <div className="space-y-2">
            {schedule
              .slice(todayIndex + 1)
              .filter((d) => d.classes.length > 0)
              .map((d) => (
                <div
                  key={d.day}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      <span className="text-[10px] font-medium uppercase">
                        {d.short}
                      </span>
                      <span className="text-sm font-semibold">{d.date}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        {d.day}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {d.classes.length} class
                        {d.classes.length !== 1 ? "es" : ""}
                      </div>
                    </div>
                  </div>
                  <div className="flex -space-x-1">
                    {d.classes.slice(0, 3).map((c, i) => (
                      <div
                        key={i}
                        className={`h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 ${c.color}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
