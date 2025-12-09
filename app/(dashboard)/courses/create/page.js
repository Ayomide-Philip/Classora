import CourseCode from "@/components/dashboard/courses/create/coursecode";
import CourseCreateForm from "@/components/dashboard/courses/create/form";
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
        <CourseCreateForm />
      </div>
    </main>
  );
}
