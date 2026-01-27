import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Mail, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez l'équipe Qreezy pour toute question ou support.",
};

export default function ContactPage() {
    return (
        <Section>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                <SectionHeader
                    title="Contactez-nous"
                    subtitle="Une question ou un projet sur mesure ? Nous sommes là pour vous aider."
                />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", margin: "4rem 0" }}>
                    <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                        <div className="text-primary" style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}><Mail size={40} /></div>
                        <h4 style={{ marginBottom: "0.5rem" }}>Email</h4>
                        <p style={{ color: "var(--primary)", fontWeight: "600" }}>contact@qreezy.com</p>
                    </div>
                    <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                        <div className="text-primary" style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}><MessageSquare size={40} /></div>
                        <h4 style={{ marginBottom: "0.5rem" }}>WhatsApp</h4>
                        <p style={{ color: "var(--primary)", fontWeight: "600" }}>+33 6 00 00 00 00</p>
                    </div>
                </div>

                <div style={{ backgroundColor: "var(--primary-light)", padding: "3rem", borderRadius: "12px" }}>
                    <h3 style={{ marginBottom: "1rem" }}>Besoin d'un devis personnalisé ?</h3>
                    <p style={{ marginBottom: "2rem" }}>Pour une étude détaillée de vos besoins, veuillez utiliser notre formulaire de devis dédié.</p>
                    <Button href="/devis">Aller à la page Devis</Button>
                </div>
            </div>
        </Section>
    );
}
