import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PrivacyPolicy() {
    return (
        <Section>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <SectionHeader title="Privacy Policy" centered={false} />
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <p>Last updated: January 27, 2026</p>
                    <h3>1. Introduction</h3>
                    <p>At Qreezy, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                    <h3>2. Data We Collect</h3>
                    <p>When you use our quote form, we collect the following information: Name, Email, Business Name, Business Type, Location, and any message you provide. This information is used solely to respond to your inquiry.</p>
                    <h3>3. How We Use Your Data</h3>
                    <p>We use the collected data to provide you with the information you requested, to prepare custom quotes, and to communicate about our services.</p>
                    <h3>4. Storage and Security</h3>
                    <p>Your data is stored securely and is only accessible by authorized personnel at Qreezy. We do not sell or share your data with third parties.</p>
                </div>
            </div>
        </Section>
    );
}
