"use client";
import { Plus, CalendarDays, Clock, MapPin, BookOpen } from "lucide-react";
import Link from "next/link";

export default function BoardForm({ course }) {
  const boardData = {};
  return (
    <form className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30">
            <BookOpen className="h-4 w-4 text-sky-600 dark:text-sky-400" />
          </div>
          <label className="text-sm font-semibold text-slate-900 dark:text-white">
            Select Course
          </label>
        </div>
        <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition">
          <option value="">Choose a course</option>
          {course?.length > 0 &&
            course.map(({ _id, courseTitle, courseCode }, idx) => (
              <option key={idx} value={_id}>
                {courseTitle} ({courseCode})
              </option>
            ))}
        </select>
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
            <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition">
              <option value="">Select day</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Class Type
            </label>
            <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition">
              <option value="">Select type</option>
              <option value="lecture">Lecture</option>
              <option value="lab">Lab</option>
              <option value="tutorial">Tutorial</option>
              <option value="seminar">Seminar</option>
              <option value="practical">Practical</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                Start Time
              </div>
            </label>
            <input
              type="time"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                End Time
              </div>
            </label>
            <input
              type="time"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 dark:bg-rose-900/30">
            <MapPin className="h-4 w-4 text-rose-600 dark:text-rose-400" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Location Details
          </h3>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Venue Address
          </label>
          <input
            type="text"
            placeholder="e.g., Science Block A, Room 201"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
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
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
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
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-600/30 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/40 transition-all active:scale-[0.98]"
        >
          <Plus className="h-4 w-4" />
          Schedule Class
        </button>
      </div>
    </form>
  );
}
