"use client";
import { Star } from "lucide-react";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { useState } from "react";
export default function StarCourse({ course, id }) {
  const [stared, setStared] = useState(course?.stared?.length);
  console.log(id);
  async function starCourse() {
    const { boardId } = await getUserInfomation();
    const request = await fetch(`/api/boards/${boardId}/courses/${id}/stared`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const response = await request.json();
    if (response?.error || !request.ok) return toast.error(response?.error);
    console.log(response);

    setStared(response?.stared);

    // window.location.reload();
  }
  return (
    <div className="flex flex-col items-end gap-1">
      <button
        onClick={starCourse}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors group"
        title="Star this course"
      >
        <Star className="h-5 w-5 text-slate-400 group-hover:text-amber-500 dark:text-slate-500 dark:group-hover:text-amber-400 transition-colors" />
      </button>
      <span className="text-xs text-slate-500 dark:text-slate-400">
        {stared.length || 0} stars
      </span>
    </div>
  );
}
