"use client";
import BoardItem from "./boarditems";
export default function BoardGrid({ courses }) {
  function getDayClasses(day) {
    const dayClass = courses.filter(
      (course) => course.day.toLowerCase() === day.toLowerCase()
    );
    if (!dayClass) return [];
    return dayClass;
  }

  const weeklySchedule = [
    { day: "Monday", classes: getDayClasses("monday") || [] },
    { day: "tuesday", classes: getDayClasses("tuesday") || [] },
    { day: "wednesday", classes: getDayClasses("wednesday") || [] },
    { day: "thursday", classes: getDayClasses("thursday") || [] },
    { day: "friday", classes: getDayClasses("friday") || [] },
  ];

  return (
    <>
      {weeklySchedule.map(({day, class}, idx) => (
        <section key={idx}>
          {/* Day header */}
          <div className="mb-2 sm:mb-3 flex items-center gap-3">
            <h2 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
              {day}
            </h2>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
              {class.length} class
              {class.length !== 1 ? "es" : ""}
            </span>
          </div>

          {/* Classes */}
          <BoardItem daySchedule={daySchedule} />
        </section>
      ))}
    </>
  );
}
