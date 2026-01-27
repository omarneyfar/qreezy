"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import CTA from "@/components/ui/CTA";
import { Button } from "@/components/ui/button";
import { Camera, Zap, Layout, Tag, Coffee, GlassWater, Utensils, Hotel, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function DigitalMenuPage() {
    return (
        <>
            {/* Intro Section */}
            <Section className="pt-12 md:pt-20">
                <SectionHeader
                    centered
                    icon={<Utensils className="w-12 h-12" />}
                    title="Menu Digital"
                    subtitle="Révolutionnez l'interaction de vos clients avec votre carte. Une expérience fluide, hygiénique et interactive pour les restaurants modernes."
                />
                <div className="flex justify-center mt-8">
                    <Button asChild size="lg" className="h-14 px-8 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 group">
                        <Link href="/devis">
                            Obtenir un Devis
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </Section>

            {/* Features Grid */}
            <Section dark>
                <SectionHeader
                    centered
                    title="Fonctionnalités Clés"
                    subtitle="Tout ce dont vous avez besoin pour gérer votre menu numériquement."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        icon={<Camera className="w-6 h-6" />}
                        title="Accès Instantané"
                        description="Les clients scannent simplement un code QR sur leur table pour voir le menu."
                    />
                    <FeatureCard
                        icon={<Zap className="w-6 h-6" />}
                        title="Mises à jour Directes"
                        description="Changez vos plats en quelques secondes. Plus besoin de raturer vos menus papier."
                    />
                    <FeatureCard
                        icon={<Layout className="w-6 h-6" />}
                        title="Visuels de Qualité"
                        description="Présentez des photos de vos plats pour augmenter le panier moyen."
                    />
                    <FeatureCard
                        icon={<Tag className="w-6 h-6" />}
                        title="Prix Dynamique"
                        description="Mettez facilement en place des tarifs Happy Hour sans frais de réimpression."
                    />
                </div>
            </Section>

            {/* Benefits */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="space-y-8">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                            Pour Votre <span className="text-primary italic">Entreprise</span>
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Zéro frais de réimpression",
                                "Efficacité opérationnelle accrue",
                                "Image de marque moderne",
                                "Données sur les plats populaires"
                            ].map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-lg text-secondary">
                                    <div className="p-1 bg-primary/10 rounded-full text-primary shrink-0">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-8 p-10 md:p-14 bg-slate-50 rounded-[3rem] border border-border shadow-inner">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                            Pour Vos <span className="text-primary italic">Clients</span>
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Expérience sans contact",
                                "Pas d'attente pour le menu",
                                "Images claires et précises",
                                "Filtrage facile (allergènes)"
                            ].map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-4 text-lg text-secondary">
                                    <div className="p-1 bg-primary/10 rounded-full text-primary shrink-0">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Use Cases */}
            <Section dark>
                <SectionHeader centered title="Idéal pour Tout Établissement" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard icon={<Coffee className="w-6 h-6" />} title="Cafés" description="Pour les environnements à rotation rapide." />
                    <FeatureCard icon={<GlassWater className="w-6 h-6" />} title="Restaurants" description="Présentation élégante pour menus premium." />
                    <FeatureCard icon={<Utensils className="w-6 h-6" />} title="Tavernes" description="Affichage visuel pour des décisions rapides." />
                    <FeatureCard icon={<Hotel className="w-6 h-6" />} title="Hôtels" description="Idéal pour les menus en chambre (Room Service)." />
                </div>
            </Section>

            {/* CTA */}
            <Section className="pb-20">
                <CTA
                    title="Prêt à passer au numérique ?"
                    description="Offrez à votre menu la mise à jour qu'il mérite. Commencez votre transition aujourd'hui."
                    buttonText="Obtenir un Devis"
                    buttonLink="/devis"
                />
            </Section>
        </>
    );
}
