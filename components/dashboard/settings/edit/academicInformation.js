import { ArrowLeft, Book, Award, Clock, Calendar, Shield } from "lucide-react";

export default function EditAcademicInformation() {
  const fields = [
    {
      label: "Department",
      name: "department",
      value: "Computer Science",
      icon: Book,
      placeholder: "Enter your department",
    },
    {
      label: "Faculty",
      name: "faculty",
      value: "Faculty of Science",
      icon: Award,
      placeholder: "Enter your faculty",
    },
    {
      label: "Degree",
      name: "degree",
      value: "Bachelor of Science",
      icon: Award,
      placeholder: "Enter your degree",
    },
    {
      label: "Current Level",
      name: "currentLevel",
      value: "300",
      icon: Clock,
      placeholder: "Enter your current level",
    },
    {
      label: "Enrollment Year",
      name: "enrollmentYear",
      value: "2021",
      icon: Calendar,
      placeholder: "Enter enrollment year",
    },
    {
      label: "Board Role",
      name: "boardRole",
      value: "Owner",
      icon: Shield,
      placeholder: "Select your board role",
      isSelect: true,
      options: ["Owner", "Member", "Student"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition">
            <ArrowLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Edit Academic Information
          </h1>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8">
          <form className="space-y-6">
            {/* Fields Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {fields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                      <Icon className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                      {field.label}
                    </label>
                    {field.isSelect ? (
                      <select className="px-4 py-2.5 rounded-lg border border-slate-300 bg-white dark:bg-slate-800 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400">
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        defaultValue={field.value}
                        className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Info Message */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                💡 Update your academic information to keep your profile current and accurate.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
              <button
                type="button"
                className="w-full px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
