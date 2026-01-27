"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import ClientCard from "@/components/ui/ClientCard";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Clock, TrendingDown, FileText, Smartphone, Utensils, Star, Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              La Nouvelle Ère du <br />
              <span className="text-primary">Commerce Connecté</span>
            </h1>

            <p className="hero-description">
              Propulsez votre établissement vers le futur. Simplifiez vos opérations,
              enchantez vos clients et boostez votre rentabilité avec nos solutions QR intelligentes.
            </p>

            <div className="hero-actions">
              <Button href="/devis" className="hero-btn-primary">Commencer Maintenant</Button>
              <Button href="/comment-ca-marche" variant="outline">Découvrir</Button>
            </div>
          </div>

          <div className="hero-image-container">
            {/* Main Logo Display */}
            <div className="logo-wrapper">
              <Image
                src="/logo.png"
                alt="Qreezy Logo"
                width={300}
                height={67}
                sizes="(max-width: 360px) 100px, (max-width: 480px) 140px, (max-width: 640px) 200px, (max-width: 1024px) 180px, 400px"
                className="logo-image"
                style={{ objectFit: "contain", height: "auto" }}
                priority
              />
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
        <div className="problems-grid">
          <FeatureCard
            icon={<Clock size={28} />}
            title="Service Lent"
            description="L'attente des menus physiques ou les enregistrements manuels frustrent les clients et limitent votre capacité."
          />
          <FeatureCard
            icon={<TrendingDown size={28} />}
            title="Faible Fréquentation"
            description="Sans connexion numérique, il est difficile d'encourager les clients à revenir pour leur prochaine visite."
          />
          <FeatureCard
            icon={<FileText size={28} />}
            title="Contenu Statique"
            description="L'impression de nouveaux menus ou cartes de fidélité à chaque changement de prix est coûteuse et polluante."
          />
          <FeatureCard
            icon={<Smartphone size={28} />}
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
        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-icon-container">
              <div className="solution-icon">
                <Utensils size={40} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="solution-title">Menu Digital</h3>
            <p className="solution-description">
              Transformez l'expérience culinaire de votre restaurant avec un menu numérique rapide, beau et interactif. Mettez à jour vos plats instantanément.
            </p>
            <div className="solution-action">
              <Button href="/menu-digital" variant="secondary">Explorer Menu Digital</Button>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-icon-container">
              <div className="solution-icon">
                <Heart size={40} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="solution-title">Qreezy Fidélité</h3>
            <p className="solution-description">
              Créez une communauté fidèle avec un programme de fidélité numérique. Récompensez vos meilleurs clients et incitez-les à revenir.
            </p>
            <div className="solution-action">
              <Button href="/qreezy-fidelite" variant="secondary">Explorer Fidélité</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Clients Section */}
      <Section dark>
        <SectionHeader
          title="Approuvé par des Professionnels"
          subtitle="Découvrez comment nos partenaires utilisent les outils Qreezy au quotidien."
        />
        <div className="clients-grid">
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
      <Section className="final-cta">
        <CTA
          title="Prêt à Moderniser Votre Activité ?"
          description="Rejoignez les nombreuses entreprises qui utilisent Qreezy pour simplifier leurs opérations. Demandez votre devis personnalisé dès aujourd'hui."
          buttonText="Demander un Devis"
          buttonLink="/devis"
          className="premium-cta"
        />
      </Section>

      <style jsx>{`
        /* Hero Section Styles */
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          padding: 1rem 0 4rem;
          min-height: calc(100vh - var(--header-height));
        }

        .hero-content {
          text-align: left;
        }

        .hero-title {
          font-size: clamp(2.25rem, 5.5vw, 4.5rem);
          margin-bottom: 1.75rem;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--foreground);
        }

        .hero-description {
          font-size: clamp(1.05rem, 1.3vw, 1.25rem);
          margin-bottom: 2.75rem;
          max-width: 620px;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .trust-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }

        .trust-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .divider {
          width: 1px;
          height: 40px;
          background-color: var(--border);
        }

        .hero-image-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .logo-wrapper {
          padding: 2.5rem 3rem;
          background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
          border-radius: 24px;
          box-shadow: 
            0 15px 40px rgba(239, 111, 96, 0.06),
            0 5px 15px rgba(0, 0, 0, 0.03);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: float 6s ease-in-out infinite;
          max-width: 500px;
          width: 100%;
          border: 1px solid rgba(239, 111, 96, 0.08);
        }

        .logo-image {
          width: 100%;
          max-width: 200px;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-12px) rotate(0.5deg); 
          }
        }

        /* Problems Grid Styles */
        .problems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
        }

        /* Solutions Grid Styles */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          margin-top: 1rem;
        }

        @media (max-width: 1024px) {
          .solutions-grid {
            grid-template-columns: 1fr;
          }
        }

        .solution-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          padding: 3.5rem 2.5rem;
          border-radius: 20px;
          border: 1px solid var(--border);
          background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
          transition: all 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .solution-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: var(--primary);
        }

        .solution-icon-container {
          margin-bottom: 0.5rem;
        }

        .solution-icon {
          color: var(--primary);
          display: inline-flex;
          padding: 1.25rem;
          background: rgba(var(--primary-rgb), 0.1);
          border-radius: 16px;
          width: fit-content;
          transition: transform 0.3s ease;
        }

        .solution-card:hover .solution-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .solution-title {
          font-size: 1.85rem;
          font-weight: 800;
          margin: 0;
          color: var(--foreground);
        }

        .solution-description {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          flex: 1;
        }

        .solution-action {
          margin-top: auto;
        }

        /* Clients Grid Styles */
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-top: 1rem;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3.5rem;
            min-height: auto;
          }

          .hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-image-container {
            justify-content: center;
            order: -1;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-trust {
            justify-content: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .logo-wrapper {
            max-width: 500px;
            padding: 2rem 2.5rem;
            border-radius: 20px;
          }

          .logo-image {
            max-width: 160px;
          }

          .trust-number {
            font-size: 1.35rem;
          }

          .divider {
            height: 35px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .problems-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .solutions-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .solution-card {
            padding: 2.5rem 2rem;
            gap: 1.5rem;
          }

          .solution-title {
            font-size: 1.65rem;
          }

          .solution-description {
            font-size: 1rem;
          }

          .solution-icon {
            padding: 0.875rem;
          }

          .clients-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .hero-container {
            padding: 1rem 0 2rem;
            gap: 2.5rem;
          }

          .hero-title {
            margin-bottom: 1.25rem;
          }

          .hero-description {
            margin-bottom: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
            margin-bottom: 2.5rem;
          }

          .hero-actions :global(a),
          .hero-actions :global(button) {
            width: 100%;
            justify-content: center;
          }

          .hero-trust {
            gap: 1.25rem;
          }

          .trust-number {
            font-size: 1.25rem;
          }

          .trust-label {
            font-size: 0.8rem;
          }

          .divider {
            height: 30px;
          }

          .logo-wrapper {
            padding: 1.75rem 2rem;
            border-radius: 18px;
            max-width: 260px;
          }

          .logo-image {
            max-width: 140px;
          }
        }

        @media (max-width: 480px) {
          .hero-trust {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
            width: 100%;
          }

          .trust-item {
            flex-direction: row;
            align-items: center;
            gap: 0.75rem;
            width: 100%;
          }

          .divider {
            display: none;
          }

          .solution-card {
            padding: 2rem 1.5rem;
          }

          .solution-action :global(a),
          .solution-action :global(button) {
            width: 100%;
            justify-content: center;
          }

          .logo-wrapper {
            max-width: 100%;
            padding: 1.5rem 1.75rem;
            border-radius: 16px;
          }

          .logo-image {
            max-width: 120px;
          }
        }

        @media (max-width: 360px) {
          .logo-wrapper {
            padding: 1.25rem 1.5rem;
          }

          .logo-image {
            max-width: 100px;
          }

          .hero-container {
            padding: 0.5rem 0 1.5rem;
          }
        }
      `}</style>
    </>
  );
}