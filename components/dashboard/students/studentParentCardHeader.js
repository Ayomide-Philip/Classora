import { User, UserCheck, UserX } from "lucide-react";
export default function StudentProfileCardHeader({ student }) {
  return (
    <div className="bg-linear-to-r from-sky-500 to-blue-600 px-6 py-8 sm:px-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <User className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {student.name}
            </h1>
            <p className="text-sky-100 mt-1">@{student.username}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all active:scale-[0.98]"
          >
            <UserCheck className="h-4 w-4" />
            Make Admin
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all active:scale-[0.98]"
          >
            <UserX className="h-4 w-4" />
            Remove Admin
          </button>
        </div>
      </div>
    </div>
  );
}
