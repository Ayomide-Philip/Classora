import { getUserInfomation } from "@/components/dashboard/userdetails";
import { BASE_URL } from "@/libs/config";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import CourseSchedule from "@/components/dashboard/courses/schedule";
import CourseAssignments from "@/components/dashboard/courses/assignments";
import CourseProgressOverview from "@/components/dashboard/courses/progressOverview";
import CourseMaterials from "@/components/dashboard/courses/materials";
import CourseInstructor from "@/components/dashboard/courses/instructor";
import CourseHeader from "@/components/dashboard/courses/header";
import CourseNotFound from "@/components/dashboard/courses/not-found";

export default async function CoursePage({ params }) {
  const { id } = await params;
  const { boardId, userId } = await getUserInfomation();

  if (!boardId) {
    return redirect("/overview");
  }

  const request = await fetch(
    `${BASE_URL}/api/boards/${boardId}/courses/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    }
  );

  const response = await request.json();
  const { course } = response;

  if (response?.error || !request.ok) return <CourseNotFound />;
  // const course = {
  //   id: "physics-101",
  //   title: "Physics 101",
  //   code: "PHY101",
  //   teacher: "Dr. Mensah",
  //   teacherEmail: "mensah@university.edu",
  //   color: "bg-sky-500",
  //   colorLight: "bg-sky-50 dark:bg-sky-950/40",
  //   colorText: "text-sky-600 dark:text-sky-400",
  //   credits: 3,
  //   semester: "Rain 2025",
  //   description:
  //     "An introductory course covering the fundamental principles of physics including mechanics, thermodynamics, waves, and basic electromagnetism. Students will develop problem-solving skills through theoretical concepts and practical experiments.",
  // };

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8 pb-24">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/courses"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
        <CourseHeader course={course} id={id} userId={userId} />
        <CourseProgressOverview
          assignments={course?.assignments}
          userId={userId}
        />
        <CourseSchedule courseId={id} />
        <CourseAssignments assignments={course?.assignments} userId={userId} />
        <CourseMaterials />
        <CourseInstructor course={course} />
      </div>
    </main>
  );
}
