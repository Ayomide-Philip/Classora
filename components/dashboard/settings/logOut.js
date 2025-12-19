"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
export default function SettingsLogOut() {
  return (
    <section className="mb-8">
      <button
        type="button"
        onClick={() => {
          signOut();
        }}
        className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 transition border border-red-200 dark:border-red-800"
      >
        <LogOut className="h-5 w-5" />
        Sign Out
      </button>
    </section>
  );
}
