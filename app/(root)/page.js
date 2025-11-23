/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  BookOpen,
  Users,
  MessageCircle,
  MapPin,
  Bell,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-[url('/images/hero-bg.jpg')] dark:bg-none bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-medium text-secondary-foreground animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              v1.0 launching soon
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
              Your Academic Life, <br className="hidden md:block" />
              <span className="text-indigo-500">Unified.</span>
            </h1>

            <p className="text-lg md:text-xl  max-w-2xl leading-relaxed text-black dark:text-white/90">
              Classora is the command center for modern education. Manage your
              classes, collaborate in real-time, and navigate your campus—all
              from one powerful platform. Spend less time managing. More time
              learning.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <Link
                href="/auth/register"
                className="h-12 px-8 rounded-full bg-indigo-600 text-white font-medium flex items-center gap-2 hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#demo"
                className="h-12 px-8 rounded-full border border-border bg-background hover:bg-secondary/50 font-medium flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                Explore Features
              </Link>
            </div>

            {/* Hero Image / Preview */}
            <div className="mt-16 relative w-full max-w-5xl aspect-video rounded-xl border border-border bg-secondary/20 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                [Dashboard Preview Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Informed. Stay Ahead.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In a world of scattered tools and missed messages, Classora gives
              you clarity. Everything you need—schedules, resources,
              conversations, and notifications—lives in one place, so you're
              always in the loop and never caught off guard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-6 h-6 text-blue-500" />}
              title="Class Management"
              description="Your complete academic hub. Organize rosters, assignments, and schedules with an intuitive dashboard designed to keep you in control—no spreadsheets, no chaos."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-purple-500" />}
              title="Community Engagement"
              description="Build stronger connections. Participate in forums, spark discussions, and collaborate with peers and instructors—all within a thoughtfully designed space for meaningful exchange."
            />
            <FeatureCard
              icon={<MessageCircle className="w-6 h-6 text-green-500" />}
              title="Real-time Chat"
              description="Communication without friction. Instant chat with typing indicators, read receipts, and threaded conversations that keep you connected when it matters most."
            />
            <FeatureCard
              icon={<MapPin className="w-6 h-6 text-red-500" />}
              title="Venue Mapping"
              description="Never get lost on campus. Interactive maps guide you to lecture halls, study spaces, and events—so you can spend less time wandering and more time engaging."
            />
            <FeatureCard
              icon={<Bell className="w-6 h-6 text-yellow-500" />}
              title="Smart Reminders"
              description="Deadlines don't slip through the cracks. Automated notifications and calendar sync ensure you're always prepared, always on time, and always one step ahead."
            />
            <FeatureCard
              icon={<CheckCircle2 className="w-6 h-6 text-indigo-500" />}
              title="Advanced Analytics"
              description="Insight-driven progress. Track engagement, measure growth, and gain clarity on your academic journey with detailed, actionable data that helps you improve."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section (redesigned to match brand colors) */}
      <section
        id="testimonials"
        className="py-20 md:py-32 bg-[#F5F7FF] dark:bg-[#071023]"
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

      {/* CTA Section */}
      <section id="joinus" className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl bg-linear-to-br from-indigo-600 to-purple-700 p-8 md:p-16 text-center text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to take control of your academic experience?
              </h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students and educators who trust Classora to
                simplify their workflow, strengthen their connections, and
                elevate their learning.
              </p>
              <Link
                href="/auth/register"
                className="inline-flex h-14 px-8 rounded-full bg-white text-indigo-600 font-bold items-center justify-center hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-2xl bg-background border border-border hover:border-indigo-500/50 transition-colors hover:shadow-lg hover:shadow-indigo-500/5 group">
      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
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
