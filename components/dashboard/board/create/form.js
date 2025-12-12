"use client";
import { Plus, CalendarDays, Clock, MapPin, BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function BoardForm({ course, boardId }) {
  const [boardFormData, setBoardFormData] = useState({
    courseId: "",
    venueName: "",
    venueMapUrl: "",
    day: "",
    startTime: "",
    endTime: "",
    type: "",
  });

  function handleInputChange(inputName, value) {
    setBoardFormData((prev) => {
      return { ...prev, [inputName]: value };
    });
  }

  useEffect(() => {
    console.log(boardFormData);
  }, [boardFormData]);

  async function handleSubmit(e) {
    e.preventDefault();
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    // breaking down each input
    const { courseId, venueName, venueMapUrl, day, startTime, endTime, type } =
      boardFormData;
    // validating course id
    if (!courseId || !courseId.trim()) {
      return toast.error("Select a course first.");
    }

    // validating day of the week
    if (!day || !day.trim()) {
      return toast.error("Select a day.");
    }

    if (
      day.trim().toLowerCase() !== "monday" &&
      day.trim().toLowerCase() !== "tuesday" &&
      day.trim().toLowerCase() !== "wednesday" &&
      day.trim().toLowerCase() !== "thursday" &&
      day.trim().toLowerCase() !== "friday"
    ) {
      return toast.error("Invalid day inputted");
    }

    // validating class type
    if (!type || !type.trim()) {
      return toast.error("Please select a type.");
    }
    if (
      type?.trim().toLowerCase() !== "lecture" &&
      type?.trim().toLowerCase() !== "lab" &&
      type?.trim().toLowerCase() !== "tutorial" &&
      type?.trim().toLowerCase() !== "practical"
    ) {
      return toast.error("Invalid type chosen.");
    }

    // validating start date and end time
    console.log(startTime, endTime);
    if (!startTime || !startTime.trim()) {
      return toast.error("Start time is required");
    }

    if (!endTime || !endTime.trim()) {
      return toast.error("End time is required");
    }

    if (startTime.trim() > endTime.trim()) {
      return toast.error("Start time can be greater than end time");
    }

    if (!timeRegex.test(startTime) || !timeRegex.test(endTime)) {
      return toast.error("Invalid start or end time");
    }

    const splitStartTime = startTime.split(":");
    const splitEndTime = endTime.split(":");
    console.log(splitStartTime, splitEndTime);
    if (splitStartTime[0] > splitEndTime[0]) {
      return toast.error("Start time cant greater than end time");
    }
    if (
      splitStartTime[0] === splitEndTime[0] &&
      Number(splitEndTime[1]) - Number(splitStartTime[1]) < 30
    ) {
      return toast.error("There should be at least 30 minute difference");
    }

    // validating venue name
    if (!venueName || !venueName.trim()) {
      return toast.error("Venue name is required");
    }

    if (venueName.trim().length < 5) {
      return toast.error("Venue name should be at least 5 characters");
    }
    // validating map url
    if (venueMapUrl.trim() && venueMapUrl.trim().length < 10) {
      return toast.error("Venue map is required");
    }

    try {
      const request = await fetch(`/api/boards/${boardId}/classes/`, {
        method: "POST",
        body: JSON.stringify({
          courseId,
          type: type,
          day: day,
          venueName: venueName,
          venueMapUrl: venueMapUrl,
          startTime: startTime,
          endTime: endTime,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const response = await request.json();
      if (response?.error && !request.ok) {
        return toast.error(response?.error);
      }
      toast.success(response?.message || "Class created successfully.");
      window.location.href = "/board";
    } catch (err) {
      console.log(err);
      return toast.error("Network error");
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30">
            <BookOpen className="h-4 w-4 text-sky-600 dark:text-sky-400" />
          </div>
          <label className="text-sm font-semibold text-slate-900 dark:text-white">
            Select Course
          </label>
        </div>
        <div className="relative">
          <select
            onChange={(e) => {
              handleInputChange("courseId", e.target.value);
            }}
            className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3.5 pr-10 text-base text-slate-900 shadow-sm hover:shadow-md hover:border-sky-300 focus:border-sky-500 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-sky-600 dark:focus:border-sky-500 dark:focus:ring-sky-500/20 transition-all duration-200 cursor-pointer"
          >
            {course?.length > 0 ? (
              <>
                <option value="">Choose a course</option>
                {course?.length > 0 &&
                  course.map(({ _id, courseTitle, courseCode }, idx) => (
                    <option key={idx} value={_id}>
                      {courseTitle} ({courseCode})
                    </option>
                  ))}
              </>
            ) : (
              <option value="">Create a new Course</option>
            )}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-slate-400 dark:text-slate-500 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
            <CalendarDays className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Schedule Details
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Day of Week
            </label>
            <div className="relative">
              <select
                onChange={(e) => {
                  handleInputChange("day", e.target.value);
                }}
                className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 pr-10 text-base text-slate-900 shadow-sm hover:shadow-md hover:border-emerald-300 focus:border-emerald-500 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-emerald-600 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20 transition-all duration-200 cursor-pointer"
              >
                <option value="">Select day</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-slate-400 dark:text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Class Type
            </label>
            <div className="relative">
              <select
                onChange={(e) => {
                  handleInputChange("type", e.target.value);
                }}
                className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 pr-10 text-base text-slate-900 shadow-sm hover:shadow-md hover:border-emerald-300 focus:border-emerald-500 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-emerald-600 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20 transition-all duration-200 cursor-pointer"
              >
                <option value="">Select type</option>
                <option value="lecture">Lecture</option>
                <option value="lab">Lab</option>
                <option value="tutorial">Tutorial</option>
                <option value="seminar">Seminar</option>
                <option value="practical">Practical</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-slate-400 dark:text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Start Time
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-100 dark:bg-emerald-900/30">
                  <Clock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <input
                type="time"
                onChange={(e) => {
                  handleInputChange("startTime", e.target.value);
                }}
                className="w-full rounded-lg border border-slate-200 bg-white pl-14 pr-4 py-3 text-base text-slate-900 shadow-sm hover:shadow-md hover:border-emerald-300 focus:border-emerald-500 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-emerald-600 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20 transition-all duration-200 scheme-light dark:scheme-dark"
                min="07:00"
                max="20:00"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              End Time
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-100 dark:bg-emerald-900/30">
                  <Clock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <input
                type="time"
                onChange={(e) => {
                  handleInputChange("endTime", e.target.value);
                }}
                className="w-full rounded-lg border border-slate-200 bg-white pl-14 pr-4 py-3 text-base text-slate-900 shadow-sm hover:shadow-md hover:border-emerald-300 focus:border-emerald-500 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-emerald-600 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20 transition-all duration-200 scheme-light dark:scheme-dark"
                min="07:00"
                max="20:00"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
            <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Location Details
          </h3>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Venue Address
          </label>
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <MapPin className="h-4 w-4 text-green-500 dark:text-green-400 opacity-60 group-focus-within:opacity-100 transition-opacity" />
            </div>
            <input
              type="text"
              placeholder="e.g., Science Block A, Room 201"
              onChange={(e) => {
                handleInputChange("venueName", e.target.value);
              }}
              className="w-full rounded-xl border-2 border-slate-200 bg-linear-to-br from-white to-slate-50/50 pl-11 pr-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 shadow-sm hover:border-slate-300 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/10 dark:border-slate-700 dark:from-slate-900 dark:to-slate-900/50 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/10 transition-all"
            />
          </div>
          <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            Full address of the class location
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Map Link{" "}
            <span className="text-xs font-normal text-slate-400">
              (Optional)
            </span>
          </label>
          <input
            type="url"
            placeholder="https://maps.google.com/..."
            onChange={(e) => {
              handleInputChange("venueMapUrl", e.target.value);
            }}
            className="w-full rounded-xl border-2 border-slate-200 bg-linear-to-br from-white to-slate-50/50 px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 shadow-sm hover:border-slate-300 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/10 dark:border-slate-700 dark:from-slate-900 dark:to-slate-900/50 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/10 transition-all"
          />
          <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            Google Maps or any location URL
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 pt-6 border-t-2 border-slate-200 dark:border-slate-800">
        <Link
          href="/board"
          className="flex-1 inline-flex items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:border-slate-600 transition-all active:scale-[0.98]"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="flex-1 cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/30 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/40 transition-all active:scale-[0.98]"
        >
          <Plus className="h-4 w-4" />
          Schedule Class
        </button>
      </div>
    </form>
  );
}
