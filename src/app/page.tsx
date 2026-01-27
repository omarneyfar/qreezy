"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import ClientCard from "@/components/ui/ClientCard";
import Button from "@/components/ui/Button";
import { Clock, TrendingDown, FileText, Smartphone, Utensils, Star } from "lucide-react";

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
              Solutions QR Modernes pour <span className="text-primary">Votre Entreprise</span>
            </h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "2.5rem", maxWidth: "800px", margin: "0 auto 2.5rem" }}>
              Boostez votre restaurant ou commerce avec Menu Digital et Qreezy Fidélité.
              Simplifiez les interactions et fidélisez vos clients grâce à une technologie intelligente.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/devis">Commencer Maintenant</Button>
              <Button href="/comment-ca-marche" variant="outline">Découvrir le Fonctionnement</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section dark>
        <SectionHeader
          title="Les Défis des Entreprises"
          subtitle="Les méthodes traditionnelles vous ralentissent. Nous vous aidons à surmonter les obstacles courants."
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem"
        }}>
          <FeatureCard
            icon={<Clock size={24} />}
            title="Service Lent"
            description="L'attente des menus physiques ou les enregistrements manuels frustrent les clients et limitent votre capacité."
          />
          <FeatureCard
            icon={<TrendingDown size={24} />}
            title="Faible Fréquentation"
            description="Sans connexion numérique, il est difficile d'encourager les clients à revenir pour leur prochaine visite."
          />
          <FeatureCard
            icon={<FileText size={24} />}
            title="Contenu Statique"
            description="L'impression de nouveaux menus ou cartes de fidélité à chaque changement de prix est coûteuse et polluante."
          />
          <FeatureCard
            icon={<Smartphone size={24} />}
            title="Fossé Numérique"
            description="Vous manquez des données clients précieuses et la commodité d'une expérience optimisée pour mobile."
          />
        </div>
      </Section>

      {/* Solutions Overview */}
      <Section>
        <SectionHeader
          title="Nos Solutions"
          subtitle="Deux outils puissants conçus pour fonctionner ensemble ou indépendamment pour développer votre activité."
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
            <div className="text-primary"><Utensils size={48} /></div>
            <h3 style={{ fontSize: "1.75rem" }}>Menu Digital</h3>
            <p>Transformez l'expérience culinaire de votre restaurant avec un menu numérique rapide, beau et interactif. Mettez à jour vos plats instantanément.</p>
            <Button href="/menu-digital" variant="secondary">Explorer Menu Digital</Button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "2rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
            <div className="text-primary"><Star size={48} /></div>
            <h3 style={{ fontSize: "1.75rem" }}>Qreezy Fidélité</h3>
            <p>Créez une communauté fidèle avec un programme de fidélité numérique. Récompensez vos meilleurs clients et incitez-les à revenir.</p>
            <Button href="/qreezy-fidelite" variant="secondary">Explorer Fidélité</Button>
          </div>
        </div>
      </Section>

      {/* Clients Section */}
      <Section dark>
        <SectionHeader
          title="Approuvé par des Professionnels"
          subtitle="Découvrez comment nos partenaires utilisent les outils Qreezy au quotidien."
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          <ClientCard
            clientName="L'Artiste Bistro"
            usageDescription="Menu Digital a réduit nos temps d'attente de 15% et nous permet de mettre à jour nos suggestions du jour sans frais d'impression."
          />
          <ClientCard
            clientName="Vibe Coffee House"
            usageDescription="Qreezy Fidélité nous a aidés à atteindre un taux de retour de 40% en seulement trois mois. Nos clients adorent !"
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <CTA
          title="Prêt à Moderniser Votre Activité ?"
          description="Rejoignez les nombreuses entreprises qui utilisent Qreezy pour simplifier leurs opérations. Demandez votre devis personnalisé dès aujourd'hui."
          buttonText="Demander un Devis"
          buttonLink="/devis"
        />
      </Section>
    </>
  );
}
