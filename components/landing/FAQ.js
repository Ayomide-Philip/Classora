"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    <FAQItem
                        question="Is Classora free for students?"
                        answer="Yes! The core student experience is free. We offer premium features for advanced analytics and extra storage, but the essentials will always be free."
                    />
                    <FAQItem
                        question="Can I use Classora if my school isn't officially signed up?"
                        answer="Absolutely. You can create personal workspaces and invite classmates to join your study groups immediately without waiting for admin approval."
                    />
                    <FAQItem
                        question="How does the venue mapping work?"
                        answer="We use open-source mapping data combined with user-contributed venue details to provide the most accurate campus maps available. You can even contribute updates!"
                    />
                    <FAQItem
                        question="Is my data safe?"
                        answer="Security is our top priority. We use bank-grade encryption and never sell your personal data to advertisers."
                    />
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-border rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left bg-background hover:bg-secondary/20 transition-colors"
            >
                <span className="font-semibold text-lg">{question}</span>
                {isOpen ? (
                    <Minus className="w-5 h-5 text-indigo-500 shrink-0" />
                ) : (
                    <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}
