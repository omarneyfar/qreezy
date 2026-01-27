"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

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
            <div style={{ textAlign: "center", padding: "4rem", backgroundColor: "#F9FAFB", borderRadius: "12px" }}>
                <div className="text-primary" style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
                    <CheckCircle size={64} />
                </div>
                <h2 style={{ marginBottom: "1rem" }}>Merci !</h2>
                <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>
                    Votre demande a été reçue. Notre équipe l'étudiera et vous recontactera sous 24-48 heures.
                </p>
                <Button href="/">Retour à l'accueil</Button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                backgroundColor: "#FFFFFF",
                padding: "2.5rem",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)"
            }}
        >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
                <div className="field-group">
                    <label htmlFor="businessName" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Nom de l'entreprise</label>
                    <input type="text" id="businessName" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)" }} />
                </div>
                <div className="field-group">
                    <label htmlFor="businessType" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Type d'établissement</label>
                    <select id="businessType" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)", backgroundColor: "#FFFFFF" }}>
                        <option value="">Sélectionnez un type...</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="cafe">Café</option>
                        <option value="hotel">Hôtel</option>
                        <option value="retail">Commerce / Retail</option>
                        <option value="other">Autre</option>
                    </select>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
                <div className="field-group">
                    <label htmlFor="fullName" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Nom Complet</label>
                    <input type="text" id="fullName" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)" }} />
                </div>
                <div className="field-group">
                    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Adresse Email</label>
                    <input type="email" id="email" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)" }} />
                </div>
            </div>

            <div className="field-group">
                <label htmlFor="city" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Ville / Pays</label>
                <input type="text" id="city" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)" }} />
            </div>

            <div className="field-group">
                <p style={{ marginBottom: "0.75rem", fontWeight: "600", fontSize: "0.9rem", color: "var(--foreground)" }}>Solutions intéressées</p>
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                        <input type="checkbox" name="solutions" value="digimenu" style={{ width: "18px", height: "18px", accentColor: "var(--primary)" }} />
                        <span>Menu Digital</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                        <input type="checkbox" name="solutions" value="fidelity" style={{ width: "18px", height: "18px", accentColor: "var(--primary)" }} />
                        <span>Qreezy Fidélité</span>
                    </label>
                </div>
            </div>

            <div className="field-group">
                <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Message (Optionnel)</label>
                <textarea id="message" rows={4} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)", resize: "vertical" }} placeholder="Dites-nous en plus sur vos besoins..."></textarea>
            </div>

            <div style={{ marginTop: "1rem" }}>
                <Button type="submit" disabled={formState === "submitting"}>
                    {formState === "submitting" ? "Envoi en cours..." : "Demander mon Devis"}
                </Button>
            </div>
        </form>
    );
};

export default QuoteForm;
