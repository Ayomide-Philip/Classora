import { GraduationCap, BookOpen, Building2 } from "lucide-react";

export default function Personas() {
    return (
        <section className="py-24 bg-secondary/20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Built for Every Role on Campus
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Whether you're learning, teaching, or managing, Classora adapts to
                        your needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <PersonaCard
                        icon={<GraduationCap className="w-8 h-8 text-indigo-500" />}
                        role="For Students"
                        quote="Finally, I don't have to check five different apps just to know where I'm supposed to be. Classora saves me at least an hour a week."
                        feature="Unified Calendar & Chat"
                    />
                    <PersonaCard
                        icon={<BookOpen className="w-8 h-8 text-purple-500" />}
                        role="For Educators"
                        quote="I spend less time answering logistical emails and more time teaching. The automated reminders are a lifesaver for my students."
                        feature="Roster Management"
                    />
                    <PersonaCard
                        icon={<Building2 className="w-8 h-8 text-blue-500" />}
                        role="For Class Representatives"
                        quote="A connected campus is an engaged campus. Classora gives us the support we need in managing our classes efficently"
                        feature="Campus-wide Analytics"
                    />
                </div>
            </div>
        </section>
    );
}

function PersonaCard({ icon, role, quote, feature }) {
    return (
        <div className="bg-background p-8 rounded-2xl border border-border relative">
            <div className="absolute -top-6 left-8 w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm">
                {icon}
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">{role}</h3>
                <blockquote className="text-muted-foreground italic mb-6">
                    "{quote}"
                </blockquote>
                <div className="pt-6 border-t border-border">
                    <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">
                        Top Feature
                    </p>
                    <p className="font-medium">{feature}</p>
                </div>
            </div>
        </div>
    );
}
