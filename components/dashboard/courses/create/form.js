import CourseCode from "@/components/dashboard/courses/create/coursecode";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function CourseCreateForm() {
  return (
    <form className="space-y-6">
      {/* Course Code & Title */}
      <CourseCode />

      {/* Instructor & Credits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Instructor Name
          </label>
          <input
            type="text"
            placeholder="e.g., Dr. Mensah"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Credit Hours
          </label>
          <input
            type="number"
            placeholder="e.g., 3"
            min="1"
            max="12"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
      </div>

      {/* Instructor Email & Semester */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Instructor Email
          </label>
          <input
            type="email"
            placeholder="e.g., mensah@university.edu"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Semester
          </label>
          <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition">
            <option>Select semester</option>
            <option>Fall 2025</option>
            <option>Spring 2026</option>
            <option>Summer 2026</option>
            <option>Fall 2026</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Course Description
        </label>
        <textarea
          rows="4"
          placeholder="Provide a brief description of the course, learning objectives, and any prerequisites..."
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
        />
      </div>

      {/* Prerequisites */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Prerequisites (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g., MTH101, PHY100"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-700 transition-colors active:scale-[0.98]"
        >
          <Plus className="h-4 w-4" />
          Create Course
        </button>
        <Link
          href="/courses"
          className="flex-1 inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors active:scale-[0.98]"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
