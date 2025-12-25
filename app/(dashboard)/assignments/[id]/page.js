import Link from "next/link";
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";
import {
  ArrowLeft,
  Calendar,
  User,
  ExternalLink,
  CheckCircle2,
  Circle,
  Users,
} from "lucide-react";

export default async function AssignmentPage({ params }) {
  const { id } = await params;
  const { boardId, userId } = await getUserInfomation();

  // Mock data - replace with actual API call
  // const request = await fetch(
  //   `${BASE_URL}/api/boards/${boardId}/assignments/${id}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Cookie: (await cookies()).toString(),
  //     },
  //   }
  // );
  // const { assignment } = await request.json();

  // Mock data for demonstration
  const assignment = {
    id: id,
    title: "Mathematics Assignment - Chapter 5",
    description:
      "Complete all exercises from Chapter 5 of the textbook. This includes:\n\n1. Pages 45-50: Basic algebraic equations\n2. Pages 51-55: Systems of equations\n3. Pages 56-60: Word problems\n\nPlease show all your working and ensure your answers are clearly labeled.",
    postedDate: "Dec 20, 2025",
    dueDate: "Dec 27, 2025",
    postedBy: {
      id: "rep1",
      name: "John Osei",
      role: "Class Representative",
    },
    course: {
      id: "math101",
      code: "MTH 101",
      title: "Calculus I",
      lecturer: "Dr. Kwame Mensah",
    },
    googleFormUrl: "https://forms.gle/example123456789",
    studentsMarkedDone: 28,
    totalStudents: 45,
    isUserDone: false, // This would come from the API based on current user
    studentsList: [
      { id: 1, name: "Alice Johnson", markedDone: true },
      { id: 2, name: "Bob Smith", markedDone: true },
      { id: 3, name: "Charlie Brown", markedDone: false },
      { id: 4, name: "Diana Prince", markedDone: true },
      { id: 5, name: "Edward Norton", markedDone: false },
    ],
  };

  if (!assignment) {
    return (
      <main className="px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Assignment not found
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            We couldn&apos;t find the assignment you were looking for.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/assignments"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:bg-slate-800"
            >
              Back to assignments
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4 sm:p-6">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/assignments"
            className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Assignments
          </Link>
        </div>

        {/* Assignment Header Card */}
        <article className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          {/* Assignment Header */}
          <div className="border-b border-slate-200 p-6 dark:border-slate-700">
            {/* Course Info */}
            <Link
              href={`/courses/${assignment.course.id}`}
              className="group inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-700 hover:bg-sky-100 dark:bg-sky-900/30 dark:text-sky-400 dark:hover:bg-sky-900/50"
            >
              <span className="uppercase tracking-widest">
                {assignment.course.code}
              </span>
              <span className="opacity-60">•</span>
              <span className="group-hover:underline">
                {assignment.course.title}
              </span>
            </Link>

            {/* Assignment Title */}
            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white">
              {assignment.title}
            </h1>

            {/* Lecturer */}
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Lecturer:{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {assignment.course.lecturer}
              </span>
            </p>
          </div>

          {/* Assignment Meta Section */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Posted by
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/30">
                    <User className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {assignment.postedBy.name}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Posted Date
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-slate-400 dark:text-slate-600" />
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {assignment.postedDate}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Due Date
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-red-400 dark:text-red-600" />
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {assignment.dueDate}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Submissions
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-slate-400 dark:text-slate-600" />
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {assignment.studentsMarkedDone}/{assignment.totalStudents}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Assignment Details
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {assignment.description.split("\n").map((line, index) => (
              <p key={index} className={line.trim() === "" ? "h-2" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Submit Your Work
          </h2>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
            Use the Google Form below to submit this assignment:
          </p>
          <a
            href={assignment.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition-colors dark:bg-sky-700 dark:hover:bg-sky-600"
          >
            <ExternalLink className="h-4 w-4" />
            Open Google Form
          </a>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Mark as Complete
          </h2>
          <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
            Click the button below once you have completed and submitted this
            assignment.
          </p>
          <button
            className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
              assignment.isUserDone
                ? "border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800"
                : "bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            }`}
          >
            {assignment.isUserDone ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Marked as Done
              </>
            ) : (
              <>
                <Circle className="h-4 w-4" />
                Mark as Done
              </>
            )}
          </button>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            {assignment.isUserDone
              ? "You have marked this assignment as complete."
              : "Mark this assignment as done once you have submitted it."}
          </p>
        </div>
      </div>
    </main>
  );
}
