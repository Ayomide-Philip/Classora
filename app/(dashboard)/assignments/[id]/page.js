import Link from "next/link";
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";
import {
  ArrowLeft,
  Calendar,
  Clock,
  FileText,
  Users,
  AlertCircle,
  CheckCircle2,
  User,
  BookOpen,
  Download,
  Upload,
  Eye,
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
    title: "Data Structures Implementation",
    course: {
      id: "cs301",
      name: "CS 301 - Data Structures",
      code: "CS301",
      instructor: "Dr. Sarah Johnson",
    },
    description:
      "Implement a binary search tree with insertion, deletion, and traversal methods. Your implementation should include proper error handling, edge case management, and comprehensive documentation.\n\nRequirements:\n- Implement insert() method\n- Implement delete() method\n- Implement inorder, preorder, and postorder traversal\n- Include unit tests for all methods\n- Write documentation for each function\n\nSubmission Format:\n- Submit as a single .zip file containing all source code\n- Include a README.md with instructions on how to run your code\n- Maximum file size: 10MB",
    postedDate: "Dec 10, 2025",
    dueDate: "Dec 25, 2025",
    dueTime: "11:59 PM",
    totalPoints: 100,
    submissionType: "File Upload",
    allowedFileTypes: [".zip", ".rar", ".tar.gz"],
    maxFileSize: "10MB",
    totalStudents: 45,
    submittedCount: 32,
    gradedCount: 20,
    status: "active", // active, closed, draft
    attachments: [
      {
        id: 1,
        name: "starter-code.zip",
        size: "2.3 MB",
        type: "application/zip",
      },
      {
        id: 2,
        name: "requirements.pdf",
        size: "450 KB",
        type: "application/pdf",
      },
    ],
    rubric: [
      { criteria: "Code Functionality", points: 40 },
      { criteria: "Code Quality & Style", points: 20 },
      { criteria: "Documentation", points: 15 },
      { criteria: "Unit Tests", points: 15 },
      { criteria: "Error Handling", points: 10 },
    ],
  };

  if (!assignment) {
    return (
      <main className="px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md dark:border-slate-800 dark:bg-slate-900/80">
          <AlertCircle className="mx-auto h-12 w-12 text-slate-400" />
          <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
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

  const submissionRate = Math.round(
    (assignment.submittedCount / assignment.totalStudents) * 100
  );
  const isOverdue = new Date(assignment.dueDate) < new Date();
  const daysUntilDue = Math.ceil(
    (new Date(assignment.dueDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

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
        <article className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <div className="mb-4 flex items-start gap-3">
            <div className="rounded-lg bg-sky-100 p-2.5 dark:bg-sky-900/30">
              <FileText className="h-6 w-6 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                {assignment.title}
              </h1>
              <Link
                href={`/courses/${assignment.course.id}`}
                className="mt-1 inline-flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
              >
                <BookOpen className="h-3.5 w-3.5" />
                {assignment.course.name}
              </Link>
            </div>
          </div>

          {/* Status Badge */}
          {isOverdue ? (
            <div className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
              <AlertCircle className="h-3.5 w-3.5" />
              Overdue
            </div>
          ) : daysUntilDue <= 3 ? (
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              <Clock className="h-3.5 w-3.5" />
              Due Soon - {daysUntilDue} days left
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Active
            </div>
          )}

          {/* Assignment Details Grid */}
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-4 dark:border-slate-700">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Calendar className="h-3.5 w-3.5" />
                Posted
              </div>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                {assignment.postedDate}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="h-3.5 w-3.5" />
                Due Date
              </div>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                {assignment.dueDate}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <FileText className="h-3.5 w-3.5" />
                Points
              </div>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                {assignment.totalPoints}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <User className="h-3.5 w-3.5" />
                Instructor
              </div>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                {assignment.course.instructor}
              </p>
            </div>
          </div>
        </article>

        {/* Description Section */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
            Description
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-slate-600 dark:prose-invert dark:text-slate-300">
            {assignment.description.split("\n").map((para, idx) => (
              <p key={idx} className="mb-3 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Attachments Section */}
        {assignment.attachments && assignment.attachments.length > 0 && (
          <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
              Attachments
            </h2>
            <div className="space-y-2">
              {assignment.attachments.map((file) => (
                <button
                  key={file.id}
                  className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-left transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800"
                >
                  <FileText className="h-5 w-5 text-slate-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {file.size}
                    </p>
                  </div>
                  <Download className="h-4 w-4 text-slate-400" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grading Rubric Section */}
        {assignment.rubric && assignment.rubric.length > 0 && (
          <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
              Grading Rubric
            </h2>
            <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                      Criteria
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-semibold text-slate-600 dark:text-slate-300">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {assignment.rubric.map((item, idx) => (
                    <tr key={idx} className="bg-white dark:bg-slate-900/50">
                      <td className="px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300">
                        {item.criteria}
                      </td>
                      <td className="px-4 py-2.5 text-right text-sm font-medium text-slate-900 dark:text-white">
                        {item.points}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-white">
                      Total
                    </td>
                    <td className="px-4 py-2.5 text-right text-sm font-bold text-slate-900 dark:text-white">
                      {assignment.totalPoints}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Submission Stats */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
            Class Progress
          </h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              Submissions
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">
              {assignment.submittedCount} / {assignment.totalStudents}
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full bg-sky-500"
              style={{ width: `${submissionRate}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {submissionRate}% submitted • {assignment.gradedCount} graded
          </p>
        </div>

        {/* Submission Section */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
            <Upload className="h-5 w-5" />
            Your Submission
          </h2>
          <div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-800/50">
            <Upload className="mx-auto h-12 w-12 text-slate-400" />
            <p className="mt-3 text-sm font-medium text-slate-900 dark:text-white">
              No submission yet
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Drag and drop your file or click to browse
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Accepted formats: {assignment.allowedFileTypes.join(", ")} • Max
              size: {assignment.maxFileSize}
            </p>
            <button className="mt-4 rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition-colors">
              Choose File
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
