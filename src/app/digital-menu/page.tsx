import { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import ClientCard from "@/components/ui/ClientCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Digital Menu",
    description: "Transform your restaurant with a contactless, interactive digital QR menu.",
};

export default function DigitalMenuPage() {
    return (
        <>
            {/* Intro Section */}
            <Section>
                <SectionHeader
                    title="Digital Menu"
                    subtitle="Revolutionize how your customers interact with your menu. A seamless, hygienic, and interactive experience for modern restaurants."
                />
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
                    <div style={{ padding: "4rem", backgroundColor: "var(--primary-light)", borderRadius: "20px", fontSize: "5rem" }}>
                        🍽️
                    </div>
                </div>
            </Section>

            {/* Features Grid */}
            <Section dark>
                <SectionHeader title="Core Features" subtitle="Everything you need to manage your menu digitally." />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem"
                }}>
                    <FeatureCard
                        icon="📸"
                        title="Instant Contactless Access"
                        description="Customers simply scan a QR code on their table to view the menu instantly on their own devices."
                    />
                    <FeatureCard
                        icon="⚡"
                        title="Real-time Updates"
                        description="Out of stock for an item? Change it in seconds. No more scratching out items on paper menus."
                    />
                    <FeatureCard
                        icon="🍱"
                        title="Rich Visuals"
                        description="Showcase high-quality photos of your dishes to stimulate appetite and increase average order value."
                    />
                    <FeatureCard
                        icon="🏷️"
                        title="Dynamic Pricing"
                        description="Easily implement happy hour pricing or weekend specials without reprinting costs."
                    />
                </div>
            </Section>

            {/* Benefits */}
            <Section>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
                    <div>
                        <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--primary)" }}>For Your Business</h3>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✅ <span>Zero reprinting costs for menu changes</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✅ <span>Improved operational efficiency</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✅ <span>Better data insights on popular items</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✅ <span>Enhanced brand image as a modern venue</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem", color: "var(--primary)" }}>For Your Customers</h3>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✨ <span>Hygienic and touch-free experience</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✨ <span>No waiting for physical menus</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✨ <span>Clear dish descriptions and images</span></li>
                            <li style={{ display: "flex", gap: "0.75rem" }}>✨ <span>Easy filtering (allergens, veg, etc.)</span></li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Use Cases */}
            <Section dark>
                <SectionHeader title="Perfect For Any Venue" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                    <FeatureCard icon="☕" title="Cafes" description="Perfect for quick turnover environments." />
                    <FeatureCard icon="🍷" title="Fine Dining" description="Elegant presentation for premium menus." />
                    <FeatureCard icon="🍔" title="Fast Food" description="Visual-heavy displays for quick decisions." />
                    <FeatureCard icon="🏨" title="Hotels" description="Ideal for room service menus." />
                </div>
            </Section>

            {/* Client Example */}
            <Section>
                <SectionHeader title="Case Study" />
                <ClientCard
                    clientName="Le Phénix Restaurant"
                    usageDescription="Implementing DigiMenu allowed us to increase our drink sales by 20% simply because people could see organized, high-quality photos of our cocktail menu."
                />
            </Section>

            {/* CTA */}
            <Section>
                <CTA
                    title="Ready to go digital?"
                    description="Give your menu the upgrade it deserves. Start your digital transition today."
                    buttonText="Get a Quote"
                    buttonLink="/devis"
                />
            </Section>
        </>
    );
}
