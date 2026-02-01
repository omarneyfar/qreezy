"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Comment créer un menu QR code pour mon restaurant ?",
        answer: "Avec Qreezy, vous pouvez créer votre menu QR code en quelques minutes. Inscrivez-vous, téléchargez votre menu ou ajoutez vos plats manuellement, et générez votre code QR unique à imprimer sur vos tables."
    },
    {
        question: "Quels sont les avantages d’un menu digital par rapport à un menu papier ?",
        answer: "Le menu digital réduit les coûts d’impression, permet des mises à jour instantanées des prix et des plats, améliore l’hygiène (sans contact) et offre une expérience client moderne et interactive."
    },
    {
        question: "Est-il possible de modifier le menu en temps réel ?",
        answer: "Oui, absolument. Toute modification effectuée sur votre tableau de bord Qreezy est instantanément visible par vos clients lorsqu’ils scannent le code QR, sans avoir à réimprimer quoi que ce soit."
    },
    {
        question: "Comment fonctionne le programme de fidélité Qreezy ?",
        answer: "Qreezy Fidélité permet à vos clients de cumuler des points via leur smartphone à chaque visite. C’est une solution 100% digitale qui remplace les cartes de fidélité en papier souvent perdues ou oubliées."
    },
    {
        question: "Quel est le prix du menu digital Qreezy en Tunisie ?",
        answer: "Qreezy propose des tarifs flexibles adaptés aux besoins des restaurateurs tunisiens. Contactez notre équipe pour un devis personnalisé et profitez d’un essai gratuit pour tester toutes nos fonctionnalités."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="faq">
            <SectionHeader
                centered
                title="Questions Fréquentes"
                subtitle="Tout ce que vous devez savoir sur nos solutions de menu digital et fidélité en Tunisie."
            />

            <div className="max-w-3xl mx-auto mt-12 space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            aria-expanded={openIndex === index}
                        >
                            <span className="text-lg font-bold text-foreground pr-8">
                                {item.question}
                            </span>
                            <div className={`shrink-0 p-1 rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5" />
                                ) : (
                                    <Plus className="w-5 h-5" />
                                )}
                            </div>
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out ${openIndex === index
                                    ? "max-h-[500px] opacity-100 pb-6 px-6"
                                    : "max-h-0 opacity-0 pointer-events-none"
                                }`}
                        >
                            <p className="text-secondary leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
