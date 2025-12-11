import { Plus } from "lucide-react";
import Link from "next/link";
export default function BoardForm() {
  return (
    <form className="space-y-6">
      {/* Course Selection */}
      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Course
        </label>
        <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition">
          <option>Select a course</option>
          <option>Physics 101 (PHY101)</option>
          <option>Algebra II (MTH202)</option>
          <option>Chemistry (CHM101)</option>
          <option>History (HIS101)</option>
          <option>English Literature (ENG201)</option>
          <option>Biology (BIO101)</option>
          <option>Art & Design (ART101)</option>
          <option>Geography (GEO101)</option>
        </select>
      </div>

      {/* Day & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Day of Week
          </label>
          <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition">
            <option>Select day</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Start Time
          </label>
          <input
            type="time"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
      </div>

      {/* End Time & Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            End Time
          </label>
          <input
            type="time"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Class Type
          </label>
          <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition">
            <option>Select type</option>
            <option>Lecture</option>
            <option>Lab</option>
            <option>Tutorial</option>
            <option>Seminar</option>
            <option>Practical</option>
          </select>
        </div>
      </div>

      {/* Venue & Building */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Building/Block
          </label>
          <input
            type="text"
            placeholder="e.g., Science Block A"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Room Number
          </label>
          <input
            type="text"
            placeholder="e.g., 201"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
      </div>

      {/* Full Venue Address */}
      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Full Venue Address
        </label>
        <input
          type="text"
          placeholder="e.g., Science Block A, Room 201"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          This will be used for the map location
        </p>
      </div>

      {/* Map Link */}
      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Map/Location Link (Optional)
        </label>
        <input
          type="url"
          placeholder="e.g., https://maps.google.com/..."
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-700 transition-colors active:scale-[0.98]"
        >
          <Plus className="h-4 w-4" />
          Schedule Class
        </button>
        <Link
          href="/board"
          className="flex-1 inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors active:scale-[0.98]"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
