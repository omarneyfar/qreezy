"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTA from "@/components/ui/CTA";
import { ClipboardList, Code, MapPin, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
    const steps = [
        {
            title: "Consultation & Audit",
            description: "Nous analysons vos besoins, la structure de votre menu ou vos objectifs de fidélisation.",
            icon: <ClipboardList className="w-8 h-8" />
        },
        {
            title: "Intégration Digitale",
            description: "Notre équipe numérise votre menu ou configure votre programme sur la plateforme Qreezy.",
            icon: <Code className="w-8 h-8" />
        },
        {
            title: "Déploiement des Codes QR",
            description: "Nous fournissons des supports QR de haute qualité pour vos tables ou votre comptoir.",
            icon: <MapPin className="w-8 h-8" />
        },
        {
            title: "Lancement & Support",
            description: "C'est parti ! Nous formons votre personnel et assurons un support technique continu.",
            icon: <Rocket className="w-8 h-8" />
        }
    ];

    return (
        <>
            <Section className="pt-12 md:pt-20">
                <SectionHeader
                    centered
                    title="Une Mise en Place Simple"
                    subtitle="Comment nous intégrons les outils Qreezy dans votre entreprise, de l'audit au lancement."
                />

                <div className="max-w-4xl mx-auto mt-16 md:mt-24 space-y-16 md:space-y-24">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-col md:flex-row gap-8 md:gap-16 items-center",
                                index % 2 !== 0 && "md:flex-row-reverse"
                            )}
                        >
                            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-primary/5 text-primary flex items-center justify-center shadow-inner">
                                {step.icon}
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <div className={cn(
                                    "flex items-center gap-4 mb-4",
                                    index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                                )}>
                                    <span className="font-extrabold text-primary text-sm uppercase tracking-widest bg-primary/5 px-4 py-1 rounded-full">Étape {index + 1}</span>
                                    <div className="flex-1 h-px bg-border hidden md:block"></div>
                                </div>
                                <h3 className="text-3xl font-extrabold text-foreground mb-4">{step.title}</h3>
                                <p className="text-xl text-secondary leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section dark className="pb-20">
                <CTA
                    title="Prêt à commencer ?"
                    description="Le processus est simple et les résultats sont immédiats. Planifiez votre consultation aujourd'hui."
                    buttonText="Contacter l'Équipe"
                    buttonLink="/devis"
                />
            </Section>
        </>
    );
}
