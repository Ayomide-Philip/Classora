export default function TrustBar() {
  return (
    <section className="py-10 border-y border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Forward-Thinking Campuses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos - In a real app, these would be SVGs or Images */}
          <div className="h-8 w-32 bg-foreground/20 rounded animate-pulse" />
          <div className="h-8 w-32 bg-foreground/20 rounded animate-pulse delay-75" />
          <div className="h-8 w-32 bg-foreground/20 rounded animate-pulse delay-150" />
          <div className="h-8 w-32 bg-foreground/20 rounded animate-pulse delay-200" />
          <div className="h-8 w-32 bg-foreground/20 rounded animate-pulse delay-300" />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Joining <span className="font-bold text-foreground">15,000+</span>{" "}
          students and educators streamlining their academic journey.
        </p>
      </div>
    </section>
  );
}
