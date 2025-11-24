"use client";
import {
  FiMenu,
  FiX,
  FiCalendar,
  FiGrid,
  FiLayers,
  FiMail,
  FiPieChart,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { useState } from "react";

const sidebarLinks = [
  { icon: FiGrid, label: "Overview", active: true },
  { icon: FiLayers, label: "Courses" },
  { icon: FiUsers, label: "Students" },
  { icon: FiMail, label: "Messages" },
  { icon: FiCalendar, label: "Calendar" },
  { icon: FiPieChart, label: "Analytics" },
  { icon: FiSettings, label: "Settings" },
];

export default function MobileNavigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between border border-slate-200 bg-white px-4 py-3 shadow-md dark:border-slate-800 dark:bg-slate-900/80 lg:hidden">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-cyan-400 text-base font-semibold text-white dark:text-slate-900">
          CB
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Classora
          </p>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Board
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
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-cyan-400 text-base font-semibold text-white dark:text-slate-900">
                  CB
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Classora
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Board
                  </p>
                </div>
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
    </div>
  );
}
