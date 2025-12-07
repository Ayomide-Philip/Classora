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

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            My Courses
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {course.length || 0} courses •{" "}
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
