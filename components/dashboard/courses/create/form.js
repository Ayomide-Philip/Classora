"use client";
import CourseCode from "@/components/dashboard/courses/create/coursecode";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CourseCreateForm() {
  const [formData, setFormData] = useState({
    courseCode: "",
    courseTitle: "",
    courseCoordinator: "",
    courseUnit: "",
    semester: "",
    courseDescription: "",
    courseDepartment: "",
    prerequisites: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  function updateField(fieldName, value) {
    setFormData((prev) => {
      return { ...prev, [fieldName]: value };
    });
  }

  return (
    <form className="space-y-6">
      {/* Course Code & Title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Course Code
          </label>
          <input
            type="text"
            placeholder="e.g., PHY101"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
            onChange={(e) => {
              updateField("courseCode", e.target.value);
            }}
          />
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Unique identifier for the course
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Course Title
          </label>
          <input
            type="text"
            placeholder="e.g., Physics 101"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
            onChange={(e) => {
              updateField("courseTitle", e.target.value);
            }}
          />
        </div>
      </div>

      {/* Instructor & Credits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Coordinator Name
          </label>
          <input
            type="text"
            placeholder="e.g., Dr. Mensah"
            onChange={(e) => {
              updateField("courseCoordinator", e.target.value);
            }}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Course Units
          </label>
          <input
            type="number"
            placeholder="e.g., 3"
            min="1"
            max="12"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
            onChange={(e) => {
              updateField("courseUnit", e.target.value);
            }}
          />
        </div>
      </div>

      {/* Instructor departement & Semester */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Coordinator Departement
          </label>
          <input
            type="text"
            placeholder="e.g., departement of math"
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
            onChange={(e) => {
              updateField("courseDepartment", e.target.value);
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Semester
          </label>
          <select
            onChange={(e) => {
              updateField("semester", e.target.value);
            }}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          >
            <option value={""}>Select semester</option>
            <option value={"rain"}>Rain</option>
            <option value={"harmattan"}>Harmattan</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
          Course Description
        </label>
        <textarea
          rows="5"
          placeholder="Provide a brief description of the course, learning objectives, and any prerequisites..."
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition resize-none"
          onChange={(e) => {
            updateField("courseDescription", e.target.value);
          }}
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
            onChange={(e) => {
              updateField("prerequisites", e.target.value);
            }}
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
  );
}
