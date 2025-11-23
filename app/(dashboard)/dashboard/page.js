"use client";

import { useState } from "react";
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiPieChart,
  FiSettings,
  FiUsers,
  FiTrendingUp,
  FiSearch,
  FiBell,
  FiMenu,
  FiX,
} from "react-icons/fi";

const sidebarLinks = [
  { icon: FiGrid, label: "Dashboard", active: true },
  { icon: FiLayers, label: "Courses" },
  { icon: FiUsers, label: "Students" },
  { icon: FiMail, label: "Messages" },
  { icon: FiCalendar, label: "Calendar" },
  { icon: FiPieChart, label: "Analytics" },
  { icon: FiSettings, label: "Settings" },
];

const stats = [
  {
    label: "Total Classes",
    value: "12",
    delta: "+2 this week",
    color: "from-emerald-400 to-cyan-400",
  },
  {
    label: "Active Students",
    value: "482",
    delta: "+38 new",
    color: "from-sky-400 to-indigo-500",
  },
  {
    label: "Assignments Due",
    value: "18",
    delta: "5 due today",
    color: "from-amber-400 to-orange-500",
  },
];

const courses = [
  {
    title: "Physics 101",
    nextEvent: "Quiz • Fri 10:00 AM",
    badge: "Lab",
    color: "bg-emerald-500/20 text-emerald-200",
  },
  {
    title: "Advanced Algebra",
    nextEvent: "Homework 7 due",
    badge: "Assignments",
    color: "bg-sky-500/20 text-sky-200",
  },
  {
    title: "World History",
    nextEvent: "Parent note posted",
    badge: "Updates",
    color: "bg-purple-500/20 text-purple-200",
  },
];

const activityFeed = [
  { time: "2h ago", text: "Alice submitted Physics Lab 4" },
  { time: "4h ago", text: "New announcement in Algebra" },
  { time: "Yesterday", text: "Gradebook updated for History" },
  { time: "Yesterday", text: "Scheduled parent-teacher conference" },
];

const assignments = [
  { course: "Physics", due: "Fri, 10:00" },
  { course: "Algebra", due: "Fri, 14:00" },
  { course: "Design", due: "Mon, 09:00" },
];

export default function Page() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:bg-[radial-gradient(circle_at_top,#13294b,#050912_75%)] dark:text-slate-100">
      <div className="flex flex-col lg:flex-row">
        {/* desktop sidebar */}
        <aside
          className={`hidden lg:flex pt-3 border border-slate-200 bg-white text-slate-900 shadow-xl transition-[width] duration-300 dark:border-slate-800/80 dark:bg-slate-900/80 dark:text-slate-100 dark:backdrop-blur ${
            collapsed ? "w-[100px]" : "w-[260px]"
          }`}
        >
          <div className="flex w-full flex-col px-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-cyan-400 text-xl font-bold text-white dark:text-slate-950">
                  CB
                </div>
                {!collapsed && (
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Classora
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Faculty Portal
                    </p>
                  </div>
                )}
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-200"
                onClick={() => setCollapsed((prev) => !prev)}
                aria-label="Collapse sidebar"
              >
                {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
              </button>
            </div>

            <nav className="mt-10 flex-1 space-y-2 ">
              {sidebarLinks.map(({ icon: Icon, label, active }) => (
                <button
                  key={label}
                  className={`group flex w-full items-center ${
                    collapsed ? "justify-center" : "justify-start"
                  } gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-slate-900/5 text-slate-900 dark:bg-linear-to-br from-slate-100/95 to-emerald-200/90 dark:text-slate-900"
                      : "text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon
                    className={`text-base  ${
                      active
                        ? "text-slate-900"
                        : "text-slate-500 dark:text-slate-300"
                    }`}
                  />
                  {!collapsed && <span>{label}</span>}
                </button>
              ))}
            </nav>

            <div className="mt-6 rounded-2xl border border-slate-200 px-4 py-5 text-sm text-slate-500 dark:border-white/10 dark:text-slate-300">
              {!collapsed ? (
                <div>
                  <p className="text-xs uppercase text-slate-400 dark:text-slate-500">
                    Support
                  </p>
                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                    Need help?
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Reach out to the Classora team anytime.
                  </p>
                </div>
              ) : (
                <p className="text-xs text-center text-slate-500 dark:text-slate-300">
                  Help
                </p>
              )}
            </div>
          </div>
        </aside>

        <section className="flex flex-col space-y-6 w-full">
          <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-md dark:border-slate-800 dark:bg-slate-900/80 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-cyan-400 text-base font-semibold text-white dark:text-slate-900">
                CB
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Classora
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Faculty Portal
                </p>
              </div>
            </div>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-200"
              aria-label="Open navigation menu"
              onClick={() => setMobileNavOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
          {mobileNavOpen && (
            <div
              className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute inset-0 w-full h-full cursor-default"
                aria-label="Close navigation menu"
                onClick={() => setMobileNavOpen(false)}
              />
              <div className="absolute right-0 top-0 h-full w-72 bg-white text-slate-900 shadow-2xl dark:bg-slate-900 dark:text-slate-100">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Navigation
                    </p>
                    <p className="text-sm font-semibold">Quick links</p>
                  </div>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-200"
                    onClick={() => setMobileNavOpen(false)}
                    aria-label="Close navigation"
                  >
                    <FiX />
                  </button>
                </div>
                <nav className="px-4 py-4 space-y-2">
                  {sidebarLinks.map(({ icon: Icon, label, active }) => (
                    <button
                      key={label}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                          : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                      }`}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      <Icon />
                      <span>{label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}
          <header className="border border-slate-200 bg-white px-6 py-5 shadow-xl dark:border-slate-800/70 dark:bg-slate-900/75 dark:shadow-2xl dark:shadow-slate-950/40">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Hey Eleanor 👋
                </p>
                <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Classora Dashboard
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search courses, students..."
                    className="w-60 rounded-full border border-slate-300 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-500"
                  />
                </div>
                <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200">
                  <FiBell />
                </button>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900/60">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-cyan-400 text-sm font-semibold text-white dark:text-slate-900">
                    E
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Eleanor Pena
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Lead teacher
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((card) => (
              <div
                key={card.label}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br ${card.color} text-slate-900`}
                >
                  <FiTrendingUp />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {card.label}
                </p>
                <div className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  {card.value}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {card.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  On-going courses
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Stay updated with upcoming events
                </p>
              </div>
              <button className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-200">
                View all
              </button>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/40"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {course.title}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${course.color}`}
                    >
                      {course.badge}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    {course.nextEvent}
                  </p>
                  <div className="mt-6 h-1 rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full w-2/3 rounded-full bg-linear-to-br from-emerald-400 to-cyan-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Activity
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Recent events
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {activityFeed.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-linear-to-br from-emerald-400 to-cyan-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {item.text}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {item.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Upcoming deadlines
                </h3>
                <button className="text-xs text-slate-500 dark:text-slate-400">
                  See calendar
                </button>
              </div>
              <div className="mt-6 space-y-3">
                {assignments.map((item) => (
                  <div
                    key={item.course}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-800 dark:bg-slate-950/40"
                  >
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        {item.course}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Due {item.due}
                      </p>
                    </div>
                    <button className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200">
                      Review
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Performance overview
              </h3>
              <div className="flex gap-2 text-xs text-slate-500 dark:text-slate-400">
                <button className="rounded-full border border-slate-300 px-3 py-1 dark:border-slate-700">
                  Weekly
                </button>
                <button className="rounded-full border border-slate-300 px-3 py-1 dark:border-slate-700">
                  Monthly
                </button>
              </div>
            </div>
            <div className="mt-6 h-48 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/30">
              <div className="flex h-full items-center justify-center text-slate-500 dark:text-slate-500">
                <p className="text-sm">Add your chart component here</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
