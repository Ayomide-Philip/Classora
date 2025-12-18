import { Instagram, Twitter, Github, Linkedin } from "lucide-react";
export default function StudentCardSocialHandles({ student }) {
  return (
    <>
      {" "}
      {(student.socialHandles?.instagram ||
        student.socialHandles?.twitter ||
        student.socialHandles?.github ||
        student.socialHandles?.linkedin) && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
            Social Links
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Instagram */}
            {student.socialHandles?.instagram && (
              <a
                href={`https://instagram.com/${student.socialHandles.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
              >
                <Instagram className="h-5 w-5 text-pink-500 group-hover:text-pink-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Instagram
                  </p>
                  <p className="text-slate-900 dark:text-white mt-1 group-hover:underline">
                    @{student.socialHandles.instagram}
                  </p>
                </div>
              </a>
            )}

            {/* Twitter */}
            {student.socialHandles?.twitter && (
              <a
                href={`https://twitter.com/${student.socialHandles.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
              >
                <Twitter className="h-5 w-5 text-blue-400 group-hover:text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Twitter
                  </p>
                  <p className="text-slate-900 dark:text-white mt-1 group-hover:underline">
                    @{student.socialHandles.twitter}
                  </p>
                </div>
              </a>
            )}

            {/* GitHub */}
            {student.socialHandles?.github && (
              <a
                href={`https://github.com/${student.socialHandles.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
              >
                <Github className="h-5 w-5 text-slate-700 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    GitHub
                  </p>
                  <p className="text-slate-900 dark:text-white mt-1 group-hover:underline">
                    {student.socialHandles.github}
                  </p>
                </div>
              </a>
            )}

            {/* LinkedIn */}
            {student.socialHandles?.linkedin && (
              <a
                href={`https://linkedin.com/in/${student.socialHandles.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-blue-600 group-hover:text-blue-700 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    LinkedIn
                  </p>
                  <p className="text-slate-900 dark:text-white mt-1 group-hover:underline">
                    {student.socialHandles.linkedin}
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
