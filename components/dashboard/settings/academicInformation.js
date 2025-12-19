import {
  Shield,
  Edit,
  Book,
  Award,
  Calendar,
  Clock,
  Users as UsersIcon,
} from "lucide-react";
export default function SettingsAcademicInformation({ user }) {
  return (
    <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Academic Information
        </h3>
        <button className="w-full sm:w-auto rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 flex items-center justify-center sm:justify-start gap-1">
          <Edit className="h-3.5 w-3.5" /> Edit
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            label: "Department",
            value: user?.profileId?.department || "nill",
            icon: Book,
          },
          {
            label: "Faculty",
            value: user?.profileId?.faculty || "nill",
            icon: Award,
          },
          {
            label: "Degree",
            value: user?.profileId?.degree || "nill",
            icon: Award,
          },
          {
            label: "Current Level",
            value: user?.profileId?.currentLevel || "nill",
            icon: Clock,
          },
          {
            label: "Enrollment Year",
            value: user?.profileId?.enrollmentYear || "nill",
            icon: Calendar,
          },
          { label: "Board Role", value: user?.board?.role, icon: Shield },
        ].map((item, idx) => {
          const Icon = item.icon;
          const isRole = item.label === "Board Role";
          return (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg"
            >
              <Icon className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                {isRole ? (
                  <span
                    className={`mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                      user.board.role === "owner"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200"
                    }`}
                  >
                    {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
                  </span>
                ) : (
                  <p className="text-slate-900 dark:text-white mt-1 capitalize">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
