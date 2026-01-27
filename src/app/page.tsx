"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import ClientCard from "@/components/ui/ClientCard";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="hero">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
          paddingTop: "2rem"
        }} className="hero-grid">
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.5rem", lineHeight: "1.1" }}>
              Modern QR Solutions for <span className="text-primary">Your Business</span>
            </h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "2.5rem", maxWidth: "800px", margin: "0 auto 2.5rem" }}>
              Empower your restaurant or retail business with DigiMenu and Qreezy Fidelity.
              Simplify interactions and build lasting customer loyalty through smart technology.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/devis">Get Started Now</Button>
              <Button href="/how-it-works" variant="outline">Learn How It Works</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section dark>
        <SectionHeader
          title="The Challenges Businesses Face"
          subtitle="Old-school methods are slowing you down. We help you overcome common hurdles with modern QR tools."
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem"
        }}>
          <FeatureCard
            icon="⏳"
            title="Slow Service"
            description="Waiting for physical menus or manual check-ins frustrates customers and limits your throughput."
          />
          <FeatureCard
            icon="📉"
            title="Low Frequency"
            description="Without a digital connection, it's hard to encourage customers to return for their next visit."
          />
          <FeatureCard
            icon="📑"
            title="Static Content"
            description="Printing new menus or loyalty cards every time you change a price or promotion is costly and wasteful."
          />
          <FeatureCard
            icon="📱"
            title="Digital Gap"
            description="Missing out on valuable customer data and the convenience of mobile-first experiences."
          />
        </div>
      </Section>

      {/* Solutions Overview */}
      <Section>
        <SectionHeader
          title="Our Solutions"
          subtitle="Two powerful tools designed to work together or independently to grow your business."
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
            <div style={{ fontSize: "3rem" }}>🍽️</div>
            <h3 style={{ fontSize: "1.75rem" }}>DigiMenu</h3>
            <p>Transform your restaurant's dining experience with a fast, beautiful, and interactive digital menu. Update items instantly and reduce wait times.</p>
            <Button href="/digital-menu" variant="secondary">Explore DigiMenu</Button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
            <div style={{ fontSize: "3rem" }}>⭐</div>
            <h3 style={{ fontSize: "1.75rem" }}>Qreezy Fidelity</h3>
            <p>Build a loyal community with a digital loyalty program. Reward your best customers and keep them coming back with personalized incentives.</p>
            <Button href="/qreezy-fidelity" variant="secondary">Explore Fidelity</Button>
          </div>
        </div>
      </Section>

      {/* Clients Section */}
      <Section dark>
        <SectionHeader
          title="Loved by Businesses"
          subtitle="See how our partners are using Qreezy tools to enhance their daily operations."
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          <ClientCard
            clientName="L'Artiste Bistro"
            usageDescription="DigiMenu reduced our order wait times by 15% and allowed us to update our specials daily without printing costs."
          />
          <ClientCard
            clientName="Vibe Coffee House"
            usageDescription="Qreezy Fidelity helped us reach a 40% repeat customer rate in just three months. Our regulars love it!"
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <CTA
          title="Ready to Modernize Your Business?"
          description="Join the growing number of businesses using Qreezy to simplify operations and delight customers. Request your personalized quote today."
          buttonText="Request Your Quote"
          buttonLink="/devis"
        />
      </Section>

      <style jsx>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
