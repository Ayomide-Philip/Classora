import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-[url('/images/hero-bg.jpg')] dark:bg-none bg-no-repeat bg-center bg-cover">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-500/20 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30 blur-3xl">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply animate-blob" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-medium text-secondary-foreground animate-fade-in backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            v1.0 Launching Soon
          </div>

          {/* Headlines */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-indigo-500 font-semibold tracking-wide uppercase text-sm md:text-base">
              The Academic Operating System
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/60 pb-2">
              The Chaos of Campus Life, <br className="hidden md:block" />
              <span className="text-indigo-500">Finally Tamed.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-muted-foreground">
            Classora is the all-in-one academic command center that replaces
            scattered tools with a single, powerful ecosystem. Manage classes,
            connect with campus, and master your schedule—effortlessly.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <Link
              href="/auth/register"
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-indigo-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
            >
              Get Started for Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto h-12 px-8 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-secondary/50 font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-16 relative w-full max-w-6xl aspect-video rounded-xl border border-border bg-secondary/20 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-medium text-lg">
              [Dashboard Preview Placeholder]
            </div>
            {/* Decorative UI elements could go here */}
          </div>
        </div>
      </div>
    </section>
  );
}
