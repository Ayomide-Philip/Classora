import {
  Users,
  Search,
  Mail,
  ChevronRight,
  Shield,
  Crown,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

export default function StudentPageBody({ students }) {
  return (
    <>
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Search students..."
            className="w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students?.map((student, idx) => {
          const roleConfig = {
            owner: {
              label: "Owner",
              icon: Crown,
              bg: "bg-amber-100 dark:bg-amber-900/30",
              text: "text-amber-700 dark:text-amber-400",
              iconColor: "text-amber-600 dark:text-amber-400",
            },
            admin: {
              label: "Admin",
              icon: Shield,
              bg: "bg-amber-100 dark:bg-amber-900/30",
              text: "text-amber-700 dark:text-amber-400",
              iconColor: "text-amber-600 dark:text-amber-400",
            },
            member: {
              label: "Student",
              icon: GraduationCap,
              bg: "bg-sky-100 dark:bg-sky-900/30",
              text: "text-sky-700 dark:text-sky-400",
              iconColor: "text-sky-600 dark:text-sky-400",
            },
          };

          const userRole = roleConfig[student?.board?.role];
          const RoleIcon = userRole.icon;

          return (
            <Link
              key={idx}
              href={`/students/${student?._id}`}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-400 to-sky-600 text-base font-bold text-white shadow-md">
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white truncate">
                      {student.name}
                    </h3>
                    <ChevronRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 dark:text-slate-500" />
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <Mail className="h-3.5 w-3.5" />
                    <span className="truncate">{student.email}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                <div
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 ${userRole?.bg}`}
                >
                  <RoleIcon className={`h-3.5 w-3.5 ${userRole?.iconColor}`} />
                  <span className={`text-xs font-semibold ${userRole?.text}`}>
                    {userRole?.label}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Joined Board
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {new Date(student?.createdAt).toLocaleString("us-EN", {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
