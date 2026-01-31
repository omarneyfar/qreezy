"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/send-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi du message");
            }

            setIsSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Une erreur est survenue");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center text-center p-12 md:p-16 bg-white rounded-[2.5rem] border border-border shadow-sm">
                <div className="mb-8 p-6 bg-primary/5 rounded-full">
                    <CheckCircle className="w-16 h-16 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Message envoyé !</h2>
                <p className="text-xl text-secondary mb-10 max-w-md mx-auto">
                    Nous avons bien reçu votre message. Notre équipe vous recontactera dans les 24h.
                </p>
                <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    size="lg"
                    className="rounded-xl font-bold px-8 h-14 text-lg"
                >
                    Envoyer un autre message
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 text-center">Envoyez-nous un message</h3>
            <p className="text-secondary text-center mb-8">Remplissez le formulaire ci-dessous et nous vous répondrons rapidement</p>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                            Nom Complet
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Votre nom"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="vous@example.com"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">
                        Sujet
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="De quoi voulez-vous nous parler?"
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        placeholder="Dites-nous en plus sur vos besoins..."
                    />
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-xl font-bold text-lg shadow-lg shadow-primary/20"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin mr-2 h-5 w-5" />
                            Envoi en cours...
                        </>
                    ) : (
                        "Envoyer le message"
                    )}
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
