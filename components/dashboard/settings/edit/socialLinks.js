import { useState } from "react";
import { toast } from "react-toastify";
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

  async function handleSubmit(e) {
    e.preventDefault();
    // verifying instagram username
    if (instagram && instagram.trim().length < 5) {
      return toast.error("Instagram username cant be less than 5 characters");
    }
    // verifying Twitter username
    if (twitter && twitter.trim().length < 5) {
      return toast.error("Twitter username cant be less than 5 characters");
    }
    // verifying github username
    if (github && github.trim().length < 5) {
      return toast.error("Github username cant be less than 5 characters");
    }
    // verifying linkedin username
    if (linkedin && linkedin.trim().length < 5) {
      return toast.error("Linkedin username cant be less than 5 characters");
    }
    // updating the data
    try {
      const request = await fetch(`/api/users/`, {
        method: "PUT",
        body: JSON.stringify({
          instagram: instagram,
          twitter: twitter,
          github: github,
          linkedin: linkedin,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const response = await request.json();
      if (!request.ok || response?.error) {
        return toast.error(`${response?.error}`);
      }
      toast.success("Profile updated Successfully.");
      window.location.reload();
    } catch (err) {
      console.log(err);
      return toast.error("Network Error");
    }
  }
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

      <form className="space-y-6" onSubmit={handleSubmit}>
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
              onChange={(e) => setInstagram(e.target.value)}
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
              onChange={(e) => setTwitter(e.target.value)}
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
              onChange={(e) => setGithub(e.target.value)}
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
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mt-4">
          <button
            type="submit"
            className="w-full px-6 py-2.5 cursor-pointer rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}
