"use client";
import { UserCheck, UserX } from "lucide-react";
import { toast } from "react-toastify";
export default function StudentRole({ student, boardId, role }) {
  // making a user an admin
  async function handleMakeAdmin() {
    try {
      const request = await fetch(
        `/api/boards/${boardId}/students/${student?._id}/admin`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const response = await request.json();
      console.log(response);

      if (response?.error || !request?.ok) {
        return toast.error(response?.error || "An error occurred.");
      }
      toast.success(response?.message);
      window.location.reload();
    } catch (err) {
      return toast.error("Something went wrong");
    }
  }
  // removing the user from admin
  async function handleRemoveAdmin() {}
  return (
    <>
      {student?.board?.role !== "owner" && role === "owner" && (
        <div className="flex flex-col sm:flex-row gap-2">
          {student?.board?.role === "member" && (
            <button
              type="button"
              onClick={handleMakeAdmin}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all active:scale-[0.98] cursor-pointer"
            >
              <UserCheck className="h-4 w-4" />
              Make Admin
            </button>
          )}

          {student?.board?.role === "admin" && (
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all active:scale-[0.98]"
            >
              <UserX className="h-4 w-4" />
              Remove Admin
            </button>
          )}
        </div>
      )}
    </>
  );
}
