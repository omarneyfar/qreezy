"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const QuoteForm = () => {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormState("success");
        }, 1500);
    };

    if (formState === "success") {
        return (
            <div style={{ textAlign: "center", padding: "4rem", backgroundColor: "#F9FAFB", borderRadius: "12px" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
                <h2 style={{ marginBottom: "1rem" }}>Thank You!</h2>
                <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>
                    Your request has been received. Our team will review your details and get back to you within 24-48 hours.
                </p>
                <Button href="/">Return Home</Button>
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
                    <label htmlFor="businessName" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Business Name</label>
                    <input type="text" id="businessName" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)" }} />
                </div>
                <div className="field-group">
                    <label htmlFor="businessType" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Business Type</label>
                    <select id="businessType" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)", backgroundColor: "#FFFFFF" }}>
                        <option value="">Select a type...</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="cafe">Cafe</option>
                        <option value="hotel">Hotel</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
                <div className="field-group">
                    <label htmlFor="fullName" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Full Name</label>
                    <input type="text" id="fullName" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)" }} />
                </div>
                <div className="field-group">
                    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Email Address</label>
                    <input type="email" id="email" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)" }} />
                </div>
            </div>

            <div className="field-group">
                <label htmlFor="city" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>City / Country</label>
                <input type="text" id="city" required style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)" }} />
            </div>

            <div className="field-group">
                <p style={{ marginBottom: "0.75rem", fontWeight: "600", fontSize: "0.9rem", color: "var(--foreground)" }}>Solutions Interested In</p>
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                        <input type="checkbox" name="solutions" value="digimenu" style={{ width: "18px", height: "18px", accentColor: "var(--primary)" }} />
                        <span>DigiMenu</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                        <input type="checkbox" name="solutions" value="fidelity" style={{ width: "18px", height: "18px", accentColor: "var(--primary)" }} />
                        <span>Qreezy Fidelity</span>
                    </label>
                </div>
            </div>

            <div className="field-group">
                <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Message (Optional)</label>
                <textarea id="message" rows={4} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border)", outlineColor: "var(--primary)", resize: "vertical" }} placeholder="Tell us more about your specific needs..."></textarea>
            </div>

            <div style={{ marginTop: "1rem" }}>
                <Button type="submit" disabled={formState === "submitting"}>
                    {formState === "submitting" ? "Sending Request..." : "Request a Quote"}
                </Button>
            </div>
        </form>
    );
};

export default QuoteForm;
