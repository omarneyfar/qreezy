import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import QuoteForm from "@/components/ui/QuoteForm";

export default function DevisPage() {
    return (
        <Section>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <SectionHeader
                    title="Request a Quote"
                    subtitle="Tell us about your business and which Qreezy tools you're interested in. We'll prepare a custom proposal for you."
                />
                <QuoteForm />
            </div>
        </Section>
    );
}
