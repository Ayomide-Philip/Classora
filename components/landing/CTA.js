import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="relative rounded-3xl bg-indigo-600 overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center text-white">
                    {/* Background Noise/Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-90" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Ready to Transform Your <br />
                            Academic Experience?
                        </h2>
                        <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join thousands of students and educators who trust Classora to
                            simplify their workflow, strengthen their connections, and elevate
                            their learning.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/auth/register"
                                className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-indigo-600 font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-50 transition-all hover:scale-105 shadow-xl shadow-indigo-900/20"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/demo"
                                className="w-full sm:w-auto h-14 px-8 rounded-full border-2 border-white/30 bg-transparent text-white font-bold text-lg flex items-center justify-center hover:bg-white/10 transition-all hover:scale-105"
                            >
                                Request a Demo
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-indigo-200 opacity-80">
                            Free for students • No credit card required
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
