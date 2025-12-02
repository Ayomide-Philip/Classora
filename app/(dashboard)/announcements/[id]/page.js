import Link from "next/link";
import AnnoucementById from "@/components/dashboard/annoucements/annoucementById";

export default async function Page({ params }) {
  const { id } = await params;

  const ANNOUNCEMENTS = {
    "physics-101": {
      title: "Physics 101 — Lab Reschedule",
      badge: "Lab",
      author: "Dr. A. Mensah",
      date: "2025-12-01T10:30:00Z",
      content: `The Physics 101 lab originally scheduled for Friday has been rescheduled to Monday at 2:00pm due to equipment maintenance.\n\nPlease meet in Lab B and ensure you have completed the pre-lab worksheet before attending. Late arrivals may not be admitted for safety reasons. If you cannot attend, contact your lab instructor to arrange a makeup session.`,
    },
    "advanced-algebra": {
      title: "Advanced Algebra — Homework 7 Posted",
      badge: "Assignments",
      author: "Ms. K. Okoye",
      date: "2025-12-02T08:00:00Z",
      content: `Homework 7 has been posted to the course portal. It covers polynomial factorization and complex roots. Submission is due next Thursday by 11:59pm. Ensure all work is shown and upload a single PDF file. Late submissions will incur a penalty.`,
    },
    "world-history": {
      title: "World History — Parent Note",
      badge: "Updates",
      author: "History Dept.",
      date: "2025-11-28T14:15:00Z",
      content: `A reminder that next week is the field trip to the National Museum. Permission slips must be returned by Wednesday. Students should wear comfortable shoes and bring a packed lunch. Contact the department office for questions.`,
    },
  };

  const announcement = ANNOUNCEMENTS[id];

  if (!announcement) {
    return (
      <main className="px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Announcement not found
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            We couldn&apos;t find the announcement you were looking for.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Link
              href="/dashboard/announcements"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold dark:border-slate-700 dark:bg-slate-900/70 dark:text-white"
            >
              Back to announcements
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 py-6 sm:py-10">
      <AnnoucementById announcement={announcement} announcementId={id} />
    </main>
  );
}
