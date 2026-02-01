import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import { Button } from "@/components/ui/button";
import { Smartphone, BarChart3, Mail, Lock, Heart, ArrowRight } from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
    title: "Programme Fidélité Digital Restaurant | Carte Fidélité QR Code | Qreezy",
    description: "Boostez la rétention client avec notre Programme de Fidélité Digital en Tunisie. Carte fidélité QR code sans application, simple et efficace pour restaurants et cafés.",
    keywords: [
        // French - Core
        "programme fidélité restaurant",
        "carte fidélité digitale",
        "fidélité client restaurant",
        "programme points restaurant",
        // French - Long-tail & Benefits
        "augmenter fidélité client restaurant",
        "système de récompense restaurant",
        "carte fidélité numérique Tunisie",
        "programme fidélité sans application",
        "fidélisation client restauration",
        "comment fidéliser clients restaurant",
        "programme de points digital",
        "carte cadeau digitale restaurant",
        // English
        "loyalty program Tunisia",
        "digital loyalty card",
        "restaurant loyalty system",
        "customer retention restaurant",
        "rewards program restaurant",
        "loyalty app restaurant",
        // Business Impact
        "augmenter panier moyen restaurant",
        "retour client fréquent",
        "programme récompense Tunisie",
        "fidelité",
        "carte fidelité"
    ],
    canonical: "/qreezy-fidelity",
});

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
            <Section className="pt-12 md:pt-20">
                <SectionHeader
                    centered
                    icon={<Heart className="w-12 h-12" fill="currentColor" />}
                    title="Qreezy Fidélité"
                    subtitle="Transformez les clients occasionnels en habitués fidèles. Un programme de fidélité optimisé pour mobile."
                />
                <div className="flex justify-center mt-8">
                    <Button asChild size="lg" className="h-14 px-8 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 group">
                        <Link href="/devis">
                            Obtenir un Devis
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </Section>

            {/* How It Works */}
            <Section dark>
                <SectionHeader centered title="Comment ça marche" subtitle="Un processus simple en 4 étapes pour vos clients." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 bg-white border border-border rounded-3xl shadow-sm hover:shadow-md transition-all">
                            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-2xl mb-6 shadow-lg shadow-primary/20">
                                {index + 1}
                            </div>
                            <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                            <p className="text-secondary leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Features Grid */}
            <Section>
                <SectionHeader centered title="Outils de Fidélité" subtitle="Développez des relations durables avec vos clients." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        icon={<Smartphone className="w-6 h-6" />}
                        title="Sans Application"
                        description="Pas d'application à télécharger. Cela fonctionne directement dans le navigateur."
                    />
                    <FeatureCard
                        icon={<BarChart3 className="w-6 h-6" />}
                        title="Analytics"
                        description="Obtenez des informations sur le comportement des clients et leur fréquence."
                    />
                    <FeatureCard
                        icon={<Mail className="w-6 h-6" />}
                        title="Automatisations"
                        description="Envoyez des offres spéciales aux clients en manque d'activité."
                    />
                    <FeatureCard
                        icon={<Lock className="w-6 h-6" />}
                        title="Suivi Sécurisé"
                        description="Un système anti-fraude garantit l'intégrité de vos points."
                    />
                </div>
            </Section>

            {/* Why Qreezy */}
            <Section dark>
                <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] border border-border shadow-sm">
                    <h3 className="text-3xl font-extrabold text-center mb-12">Pourquoi choisir Qreezy Fidélité ?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex gap-6 items-start">
                            <div className="text-primary p-3 bg-primary/5 rounded-2xl shrink-0">
                                <Heart className="w-8 h-8" />
                            </div>
                            <div>
                                <strong className="block text-xl font-bold mb-2">Plus de visites</strong>
                                <p className="text-secondary text-lg">Les clients fidèles visitent 30% plus souvent.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="text-primary p-3 bg-primary/5 rounded-2xl shrink-0">
                                <Heart className="w-8 h-8" />
                            </div>
                            <div>
                                <strong className="block text-xl font-bold mb-2">Panier Moyen +20%</strong>
                                <p className="text-secondary text-lg">Les membres dépensent plus par transaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="pb-20">
                <CTA
                    title="Créez votre communauté"
                    description="Prêt à commencer à récompenser vos clients ? Bâtissons ensemble votre programme."
                    buttonText="Demander un Devis"
                    buttonLink="/devis"
                />
            </Section>
        </>
    );
}
