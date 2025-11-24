"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  FiCalendar,
  FiGrid,
  FiLayers,
  FiMail,
  FiPieChart,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

const sidebarLinks = [
  { icon: FiGrid, label: "Overview", active: true },
  { icon: FiLayers, label: "Courses" },
  { icon: FiUsers, label: "Students" },
  { icon: FiMail, label: "Messages" },
  { icon: FiCalendar, label: "Calendar" },
  { icon: FiPieChart, label: "Analytics" },
  { icon: FiSettings, label: "Settings" },
];

export default function DesktopSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`hidden lg:flex pt-3 border border-slate-200 bg-white text-slate-900 shadow-xl transition-[width] duration-300 dark:border-slate-800/80 dark:bg-slate-900/80 dark:text-slate-100 dark:backdrop-blur ${
        collapsed ? "w-[90px]" : "w-[300px]"
      }`}
    >
      <div className="flex w-full flex-col px-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-cyan-400 text-xl font-bold text-white dark:text-slate-950">
              CB
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Classora
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Board
                </p>
              </div>
            )}
          </div>
          <button
            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-200"
            onClick={() => setCollapsed((prev) => !prev)}
            aria-label="Collapse sidebar"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>

        <nav className="mt-10 flex-1 space-y-2 ">
          {sidebarLinks.map(({ icon: Icon, label, active }) => (
            <Link
              key={label}
              className={`group flex w-full items-center cursor-pointer ${
                collapsed ? "justify-center" : "justify-start"
              } gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-slate-900/5 text-slate-900 dark:bg-linear-to-br from-slate-100/95 to-emerald-200/90 dark:text-slate-900"
                  : "text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
              }`}
              href="#"
            >
              <Icon
                className={`text-base  ${
                  active
                    ? "text-slate-900"
                    : "text-slate-500 dark:text-slate-300"
                }`}
              />
              {!collapsed && <span>{label}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
