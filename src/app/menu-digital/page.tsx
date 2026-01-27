"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import Button from "@/components/ui/Button";
import { Camera, Zap, Layout, Tag, Coffee, GlassWater, Utensils, Hotel, CheckCircle2, Sparkles } from "lucide-react";

export default function DigitalMenuPage() {
    return (
        <>
            {/* Intro Section */}
            <Section>
                <SectionHeader
                    icon={<Utensils size={48} />}
                    title="Menu Digital"
                    subtitle="Révolutionnez l'interaction de vos clients avec votre carte. Une expérience fluide, hygiénique et interactive pour les restaurants modernes."
                />
            </Section>

            {/* Features Grid */}
            <Section dark>
                <SectionHeader
                    title="Fonctionnalités Clés"
                    subtitle="Tout ce dont vous avez besoin pour gérer votre menu numériquement."
                />
                <div className="features-grid">
                    <FeatureCard
                        icon={<Camera size={24} />}
                        title="Accès Instantané"
                        description="Les clients scannent simplement un code QR sur leur table pour voir le menu."
                    />
                    <FeatureCard
                        icon={<Zap size={24} />}
                        title="Mises à jour Directes"
                        description="Changez vos plats en quelques secondes. Plus besoin de raturer vos menus papier."
                    />
                    <FeatureCard
                        icon={<Layout size={24} />}
                        title="Visuels de Qualité"
                        description="Présentez des photos de vos plats pour augmenter le panier moyen."
                    />
                    <FeatureCard
                        icon={<Tag size={24} />}
                        title="Prix Dynamique"
                        description="Mettez facilement en place des tarifs Happy Hour sans frais de réimpression."
                    />
                </div>
            </Section>

            {/* Benefits */}
            <Section>
                <div className="benefits-container">
                    <div className="benefit-column">
                        <h3 className="benefit-title">Pour Votre Entreprise</h3>
                        <ul className="benefit-list">
                            <li><CheckCircle2 size={20} className="text-primary" /> <span>Zéro frais de réimpression</span></li>
                            <li><CheckCircle2 size={20} className="text-primary" /> <span>Efficacité opérationnelle accrue</span></li>
                            <li><CheckCircle2 size={20} className="text-primary" /> <span>Image de marque moderne</span></li>
                            <li><CheckCircle2 size={20} className="text-primary" /> <span>Données sur les plats populaires</span></li>
                        </ul>
                    </div>
                    <div className="benefit-column">
                        <h3 className="benefit-title">Pour Vos Clients</h3>
                        <ul className="benefit-list">
                            <li><Sparkles size={20} className="text-primary" /> <span>Expérience sans contact</span></li>
                            <li><Sparkles size={20} className="text-primary" /> <span>Pas d'attente pour le menu</span></li>
                            <li><Sparkles size={20} className="text-primary" /> <span>Images claires et précises</span></li>
                            <li><Sparkles size={20} className="text-primary" /> <span>Filtrage facile (allergènes)</span></li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Use Cases */}
            <Section dark>
                <SectionHeader title="Idéal pour Tout Établissement" />
                <div className="use-cases-grid">
                    <FeatureCard icon={<Coffee size={24} />} title="Cafés" description="Pour les environnements à rotation rapide." />
                    <FeatureCard icon={<GlassWater size={24} />} title="Restaurants" description="Présentation élégante pour menus premium." />
                    <FeatureCard icon={<Utensils size={24} />} title="Tavernes" description="Affichage visuel pour des décisions rapides." />
                    <FeatureCard icon={<Hotel size={24} />} title="Hôtels" description="Idéal pour les menus en chambre (Room Service)." />
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <CTA
                    title="Prêt à passer au numérique ?"
                    description="Offrez à votre menu la mise à jour qu'il mérite. Commencez votre transition aujourd'hui."
                    buttonText="Obtenir un Devis"
                    buttonLink="/devis"
                />
            </Section>

            <style jsx>{`
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }

                .use-cases-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.5rem;
                }

                .benefits-container {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 4rem;
                }

                .benefit-title {
                    font-size: 1.75rem;
                    margin-bottom: 2rem;
                    color: var(--primary);
                    font-weight: 800;
                }

                .benefit-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    list-style: none;
                    padding: 0;
                }

                .benefit-list li {
                    display: flex;
                    gap: 0.75rem;
                    font-size: 1.1rem;
                }

                @media (max-width: 1024px) {
                    .features-grid, .use-cases-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .features-grid, .use-cases-grid, .benefits-container {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }
            `}</style>
        </>
    );
}
