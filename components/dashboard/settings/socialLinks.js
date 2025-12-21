import { Edit, Instagram, Twitter, Github, Linkedin } from "lucide-react";
export default function SettingsSocialLinks({ user }) {
  return (
    <section className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <SocialLinks user={user} />
    </section>
  );
}

export function SocialLinks({ user }) {
  return (
    <>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Social Links
        </h3>
        <button className="w-full sm:w-auto rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 flex items-center justify-center sm:justify-start gap-1">
          <Edit className="h-3.5 w-3.5" /> Edit
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            label: "Instagram",
            value: user?.profileId?.socialHandles?.instagram,
            icon: Instagram,
            color: "text-pink-500",
          },
          {
            label: "Twitter",
            value: user?.profileId?.socialHandles?.twitter,
            icon: Twitter,
            color: "text-blue-400",
          },
          {
            label: "GitHub",
            value: user?.profileId?.socialHandles?.github,
            icon: Github,
            color: "text-slate-700 dark:text-slate-300",
          },
          {
            label: "LinkedIn",
            value: user?.profileId?.socialHandles?.linkedin,
            icon: Linkedin,
            color: "text-blue-600",
          },
        ].map((item, idx) => {
          const Icon = item.icon;
          const hasValue = Boolean(item.value);
          return (
            <div
              key={idx}
              className={`flex items-start gap-3 p-4 rounded-lg border ${
                hasValue
                  ? "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                  : "bg-slate-50/60 dark:bg-slate-800/30 border-dashed border-slate-200 dark:border-slate-700"
              }`}
            >
              <Icon className={`h-5 w-5 ${item.color} mt-0.5`} />
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p
                  className={`mt-1 text-slate-900 dark:text-white ${
                    hasValue ? "" : "text-slate-400 dark:text-slate-500"
                  }`}
                >
                  {hasValue ? item.value : "Not added"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
