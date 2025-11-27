import Toggle from "@/components/toggle";
import Image from "next/image";
import Link from "next/link";
export default function RootNavigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/images/Classora_Logo_nobg.png"
              alt="Classora Logo"
              width={120}
              height={120}
              loading="eager"
            />
          </Link>
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
            href="#joinus"
            className="hover:text-foreground transition-colors"
          >
            Join Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Toggle />
          <Link
            href="/register"
            className="hidden md:block text-sm font-medium hover:text-primary transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
