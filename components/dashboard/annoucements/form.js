"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { getUserInfomation } from "@/components/dashboard/userdetails";

export default function AnnoucementForm() {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // validating each input
    if (!title || !title.trim()) {
      return toast.error("Annoucement title is required");
    }
    if (title.trim().length < 5) {
      return toast.error("Annoucement title should be at least 5 characters");
    }
    if (!tag || !tag.trim()) {
      return toast.error("Annoucement tag is required");
    }
    if (tag.trim().length < 3) {
      return toast.error("Annoucement tag should be at least 3 characters");
    }
    if (!description || !description.trim()) {
      return toast.error("Annoucement description is required");
    }
    if (description.trim().length < 5) {
      return toast.error(
        "Annoucement description should be at least 5 characters"
      );
    }
    // get the board id
    const { boardId } = await getUserInfomation();
    if (!boardId) {
      return toast.error("Invalid parameter");
    }
    // send it to the database
    const request = await fetch(`/api/boards/${boardId}/announcements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });
    const response = await request.json();
    if (!request.ok || response?.error) {
      return toast.error(response?.error);
    }

    window.location.href = "/announcements";
  }
  return (
    <form
      className="space-y-6 rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          placeholder="e.g. Homework: Chapter 3"
          className="mt-2 w-full rounded-md border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div>
        <label
          htmlFor="tag"
          className="block text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          Tag
        </label>
        <input
          id="tag"
          name="tag"
          list="tags-list"
          placeholder="Choose or type a tag (e.g. Homework)"
          className="mt-2 w-full rounded-md border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100"
          onChange={(e) => {
            setTag(e.target.value);
          }}
        />
        <datalist id="tags-list">
          <option value="General" />
          <option value="Homework" />
          <option value="Exam" />
          <option value="Update" />
        </datalist>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          You can type a custom tag or pick from the suggestions above.
        </p>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          placeholder="Write the announcement here"
          className="mt-2 w-full rounded-md border border-slate-200 bg-white/50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 resize-none"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <button
            type="submit"
            className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
          >
            Save announcement
          </button>
          <Link
            href="/announcements"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            Cancel
          </Link>
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400">
          Tip: Use clear titles for faster scanning
        </div>
      </div>
    </form>
  );
}
