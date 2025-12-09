import CourseCode from "@/components/dashboard/courses/create/coursecode";
import { ArrowLeft, BookOpen, Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Back button */}
        <Link
          href="/dashboard/courses"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Create New Course
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Add a new course to your catalog
              </p>
            </div>
          </div>
        </header>

        {/* Form */}
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
      </div>
    </main>
  );
}
