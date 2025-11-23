import { BookOpen, MessageCircle, MapPin } from "lucide-react";

export default function FeatureGrid() {
    return (
        <section id="features" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-wider mb-2">
                        Core Features
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Your Entire Academic World. One Tab.
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Stop switching apps. Classora unifies every aspect of your university
                        experience into a cohesive, beautiful interface designed for focus.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<BookOpen className="w-6 h-6 text-white" />}
                        color="bg-blue-500"
                        title="Manage Less. Learn More."
                        description="Your rosters, resources, and schedules are automatically organized. No more digging for syllabi or wondering who’s in your group project."
                        benefit="Everything you need for every class, one click away."
                    />
                    <FeatureCard
                        icon={<MessageCircle className="w-6 h-6 text-white" />}
                        color="bg-purple-500"
                        title="Connect Instantly."
                        description="Built-in class forums, direct messaging, and community boards keep you connected to peers and professors without the distraction of social media."
                        benefit="Purpose-built communication that respects your focus."
                    />
                    <FeatureCard
                        icon={<MapPin className="w-6 h-6 text-white" />}
                        color="bg-pink-500"
                        title="Never Get Lost Again."
                        description="Interactive campus maps with precise venue locations. Get directions, find study spots, and see where your next class is instantly."
                        benefit="Navigate your campus like a pro from Day 1."
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, color, title, description, benefit }) {
    return (
        <div className="flex flex-col p-8 rounded-2xl bg-background border border-border hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group">
            <div
                className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
            >
                {icon}
            </div>
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
            <div className="pt-6 border-t border-border mt-auto">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {benefit}
                </p>
            </div>
        </div>
    );
}
