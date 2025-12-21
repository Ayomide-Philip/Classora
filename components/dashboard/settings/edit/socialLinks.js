export default function EditSocialLink({ user, setEditing }) {
  const [instagram, setInstagram] = useState(
    user?.profileId?.socialHandles?.instagram || ""
  );
  const [twitter, setTwitter] = useState(
    user?.profileId?.socialHandles?.twitter || ""
  );
  const [github, setGithub] = useState(
    user?.profileId?.socialHandles?.github || ""
  );
  const [linkedin, setLinkedin] = useState(
    user?.profileId?.socialHandles?.linkedin || ""
  );
  return (
    <>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Edit Social Links
        </h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="rounded-lg border cursor-pointer border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            Cancel
          </button>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Instagram
            </label>
            <input
              type="text"
              name="instagram"
              placeholder="@yourusername"
              defaultValue={instagram}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              Twitter
            </label>
            <input
              type="text"
              name="twitter"
              placeholder="@yourusername"
              defaultValue={twitter}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              GitHub
            </label>
            <input
              type="text"
              name="github"
              placeholder="yourusername"
              defaultValue={github}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
              LinkedIn
            </label>
            <input
              type="text"
              name="linkedin"
              placeholder="linkedin.com/in/yourprofile"
              defaultValue={linkedin}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            type="submit"
            className="w-full px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}
