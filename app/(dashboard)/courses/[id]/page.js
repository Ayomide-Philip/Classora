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

export default async function CoursePage({ params }) {
  const { id } = await params;
  const { boardId } = await getUserInfomation();

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
  // Static course data - in a real app this would be fetched based on params.id
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

  const assignments = [
    {
      id: 1,
      title: "Problem Set 1: Kinematics",
      dueDate: "Sep 10",
      status: "completed",
      score: "92/100",
    },
    {
      id: 2,
      title: "Lab Report 1: Free Fall",
      dueDate: "Sep 20",
      status: "completed",
      score: "88/100",
    },
    {
      id: 3,
      title: "Problem Set 2: Forces",
      dueDate: "Sep 28",
      status: "completed",
      score: "95/100",
    },
    {
      id: 4,
      title: "Midterm Exam",
      dueDate: "Oct 15",
      status: "completed",
      score: "87/100",
    },
    {
      id: 5,
      title: "Problem Set 3: Energy",
      dueDate: "Oct 25",
      status: "completed",
      score: "90/100",
    },
    {
      id: 6,
      title: "Lab Report 2: Pendulum",
      dueDate: "Nov 5",
      status: "pending",
      score: null,
    },
    {
      id: 7,
      title: "Problem Set 4: Waves",
      dueDate: "Nov 15",
      status: "pending",
      score: null,
    },
    {
      id: 8,
      title: "Final Project",
      dueDate: "Dec 10",
      status: "pending",
      score: null,
    },
  ];

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

        {/* Header */}
        <CourseHeader course={course} />

        {/* Progress overview */}
        <CourseProgressOverview assignments={assignments} />

        {/* Schedule */}
        <CourseSchedule />

        {/* Assignments */}
        <CourseAssignments assignments={assignments} />

        {/* Materials */}
        <CourseMaterials />

        {/* Instructor */}
        <CourseInstructor course={course} />
      </div>
    </main>
  );
}
