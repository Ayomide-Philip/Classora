import { X, Check } from "lucide-react";

export default function ProblemSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Academic Life is Hard Enough. <br />
                        <span className="text-indigo-500">Your Tools Shouldn't Be.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Between juggling three different messaging apps, a clunky LMS, lost
                        emails, and a calendar that never syncs, it’s a miracle anyone finds
                        their classroom. The "modern" campus experience is broken—fragmented,
                        noisy, and stressful.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* The Old Way */}
                    <div className="p-8 rounded-2xl bg-red-500/5 border border-red-200 dark:border-red-900/30">
                        <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-2">
                            <span className="p-1 rounded bg-red-100 dark:bg-red-900/50">
                                <X className="w-4 h-4" />
                            </span>
                            The Old Way (Chaos)
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <span>Missed announcements in buried emails</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <span>"What room is this in?" panic</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <span>Disconnected study groups & chats</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <span>Cluttered, outdated portals</span>
                            </li>
                        </ul>
                    </div>

                    {/* The Classora Way */}
                    <div className="p-8 rounded-2xl bg-green-500/5 border border-green-200 dark:border-green-900/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-6 flex items-center gap-2">
                            <span className="p-1 rounded bg-green-100 dark:bg-green-900/50">
                                <Check className="w-4 h-4" />
                            </span>
                            The Classora Way (Clarity)
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-foreground font-medium">
                                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span>Centralized, real-time updates</span>
                            </li>
                            <li className="flex items-start gap-3 text-foreground font-medium">
                                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span>Interactive venue mapping</span>
                            </li>
                            <li className="flex items-start gap-3 text-foreground font-medium">
                                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span>Unified class chats & resources</span>
                            </li>
                            <li className="flex items-start gap-3 text-foreground font-medium">
                                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span>One dashboard for everything</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
