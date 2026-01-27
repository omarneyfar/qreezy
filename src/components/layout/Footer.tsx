import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: "#F9FAFB", borderTop: "1px solid var(--border)", padding: "4rem 0 2rem" }}>
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <Link href="/">
                            <Image src="/logo-header.png" alt="Qreezy Logo" width={100} height={35} style={{ objectFit: "contain" }} />
                        </Link>
                        <p style={{ fontSize: "0.95rem" }}>{SITE_CONFIG.tagline}</p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <h4 style={{ fontSize: "1rem", color: "var(--foreground)" }}>Solutions</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <Link href="/menu-digital" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Menu Digital</Link>
                            <Link href="/qreezy-fidelite" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Qreezy Fidélité</Link>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <h4 style={{ fontSize: "1rem", color: "var(--foreground)" }}>Entreprise</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <Link href="/a-propos" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>À propos</Link>
                            <Link href="/contact" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Contact</Link>
                            <Link href="/comment-ca-marche" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Comment ça marche</Link>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <h4 style={{ fontSize: "1rem", color: "var(--foreground)" }}>Légal</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <Link href="/privacy-policy" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Politique de Confidentialité</Link>
                            <Link href="/terms-of-service" style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>Conditions d'Utilisation</Link>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <p style={{ fontSize: "0.85rem" }}>
                        © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
