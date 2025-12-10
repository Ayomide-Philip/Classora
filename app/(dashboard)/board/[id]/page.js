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
import { BASE_URL } from "@/libs/config";
import { getUserInfomation } from "@/components/dashboard/userdetails";
import { cookies } from "next/headers";

export default async function Page({ params }) {
  const { boardId } = await getUserInfomation();
  const { id } = await params;

  const request = await fetch(
    `${BASE_URL}/api/boards/${boardId}/classes/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: (await cookies()).toString(),
      },
    }
  );

  const response = await request.json();

  if (!request.ok || response?.error) {
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

  const {
    classes: { _id, courseId, venue },
  } = response;

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
            <div className={`h-12 sm:h-14 w-1.5 rounded-full bg-sky-500`} />
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                {courseId?.courseTitle}
              </h1>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {courseId?.semester} • {courseId?.courseUnit} Unit
                {courseId?.courseUnit !== 1 ? "s" : ""}
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
