import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité",
    description: "Comment nous gérons vos données chez Qreezy.",
};

export default function PrivacyPolicy() {
    return (
        <Section className="pt-12 md:pt-20">
            <div className="max-w-3xl mx-auto">
                <SectionHeader
                    title="Politique de Confidentialité"
                    subtitle="Dernière mise à jour : 24 Janvier 2026"
                />

                <div className="space-y-12 mt-12 text-secondary leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Collecte des Données</h2>
                        <p>
                            Nous collectons uniquement les informations nécessaires pour fournir nos services,
                            notamment via notre formulaire de devis (nom, email, nom de l&apos;entreprise).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Utilisation des Données</h2>
                        <p>
                            Vos données sont utilisées exclusivement pour répondre à vos demandes de devis
                            et améliorer l&apos;expérience utilisateur sur notre site.
                            Nous ne vendons jamais vos données à des tiers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Sécurité</h2>
                        <p>
                            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
                            pour protéger vos données personnelles contre tout accès non autorisé.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Vos Droits</h2>
                        <p>
                            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification
                            et de suppression de vos données personnelles. Contactez-nous à
                            contact@qreezy.tn pour toute demande.
                        </p>
                    </section>
                </div>
            </div>
        </Section>
    );
}
