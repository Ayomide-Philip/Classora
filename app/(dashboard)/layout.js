import { auth } from "@/auth";
import DesktopSidebar from "@/components/dashboard/desktopsidebar";
import MobileNavigation from "@/components/dashboard/mobilenavigation";
import Toggle from "@/components/toggle";
import { redirect } from "next/navigation";
import { FiSearch, FiBell } from "react-icons/fi";
import { cookies } from "next/headers";
import { BASE_URL } from "@/libs/config";
export default async function Layout({ children }) {
  const session = await auth();
  if (!session || !session?.user) return redirect("/login");

  const userRequest = await fetch(`${BASE_URL}/api/users`, {
    method: "GET",
    headers: {
      Cookie: (await cookies()).toString(),
      "Content-Type": "application/json",
    },
  });
  const { user } = await userRequest.json();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:bg-[radial-gradient(circle_at_top,#13294b,#050912_75%)] dark:text-slate-100">
      <div className="flex flex-col lg:flex-row">
        <DesktopSidebar />
        <MobileNavigation user={user} />

        <section className="flex flex-col space-y-6 w-full">
          <header className="hidden lg:block border border-slate-200 bg-white px-6 py-5 shadow-xl dark:border-slate-800/70 dark:bg-slate-900/75 dark:shadow-2xl dark:shadow-slate-950/40">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Classora Board
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Welcome Back
                </p>
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
                <div className="hidden md:flex gap-2 justify-center items-center">
                  <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200">
                    <FiBell />
                  </button>

                  <Toggle
                    buttondesign={` flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200`}
                  />

                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900/60">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-cyan-400 text-sm font-semibold text-white dark:text-slate-900">
                      {session.user.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {user?.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {user?.board?.role || "No Board Yet"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {children}
        </section>
      </div>
    </div>
  );
}
