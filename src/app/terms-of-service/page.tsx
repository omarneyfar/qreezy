import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
    title: "Conditions Générales d'Utilisation | CGU Qreezy",
    description: "Conditions générales d'utilisation des services Qreezy. Termes et conditions pour l'utilisation du menu digital et programme fidélité.",
    keywords: [
        "CGU Qreezy",
        "conditions utilisation menu digital",
        "termes service restaurant",
    ],
    canonical: "/terms-of-service",
    noindex: false,
});

export default function TermsOfService() {
    return (
        <Section className="pt-12 md:pt-20">
            <div className="max-w-3xl mx-auto">
                <SectionHeader
                    title="Conditions Générales d'Utilisation"
                    subtitle="Dernière mise à jour : 24 Janvier 2026"
                />

                <div className="space-y-12 mt-12 text-secondary leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptation des Conditions</h2>
                        <p>
                            En accédant au site Qreezy, vous acceptez d&apos;être lié par les présentes
                            conditions d&apos;utilisation et par toutes les lois et réglementations applicables.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Propriété Intellectuelle</h2>
                        <p>
                            Le contenu de ce site, incluant les textes, graphismes et logos, est la propriété
                            exclusive de Qreezy et est protégé par les lois sur le droit d&apos;auteur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Limitation de Responsabilité</h2>
                        <p>
                            Qreezy ne pourra être tenu responsable des dommages directs ou indirects
                            résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser le site ou ses services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Modifications</h2>
                        <p>
                            Nous nous réservons le droit de modifier ces conditions à tout moment.
                            Les modifications prendront effet dès leur publication sur le site.
                        </p>
                    </section>
                </div>
            </div>
        </Section>
    );
}
