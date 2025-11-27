export default function LastStep({ formData }) {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Summary
        </h2>
        <div className="mt-4 grid gap-4 text-sm text-slate-600 dark:text-white/70">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/35">
              Basics
            </p>
            <p className="mt-1 font-medium text-slate-900 dark:text-white">
              {formData.name || "(Not set)"}
            </p>
            <p>{formData.tagline || "No tagline provided yet."}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/35">
              Access
            </p>
            <p className="mt-1">Join method: {formData.joinMode}</p>
            {formData.joinMode === "limited" && (
              <p>Seat limit: {formData.seatLimit || "Not set"}</p>
            )}
            <p>
              Engagement:{" "}
              {formData.allowComments
                ? "Comments enabled"
                : "Comments disabled"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/35">
              Experience
            </p>
            <div className="mt-1 flex flex-wrap gap-2 text-xs">
              {formData.modules.map((module) => (
                <span
                  key={module}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600 dark:border-white/15 dark:bg-transparent dark:text-white/60"
                >
                  {module}
                </span>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-white/45">
              Brand colour: {formData.brandColor}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 text-sm text-slate-500 dark:border-white/15 dark:bg-white/5 dark:text-white/60">
        When you click{" "}
        <strong className="font-semibold text-slate-700 dark:text-white">
          Finish setup
        </strong>
        , the board will be created as a draft. You can invite members or adjust
        modules before publishing to learners.
      </div>
    </div>
  );
}
