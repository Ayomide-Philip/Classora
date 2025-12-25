import { Trash2 } from "lucide-react";
export default function DeleteAssignments() {
  return (
    <button
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:bg-red-50 hover:text-red-600 active:scale-95 transition-all dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-red-900/30 dark:hover:bg-red-950/20 dark:hover:text-red-400"
      title="Delete assignment"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
}
