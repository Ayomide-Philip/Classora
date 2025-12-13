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
const students = [
  {
    id: 1,
    name: "Amara Johnson",
    email: "amara.j@student.edu",
    phone: "+234 801 234 5678",
    enrollmentDate: "Sep 2024",
    avatar: "AJ",
    status: "active",
    courses: 6,
    role: "owner",
  },
  {
    id: 2,
    name: "Kwame Osei",
    email: "kwame.o@student.edu",
    phone: "+234 802 345 6789",
    enrollmentDate: "Sep 2024",
    avatar: "KO",
    status: "active",
    courses: 5,
    role: "admin",
  },
  {
    id: 3,
    name: "Fatima Hassan",
    email: "fatima.h@student.edu",
    phone: "+234 803 456 7890",
    enrollmentDate: "Sep 2024",
    avatar: "FH",
    status: "active",
    courses: 7,
    role: "student",
  },
  {
    id: 4,
    name: "Chidi Nwosu",
    email: "chidi.n@student.edu",
    phone: "+234 804 567 8901",
    enrollmentDate: "Sep 2024",
    avatar: "CN",
    status: "active",
    courses: 6,
    role: "student",
  },
  {
    id: 5,
    name: "Zainab Musa",
    email: "zainab.m@student.edu",
    phone: "+234 805 678 9012",
    enrollmentDate: "Sep 2024",
    avatar: "ZM",
    status: "active",
    courses: 5,
    role: "admin",
  },
  {
    id: 6,
    name: "Tunde Adeyemi",
    email: "tunde.a@student.edu",
    phone: "+234 806 789 0123",
    enrollmentDate: "Sep 2024",
    avatar: "TA",
    status: "active",
    courses: 6,
    role: "student",
  },
];
export default function StudentPageBody() {
  return (
    <>
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Search students..."
            className="w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20 transition"
          />
        </div>

        {/* Total Students */}
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2.5 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30">
            <Users className="h-5 w-5 text-sky-600 dark:text-sky-400" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Total Students
            </p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {students.length}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {students.map((student) => {
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
              bg: "bg-purple-100 dark:bg-purple-900/30",
              text: "text-purple-700 dark:text-purple-400",
              iconColor: "text-purple-600 dark:text-purple-400",
            },
            student: {
              label: "Student",
              icon: GraduationCap,
              bg: "bg-sky-100 dark:bg-sky-900/30",
              text: "text-sky-700 dark:text-sky-400",
              iconColor: "text-sky-600 dark:text-sky-400",
            },
          };

          const role = roleConfig[student.role];
          const RoleIcon = role.icon;

          return (
            <Link
              key={student.id}
              href={`/dashboard/students/${student.id}`}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
            >
              {/* Top Section */}
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-400 to-sky-600 text-base font-bold text-white shadow-md">
                  {student.avatar}
                </div>

                {/* Info */}
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

              {/* Bottom Section */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                {/* Role Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 ${role.bg}`}
                >
                  <RoleIcon className={`h-3.5 w-3.5 ${role.iconColor}`} />
                  <span className={`text-xs font-semibold ${role.text}`}>
                    {role.label}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Courses
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {student.courses}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Enrolled
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {student.enrollmentDate}
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
