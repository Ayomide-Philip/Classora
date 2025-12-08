import Link from "next/link";
import { Plus } from "lucide-react";
export default function CreateButton({ path }) {
  return (
    <Link
      href={path}
      className="fixed right-6 bottom-6 z-50 rounded-full bg-blue-600 p-4 text-white shadow-lg hover:bg-blue-700 cursor-pointer"
    >
      <Plus />
    </Link>
  );
}
