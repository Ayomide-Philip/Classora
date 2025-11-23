import Link from "next/link";
import Image from "next/image";
export default function RootFooter() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/Classora_Logo.png"
                alt="Classora Logo"
                width={130}
                height={130}
              />
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
          <p>© {new Date().getFullYear()} Classora Inc. All rights reserved.</p>
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
  );
}
