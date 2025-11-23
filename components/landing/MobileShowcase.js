import { Smartphone, Bell, MessageSquare } from "lucide-react";

export default function MobileShowcase() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Phone Mockup */}
                    <div className="md:w-1/2 flex justify-center relative">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full transform scale-75" />
                        <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20" />

                            {/* Screen Content Placeholder */}
                            <div className="w-full h-full bg-background flex flex-col">
                                <div className="h-16 bg-secondary/50 border-b border-border flex items-end pb-2 px-4">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20" />
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="h-32 rounded-xl bg-indigo-500/10 p-4">
                                        <div className="w-1/2 h-4 bg-indigo-500/20 rounded mb-2" />
                                        <div className="w-3/4 h-3 bg-indigo-500/10 rounded" />
                                    </div>
                                    <div className="h-20 rounded-xl bg-secondary/50" />
                                    <div className="h-20 rounded-xl bg-secondary/50" />
                                    <div className="h-20 rounded-xl bg-secondary/50" />
                                </div>
                                {/* Bottom Nav */}
                                <div className="mt-auto h-16 border-t border-border flex justify-around items-center px-4">
                                    <div className="w-6 h-6 rounded bg-foreground/20" />
                                    <div className="w-6 h-6 rounded bg-foreground/20" />
                                    <div className="w-6 h-6 rounded bg-foreground/20" />
                                    <div className="w-6 h-6 rounded bg-foreground/20" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Your Campus in Your Pocket.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            The full power of Classora, optimized for mobile. Get push
                            notifications for class changes, chat on the go, and navigate
                            campus with GPS-enabled maps.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500">
                                    <Bell className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">
                                        Instant Notifications
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Never miss a class cancellation or grade update.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Chat on the Go</h3>
                                    <p className="text-muted-foreground">
                                        Keep the conversation going wherever you are.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">
                                        Native Experience
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Smooth, fast, and designed for your device.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10">
                            <button className="h-12 px-6 rounded-lg bg-foreground text-background font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
                                Download on App Store
                            </button>
                            <button className="h-12 px-6 rounded-lg border border-border font-medium flex items-center gap-2 hover:bg-secondary/50 transition-colors">
                                Get it on Google Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
