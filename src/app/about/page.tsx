import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import Link from "next/link";
import { Users, Rocket, Palette, Instagram } from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
    title: "À propos de Qreezy | Entreprise Tech Tunisie",
    description: "Qreezy: startup tunisienne spécialisée dans les solutions digitales pour restaurants. Notre mission: moderniser la restauration avec la technologie QR.",
    keywords: [
        "Qreezy entreprise",
        "startup Tunisie",
        "solutions digitales Tunis",
        "entreprise tech restauration",
    ],
    canonical: "/about",
});

export default function AboutPage() {
    return (
        <>
            <Section className="pt-12 md:pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader
                        centered
                        title="Notre Mission"
                        subtitle="Combler le fossé entre les commerces physiques et la commodité numérique grâce à la technologie QR intelligente."
                    />
                    <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-3xl mx-auto mt-8">
                        Chez Qreezy, nous pensons que la technologie moderne ne devrait pas être compliquée ou coûteuse.
                        Notre mission est de fournir aux petites et moyennes entreprises les mêmes avantages numériques
                        que les grandes corporations—en commençant par l&apos;outil le plus puissant de
                        l&apos;interface physique-numérique : le code QR.
                    </p>
                    <Link
                        href="https://instagram.com/qreezy.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity font-semibold"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>Suivez-nous @qreezy.tn</span>
                    </Link>
                </div>
            </Section>

            <Section dark>
                <SectionHeader centered title="Nos Valeurs" subtitle="Les principes qui guident tout ce que nous construisons." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Users className="w-6 h-6" />}
                        title="Simplicité d'Abord"
                        description="Nous créons des outils intuitifs pour les propriétaires d'entreprise et leurs clients. Pas de courbe d'apprentissage abrupte."
                    />
                    <FeatureCard
                        icon={<Rocket className="w-6 h-6" />}
                        title="Valeur Immédiate"
                        description="Nos solutions sont conçues pour offrir un retour sur investissement dès le premier jour, par des économies ou des ventes accrues."
                    />
                    <FeatureCard
                        icon={<Palette className="w-6 h-6" />}
                        title="Excellence du Design"
                        description="Nous pensons que les outils professionnels doivent être aussi beaux et bien conçus que les marques qu'ils soutiennent."
                    />
                </div>
            </Section>
        </>
    );
}
