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
        <Section>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <SectionHeader
                    title="Demander un Devis"
                    subtitle="Dites-nous en plus sur votre établissement et les outils Qreezy qui vous intéressent. Nous vous préparerons une proposition personnalisée."
                />
                <QuoteForm />
            </div>
        </Section>
    );
}
