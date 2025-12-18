import { User } from "lucide-react";
import StudentRole from "./studentRole";
export default function StudentProfileCardHeader({ student, boardId, role }) {
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

        <StudentRole student={student} boardId={boardId} role={role} />
      </div>
    </div>
  );
}
