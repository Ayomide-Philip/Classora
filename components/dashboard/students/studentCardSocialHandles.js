import { Instagram, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";
export default function StudentCardSocialHandles({ student }) {
  const {
    profileId: { socialHandles },
  } = student;
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
          Social Links
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href={`https://instagram.com/${socialHandles?.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group ${
              socialHandles?.instagram
                ? "cursor-pointer"
                : "cursor-not-allowed pointer-events-none"
            }`}
          >
            <Instagram className="h-5 w-5 text-pink-500 group-hover:text-pink-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Instagram
              </p>
              <p className="text-slate-900 dark:text-white mt-1 group-hover:underline capitalize">
                {socialHandles?.instagram
                  ? `@${socialHandles?.instagram}`
                  : "nill"}
              </p>
            </div>
          </Link>

          <Link
            href={`https://twitter.com/${socialHandles?.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group ${
              socialHandles?.twitter
                ? "cursor-pointer"
                : "cursor-not-allowed pointer-events-none"
            }`}
          >
            <Twitter className="h-5 w-5 text-blue-400 group-hover:text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Twitter
              </p>
              <p className="text-slate-900 dark:text-white mt-1 group-hover:underline capitalize">
                {socialHandles?.twitter ? `@${socialHandles?.twitter}` : "nill"}
              </p>
            </div>
          </Link>

          <Link
            href={`https://github.com/${socialHandles?.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group ${
              socialHandles?.github
                ? "cursor-pointer"
                : "cursor-not-allowed pointer-events-none"
            }`}
          >
            <Github className="h-5 w-5 text-slate-700 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                GitHub
              </p>
              <p className="text-slate-900 dark:text-white mt-1 group-hover:underline capitalize">
                {socialHandles?.github ? `${socialHandles?.github}` : "nill"}
              </p>
            </div>
          </Link>

          <Link
            href={`https://linkedin.com/in/${socialHandles?.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group ${
              socialHandles?.linkedin
                ? "cursor-pointer"
                : "cursor-not-allowed pointer-events-none"
            }`}
          >
            <Linkedin className="h-5 w-5 text-blue-600 group-hover:text-blue-700 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                LinkedIn
              </p>
              <p className="text-slate-900 dark:text-white mt-1 group-hover:underline capitalize">
                {socialHandles?.linkedin
                  ? `${socialHandles?.linkedin}`
                  : "nill"}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
