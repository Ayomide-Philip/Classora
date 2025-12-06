import CourseCard from "@/components/dashboard/courses/coursecard";
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";

export default async function Page() {
  const { boardId } = await getUserInfomation();
  const request = await fetch(`${BASE_URL}/api/boards/${boardId}/courses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });

  const response = await request.json();
  console.log(response);

  const { course } = response;

  const courses = [
    {
      id: "physics-101",
      title: "Physics 101",
      teacher: "Dr. Mensah",
      code: "PHY101",
      color: "bg-sky-500",
      colorLight: "bg-sky-50 dark:bg-sky-950/40",
      colorText: "text-sky-600 dark:text-sky-400",
      credits: 3,
      nextClass: 3,
      materials: 12,
      assignments: { completed: 5, total: 8 },
    },
    {
      id: "algebra-ii",
      title: "Algebra II",
      teacher: "Ms. Okoye",
      code: "MTH202",
      color: "bg-emerald-500",
      colorLight: "bg-emerald-50 dark:bg-emerald-950/40",
      colorText: "text-emerald-600 dark:text-emerald-400",
      credits: 3,
      nextClass: 2,
      materials: 15,
      assignments: { completed: 6, total: 7 },
    },
    {
      id: "chemistry",
      title: "Chemistry",
      teacher: "Dr. Amadi",
      code: "CHM101",
      color: "bg-rose-500",
      colorLight: "bg-rose-50 dark:bg-rose-950/40",
      colorText: "text-rose-600 dark:text-rose-400",
      credits: 4,
      nextClass: 1,
      materials: 18,
      assignments: { completed: 4, total: 9 },
    },
    {
      id: "history",
      title: "History",
      teacher: "Mr. Clarke",
      code: "HIS101",
      color: "bg-indigo-500",
      colorLight: "bg-indigo-50 dark:bg-indigo-950/40",
      colorText: "text-indigo-600 dark:text-indigo-400",
      credits: 3,
      nextClass: 5,
      materials: 22,
      assignments: { completed: 7, total: 8 },
    },
    {
      id: "english-literature",
      title: "English Literature",
      teacher: "Ms. Ramos",
      code: "ENG201",
      color: "bg-amber-500",
      colorLight: "bg-amber-50 dark:bg-amber-950/40",
      colorText: "text-amber-600 dark:text-amber-400",
      credits: 3,
      nextClass: 10,
      materials: 14,
      assignments: { completed: 3, total: 6 },
    },
    {
      id: "biology",
      title: "Biology",
      teacher: "Dr. Lee",
      code: "BIO101",
      color: "bg-teal-500",
      colorLight: "bg-teal-50 dark:bg-teal-950/40",
      colorText: "text-teal-600 dark:text-teal-400",
      credits: 4,
      nextClass: 2,
      materials: 20,
      assignments: { completed: 5, total: 7 },
    },
    {
      id: "art-design",
      title: "Art & Design",
      teacher: "Ms. Gray",
      code: "ART101",
      color: "bg-fuchsia-500",
      colorLight: "bg-fuchsia-50 dark:bg-fuchsia-950/40",
      colorText: "text-fuchsia-600 dark:text-fuchsia-400",
      credits: 2,
      nextClass: 1,
      materials: 8,
      assignments: { completed: 2, total: 4 },
    },
    {
      id: "geography",
      title: "Geography",
      teacher: "Mr. Stone",
      code: "GEO101",
      color: "bg-cyan-500",
      colorLight: "bg-cyan-50 dark:bg-cyan-950/40",
      colorText: "text-cyan-600 dark:text-cyan-400",
      credits: 3,
      nextClass: 5,
      materials: 16,
      assignments: { completed: 4, total: 6 },
    },
  ];

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            My Courses
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {course.length} courses •{" "}
            {course.reduce((sum, c) => sum + c.courseUnit, 0)} Units
          </p>
        </header>

        {/* Course grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.map((course, idx) => {
            return <CourseCard course={course} key={idx} />;
          })}
        </div>
      </div>
    </main>
  );
}
