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
import Toggle from "@/components/toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Classora
            </span> */}
            <img
              src="/images/Classora_Logo.png"
              alt="Classora Logo"
              className="w-30 h-30 rounded-lg"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Toggle />
            <Link
              href="/auth/login"
              className="hidden md:block text-sm font-medium hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-medium text-secondary-foreground animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              v2.0 is now live
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Teach more, <br className="hidden md:block" />
              <span className="text-indigo-500">Manage less.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              The all-in-one ecosystem for students and educators. Manage
              classes, engage communities, and find venues—all in one beautiful
              interface.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <Link
                href="/auth/register"
                className="h-12 px-8 rounded-full bg-indigo-600 text-white font-medium flex items-center gap-2 hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
              >
                Start for free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#demo"
                className="h-12 px-8 rounded-full border border-border bg-background hover:bg-secondary/50 font-medium flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                View Demo
              </Link>
            </div>

            {/* Hero Image / Preview */}
            <div className="mt-16 relative w-full max-w-5xl aspect-video rounded-xl border border-border bg-secondary/20 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
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
              Everything you need to succeed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Classora brings together all the tools you need to manage your
              educational journey effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-6 h-6 text-blue-500" />}
              title="Class Management"
              description="Organize rosters, resources, and schedules in one intuitive dashboard."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-purple-500" />}
              title="Community Engagement"
              description="Foster collaboration with built-in forums and discussion boards."
            />
            <FeatureCard
              icon={<MessageCircle className="w-6 h-6 text-green-500" />}
              title="Real-time Chat"
              description="Instant communication with typing indicators and read receipts."
            />
            <FeatureCard
              icon={<MapPin className="w-6 h-6 text-red-500" />}
              title="Venue Mapping"
              description="Find and navigate to class locations with interactive maps."
            />
            <FeatureCard
              icon={<Bell className="w-6 h-6 text-yellow-500" />}
              title="Smart Reminders"
              description="Never miss a deadline with automated notifications and calendar sync."
            />
            <FeatureCard
              icon={<CheckCircle2 className="w-6 h-6 text-indigo-500" />}
              title="Advanced Analytics"
              description="Track progress and engagement with detailed insights."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-16 text-center text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to transform your learning experience?
              </h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students and educators who are already using
                Classora to teach more and manage less.
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

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                  C
                </div>
                <span className="font-bold">Classora</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering education through technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Classora Inc. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-foreground">
                Twitter
              </Link>
              <Link href="#" className="hover:text-foreground">
                GitHub
              </Link>
              <Link href="#" className="hover:text-foreground">
                Discord
              </Link>
            </div>
          </div>
        </div>
      </footer>
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
