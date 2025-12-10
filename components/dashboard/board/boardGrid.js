/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Clock, MapPin, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BoardItem from "./boarditems";
export default function BoardGrid({ weeklySchedule, courses }) {
  console.log(courses);
  //   const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [course, setCourse] = useState([
    { day: "Monday", class: [] },
    { day: "Tuesday", class: [] },
    { day: "Wednesday", class: [] },
    { day: "Thursday", class: [] },
    { day: "Friday", class: [] },
  ]);

  // useEffect(() => {
  //   setCourse((prevState) => {
  //     return []
  //   });
  // }, [setCourse]);

  function getDayClasses(day) {
    const dayClass = courses.filter(
      (course) => course.day.toLowerCase() === day.toLowerCase()
    );
    if (!dayClass) return [];
    return dayClass;
  }

  return (
    <>
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
          <BoardItem daySchedule={daySchedule} />
        </section>
      ))}
    </>
  );
}
