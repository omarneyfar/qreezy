import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import QuoteForm from "@/components/ui/QuoteForm";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
    title: "Demander un Devis | Prix Menu Digital et Fidélité Restaurant Tunisie",
    description: "Obtenez un devis gratuit pour votre menu digital QR code et programme de fidélité. Solutions personnalisées pour restaurants en Tunisie. Réponse sous 24h.",
    keywords: [
        "devis menu digital",
        "prix menu QR code",
        "tarif programme fidélité",
        "devis restaurant digital Tunisie",
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
