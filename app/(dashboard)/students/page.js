import StudentPageBody from "@/components/dashboard/students/studentsBody";
import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function Page() {

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Students
              </h1>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Manage and view all enrolled students
              </p>
            </div>
            <Link
              href="/students/add"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/30 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/40 transition-all active:scale-[0.98]"
            >
              <UserPlus className="h-4 w-4" />
              Add Student
            </Link>
          </div>
        </header>

        <StudentPageBody />
      </div>
    </main>
  );
}
