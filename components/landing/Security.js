import { ShieldCheck, Lock, Server } from "lucide-react";

export default function Security() {
    return (
        <section className="py-24 bg-secondary/20 border-y border-border/50">
            <div className="container mx-auto px-4 max-w-6xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Enterprise-Grade Security. <br />
                    <span className="text-indigo-500">Student-First Privacy.</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
                    We take your data seriously. Classora is built with industry-standard
                    encryption and strict privacy controls to ensure your academic life
                    stays private.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
                        <p className="text-muted-foreground">
                            Your chats and personal data are encrypted in transit and at rest.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">GDPR & FERPA Compliant</h3>
                        <p className="text-muted-foreground">
                            We respect educational data standards and your right to privacy.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                            <Server className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">99.9% Uptime</h3>
                        <p className="text-muted-foreground">
                            Reliable infrastructure that works when you need it most, especially
                            during finals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
