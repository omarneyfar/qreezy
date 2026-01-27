import { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import ClientCard from "@/components/ui/ClientCard";
import Button from "@/components/ui/Button";
import { Smartphone, BarChart3, Mail, Lock, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Qreezy Fidélité",
    description: "Boostez la rétention client avec un programme de fidélité numérique pour votre entreprise.",
};

export default function FidelityPage() {
    const steps = [
        { title: "Le client scanne", description: "Le client scanne un code QR unique après son achat." },
        { title: "Gagne des points", description: "Les points sont automatiquement ajoutés à son portefeuille numérique." },
        { title: "Suit sa progression", description: "Les clients voient leur progression de récompense sur leur téléphone." },
        { title: "Profite des cadeaux", description: "Les récompenses acquises peuvent être utilisées pour des réductions." }
    ];

    return (
        <>
            {/* Intro Section */}
            <Section>
                <SectionHeader
                    title="Qreezy Fidélité"
                    subtitle="Transformez les clients occasionnels en habitués fidèles. Un programme de fidélité optimisé pour mobile."
                />
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
                    <div style={{ padding: "3rem", backgroundColor: "var(--primary-light)", borderRadius: "20px", color: "var(--primary)" }}>
                        <Star size={64} fill="currentColor" />
                    </div>
                </div>
            </Section>

            {/* How It Works */}
            <Section dark>
                <SectionHeader title="Comment ça marche" subtitle="Un processus simple en 4 étapes pour vos clients." />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--primary)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.25rem" }}>
                                {index + 1}
                            </div>
                            <h4 style={{ fontSize: "1.25rem" }}>{step.title}</h4>
                            <p style={{ fontSize: "0.95rem" }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Features Grid */}
            <Section>
                <SectionHeader title="Outils de Fidélité Puissants" subtitle="Développez des relations durables avec vos clients." />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem"
                }}>
                    <FeatureCard
                        icon={<Smartphone size={24} />}
                        title="Sans Application"
                        description="Pas d'application à télécharger. Cela fonctionne directement dans le navigateur mobile."
                    />
                    <FeatureCard
                        icon={<BarChart3 size={24} />}
                        title="Tableau de Bord Analytics"
                        description="Obtenez des informations sur le comportement des clients et leur fréquence de visite."
                    />
                    <FeatureCard
                        icon={<Mail size={24} />}
                        title="Campagnes Automatisées"
                        description="Envoyez des offres spéciales aux clients qui ne sont pas revenus depuis un certain temps."
                    />
                    <FeatureCard
                        icon={<Lock size={24} />}
                        title="Suivi Sécurisé"
                        description="Un système anti-fraude garantit que les points sont gagnés pour des achats réels."
                    />
                </div>
            </Section>

            {/* Benefits List */}
            <Section dark>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h3 style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>Pourquoi choisir Qreezy Fidélité ?</h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <span className="text-primary"><TrendingDown size={28} /></span>
                            <div>
                                <strong style={{ display: "block", fontSize: "1.125rem", color: "var(--foreground)" }}>Augmenter la fréquence de visite</strong>
                                <p>Les clients fidèles visitent 30% plus souvent que les non-membres.</p>
                            </div>
                        </li>
                        <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <span className="text-primary"><Star size={28} /></span>
                            <div>
                                <strong style={{ display: "block", fontSize: "1.125rem", color: "var(--foreground)" }}>Panier moyen plus élevé</strong>
                                <p>Les membres dépensent jusqu'à 20% de plus par transaction.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <CTA
                    title="Créez votre communauté"
                    description="Prêt à commencer à récompenser vos clients ? Bâtissons ensemble votre programme de fidélité."
                    buttonText="Demander un Devis"
                    buttonLink="/devis"
                />
            </Section>
        </>
    );
}

import { TrendingUp as TrendingDown } from "lucide-react"; // Using TrendingUp for growth
