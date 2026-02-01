import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import QuoteForm from "@/components/ui/QuoteForm";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
    title: "Devis Menu QR Code Gratuit | Prix Solution Digital Restaurant | Qreezy",
    description: "Demandez votre devis gratuit pour un Menu QR Code et Programme de Fidélité en Tunisie. Rapport qualité-prix imbattable pour restaurants, cafés et hôtels.",
    keywords: [
        // French - Quote & Pricing
        "devis menu digital",
        "prix menu QR code",
        "tarif programme fidélité",
        "devis restaurant digital Tunisie",
        "coût menu numérique",
        "prix digitalisation restaurant",
        // French - Action & Intent
        "demander devis Qreezy",
        "obtenir prix menu digital",
        "devis gratuit menu QR",
        "tarif solution digitale restaurant",
        "estimation prix menu digital Tunisie",
        // English
        "digital menu pricing",
        "QR menu cost",
        "restaurant digitalization quote",
        "get quote Tunisia",
        // Conversion-focused
        "essai gratuit menu digital",
        "démo Qreezy",
    ],
    canonical: "/devis",
});

export default function DevisPage() {
    return (
        <Section className="pt-12 md:pt-20">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    centered
                    title="Demander un Devis"
                    subtitle="Dites-nous en plus sur votre établissement et les outils Qreezy qui vous intéressent. Nous vous préparerons une proposition personnalisée."
                />
                <div className="mt-12">
                    <QuoteForm />
                </div>
            </div>
        </Section>
    );
}
