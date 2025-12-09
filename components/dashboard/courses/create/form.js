"use client";
import CourseCode from "@/components/dashboard/courses/create/coursecode";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUserInfomation } from "@/components/dashboard/userdetails";

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

  function updateField(fieldName, value) {
    setFormData((prev) => {
      return { ...prev, [fieldName]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const {
      courseCode,
      courseCoordinator,
      courseDepartment,
      courseDescription,
      courseTitle,
      courseUnit,
      prerequisites,
      semester,
    } = formData;
    //validating course code
    if (!courseCode || !courseCode.trim()) {
      return toast.error("Please enter a valid course code");
    }
    if (courseCode.trim().length < 3) {
      return toast.error("Course code cannot be less than 3 characters");
    }

    // validating course title
    if (!courseTitle || !courseTitle.trim()) {
      return toast.error("Please enter a valid course title");
    }
    if (courseTitle.trim().length < 3) {
      return toast.error("Course title cannot be less than 3 characters");
    }

    // validating coordinator name
    if (!courseCoordinator || !courseCoordinator.trim()) {
      return toast.error("Please enter a valid course coordinator name");
    }
    if (courseCoordinator.trim().length < 3) {
      return toast.error(
        "Course coordinator name cannot be less than 3 characters"
      );
    }

    // validating course unit
    if (!courseUnit || !courseUnit.trim()) {
      return toast.error("Please enter a valid course unit.");
    }

    //validate course department
    if (courseDepartment && courseDepartment.trim().length < 3) {
      return toast.error("Course department cannot be less than 3 characters");
    }

    // validating semester
    if (!semester || !semester.trim()) {
      return toast.error("Please enter a valid semester");
    }
    if (semester.trim() === "") {
      return toast.error("Select a valid semester");
    }
    if (semester.trim() !== "rain" && semester.trim() !== "harmattan") {
      return toast.error("Please enter a valid semester");
    }

    //validating course description
    if (!courseDescription || !courseDescription.trim()) {
      return toast.error("Please enter a valid course description");
    }

    if (courseDescription.trim().length < 3) {
      return toast.error("Course description cannot be less than 3 characters");
    }

    // prerequisites
    if (prerequisites && prerequisites.trim().length < 3) {
      return toast.error(
        "Course prerequisites cannot be less than 3 characters"
      );
    }

    console.log(
      courseCode,
      courseCoordinator,
      courseDepartment,
      courseDescription,
      courseTitle,
      courseUnit,
      prerequisites,
      semester
    );

    // adding it to the database
    try {
      const { boardId } = await getUserInfomation();
      const request = await fetch(`/api/boards/${boardId}/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          courseTitle,
          courseCode,
          courseDescription,
          courseCoordinator,
          courseDepartment,
          courseUnit,
          semester,
          prerequisites,
        }),
      });
      const response = await request.json();
      if (!request.ok || response?.error) {
        return toast.error(response.error);
      }
      toast.success(response?.message);
      window.location.href = "/courses";
    } catch (err) {
      return toast.error("Network Error");
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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

      {/* Instructor department & Semester */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Coordinator Department
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
          className="cursor-pointer flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-sky-700 transition-colors active:scale-[0.98]"
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
