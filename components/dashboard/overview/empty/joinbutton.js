"use client";

import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
export default function JoinButton({ boardCode }) {
  const [loading, setLoading] = useState(false);
  async function handleJoin() {
    setLoading(true);
    const joinBoard = await fetch(`/api/boards/join/${boardCode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const response = await joinBoard.json();
    if (!joinBoard.ok && response.error) {
      toast.error(response.error);
      setLoading(false);
      return;
    }
    toast.success(response.message || "Successfully joined the board");
    setLoading(false);
    window.location.href = "/overview";
  }
  return (
    <button
      onClick={handleJoin}
      disabled={loading}
      className="w-full cursor-pointer rounded-full bg-linear-to-r from-sky-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
    >
      {loading ? (
        <div className="flex justify-center items-center gap-2">
          <LoaderIcon className="animate-spin" />
          <span>Joining...</span>
        </div>
      ) : (
        "Join this board"
      )}
    </button>
  );
}
