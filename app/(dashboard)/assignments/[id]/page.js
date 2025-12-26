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
import MarkAsCompleted from "@/components/dashboard/assignments/markAsComplete";
import DeleteAssignments from "@/components/dashboard/assignments/deleteassigment";

export default async function Page({ params }) {
  const { id } = await params;
  let { boardId, userId: usersId, role } = await getUserInfomation();

  const request = await fetch(
    `${BASE_URL}/api/boards/${boardId}/assignments/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    }
  );

  const { assignment } = await request.json();

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
  const {
    boardId: board,
    courseId,
    userId,
    title,
    description,
    dueDate,
    studentsSubmitted,
    submitMode,
    googleFormUrl,
    createdAt,
  } = assignment;
  return (
    <main className="min-h-screen p-4 sm:p-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/assignments"
            className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Assignments
          </Link>

          {role === "admin" ||
            (role === "owner" && (
              <DeleteAssignments boardId={boardId} courseId={id} />
            ))}
        </div>

        <article className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <div className="border-b border-slate-200 p-6 dark:border-slate-700">
            <Link
              href={`/courses/${courseId._id}`}
              className="group inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-700 hover:bg-sky-100 dark:bg-sky-900/30 dark:text-sky-400 dark:hover:bg-sky-900/50"
            >
              <span className="uppercase tracking-widest">
                {courseId?.courseCode}
              </span>
              <span className="opacity-60">•</span>
              <span className="group-hover:underline">
                {courseId?.courseTitle}
              </span>
            </Link>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white">
              {title}
            </h1>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Lecturer:{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {courseId?.courseCoordinator}
              </span>
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Posted by
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/30">
                    <User className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {userId?.name || "Deleted User"}
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
                    {new Date(createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
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
                    {new Date(dueDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
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
                    {studentsSubmitted?.length}/{board?.students?.length}
                  </p>
                </div>
              </div>

              {/* Submission Mode */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Submission Mode
                </p>
                <div className="mt-2">
                  {submitMode === "googleForm" ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
                      <ExternalLink className="h-4 w-4" />
                      Google Form
                    </span>
                  ) : submitMode === "directSubmission" ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4" />
                      Direct Submission
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      <Circle className="h-4 w-4" />
                      Not Specified
                    </span>
                  )}
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
            {description.split("\n").map((line, index) => (
              <p key={index} className={line.trim() === "" ? "h-2" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {googleFormUrl && (
          <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Submit Your Work
            </h2>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
              Use the Google Form below to submit this assignment:
            </p>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition-colors dark:bg-sky-700 dark:hover:bg-sky-600"
            >
              <ExternalLink className="h-4 w-4" />
              Open Google Form
            </a>
          </div>
        )}

        <MarkAsCompleted
          studentsSubmitted={studentsSubmitted}
          userId={usersId}
          boardId={boardId}
          courseId={id}
        />
      </div>
    </main>
  );
}
