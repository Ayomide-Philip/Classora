export default function CreateStepTwo({ formData, handleFieldChange }) {
  return (
    <div className="grid gap-8">
      <div className="grid gap-3">
        <p className="text-sm font-semibold text-slate-700 dark:text-white/80">
          How should learners join?
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {["code", "limited"].map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => handleFieldChange("joinMode", mode)}
              className={`rounded-2xl border px-4 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/40 ${
                formData.joinMode === mode
                  ? "border-[#22d3ee]/60 bg-[#22d3ee]/5 text-slate-900 shadow-sm dark:text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white/60 dark:hover:border-white/20 dark:hover:bg-white/5"
              }`}
            >
              <p className="text-sm font-semibold capitalize">{mode}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-white/45">
                {mode === "code" && "Learners enter a unique join code."}
                {mode === "open" && "Anyone with the link can request access."}
                {mode === "limited" &&
                  "Invitees only, with optional seat limit."}
              </p>
            </button>
          ))}
        </div>
        {formData.joinMode === "limited" && (
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700 dark:text-white/80">
              Maximum seats (optional)
            </label>
            <input
              type="number"
              min={1}
              placeholder="e.g., 30"
              className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm 
                 dark:border-white/15 dark:bg-slate-900/50 dark:text-white"
              onChange={(e) => handleFieldChange("seatLimit", e.target.value)}
              value={formData.seatLimit || ""}
            />
          </div>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white/70 dark:hover:border-white/20 dark:hover:bg-white/5">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-[#22d3ee] focus:ring-0 dark:border-white/30 dark:bg-transparent"
            defaultChecked={formData.allowComments}
            onChange={(e) =>
              handleFieldChange("allowComments", e.target.checked)
            }
          />
          Allow learner comments on annoucements
        </label>
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white/70 dark:hover:border-white/20 dark:hover:bg-white/5">
          <input
            type="checkbox"
            defaultChecked={formData.allowPosts}
            onChange={(e) => handleFieldChange("allowPosts", e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-[#22d3ee] focus:ring-0 dark:border-white/30 dark:bg-transparent"
          />
          Allow learner to add assignments
        </label>
      </div>
    </div>
  );
}
