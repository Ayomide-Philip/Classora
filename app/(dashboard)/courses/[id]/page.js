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

export default function CoursePage({ params }) {
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
    schedule: [
      {
        day: "Monday",
        time: "09:00 - 10:30",
        venue: "Science Block A, Room 201",
      },
      {
        day: "Wednesday",
        time: "09:00 - 10:30",
        venue: "Science Block A, Room 201",
      },
      {
        day: "Friday",
        time: "14:00 - 16:00",
        venue: "Physics Lab 3",
        type: "Lab",
      },
    ],
    materials: [
      { id: 1, title: "Course Syllabus", type: "PDF", date: "Sep 2" },
      {
        id: 2,
        title: "Chapter 1: Motion & Forces",
        type: "PDF",
        date: "Sep 5",
      },
      { id: 3, title: "Chapter 2: Energy & Work", type: "PDF", date: "Sep 12" },
      {
        id: 4,
        title: "Lab Manual - Experiment 1",
        type: "PDF",
        date: "Sep 15",
      },
      { id: 5, title: "Midterm Study Guide", type: "PDF", date: "Oct 10" },
      { id: 6, title: "Chapter 3: Waves", type: "PDF", date: "Oct 20" },
    ],
    assignments: [
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
    ],
    announcements: [
      {
        id: 1,
        title: "Office hours moved to Thursday this week",
        date: "Nov 28",
      },
      { id: 2, title: "Lab Report 2 deadline extended", date: "Nov 25" },
    ],
  };

  const completedAssignments = course.assignments.filter(
    (a) => a.status === "completed"
  );
  const pendingAssignments = course.assignments.filter(
    (a) => a.status === "pending"
  );
  const progress = Math.round(
    (completedAssignments.length / course.assignments.length) * 100
  );

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8 pb-24">
      <div className="mx-auto max-w-4xl">
        {/* Back button */}
        <Link
          href="/courses"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className={`h-2 w-20 rounded-full ${course.color} mb-4`} />
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${course.colorLight} ${course.colorText} mb-2`}
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
        <section className="mb-8 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
            Course Progress
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex gap-1">
                {course.assignments.map((a, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full ${
                      a.status === "completed"
                        ? course.color
                        : "bg-slate-200 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {completedAssignments.length}/{course.assignments.length}
            </span>
          </div>
        </section>

        {/* Schedule */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Schedule
          </h2>
          <div className="space-y-3">
            {course.schedule.map((slot, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className={`h-10 w-1 rounded-full ${course.color}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-slate-900 dark:text-white">
                      {slot.day}
                    </span>
                    {slot.type && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${course.colorLight} ${course.colorText}`}
                      >
                        {slot.type}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {slot.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {slot.venue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assignments */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Assignments
          </h2>

          {/* Pending */}
          {pendingAssignments.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Pending ({pendingAssignments.length})
              </h3>
              <div className="space-y-2">
                {pendingAssignments.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <Circle className="h-5 w-5 text-slate-300 dark:text-slate-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 dark:text-white truncate">
                        {a.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Due: {a.dueDate}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Completed */}
          {completedAssignments.length > 0 && (
            <div>
              <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Completed ({completedAssignments.length})
              </h3>
              <div className="space-y-2">
                {completedAssignments.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <CheckCircle2
                      className={`h-5 w-5 shrink-0 ${course.colorText}`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 dark:text-white truncate">
                        {a.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Submitted: {a.dueDate}
                      </p>
                    </div>
                    <span
                      className={`text-sm font-semibold ${course.colorText}`}
                    >
                      {a.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Materials */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Course Materials
          </h2>
          <div className="space-y-2">
            {course.materials.map((m) => (
              <div
                key={m.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 cursor-pointer"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${course.colorLight}`}
                >
                  <FileText className={`h-5 w-5 ${course.colorText}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white truncate">
                    {m.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {m.type} • {m.date}
                  </p>
                </div>
                <Download className="h-4 w-4 text-slate-400" />
              </div>
            ))}
          </div>
        </section>

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
                <span className={`text-lg font-semibold ${course.colorText}`}>
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
                className={`rounded-lg px-4 py-2 text-sm font-medium ${course.colorLight} ${course.colorText} hover:opacity-80 transition`}
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
