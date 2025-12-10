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
    { day: "Tuesday", classes: getDayClasses("tuesday") || [] },
    { day: "Wednesday", classes: getDayClasses("wednesday") || [] },
    { day: "Thursday", classes: getDayClasses("thursday") || [] },
    { day: "Friday", classes: getDayClasses("friday") || [] },
  ];

  return (
    <>
      {weeklySchedule.map(({ day, classes }, idx) => (
        <section key={idx}>
          <div className="mb-2 sm:mb-3 flex items-center gap-3">
            <h2 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
              {day}
            </h2>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
              {classes.length} class
              {classes.length !== 1 ? "es" : ""}
            </span>
          </div>

          <BoardItem classes={classes} />
        </section>
      ))}
    </>
  );
}
