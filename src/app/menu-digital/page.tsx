import { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import ClientCard from "@/components/ui/ClientCard";
import Button from "@/components/ui/Button";
import { Camera, Zap, Layout, Tag, Coffee, GlassWater, UtilityPole, Hotel } from "lucide-react";

export const metadata: Metadata = {
    title: "Menu Digital",
    description: "Transformez votre restaurant avec un menu QR numérique, interactif et sans contact.",
};

export default function DigitalMenuPage() {
    return (
        <>
            {/* Intro Section */}
            <Section>
                <SectionHeader
                    title="Menu Digital"
                    subtitle="Révolutionnez l'interaction de vos clients avec votre carte. Une expérience fluide, hygiénique et interactive pour les restaurants modernes."
                />
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
                    <div style={{ padding: "3rem", backgroundColor: "var(--primary-light)", borderRadius: "20px", color: "var(--primary)" }}>
                        <Utensils size={64} />
                    </div>
                </div>
            </Section>

            {/* Features Grid */}
            <Section dark>
                <SectionHeader title="Fonctionnalités Clés" subtitle="Tout ce dont vous avez besoin pour gérer votre menu numériquement." />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem"
                }}>
                    <FeatureCard
                        icon={<Camera size={24} />}
                        title="Accès Instantané Sans Contact"
                        description="Les clients scannent simplement un code QR sur leur table pour voir le menu instantanément."
                    />
                    <FeatureCard
                        icon={<Zap size={24} />}
                        title="Mises à jour en Temps Réel"
                        description="Un plat est en rupture ? Changez-le en quelques secondes. Plus besoin de raturer vos menus papier."
                    />
                    <FeatureCard
                        icon={<Layout size={24} />}
                        title="Visuels de Qualité"
                        description="Présentez des photos de haute qualité de vos plats pour stimuler l'appétit et augmenter le panier moyen."
                    />
                    <FeatureCard
                        icon={<Tag size={24} />}
                        title="Tarification Dynamique"
                        description="Mettez facilement en place des tarifs Happy Hour sans frais de réimpression."
                    />
                </div>
            </Section>

            {/* Benefits */}
            <Section>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
                    <div>
                        <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--primary)" }}>Pour Votre Entreprise</h3>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✅ <span>Zéro frais de réimpression</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✅ <span>Efficacité opérationnelle accrue</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✅ <span>Meilleures données sur les plats populaires</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✅ <span>image de marque moderne et innovante</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--primary)" }}>Pour Vos Clients</h3>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✨ <span>Expérience hygiénique et sans contact</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✨ <span>Pas d'attente pour le menu physique</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✨ <span>Descriptions et images claires</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✨ <span>Filtrage facile (allergènes, veg, etc.)</span></li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Use Cases */}
            <Section dark>
                <SectionHeader title="Idéal pour Tout Établissement" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                    <FeatureCard icon={<Coffee size={24} />} title="Cafés" description="Parfait pour les environnements à rotation rapide." />
                    <FeatureCard icon={<GlassWater size={24} />} title="Restaurants" description="Présentation élégante pour menus premium." />
                    <FeatureCard icon={<Utensils size={24} />} title="Restauration Rapide" description="Affichage visuel pour des décisions rapides." />
                    <FeatureCard icon={<Hotel size={24} />} title="Hôtels" description="Idéal pour les menus en chambre." />
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
        </>
    );
}

import { Utensils as UtensilsIcon } from "lucide-react";
const Utensils = UtensilsIcon; // Re-alias for consistency
