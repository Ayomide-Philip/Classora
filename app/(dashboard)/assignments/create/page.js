"use client";
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Link as LinkIcon,
  Send,
  X,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [formData, setFormData] = useState({
    courseId: "",
    title: "",
    description: "",
    dueDate: "",
    submitMode: "unknown",
    googleFormUrl: "",
  });

  function updateField(fieldName, value) {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Form submission logic will go here
    console.log("Form data:", formData);
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Back Link */}
        <Link
          href="/assignments"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Assignments
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Create New Assignment
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Fill in the details below to create a new assignment for your
            students
          </p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Course Selection */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30">
                <BookOpen className="h-4 w-4 text-sky-600 dark:text-sky-400" />
              </div>
              <label className="text-sm font-semibold text-slate-900 dark:text-white">
                Select Course <span className="text-red-500">*</span>
              </label>
            </div>
            <select
              value={formData.courseId}
              onChange={(e) => updateField("courseId", e.target.value)}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3.5 pr-10 text-base text-slate-900 shadow-sm hover:shadow-md hover:border-sky-300 focus:border-sky-500 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-sky-600 dark:focus:border-sky-500 dark:focus:ring-sky-500/20 transition-all duration-200 cursor-pointer"
            >
              <option value="">Choose a course</option>
              <option value="course1">
                Introduction to Programming (CS101)
              </option>
              <option value="course2">Data Structures (CS201)</option>
              <option value="course3">Web Development (CS301)</option>
            </select>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Select the course this assignment belongs to
            </p>
          </div>

          {/* Assignment Details */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-5">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
              >
                Assignment Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                placeholder="e.g., Homework: Chapter 3 - Data Types and Variables"
                value={formData.title}
                onChange={(e) => updateField("title", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
              />
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Minimum 5 characters required
              </p>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                rows={6}
                placeholder="Describe the assignment requirements, objectives, and any special instructions..."
                value={formData.description}
                onChange={(e) => updateField("description", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 resize-none focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
              />
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Minimum 10 characters required
              </p>
            </div>

            {/* Due Date */}
            <div>
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Due Date
                </div>
              </label>
              <input
                id="dueDate"
                type="datetime-local"
                value={formData.dueDate}
                onChange={(e) => updateField("dueDate", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
              />
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Optional - Leave empty for no due date
              </p>
            </div>
          </div>

          {/* Submission Mode */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">
                Submission Method <span className="text-red-500">*</span>
              </label>

              {/* Radio Options */}
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="submitMode"
                    value="unknown"
                    checked={formData.submitMode === "unknown"}
                    onChange={(e) => updateField("submitMode", e.target.value)}
                    className="mt-0.5 h-4 w-4 border-slate-300 text-sky-600 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-600 dark:bg-slate-800"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">
                      Unknown / Not Specified
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      No specific submission method required
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="submitMode"
                    value="directSubmission"
                    checked={formData.submitMode === "directSubmission"}
                    onChange={(e) => updateField("submitMode", e.target.value)}
                    className="mt-0.5 h-4 w-4 border-slate-300 text-sky-600 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-600 dark:bg-slate-800"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">
                      Direct Submission
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Students submit directly through the platform
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="submitMode"
                    value="googleForm"
                    checked={formData.submitMode === "googleForm"}
                    onChange={(e) => updateField("submitMode", e.target.value)}
                    className="mt-0.5 h-4 w-4 border-slate-300 text-sky-600 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-600 dark:bg-slate-800"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">
                      Google Form
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Students submit via Google Forms link
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Google Form URL - Conditional */}
            {formData.submitMode === "googleForm" && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                <label
                  htmlFor="googleFormUrl"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2"
                >
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4" />
                    Google Form URL <span className="text-red-500">*</span>
                  </div>
                </label>
                <input
                  id="googleFormUrl"
                  type="url"
                  placeholder="https://forms.google.com/..."
                  value={formData.googleFormUrl}
                  onChange={(e) => updateField("googleFormUrl", e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
                />
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Enter the complete Google Form URL
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                type="submit"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-sky-500 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Send className="h-4 w-4" />
                Create Assignment
              </button>
              <Link
                href="/assignments"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 active:scale-95 transition-all duration-200 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
                Cancel
              </Link>
            </div>

            <div className="hidden lg:block text-sm text-slate-500 dark:text-slate-400">
              <span className="text-red-500">*</span> Required fields
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
