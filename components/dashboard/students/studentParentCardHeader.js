import { User } from "lucide-react";
import StudentRole from "./studentRole";
export default function StudentProfileCardHeader({ student, boardId, role }) {
  return (
    <div className="bg-linear-to-r from-sky-500 to-blue-600 px-4 py-6 sm:px-8 sm:py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
            <User className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-3xl font-bold text-white truncate">
              {student.name}
            </h1>
            <p className="text-sky-100 mt-1 text-sm sm:text-base truncate">
              @{student.username}
            </p>
          </div>
        </div>

        <div className="w-full sm:w-auto flex sm:justify-end">
          <StudentRole student={student} boardId={boardId} role={role} />
        </div>
      </div>
    </div>
  );
}
