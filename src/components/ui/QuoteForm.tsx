"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const QuoteForm = () => {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => {
            setFormState("success");
        }, 1500);
    };

    if (formState === "success") {
        return (
            <div className="text-center py-16 px-8 bg-slate-50 rounded-3xl border border-border animate-in fade-in zoom-in duration-500">
                <div className="text-primary mb-6 flex justify-center">
                    <CheckCircle className="w-20 h-20" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Merci !</h2>
                <p className="text-xl text-secondary mb-10 max-w-md mx-auto">
                    Votre demande a été reçue. Notre équipe l'étudiera et vous recontactera sous 24-48 heures.
                </p>
                <Button asChild size="lg" className="rounded-xl font-bold px-8 h-14 text-lg">
                    <a href="/">Retour à l'accueil</a>
                </Button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 bg-white p-8 md:p-12 rounded-3xl border border-border shadow-xl shadow-slate-200/50"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <Label htmlFor="businessName" className="text-base font-bold text-foreground">
                        Nom de l'entreprise
                    </Label>
                    <Input
                        type="text"
                        id="businessName"
                        required
                        placeholder="Ex: Le Petit Bistro"
                        className="h-14 rounded-xl border-border focus:ring-primary focus:border-primary text-base"
                    />
                </div>
                <div className="space-y-3">
                    <Label htmlFor="businessType" className="text-base font-bold text-foreground">
                        Type d'établissement
                    </Label>
                    <select
                        id="businessType"
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
                    required
                    placeholder="Ex: Paris, France"
                    className="h-14 rounded-xl border-border focus:ring-primary focus:border-primary text-base"
                />
            </div>

            <div className="space-y-4">
                <p className="text-base font-bold text-foreground">Solutions intéressées</p>
                <div className="flex gap-8 flex-wrap">
                    <div className="flex items-center space-x-3">
                        <Checkbox id="digimenu" />
                        <label
                            htmlFor="digimenu"
                            className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                            Menu Digital
                        </label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Checkbox id="fidelity" />
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
