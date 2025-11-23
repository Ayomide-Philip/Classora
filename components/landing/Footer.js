import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary/20 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-indigo-600 mb-4 inline-block">
                            Classora
                        </Link>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            The all-in-one academic command center. We're on a mission to
                            simplify education management for students and educators worldwide.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><Link href="#" className="hover:text-indigo-500 transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-indigo-500 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-indigo-500 transition-colors">Download App</Link></li>
                            <li><Link href="#" className="hover:text-indigo-500 transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><Link href="#" className="hover:text-indigo-500 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-indigo-500 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-indigo-500 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-indigo-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2025 Classora Inc. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-muted-foreground hover:text-indigo-500 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-indigo-500 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-indigo-500 transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
