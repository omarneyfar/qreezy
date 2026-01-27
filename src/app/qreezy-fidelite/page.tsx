"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import Button from "@/components/ui/Button";
import { Smartphone, BarChart3, Mail, Lock, Heart } from "lucide-react";

export default function FidelityPage() {
    const steps = [
        { title: "Le client scanne", description: "Le client scanne un code QR unique après son achat." },
        { title: "Gagne des points", description: "Les points sont automatiques." },
        { title: "Suit son avance", description: "Les clients voient leur progression sur mobile." },
        { title: "Profite des cadeaux", description: "Les points sont échangés contre des cadeaux." }
    ];

    return (
        <>
            {/* Intro Section */}
            <Section>
                <SectionHeader
                    icon={<Heart size={48} fill="currentColor" />}
                    title="Qreezy Fidélité"
                    subtitle="Transformez les clients occasionnels en habitués fidèles. Un programme de fidélité optimisé pour mobile."
                />
            </Section>

            {/* How It Works */}
            <Section dark>
                <SectionHeader title="Comment ça marche" subtitle="Un processus simple en 4 étapes pour vos clients." />
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">
                                {index + 1}
                            </div>
                            <h4 className="step-title">{step.title}</h4>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Features Grid */}
            <Section>
                <SectionHeader title="Outils de Fidélité" subtitle="Développez des relations durables avec vos clients." />
                <div className="features-grid">
                    <FeatureCard
                        icon={<Smartphone size={24} />}
                        title="Sans Application"
                        description="Pas d'application à télécharger. Cela fonctionne directement dans le navigateur."
                    />
                    <FeatureCard
                        icon={<BarChart3 size={24} />}
                        title="Analytics"
                        description="Obtenez des informations sur le comportement des clients et leur fréquence."
                    />
                    <FeatureCard
                        icon={<Mail size={24} />}
                        title="Automatisations"
                        description="Envoyez des offres spéciales aux clients en manque d'activité."
                    />
                    <FeatureCard
                        icon={<Lock size={24} />}
                        title="Suivi Sécurisé"
                        description="Un système anti-fraude garantit l'intégrité de vos points."
                    />
                </div>
            </Section>

            {/* Why Qreezy */}
            <Section dark>
                <div className="benefits-card animate-fade-in">
                    <h3 className="benefits-card-title">Pourquoi choisir Qreezy Fidélité ?</h3>
                    <div className="benefits-row">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <Heart size={32} />
                            </div>
                            <div className="benefit-text">
                                <strong>Plus de visites</strong>
                                <p>Les clients fidèles visitent 30% plus souvent.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <Heart size={32} />
                            </div>
                            <div className="benefit-text">
                                <strong>Panier Moyen +20%</strong>
                                <p>Les membres dépensent plus par transaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <CTA
                    title="Créez votre communauté"
                    description="Prêt à commencer à récompenser vos clients ? Bâtissons ensemble votre programme."
                    buttonText="Demander un Devis"
                    buttonLink="/devis"
                />
            </Section>

            <style jsx>{`
                .steps-grid, .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }

                .step-item {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.25rem;
                }

                .step-number {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background-color: var(--primary);
                    color: #FFFFFF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    fontWeight: 800;
                    fontSize: 1.5rem;
                    box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.2);
                }

                .step-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                }

                .step-description {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.5;
                }

                .benefits-card {
                    max-width: 900px;
                    margin: 0 auto;
                    background: white;
                    padding: 4rem;
                    border-radius: 24px;
                    box-shadow: var(--shadow-md);
                }

                .benefits-card-title {
                    font-size: 2rem;
                    margin-bottom: 3rem;
                    text-align: center;
                    font-weight: 800;
                }

                .benefits-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                }

                .benefit-item {
                    display: flex;
                    gap: 1.5rem;
                    align-items: flex-start;
                }

                .benefit-icon {
                    color: var(--primary);
                    flex-shrink: 0;
                }

                .benefit-text strong {
                    display: block;
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                }

                .benefit-text p {
                    color: var(--text-secondary);
                    font-size: 1rem;
                }

                @media (max-width: 1024px) {
                    .steps-grid, .features-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .steps-grid, .features-grid, .benefits-row {
                        grid-template-columns: 1fr;
                    }
                    .benefits-card {
                        padding: 3rem 2rem;
                    }
                }
            `}</style>
        </>
    );
}
