"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "var(--header-height)",
                backgroundColor: isScrolled || isMobileMenuOpen ? "rgba(255, 255, 255, 0.95)" : "transparent",
                backdropFilter: isScrolled || isMobileMenuOpen ? "blur(10px)" : "none",
                borderBottom: isScrolled || isMobileMenuOpen ? "1px solid var(--border)" : "none",
                zIndex: 1000,
                transition: "all 0.3s ease",
            }}
        >
            <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Link href="/" onClick={closeMobileMenu} style={{ display: "flex", alignItems: "center" }}>
                    <Image src="/logo.png" alt="Qreezy Logo" width={120} height={40} style={{ objectFit: "contain" }} priority />
                </Link>

                {/* Desktop Navigation */}
                <nav style={{ display: "none", gap: "2rem", alignItems: "center" }} className="desktop-nav">
                    {SITE_CONFIG.navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            style={{
                                fontSize: "0.95rem",
                                fontWeight: "500",
                                color: pathname === item.href ? "var(--primary)" : "var(--foreground)",
                                transition: "color 0.2s ease"
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button href="/devis">Demander un Devis</Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                    style={{ display: "none", color: "var(--foreground)", background: "none", border: "none", cursor: "pointer" }}
                    className="mobile-toggle"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div style={{
                    position: "fixed",
                    top: "var(--header-height)",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#FFFFFF",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    zIndex: 999,
                }}>
                    {SITE_CONFIG.navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMobileMenu}
                            style={{
                                fontSize: "1.25rem",
                                fontWeight: "600",
                                color: pathname === item.href ? "var(--primary)" : "var(--foreground)",
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button href="/devis" onClick={closeMobileMenu}>Demander un Devis</Button>
                </div>
            )}

            <style jsx>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
