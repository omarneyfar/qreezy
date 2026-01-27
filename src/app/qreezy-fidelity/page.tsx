import { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import ClientCard from "@/components/ui/ClientCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Qreezy Fidelity",
    description: "Boost customer retention with a digital loyalty program for your business.",
};

export default function FidelityPage() {
    const steps = [
        { title: "Customer Scans", description: "The customer scans a unique QR code after their purchase." },
        { title: "Earn Points", description: "Points are automatically added to their digital wallet." },
        { title: "Track Progress", description: "Customers can see their reward progress on their phone." },
        { title: "Redeem Rewards", description: "Earned rewards can be used for future discounts or gifts." }
    ];

    return (
        <>
            {/* Intro Section */}
            <Section>
                <SectionHeader
                    title="Qreezy Fidelity"
                    subtitle="Turn one-time visitors into lifelong regulars. A digital-first loyalty program that lives in your customer's smartphone."
                />
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
                    <div style={{ padding: "4rem", backgroundColor: "var(--primary-light)", borderRadius: "20px", fontSize: "5rem" }}>
                        ⭐
                    </div>
                </div>
            </Section>

            {/* How It Works */}
            <Section dark>
                <SectionHeader title="How It Works" subtitle="A simple 4-step process for your customers." />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--primary)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.25rem" }}>
                                {index + 1}
                            </div>
                            <h4 style={{ fontSize: "1.25rem" }}>{step.title}</h4>
                            <p style={{ fontSize: "0.95rem" }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Features Grid */}
            <Section>
                <SectionHeader title="Powerful Loyalty Tools" subtitle="Build deeper relationships with your customers." />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem"
                }}>
                    <FeatureCard
                        icon="📱"
                        title="App-less Experience"
                        description="Customers don't need to download another app. It works directly in their mobile browser."
                    />
                    <FeatureCard
                        icon="📊"
                        title="Analytics Dashboard"
                        description="Get insights into customer behavior, visit frequency, and popular redemption items."
                    />
                    <FeatureCard
                        icon="💌"
                        title="Automated Campaigns"
                        description="Send special offers to customers who haven't visited in a while to win them back."
                    />
                    <FeatureCard
                        icon="🔒"
                        title="Secure Tracking"
                        description="Fraud-resistant system ensures points are only earned for genuine purchases."
                    />
                </div>
            </Section>

            {/* Benefits List */}
            <Section dark>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h3 style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>Why Choose Qreezy Fidelity?</h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <span style={{ fontSize: "1.5rem" }}>🚀</span>
                            <div>
                                <strong style={{ display: "block", fontSize: "1.125rem", color: "var(--foreground)" }}>Increase Visit Frequency</strong>
                                <p>Loyal customers visit 30% more often than non-members.</p>
                            </div>
                        </li>
                        <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <span style={{ fontSize: "1.5rem" }}>📈</span>
                            <div>
                                <strong style={{ display: "block", fontSize: "1.125rem", color: "var(--foreground)" }}>Higher Average Spend</strong>
                                <p>Members spend up to 20% more per transaction to reach their next reward.</p>
                            </div>
                        </li>
                        <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <span style={{ fontSize: "1.5rem" }}>💡</span>
                            <div>
                                <strong style={{ display: "block", fontSize: "1.125rem", color: "var(--foreground)" }}>Direct Marketing Channel</strong>
                                <p>Reach your customers directly with personalized offers and updates.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Section>

            {/* Client Example */}
            <Section>
                <SectionHeader title="Success Story" />
                <ClientCard
                    clientName="The Urban Cup"
                    usageDescription="Switching from paper stamps to Qreezy Fidelity was a game changer. We now have over 500 active members and a clear view of our customer base."
                />
            </Section>

            {/* CTA */}
            <Section>
                <CTA
                    title="Build Your Loyal Community"
                    description="Ready to start rewarding your customers? Let's build your fidelity program together."
                    buttonText="Request Your Devis"
                    buttonLink="/devis"
                />
            </Section>
        </>
    );
}
