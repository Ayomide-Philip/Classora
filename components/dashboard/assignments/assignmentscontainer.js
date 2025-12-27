"use client";
import AssignmentGrid from "@/components/dashboard/assignments/assignmentgrid";
import { ClipboardList } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function AssignmentsContainer({ assignments, role, boardId }) {
  const [assignment, setAssignment] = useState(assignments || []);
  useEffect(() => {
    const streamRequest = new EventSource(
      `/api/boards/${boardId}/assignments/stream`,
      {
        withCredentials: true,
      }
    );

    streamRequest.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        setAssignment(parsedData.assignments);
      } catch (err) {
        toast.error("Abnormal Network. Please refresh the page.");
      }
    };
    streamRequest.onerror = () => {
      toast.error("Connection lost. Please refresh the page.");
      streamRequest.close();
    };
    return () => {
      streamRequest.close();
    };
  }, [boardId]);
  return (
    <>
      {assignment && assignment.length > 0 ? (
        <AssignmentGrid assignments={assignment} />
      ) : (
        <div className="flex items-center justify-center py-16">
          <div className="text-center max-w-md">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-sky-50 to-sky-100 dark:from-sky-950/30 dark:to-sky-900/20">
              <ClipboardList className="h-10 w-10 text-sky-600 dark:text-sky-400" />
            </div>

            <h3 className="mt-6 capitalize text-xl font-semibold text-slate-900 dark:text-white">
              No assignments yet
            </h3>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Get started by creating your first assignment. Set due dates,
              track submissions, and keep your students organized.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              {role === "admin" || role === "owner" ? (
                <Link
                  href="/assignments/create"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-500 transition-colors shadow-sm"
                >
                  <ClipboardList className="h-4 w-4" />
                  Create Assignment
                </Link>
              ) : null}

              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
