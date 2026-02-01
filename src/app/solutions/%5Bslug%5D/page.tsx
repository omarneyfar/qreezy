import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTA from "@/components/ui/CTA";
import { getCityBySlug, getAllCities } from "@/lib/cities";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { MapPin, Utensils, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CityPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return getAllCities().map((city) => ({
        slug: city.slug,
    }));
}

export async function generateMetadata({ params }: CityPageProps) {
    const city = getCityBySlug(params.slug);
    if (!city) return {};

    return generateSEOMetadata({
        title: city.title,
        description: city.description,
        canonical: `/solutions/${city.slug}`,
    });
}

export default function CityPage({ params }: CityPageProps) {
    const city = getCityBySlug(params.slug);

    if (!city) {
        notFound();
    }

    return (
        <>
            <Section className="pt-12 md:pt-20">
                <div className="flex items-center gap-2 text-primary font-bold mb-6 justify-center">
                    <MapPin className="w-5 h-5" />
                    Solutions Locales : {city.cityName}
                </div>
                <SectionHeader
                    centered
                    title={`Menu QR Code à ${city.cityName}`}
                    subtitle={city.intro}
                />
            </Section>

            <Section dark>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                            Pourquoi choisir Qreezy à <span className="text-primary">{city.cityName}</span> ?
                        </h2>
                        <p className="text-lg text-secondary leading-relaxed">
                            {city.localContext}
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Support local réactif",
                                "Connaissance du marché régional",
                                "Solution 100% adaptée à la Tunisie",
                                "Installation et démo sur place"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button asChild size="lg" className="rounded-xl font-bold h-14 px-8">
                            <Link href="/devis">Demander une démo à {city.cityName}</Link>
                        </Button>
                    </div>
                    <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-border shadow-xl">
                        <h3 className="text-2xl font-bold mb-8">Nos Services à {city.cityName}</h3>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="p-4 bg-primary/5 text-primary rounded-2xl shrink-0">
                                    <Utensils className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Menu Digital</h4>
                                    <p className="text-secondary text-sm">Remplacez vos menus papier par une carte numérique interactive et hygiénique.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="p-4 bg-primary/5 text-primary rounded-2xl shrink-0">
                                    <Heart className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Fidélité Digital</h4>
                                    <p className="text-secondary text-sm">Créez un programme de fidélité sans application pour vos clients locaux.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <CTA
                    title={`Prêt à digitaliser votre établissement à ${city.cityName} ?`}
                    description="Rejoignez les restaurateurs qui font confiance à Qreezy partout en Tunisie. Devis gratuit et sans engagement."
                    buttonText="Obtenir mon Devis"
                    buttonLink="/devis"
                />
            </Section>
        </>
    );
}
