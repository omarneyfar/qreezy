"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTA from "@/components/ui/CTA";

export default function HowItWorks() {
    const steps = [
        {
            title: "Consultation & Audit",
            description: "We analyze your business needs, menu structure, or loyalty goals to design the perfect QR setup.",
            icon: "📋"
        },
        {
            title: "Digital Integration",
            description: "Our team digitizes your menu or configures your fidelity program onto the Qreezy platform.",
            icon: "💻"
        },
        {
            title: "QR Code Deployment",
            description: "We provide high-quality, branded QR materials for your tables, checkout, or marketing collateral.",
            icon: "🖼️"
        },
        {
            title: "Launch & Support",
            description: "Go live! We provide staff training and ongoing technical support to ensure smooth operations.",
            icon: "🚀"
        }
    ];

    return (
        <>
            <Section>
                <SectionHeader
                    title="Simple Implementation"
                    subtitle="How we bring Qreezy tools to your business, from initial contact to successful launch."
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
                                fontSize: "2.5rem",
                            }}>
                                {step.icon}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                                    <span style={{ fontWeight: "700", color: "var(--primary)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Step {index + 1}</span>
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
                    title="Ready to Start Your Journey?"
                    description="The process is simple and the results are immediate. Schedule your consultation today."
                    buttonText="Contact Our Team"
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
