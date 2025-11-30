import { Users, MessageSquare, FileText, Lock, Globe } from "lucide-react";
import { cookies } from "next/headers";
import { BASE_URL } from "@/libs/config";
import JoinButton from "@/components/dashboard/overview/empty/joinbutton";
import CodeNotFound from "@/components/dashboard/overview/code/codeNotFound";
import CodeFound from "@/components/dashboard/overview/code/codeFound";

export default async function JoinBoardPage({ searchParams }) {
  const { code } = await searchParams;
  const boardRequest = await fetch(`${BASE_URL}/api/boards/join/${code}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });

  const data = await boardRequest.json();

  const { board } = data;
  const memberCount = board?.students.length;
  const seatsAvailable = board?.seatLimit
    ? board?.seatLimit - memberCount
    : null;

  return (
    <>
      {!board || !boardRequest.ok ? (
        <CodeNotFound code={code} />
      ) : (
        // <div className="flex min-h-screen items-center justify-center px-4 py-5">
        //   <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
        //     {/* Header */}
        //     <div className="relative flex flex-col items-center bg-linear-to-br from-gray-100 to-gray-50 px-6 pt-10 pb-6 dark:from-gray-800 dark:to-gray-900">
        //       <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg dark:border-gray-700 dark:bg-gray-700">
        //         {board?.school?.logo ? (
        //           <img
        //             src={board?.school?.logo}
        //             alt={board?.school?.name}
        //             width={64}
        //             height={64}
        //             className="h-16 w-16 object-contain"
        //           />
        //         ) : (
        //           <div className="flex h-full w-full items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-cyan-400 text-base font-semibold text-white dark:text-slate-900">
        //             <span className="text-3xl font-bold  ">
        //               {board.name.slice(0, 2).toUpperCase()}
        //             </span>
        //           </div>
        //         )}
        //       </div>

        //       {board?.school?.country?.length > 0 && (
        //         <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-500 shadow-sm dark:bg-gray-700 dark:text-gray-400">
        //           <Globe className="h-3 w-3" />
        //           {board?.school?.country}
        //         </span>
        //       )}

        //       <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
        //         {board.name}
        //       </h1>

        //       {board.tagline && (
        //         <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
        //           {board.tagline}
        //         </p>
        //       )}
        //     </div>

        //     {/* Board Info */}
        //     <div className="space-y-6 p-6">
        //       {/* Description */}
        //       <p className="text-center text-sm text-gray-600 dark:text-gray-300">
        //         {board.description}
        //       </p>

        //       {/* Stats */}
        //       <div className="grid grid-cols-3 gap-4">
        //         <div className="flex flex-col items-center rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
        //           <Users className="mb-1 h-5 w-5 text-sky-500" />
        //           <span className="text-lg font-bold text-gray-900 dark:text-white">
        //             {memberCount}
        //           </span>
        //           <span className="text-xs text-gray-500 dark:text-gray-400">
        //             Members
        //           </span>
        //         </div>

        //         <div className="flex flex-col items-center rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
        //           <MessageSquare className="mb-1 h-5 w-5 text-emerald-500" />
        //           <span className="text-lg font-bold text-gray-900 dark:text-white">
        //             {board.allowComments ? "On" : "Off"}
        //           </span>
        //           <span className="text-xs text-gray-500 dark:text-gray-400">
        //             Comments
        //           </span>
        //         </div>

        //         <div className="flex flex-col items-center rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
        //           <FileText className="mb-1 h-5 w-5 text-purple-500" />
        //           <span className="text-lg font-bold text-gray-900 dark:text-white">
        //             {board.allowPosts ? "On" : "Off"}
        //           </span>
        //           <span className="text-xs text-gray-500 dark:text-gray-400">
        //             Posts
        //           </span>
        //         </div>
        //       </div>

        //       {/* Badges */}
        //       <div className="flex flex-wrap justify-center gap-2">
        //         <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
        //           <Lock className="h-3 w-3" />
        //           Join by {board.joinMode}
        //         </span>
        //         <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium capitalize text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
        //           {board.boardType}
        //         </span>
        //         {seatsAvailable !== null && board?.joinMode === "limited" && (
        //           <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
        //             {seatsAvailable} seats left
        //           </span>
        //         )}
        //       </div>

        //       {/* School Info */}
        //       {board.boardType === "school" && (
        //         <div className="rounded-xl border  border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-700 flex items-center gap-3">
        //           <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-gray-600">
        //             {board?.school?.logo ? (
        //               <img
        //                 src={board?.school?.logo}
        //                 alt={board?.school?.shortName}
        //                 width={32}
        //                 height={32}
        //                 className="h-8 w-8 object-contain"
        //               />
        //             ) : (
        //               <span className="text-sm font-bold text-gray-400">
        //                 {board?.school?.shortName}
        //               </span>
        //             )}
        //           </div>
        //           <div>
        //             <p className="text-sm font-semibold text-gray-900 dark:text-white">
        //               {board?.school?.name}
        //             </p>
        //             <p className="text-xs text-gray-500 dark:text-gray-400">
        //               {board?.school?.shortName} · {board?.school?.country}
        //             </p>
        //           </div>
        //         </div>
        //       )}

        //       {/* Join Button */}
        //       <JoinButton boardCode={code} />

        //       <p className="text-center text-xs text-gray-400 dark:text-gray-500">
        //         By joining, you agree to the board rules set by the owner.
        //       </p>
        //     </div>
        //   </div>
        // </div>
        <CodeFound code={code} board={board} />
      )}
    </>
  );
}
