import AnnoucementsCourses from "@/components/dashboard/annoucements/courses";
import AnnoucementsHeader from "@/components/dashboard/annoucements/header";

export default function Page() {
  const annoucements = [
    // {
    //   title: "Physics 101",
    //   nextEvent:
    //     "Lorem Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae  ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae Lorem ipsum tae ",
    //   badge: "Lab",
    // },
    // {
    //   title: "Advanced Algebra",
    //   nextEvent: "Homework 7 due",
    //   badge: "Assignments",
    // },
    // {
    //   title: "World History",
    //   nextEvent: "Parent note posted",
    //   badge: "Updates",
    // },
  ];
  return (
    <main className="px-4 py-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <AnnoucementsHeader />
        {annoucements.length === 0 ? null : (
          <AnnoucementsCourses annoucements={annoucements} />
        )}
      </div>
    </main>
  );
}
