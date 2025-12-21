"use client";
import { Edit, Mail, Phone, UsersIcon, Hash } from "lucide-react";
import EditPersonalInformation from "./edit/personalInformation";
import { useState } from "react";
export default function SettingsPersonalInformation({ user }) {
  const [editing, setEditing] = useState(false);
  return (
    <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {editing ? (
        <EditPersonalInformation user={user} setEditing={setEditing} />
      ) : (
        <PersonalInformation user={user} setEditing={setEditing} />
      )}
    </section>
  );
}

export function PersonalInformation({ user, setEditing }) {
  return (
    <>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Personal Information
        </h3>
        <button
          onClick={() => setEditing(true)}
          className="w-full sm:w-auto rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 flex items-center justify-center sm:justify-start gap-1"
        >
          <Edit className="h-3.5 w-3.5" /> Edit
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { label: "Email", value: user?.email, icon: Mail },
          {
            label: "Phone",
            value: user?.profileId?.phoneNumber || "Not set",
            icon: Phone,
          },
          {
            label: "Gender",
            value: user?.profileId?.gender,
            icon: UsersIcon,
          },
          { label: "Student ID", value: user?._id, icon: Hash },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg"
            >
              <Icon className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="text-slate-900 dark:text-white mt-1 wrap-break-word">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
