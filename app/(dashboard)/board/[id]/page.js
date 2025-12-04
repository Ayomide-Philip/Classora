import {
  ArrowLeft,
  Clock,
  MapPin,
  User,
  BookOpen,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

// Static class data (in a real app, fetch from API)
const classesData = {
  "physics-101": {
    title: "Physics 101",
    teacher: "Dr. Mensah",
    time: "09:00 – 10:30",
    day: "Monday",
    venue: "Science Block, Lab A",
    mapUrl: "https://maps.google.com/?q=Science+Block+Lab+A",
    color: "bg-sky-500",
    description:
      "Introduction to classical mechanics, thermodynamics, and wave phenomena. Lab sessions include hands-on experiments.",
    credits: 3,
    semester: "Fall 2025",
  },
  "algebra-ii": {
    title: "Algebra II",
    teacher: "Ms. Okoye",
    time: "11:00 – 12:30",
    day: "Monday",
    venue: "Main Building, Room 12",
    mapUrl: "https://maps.google.com/?q=Main+Building+Room+12",
    color: "bg-emerald-500",
    description:
      "Advanced algebraic concepts including polynomials, rational expressions, quadratic equations, and functions.",
    credits: 3,
    semester: "Fall 2025",
  },
  chemistry: {
    title: "Chemistry",
    teacher: "Dr. Amadi",
    time: "10:00 – 11:30",
    day: "Tuesday",
    venue: "Science Block, Lab B",
    mapUrl: "https://maps.google.com/?q=Science+Block+Lab+B",
    color: "bg-rose-500",
    description:
      "Fundamentals of chemistry covering atomic structure, chemical bonding, stoichiometry, and basic organic chemistry.",
    credits: 4,
    semester: "Fall 2025",
  },
  history: {
    title: "History",
    teacher: "Mr. Clarke",
    time: "13:00 – 14:30",
    day: "Tuesday",
    venue: "Arts Wing, Room 3",
    mapUrl: "https://maps.google.com/?q=Arts+Wing+Room+3",
    color: "bg-indigo-500",
    description:
      "World history from ancient civilizations to modern times, focusing on major events and their global impact.",
    credits: 3,
    semester: "Fall 2025",
  },
  "english-literature": {
    title: "English Literature",
    teacher: "Ms. Ramos",
    time: "09:30 – 11:00",
    day: "Wednesday",
    venue: "Library Annex, Room 7",
    mapUrl: "https://maps.google.com/?q=Library+Annex+Room+7",
    color: "bg-amber-500",
    description:
      "Study of classic and contemporary literature, critical analysis, and essay writing skills.",
    credits: 3,
    semester: "Fall 2025",
  },
  biology: {
    title: "Biology",
    teacher: "Dr. Lee",
    time: "08:30 – 10:00",
    day: "Thursday",
    venue: "Science Block, Lab C",
    mapUrl: "https://maps.google.com/?q=Science+Block+Lab+C",
    color: "bg-teal-500",
    description:
      "Introduction to life sciences covering cell biology, genetics, evolution, and ecology with laboratory work.",
    credits: 4,
    semester: "Fall 2025",
  },
  "art-design": {
    title: "Art & Design",
    teacher: "Ms. Gray",
    time: "14:00 – 15:30",
    day: "Thursday",
    venue: "Creative Arts Studio",
    mapUrl: "https://maps.google.com/?q=Creative+Arts+Studio",
    color: "bg-fuchsia-500",
    description:
      "Exploration of visual arts including drawing, painting, and digital design fundamentals.",
    credits: 2,
    semester: "Fall 2025",
  },
  geography: {
    title: "Geography",
    teacher: "Mr. Stone",
    time: "10:00 – 11:30",
    day: "Friday",
    venue: "Main Building, Room 9",
    mapUrl: "https://maps.google.com/?q=Main+Building+Room+9",
    color: "bg-sky-600",
    description:
      "Physical and human geography covering landforms, climate, population, and economic activities.",
    credits: 3,
    semester: "Fall 2025",
  },
  "physical-education": {
    title: "Physical Education",
    teacher: "Coach Ndu",
    time: "12:00 – 13:00",
    day: "Friday",
    venue: "Sports Complex, Gym",
    mapUrl: "https://maps.google.com/?q=Sports+Complex+Gym",
    color: "bg-lime-500",
    description:
      "Physical fitness, team sports, and health education to promote an active lifestyle.",
    credits: 1,
    semester: "Fall 2025",
  },
};

export default async function Page({ params }) {
  const { id } = await params;
  const classInfo = classesData[id];

  if (!classInfo) {
    return (
      <main className="px-4 py-8 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
            Class not found
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            The class you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/board"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Timetable
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 py-6 sm:py-8 md:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Back link */}
        <Link
          href="/board"
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Timetable
        </Link>

        {/* Header */}
        <header className="mb-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div
              className={`h-12 sm:h-14 w-1.5 rounded-full ${classInfo.color}`}
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                {classInfo.title}
              </h1>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {classInfo.semester} • {classInfo.credits} Credit
                {classInfo.credits !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </header>

        {/* Info cards */}
        <div className="space-y-3 sm:space-y-4">
          {/* Teacher */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <User className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Instructor
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {classInfo.teacher}
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Schedule
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {classInfo.day}
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Clock className="h-4 w-4" />
              <span>{classInfo.time}</span>
            </div>
          </div>

          {/* Venue with map */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Venue
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {classInfo.venue}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <Link
                href={classInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500"
              >
                <MapPin className="h-4 w-4" />
                Open in Maps
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                About this class
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {classInfo.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
