import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TermsOfService() {
    return (
        <Section>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <SectionHeader title="Terms of Service" centered={false} />
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <p>Last updated: January 27, 2026</p>
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing or using our website, you agree to be bound by these Terms of Service.</p>
                    <h3>2. Description of Service</h3>
                    <p>Qreezy provides a vitrine website reflecting our QR digital menu and loyalty program solutions. The website is for informational and lead generation purposes only.</p>
                    <h3>3. Intellectual Property</h3>
                    <p>All content on this website, including text, graphics, logos, and software, is the property of Qreezy or its content suppliers and is protected by international copyright laws.</p>
                    <h3>4. Limitation of Liability</h3>
                    <p>Qreezy shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the website.</p>
                </div>
            </div>
        </Section>
    );
}
