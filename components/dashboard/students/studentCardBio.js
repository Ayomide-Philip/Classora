import { FileText } from "lucide-react";

export default function StudentCardBio({ student }) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
        About
      </h2>
      {student.bio ? (
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {student.bio}
        </p>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 px-6 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600">
          <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-3">
            <FileText className="h-6 w-6 text-slate-400 dark:text-slate-500" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            No bio added yet
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">
            This student hasn&apos;t added a bio to their profile
          </p>
        </div>
      )}
    </div>
  );
}
