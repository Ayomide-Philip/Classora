import { Mail, Phone, UsersIcon, Hash } from "lucide-react";
export default function StudentCardPersonalInfo({ student }) {
  const { email, profileId, _id } = student;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <Mail className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Email Address
            </p>
            <p className="text-slate-900 dark:text-white mt-1 wrap-break-word">
              {email}
            </p>
          </div>
        </div>

        {profileId.phoneNumber && (
          <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <Phone className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Phone Number
              </p>
              <p className="text-slate-900 dark:text-white mt-1">
                {profileId.phoneNumber}
              </p>
            </div>
          </div>
        )}

        {profileId.gender && (
          <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <UsersIcon className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Gender
              </p>
              <p className="text-slate-900 dark:text-white mt-1">
                {profileId?.gender}
              </p>
            </div>
          </div>
        )}

        {student._id && (
          <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <Hash className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Student ID
              </p>
              <p className="text-slate-900 dark:text-white mt-1 wrap-break-word text-sm">
                {_id}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
