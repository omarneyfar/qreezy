"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTA from "@/components/ui/CTA";
import { ClipboardList, Code, MapPin, Rocket } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            title: "Consultation & Audit",
            description: "Nous analysons vos besoins, la structure de votre menu ou vos objectifs de fidélisation.",
            icon: <ClipboardList size={32} />
        },
        {
            title: "Intégration Digitale",
            description: "Notre équipe numérise votre menu ou configure votre programme sur la plateforme Qreezy.",
            icon: <Code size={32} />
        },
        {
            title: "Déploiement des Codes QR",
            description: "Nous fournissons des supports QR de haute qualité pour vos tables ou votre comptoir.",
            icon: <MapPin size={32} />
        },
        {
            title: "Lancement & Support",
            description: "C'est parti ! Nous formons votre personnel et assurons un support technique continu.",
            icon: <Rocket size={32} />
        }
    ];

    return (
        <>
            <Section>
                <SectionHeader
                    title="Une Mise en Place Simple"
                    subtitle="Comment nous intégrons les outils Qreezy dans votre entreprise, de l'audit au lancement."
                />

                <div style={{ maxWidth: "900px", margin: "4rem auto 0", display: "flex", flexDirection: "column", gap: "4rem" }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{
                            display: "flex",
                            gap: "2.5rem",
                            alignItems: "center",
                            flexDirection: index % 2 === 0 ? "row" : "row-reverse"
                        }} className="step-row">
                            <div style={{
                                flex: "0 0 80px",
                                height: "80px",
                                borderRadius: "20px",
                                backgroundColor: "var(--primary-light)",
                                color: "var(--primary)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                {step.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                                    <span style={{ fontWeight: "700", color: "var(--primary)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Étape {index + 1}</span>
                                    <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border)" }}></div>
                                </div>
                                <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{step.title}</h3>
                                <p style={{ fontSize: "1.125rem" }}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section dark>
                <CTA
                    title="Prêt à commencer ?"
                    description="Le processus est simple et les résultats sont immédiats. Planifiez votre consultation aujourd'hui."
                    buttonText="Contacter l'Équipe"
                    buttonLink="/devis"
                />
            </Section>

            <style jsx>{`
        @media (max-width: 768px) {
          .step-row {
            flex-direction: column !important;
            text-align: center;
            gap: 1.5rem;
          }
          .step-row div:first-child {
            margin: 0 auto;
          }
        }
      `}</style>
        </>
    );
}
