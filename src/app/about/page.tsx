import { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Qreezy's mission to bridge the gap between physical and digital business.",
};

export default function AboutPage() {
    return (
        <>
            <Section>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <SectionHeader
                        title="Our Mission"
                        subtitle="Bridging the gap between physical businesses and digital convenience through smart QR technology."
                    />
                    <p style={{ fontSize: "1.25rem", textAlign: "center", lineHeight: "1.8" }}>
                        At Qreezy, we believe that modern technology shouldn't be complicated or expensive.
                        Our mission is to provide small and medium-sized businesses with the same digital
                        advantages that large corporations enjoy—starting with the most powerful tool in
                        the physical-digital interface: the QR code.
                    </p>
                </div>
            </Section>

            <Section dark>
                <SectionHeader title="Our Values" subtitle="The principles that guide everything we build." />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem"
                }}>
                    <FeatureCard
                        icon="🤝"
                        title="Simplicity First"
                        description="We build tools that are intuitive for both business owners and their customers. No steep learning curves."
                    />
                    <FeatureCard
                        icon="🚀"
                        title="Immediate Value"
                        description="Our solutions are designed to deliver ROI from day one, whether through cost savings or increased sales."
                    />
                    <FeatureCard
                        icon="🎨"
                        title="Design Excellence"
                        description="We believe that business tools should be as beautiful and well-designed as the brands they support."
                    />
                </div>
            </Section>
        </>
    );
}
