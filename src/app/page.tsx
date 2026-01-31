import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import ClientCard from "@/components/ui/ClientCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Clock, TrendingDown, FileText, Smartphone, Utensils, Heart, ArrowRight } from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Solutions Digitales pour Restaurants | Menu QR & Fidélité Tunisie",
  description: "Qreezy: Menu digital QR code et programme de fidélité pour restaurants en Tunisie. Modernisez votre établissement, boostez vos ventes. Devis gratuit!",
  keywords: [
    "Qreezy",
    "menu digital restaurant Tunisie",
    "QR code menu",
    "programme fidélité restaurant",
    "solutions digitales restaurants",
    "digitalisation restaurant Tunis",
  ],
  canonical: "/",
});

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-8 md:pt-12 pb-16 md:pb-24">
          <div className="flex flex-col items-start text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-8">
              La Nouvelle Ère du <br />
              <span className="text-primary italic">Commerce Connecté</span>
            </h1>

            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-10">
              Propulsez votre établissement vers le futur. Simplifiez vos opérations,
              enchantez vos clients et boostez votre rentabilité avec nos solutions QR intelligentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="h-14 px-8 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 group">
                <Link href="/devis">
                  Commencer Maintenant
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-xl font-bold text-lg border-2 border-border hover:border-primary hover:text-primary transition-all">
                <Link href="/how-it-works">Découvrir</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center relative order-first lg:order-last mb-12 lg:mb-0">
            {/* Visual background element */}
            <div className="absolute -z-10 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />

            <div className="relative p-8 md:p-12 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-border/50 animate-float max-w-md w-full">
              <Image
                src="/logo.png"
                alt="Qreezy Logo"
                width={300}
                height={67}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section dark>
        <SectionHeader
          centered
          title="Les Défis des Entreprises"
          subtitle="Les méthodes traditionnelles vous ralentissent. Nous vous aidons à surmonter les obstacles courants."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Clock className="w-6 h-6" />}
            title="Service Lent"
            description="L'attente des menus physiques ou les enregistrements manuels frustrent les clients et limitent votre capacité."
          />
          <FeatureCard
            icon={<TrendingDown className="w-6 h-6" />}
            title="Faible Fréquentation"
            description="Sans connexion numérique, il est difficile d'encourager les clients à revenir pour leur prochaine visite."
          />
          <FeatureCard
            icon={<FileText className="w-6 h-6" />}
            title="Contenu Statique"
            description="L'impression de nouveaux menus ou cartes de fidélité à chaque changement de prix est coûteuse et polluante."
          />
          <FeatureCard
            icon={<Smartphone className="w-6 h-6" />}
            title="Fossé Numérique"
            description="Vous manquez des données clients précieuses et la commodité d'une expérience optimisée pour mobile."
          />
        </div>
      </Section>

      {/* Solutions Overview */}
      <Section>
        <SectionHeader
          centered
          title="Nos Solutions"
          subtitle="Deux outils puissants conçus pour fonctionner ensemble ou indépendamment pour développer votre activité."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center p-10 md:p-14 rounded-[2.5rem] bg-white border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
            <div className="mb-8 p-6 bg-primary/5 text-primary rounded-[2rem] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Utensils className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-extrabold text-foreground mb-6">Menu Digital</h3>
            <p className="text-lg text-secondary leading-relaxed mb-10 flex-grow">
              Transformez l&apos;expérience culinaire de votre restaurant avec un menu numérique rapide, beau et interactif. Mettez à jour vos plats instantanément.
            </p>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto px-10 h-14 rounded-xl font-bold text-lg bg-slate-100 hover:bg-primary hover:text-white transition-all text-foreground">
              <Link href="/digital-menu">Explorer Menu Digital</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center text-center p-10 md:p-14 rounded-[2.5rem] bg-white border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group">
            <div className="mb-8 p-6 bg-primary/5 text-primary rounded-[2rem] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Heart className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-extrabold text-foreground mb-6">Qreezy Fidélité</h3>
            <p className="text-lg text-secondary leading-relaxed mb-10 flex-grow">
              Créez une communauté fidèle avec un programme de fidélité numérique. Récompensez vos meilleurs clients et incitez-les à revenir.
            </p>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto px-10 h-14 rounded-xl font-bold text-lg bg-slate-100 hover:bg-primary hover:text-white transition-all text-foreground">
              <Link href="/qreezy-fidelity">Explorer Fidélité</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Clients Section */}
      <Section dark>
        <SectionHeader
          centered
          title="Approuvé par des Professionnels"
          subtitle="Découvrez comment nos partenaires utilisent les outils Qreezy au quotidien."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
      <Section className="pb-20">
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