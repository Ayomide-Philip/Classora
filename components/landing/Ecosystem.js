import {
  Bell,
  Library,
  BarChart3,
  Users,
  Search,
  ShoppingBag,
} from "lucide-react";

export default function Ecosystem() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Complete Ecosystem for Success
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Classora isn&apos;t just a tool; it&apos;s the infrastructure for
              a better academic life. We&apos;ve thought of everything so you
              don&apos;t have to.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <EcosystemItem
                icon={<Bell className="w-5 h-5 text-yellow-500" />}
                title="Smart Reminders"
                desc="Automated notification for assignments and exams."
              />
              <EcosystemItem
                icon={<Library className="w-5 h-5 text-indigo-500" />}
                title="Resource Hub"
                desc="Centralized library for notes and recordings."
              />
              <EcosystemItem
                icon={<BarChart3 className="w-5 h-5 text-green-500" />}
                title="Star Important Classes"
                desc="Track attendance and academic progress."
              />
              <EcosystemItem
                icon={<Users className="w-5 h-5 text-blue-500" />}
                title="Community Boards"
                desc="Find clubs, events, and study partners."
              />
              <EcosystemItem
                icon={<Search className="w-5 h-5 text-purple-500" />}
                title="User Directory"
                desc="Know your course mates by their name."
              />
            </div>
          </div>

          <div className="md:w-1/2 relative">
            {/* Abstract visual representation of ecosystem */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="h-40 rounded-2xl bg-secondary/50 border border-border p-4 animate-pulse">
                  <div className="h-full w-full bg-background/50 rounded-xl" />
                </div>
                <div className="h-56 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-4">
                  <div className="h-full w-full bg-indigo-500/10 rounded-xl" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-56 rounded-2xl bg-purple-500/10 border border-purple-500/20 p-4">
                  <div className="h-full w-full bg-purple-500/10 rounded-xl" />
                </div>
                <div className="h-40 rounded-2xl bg-secondary/50 border border-border p-4 animate-pulse">
                  <div className="h-full w-full bg-background/50 rounded-xl" />
                </div>
              </div>
            </div>

            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-30 blur-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 p-2 rounded-lg bg-secondary shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
