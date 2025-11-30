import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader } from "lucide-react";
import CreateStepOne from "@/components/dashboard/overview/create/stepone";
import CreateStepTwo from "@/components/dashboard/overview/create/steptwo";
import LastStep from "./laststep";
import FormOverlay from "./overlay";
import Link from "next/link";
import { toast } from "react-toastify";
export default function CreateForm({ setActiveStep, activeStep, steps }) {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    boardType: "",
    school: {
      name: "",
      logo: "",
      shortName: "",
      country: "",
    },
    joinMode: "code",
    seatLimit: 0,
    allowComments: true,
    allowPosts: false,
  });
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(false);

  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === steps.length - 1;

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const validateSteps = () => {
    if (activeStep === 0) {
      if (!formData.name.trim() || formData.name.length < 5) {
        return true;
      }
      if (!formData.description.trim() || formData.description.length < 10) {
        return true;
      }
      if (!formData.boardType.trim() || formData.boardType.length < 3) {
        return true;
      }
      if (formData.boardType === "school" && !formData.school.name.trim()) {
        return true;
      }
    }
    if (activeStep === 1) {
      if (formData.joinMode === "limited" && formData.seatLimit <= 0) {
        return true;
      }
    }
    return false;
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const request = await fetch(`/api/boards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });
    const data = await request.json();
    if (!request.ok && data.error) {
      setLoading(false);
      toast.error(data?.error);
      return;
    }
    toast.success(data?.message || "Board created successfully");
    setLoading(false);
    setBoard(data.board);
    setOverlayVisible(true);
  }

  return (
    <>
      <form
        className="relative flex flex-1 flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/8 dark:border-white/10 dark:bg-white/5"
        onSubmit={handleSubmit}
      >
        {activeStep === 0 && (
          <CreateStepOne
            handleFieldChange={handleFieldChange}
            formData={formData}
          />
        )}

        {activeStep === 1 && (
          <CreateStepTwo
            handleFieldChange={handleFieldChange}
            formData={formData}
          />
        )}

        {activeStep === 2 && <LastStep formData={formData} />}

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 dark:border-white/10 md:flex-row md:items-center md:justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={isFirstStep}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-slate-200 px-6 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 disabled:cursor-not-allowed disabled:border-slate-100 disabled:text-slate-400 dark:border-white/10 dark:text-white/70 dark:hover:border-white/20 dark:hover:bg-white/5 dark:disabled:border-white/5 dark:disabled:text-white/30"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="flex flex-1 items-center justify-end gap-3">
            {!isLastStep ? (
              <Link
                href="#"
                onClick={goNext}
                disabled={validateSteps()}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#34d399] via-[#22d3ee] to-[#6366f1] px-8 text-sm font-semibold text-white shadow-md shadow-[#22d3ee]/10 transition hover:-translate-y-px hover:shadow-lg hover:shadow-[#22d3ee]/35 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="inline-flex cursor-pointer h-11 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#34d399] via-[#22d3ee] to-[#6366f1] px-8 text-sm font-semibold text-white shadow-md shadow-[#22d3ee]/10 transition hover:-translate-y-px hover:shadow-lg hover:shadow-[#22d3ee]/35"
              >
                {loading ? (
                  <div v className="flex items-center justify-center gap-2">
                    <Loader className="animate-spin" />
                    <span>Creating...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    Finish setup
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                )}
              </button>
            )}
          </div>
        </div>
      </form>
      {overlayVisible && board && (
        <FormOverlay
          visible={overlayVisible}
          code={board?.joinCode || ""}
          onClose={() => {
            setOverlayVisible(false);
            window.location.href = "/overview";
          }}
        />
      )}
    </>
  );
}
