import AnnoucementsCourses from "@/components/dashboard/annoucements/courses";
import EmptyAnnoucements from "@/components/dashboard/annoucements/emptyannoucements";
import AnnoucementsHeader from "@/components/dashboard/annoucements/header";
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const { boardId, role } = await getUserInfomation();
  const annoucementRequest = await fetch(
    `${BASE_URL}/api/boards/${boardId}/announcements`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    }
  );

  const { announcement } = await annoucementRequest.json();

  return (
    <div className="relative min-h-screen">
      <main className="px-4 py-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <AnnoucementsHeader />
          {announcement?.length === 0 || !annoucementRequest.ok ? (
            <EmptyAnnoucements role={role} />
          ) : (
            <AnnoucementsCourses annoucements={announcement} />
          )}
        </div>
      </main>
      {role === "admin" || role === "owner" ? (
        <Link
          href="/announcements/create"
          className="fixed right-6 bottom-6 z-50 rounded-full bg-blue-600 p-4 text-white shadow-lg hover:bg-blue-700 cursor-pointer"
        >
          <Plus />
        </Link>
      ) : null}
    </div>
  );
}
