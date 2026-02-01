"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight } from "lucide-react";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

const QuoteForm = () => {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("submitting");
        setErrorMessage("");

        trackEvent(ANALYTICS_EVENTS.QUOTE_REQUEST_START);

        // Get form data
        const formData = new FormData(e.currentTarget);
        const solutions: string[] = [];

        if (formData.get("digimenu")) solutions.push("Menu Digital");
        if (formData.get("fidelity")) solutions.push("Qreezy Fidélité");

        const data = {
            businessName: formData.get("businessName"),
            businessType: formData.get("businessType"),
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            city: formData.get("city"),
            solutions,
            message: formData.get("message") || "",
        };

        try {
            const response = await fetch("/api/send-quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || "Failed to send quote request");
            }

            setFormState("success");
            trackEvent(ANALYTICS_EVENTS.QUOTE_REQUEST_SUCCESS, {
                businessType: data.businessType,
                solutionsCount: data.solutions.length
            });
        } catch (error) {
            console.error("Error:", error);
            setFormState("error");
            setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue");
            trackEvent(ANALYTICS_EVENTS.QUOTE_REQUEST_FAILURE, {
                error: error instanceof Error ? error.message : "unknown"
            });
        }
    };

    if (formState === "success") {
        return (
            <div className="text-center py-16 px-8 bg-slate-50 rounded-3xl border border-border animate-in fade-in zoom-in duration-500">
                <div className="text-primary mb-6 flex justify-center">
                    <CheckCircle className="w-20 h-20" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Merci !</h2>
                <p className="text-xl text-secondary mb-10 max-w-md mx-auto">
                    Votre demande a été reçue. Notre équipe l&apos;étudiera et vous recontactera dans les 24h.
                </p>
                <Button asChild size="lg" className="rounded-xl font-bold px-8 h-14 text-lg">
                    <Link href="/">Retour à l&apos;accueil</Link>
                </Button>
            </div>
        );
    }

    if (formState === "error") {
        return (
            <div className="text-center py-16 px-8 bg-red-50 rounded-3xl border border-red-200 animate-in fade-in zoom-in duration-500">
                <div className="text-red-500 mb-6 flex justify-center">
                    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Erreur</h2>
                <p className="text-xl text-red-600 mb-6 max-w-md mx-auto">
                    {errorMessage || "Une erreur est survenue lors de l'envoi de votre demande."}
                </p>
                <Button
                    onClick={() => setFormState("idle")}
                    size="lg"
                    className="rounded-xl font-bold px-8 h-14 text-lg"
                >
                    Réessayer
                </Button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 md:gap-8 bg-white p-4 sm:p-6 md:p-12 rounded-3xl border border-border shadow-xl shadow-slate-200/50"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                    <Label htmlFor="businessName" className="text-base font-bold text-foreground">
                        Nom de l&apos;entreprise
                    </Label>
                    <Input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        placeholder="Ex: Le Petit Bistro"
                        className="h-14 rounded-xl border-border focus:ring-primary focus:border-primary text-base"
                    />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="businessType" className="text-base font-bold text-foreground">
                        Type d&apos;établissement
                    </Label>
                    <select
                        id="businessType"
                        name="businessType"
                        required
                        className="flex h-14 w-full rounded-xl border border-border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="">Sélectionnez un type...</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="cafe">Café</option>
                        <option value="hotel">Hôtel</option>
                        <option value="retail">Commerce / Retail</option>
                        <option value="other">Autre</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-base font-bold text-foreground">
                        Nom Complet
                    </Label>
                    <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="Votre prénom et nom"
                        className="h-14 rounded-xl border-border focus:ring-primary focus:border-primary text-base"
                    />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-bold text-foreground">
                        Adresse Email
                    </Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="h-14 rounded-xl border-border focus:ring-primary focus:border-primary text-base"
                    />
                </div>
            </div>

            <div className="space-y-3">
                <Label htmlFor="city" className="text-base font-bold text-foreground">
                    Ville / Pays
                </Label>
                <Input
                    type="text"
                    id="city"
                    name="city"
                    required
                    placeholder="Ex: Paris, France"
                    className="h-14 rounded-xl border-border focus:ring-primary focus:border-primary text-base"
                />
            </div>

            <div className="space-y-4">
                <p className="text-base font-bold text-foreground">Solutions intéressées</p>
                <div className="flex gap-4 md:gap-8 flex-wrap">
                    <div className="flex items-center space-x-3">
                        <Checkbox id="digimenu" name="digimenu" />
                        <label
                            htmlFor="digimenu"
                            className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                            Menu Digital
                        </label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox id="fidelity" name="fidelity" />
                        <label
                            htmlFor="fidelity"
                            className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                            Qreezy Fidélité
                        </label>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <Label htmlFor="message" className="text-base font-bold text-foreground">
                    Message (Optionnel)
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Dites-nous en plus sur vos besoins..."
                    className="rounded-xl border-border focus:ring-primary focus:border-primary text-base p-4"
                />
            </div>

            <div className="pt-4">
                <Button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full h-16 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20 group"
                >
                    {formState === "submitting" ? (
                        "Envoi en cours..."
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            Demander mon Devis
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </span>
                    )}
                </Button>
            </div>
        </form>
    );
};

export default QuoteForm;
