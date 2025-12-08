import { getUserInfomation } from "@/components/dashboard/userdetails";
import { BASE_URL } from "@/libs/config";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  MapPin,
  User,
  FileText,
  CheckCircle2,
  Circle,
  Calendar,
  Download,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import CourseSchedule from "@/components/dashboard/courses/schedule";
import CourseAssignments from "@/components/dashboard/courses/assignments";
import CourseProgressOverview from "@/components/dashboard/courses/progressOverview";
import CourseMaterials from "@/components/dashboard/courses/materials";

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
  console.log(response);
  // Static course data - in a real app this would be fetched based on params.id
  const course = {
    id: "physics-101",
    title: "Physics 101",
    code: "PHY101",
    teacher: "Dr. Mensah",
    teacherEmail: "mensah@university.edu",
    color: "bg-sky-500",
    colorLight: "bg-sky-50 dark:bg-sky-950/40",
    colorText: "text-sky-600 dark:text-sky-400",
    credits: 3,
    semester: "Rain 2025",
    description:
      "An introductory course covering the fundamental principles of physics including mechanics, thermodynamics, waves, and basic electromagnetism. Students will develop problem-solving skills through theoretical concepts and practical experiments.",
    announcements: [
      {
        id: 1,
        title: "Office hours moved to Thursday this week",
        date: "Nov 28",
      },
      { id: 2, title: "Lab Report 2 deadline extended", date: "Nov 25" },
    ],
  };

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
        <header className="mb-8">
          <div className={`h-2 w-20 rounded-full bg-sky-500 mb-4`} />
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 mb-2`}
              >
                {course.code}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {course.title}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {course.teacher}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  {course.credits} Credits
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {course.semester}
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {course.description}
          </p>
        </header>

        {/* Progress overview */}
        <CourseProgressOverview assignments={assignments} />

        {/* Schedule */}
        <CourseSchedule />

        {/* Assignments */}
        <CourseAssignments assignments={assignments} />

        {/* Materials */}
        <CourseMaterials />

        {/* Instructor */}
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Instructor
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${course.colorLight}`}
              >
                <span
                  className={`text-lg font-semibold text-sky-600 dark:text-sky-400`}
                >
                  {course.teacher
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {course.teacher}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {course.teacherEmail}
                </p>
              </div>
              <a
                href={`mailto:${course.teacherEmail}`}
                className={`rounded-lg px-4 py-2 text-sm font-medium ${course.colorLight} text-sky-600 dark:text-sky-400 hover:opacity-80 transition`}
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
