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
import Footer from "@/components/landing/Footer";

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
      <CTA />
      <Footer />
    </div>
  );
}
