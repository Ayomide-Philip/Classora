/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSection from "@/components/landing/ProblemSection";
import FeatureGrid from "@/components/landing/FeatureGrid";
import Ecosystem from "@/components/landing/Ecosystem";
import Personas from "@/components/landing/Personas";
import MobileShowcase from "@/components/landing/MobileShowcase";
import Security from "@/components/landing/Security";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";

export default function Home() {
  const testimonials = [
    {
      quote:
        "Classora transformed how I run my classes — grading, reminders, and attendance are finally effortless.",
      name: "Dr. Maya Thompson",
      role: "Physics Lecturer",
      avatarSrc: "https://i.pravatar.cc/150?img=12",
    },
    {
      quote:
        "Students are more engaged and submissions are organized. The dashboard is clean and fast.",
      name: "Samuel Ortiz",
      role: "Class Representative",
      avatarSrc: "https://i.pravatar.cc/150?img=47",
    },
    {
      quote:
        "I love the reminders and calendar sync — never missed an exam date again.",
      name: "Aisha Bello",
      role: "Second-year Student",
      avatarSrc: "https://i.pravatar.cc/150?img=33",
    },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/20">
      <Hero />
      <TrustBar />
      <ProblemSection />
      <FeatureGrid />
      <Ecosystem />
      <Personas />
      <MobileShowcase />
      <Security />
      <FAQ />
      <section
        id="testimonials"
        className="py-20 md:py-32 bg-secondary/20 border-y border-border/50"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What people say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Educators and students rely on Classora to stay organized and
              connected — here are a few stories from our community.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <TestimonialCard
                key={t.name + idx}
                quote={t.quote}
                name={t.name}
                role={t.role}
                avatarSrc={t.avatarSrc}
              />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}

function TestimonialCard({ quote, name, role, avatarSrc }) {
  return (
    <div className="relative p-6 rounded-2xl bg-white border border-border shadow-md overflow-hidden dark:bg-[#071228] dark:border-[#0e2a45]">
      <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-linear-to-b from-[#6C5CE7] to-[#00B894]" />

      <div className="relative flex flex-col h-full">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#6C5CE7] to-[#00B894] p-0.5 shrink-0">
            <div className="bg-white dark:bg-[#0b1422] rounded-full overflow-hidden w-full h-full">
              <img
                src={avatarSrc}
                alt={name}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="text-sm text-muted-foreground italic dark:text-indigo-100/90">
              “{quote}”
            </div>
            <div className="mt-4">
              <div className="font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#6C5CE7] to-[#00B894]">
                {name}
              </div>
              <div className="text-sm text-muted-foreground dark:text-indigo-200/70">
                {role}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 self-end">
          <svg
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              rx="12"
              fill="#F5F7FF"
              className="dark:fill-[#071023]"
            />
            <path d="M7 9h4v6H7zM13 9h4v6h-4z" fill="#6C5CE7" opacity="0.95" />
          </svg>
        </div>
      </div>
    </div>
  );
}
