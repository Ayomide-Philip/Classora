"use client";

import { useState } from "react";
import { CheckCircle2, Shield, Sparkles, Users } from "lucide-react";
import CreateForm from "@/components/dashboard/overview/create/form";

const steps = [
  {
    title: "Foundation",
    description: "Name your board and set the tone.",
    icon: Sparkles,
  },
  {
    title: "Access",
    description: "Choose how members can join.",
    icon: Users,
  },

  {
    title: "Review",
    description: "Confirm details before launch.",
    icon: CheckCircle2,
  },
];

export default function Page() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden mb-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-[#34d399]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 -z-10 h-112 w-md rounded-full bg-[#6366f1]/14 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-6 py-3 md:px-10">
        <header className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.38em] text-teal-600 dark:border-white/15 dark:bg-white/5 dark:text-teal-200/80">
            <Shield className="h-3 w-3" />
            Create board
          </span>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold md:text-5xl">
              Launch a new learning space
            </h1>
            <p className="max-w-2xl text-sm text-slate-600 md:text-base dark:text-indigo-100/80">
              Collect the essentials in three quick steps, customise the learner
              experience, and publish when you are ready. You can revisit these
              settings any time after launch.
            </p>
          </div>
        </header>

        <nav className="relative grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isComplete = index < activeStep;
              const isActive = index === activeStep;

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col gap-2 rounded-2xl border px-4 py-3 transition md:border-transparent ${
                    isActive
                      ? "border-slate-200 bg-slate-100/70 dark:border-white/15 dark:bg-white/5"
                      : "border-transparent"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition ${
                      isActive
                        ? "border-[#22d3ee]/70 bg-[#22d3ee]/10 text-[#22d3ee]"
                        : isComplete
                        ? "border-[#34d399]/70 bg-[#34d399]/10 text-[#34d399]"
                        : "border-slate-200 text-slate-400 dark:border-white/10 dark:text-white/40"
                    }`}
                  >
                    {isComplete ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <p
                      className={`font-semibold transition ${
                        isActive
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-white/60"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-white/40">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        <CreateForm
          setActiveStep={setActiveStep}
          activeStep={activeStep}
          steps={steps}
        />
      </div>
    </div>
  );
}
