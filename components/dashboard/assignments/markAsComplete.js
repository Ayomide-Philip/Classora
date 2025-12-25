"use client";
import { CheckCircle2, Circle } from "lucide-react";
import { toast } from "react-toastify";
export default function MarkAsCompleted({
  studentsSubmitted,
  userId,
  boardId,
  courseId,
}) {
  async function handleSubmitAssignments() {
    const request = await fetch(
      `/api/boards/${boardId}/assignments/${courseId}/markasdone`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const response = await request.json();
    if (!request.ok || response?.error) {
      return toast.error(response?.error);
    }
    toast.success(response?.message);
    window.location.reload();
  }

  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Mark as Complete
      </h2>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
        Click the button below once you have completed and submitted this
        assignment.
      </p>
      <button
        className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors cursor-pointer ${
          studentsSubmitted.includes(userId)
            ? "border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800"
            : "bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
        }`}
        disabled={studentsSubmitted.includes(userId)}
        onClick={handleSubmitAssignments}
      >
        {studentsSubmitted.includes(userId) ? (
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
        {studentsSubmitted.includes(userId)
          ? "You have marked this assignment as complete."
          : "Mark this assignment as done once you have submitted it."}
      </p>
    </div>
  );
}
