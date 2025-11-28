import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSection from "@/components/landing/ProblemSection";
import FeatureGrid from "@/components/landing/FeatureGrid";
import Ecosystem from "@/components/landing/Ecosystem";
import Personas from "@/components/landing/Personas";
import MobileShowcase from "@/components/landing/MobileShowcase";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Testimonial from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/20">
      <Hero />
      <TrustBar />
      <ProblemSection />
      <FeatureGrid />
      <Ecosystem />
      <Personas />
      <MobileShowcase />
      <Testimonial />
      <FAQ />
      <CTA />
    </div>
  );
}
