import AnnoucementsCourses from "@/components/dashboard/annoucements/courses";
import EmptyAnnoucements from "@/components/dashboard/annoucements/emptyannoucements";
import AnnoucementsHeader from "@/components/dashboard/annoucements/header";
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";

export default async function Page() {
  const { boardId } = await getUserInfomation();
  if (!boardId) {
    return <EmptyAnnoucements />;
  }
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
  console.log(announcement);
  // const annoucement = [
  //   {
  //     title: "Physics 101",
  //     nextEvent:
  //       "Lorem Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae  ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae ",
  //     badge: "Lab",
  //   },
  //   {
  //     title: "Advanced Algebra",
  //     nextEvent: "Homework 7 due",
  //     badge: "Assignments",
  //   },
  //   {
  //     title: "World History",
  //     nextEvent: "Parent note posted",
  //     badge: "Updates",
  //   },
  // ];
  return (
    <main className="px-4 py-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <AnnoucementsHeader />
        {announcement.length === 0 || !annoucementRequest.ok ? (
          <EmptyAnnoucements />
        ) : (
          <AnnoucementsCourses annoucements={announcement} />
        )}
      </div>
    </main>
  );
}
