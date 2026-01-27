import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import { Users, Rocket, Palette } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À propos",
    description: "Découvrez la mission de Qreezy : combler le fossé entre le monde physique et le numérique.",
};

export default function AboutPage() {
    return (
        <>
            <Section>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <SectionHeader
                        title="Notre Mission"
                        subtitle="Combler le fossé entre les commerces physiques et la commodité numérique grâce à la technologie QR intelligente."
                    />
                    <p style={{ fontSize: "1.25rem", textAlign: "center", lineHeight: "1.8" }}>
                        Chez Qreezy, nous pensons que la technologie moderne ne devrait pas être compliquée ou coûteuse.
                        Notre mission est de fournir aux petites et moyennes entreprises les mêmes avantages numériques
                        que les grandes corporations—en commençant par l'outil le plus puissant de
                        l'interface physique-numérique : le code QR.
                    </p>
                </div>
            </Section>

            <Section dark>
                <SectionHeader title="Nos Valeurs" subtitle="Les principes qui guident tout ce que nous construisons." />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem"
                }}>
                    <FeatureCard
                        icon={<Users size={24} />}
                        title="Simplicité d'Abord"
                        description="Nous créons des outils intuitifs pour les propriétaires d'entreprise et leurs clients. Pas de courbe d'apprentissage abrupte."
                    />
                    <FeatureCard
                        icon={<Rocket size={24} />}
                        title="Valeur Immédiate"
                        description="Nos solutions sont conçues pour offrir un retour sur investissement dès le premier jour, par des économies ou des ventes accrues."
                    />
                    <FeatureCard
                        icon={<Palette size={24} />}
                        title="Excellence du Design"
                        description="Nous pensons que les outils professionnels doivent être aussi beaux et bien conçus que les marques qu'ils soutiennent."
                    />
                </div>
            </Section>
        </>
    );
}
