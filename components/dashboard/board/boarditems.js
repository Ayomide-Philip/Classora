import { Clock, MapPin, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BoardItem({ daySchedule }) {
  return (
    <div className="space-y-2 sm:space-y-3">
      {daySchedule.classes.map((c, idx) => (
        <Link
          key={idx}
          href={`/board/${idx}`}
          className="group block rounded-xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md active:scale-[0.99] dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div
              className={`mt-0.5 h-full min-h-12 sm:min-h-14 w-1 rounded-full bg-sky-500`}
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    Physic 101
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 truncate">
                    Borokini
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 dark:text-slate-500" />
              </div>

              <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                {/* Time */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <Clock className="h-3 w-3 shrink-0" />
                  <span>09:00 – 10:30</span>
                </div>

                {/* Venue */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <MapPin className="h-3 w-3 shrink-0" />
                  <span className="truncate">HSLT C</span>
                </div>
              </div>

              {/* Map button — stops propagation */}
              <div className="mt-2 sm:mt-3">
                <span
                  //   onClick={(e) => {
                  //     e.preventDefault();
                  //     e.stopPropagation();
                  //     window.open(c.mapUrl, "_blank", "noopener,noreferrer");
                  //   }}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-slate-700 transition hover:bg-sky-600 hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-sky-600 dark:hover:text-white cursor-pointer"
                >
                  <MapPin className="h-3 w-3" />
                  View on Map
                  <ExternalLink className="h-2.5 w-2.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
