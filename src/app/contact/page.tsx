import { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the Qreezy team for support or inquiries.",
};

export default function ContactPage() {
    return (
        <Section>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                <SectionHeader
                    title="Get in Touch"
                    subtitle="Have a question or want to discuss a custom project? We're here to help."
                />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", margin: "4rem 0" }}>
                    <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📧</div>
                        <h4 style={{ marginBottom: "0.5rem" }}>Email Us</h4>
                        <p style={{ color: "var(--primary)", fontWeight: "600" }}>contact@qreezy.com</p>
                    </div>
                    <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "12px" }}>
                        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💬</div>
                        <h4 style={{ marginBottom: "0.5rem" }}>WhatsApp</h4>
                        <p style={{ color: "var(--primary)", fontWeight: "600" }}>+33 6 00 00 00 00</p>
                    </div>
                </div>

                <div style={{ backgroundColor: "var(--primary-light)", padding: "3rem", borderRadius: "12px" }}>
                    <h3 style={{ marginBottom: "1rem" }}>Need a Custom Quote?</h3>
                    <p style={{ marginBottom: "2rem" }}>For detailed pricing and solution designs, please use our dedicated quote form.</p>
                    <Button href="/devis">Go to Devis Page</Button>
                </div>
            </div>
        </Section>
    );
}
