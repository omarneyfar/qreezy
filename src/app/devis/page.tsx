import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import QuoteForm from "@/components/ui/QuoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Demander un Devis",
    description: "Parlez-nous de votre entreprise et de vos besoins en solutions QR.",
};

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
