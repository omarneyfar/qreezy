import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import ContactForm from "@/components/ui/ContactForm";

export const metadata = generateSEOMetadata({
    title: "Contact Qreezy Tunisie | Demander un Devis Menu Digital",
    description: "Contactez Qreezy en Tunisie pour vos solutions de menu digital et fidélité. Email: contact@qreezy.tn | Tél: +216 44785090. Réponse sous 24h.",
    keywords: [
        // French - Contact & Location
        "contact Qreezy",
        "Qreezy Tunisie",
        "contact restaurant digital",
        "support Qreezy",
        // French - Action & Service
        "devis menu digital Tunisie",
        "demander devis restaurant digital",
        "contacter Qreezy Tunis",
        "assistance menu digital",
        "service client Qreezy",
        // English
        "contact Qreezy Tunisia",
        "digital menu quote",
        "restaurant solutions Tunisia",
        // Local SEO
        "Qreezy Tunis adresse",
        "téléphone Qreezy Tunisie",
    ],
    canonical: "/contact",
});

export default function ContactPage() {
    return (
        <Section>
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    centered
                    title="Contactez-nous"
                    subtitle="Une question ou un projet sur mesure ? Nous sommes là pour vous aider."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                    <div className="p-8 border border-border rounded-3xl bg-white shadow-sm flex flex-col items-center text-center">
                        <div className="text-primary mb-6 p-4 bg-primary/5 rounded-2xl">
                            <Mail className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Email</h4>
                        <p className="text-primary font-bold text-lg">contact@qreezy.tn</p>
                    </div>
                    <div className="p-8 border border-border rounded-3xl bg-white shadow-sm flex flex-col items-center text-center">
                        <div className="text-primary mb-6 p-4 bg-primary/5 rounded-2xl">
                            <Phone className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Téléphone</h4>
                        <p className="text-primary font-bold text-lg">+216 44785090</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mb-16">
                    <ContactForm />
                </div>

                <div className="bg-primary/5 p-10 md:p-16 rounded-[2.5rem] text-center border border-primary/10">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Besoin d&apos;un devis personnalisé ?</h3>
                    <p className="text-lg text-secondary mb-10 max-w-xl mx-auto">
                        Pour une étude détaillée de vos besoins, veuillez utiliser notre formulaire de devis dédié.
                    </p>
                    <Button asChild size="lg" className="h-14 px-10 rounded-xl font-bold text-lg">
                        <Link href="/devis">Aller à la page Devis</Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
