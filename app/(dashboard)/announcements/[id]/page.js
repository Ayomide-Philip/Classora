import Link from "next/link";
import AnnoucementById from "@/components/dashboard/annoucements/annoucementById";
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";

export default async function Page({ params }) {
  const { id } = await params;
  const { boardId } = await getUserInfomation();

  const annoucementByIdRequest = await fetch(
    `${BASE_URL}/api/boards/${boardId}/announcements/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    }
  );

  const { announcement } = await annoucementByIdRequest.json();
  console.log(announcement);

  if (!announcement || !annoucementByIdRequest.ok) {
    return (
      <main className="px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Announcement not found
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            We couldn&apos;t find the announcement you were looking for.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link
              href="/announcements"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold dark:border-slate-700 dark:bg-slate-900/70 dark:text-white"
            >
              Back to announcements
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 py-6 sm:py-10">
      <AnnoucementById announcement={announcement} />
    </main>
  );
}
