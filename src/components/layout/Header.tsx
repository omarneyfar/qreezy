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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header
                className="header"
                style={{
                    backgroundColor: isScrolled || isMobileMenuOpen ? "rgba(255, 255, 255, 0.98)" : "transparent",
                    backdropFilter: isScrolled || isMobileMenuOpen ? "blur(10px)" : "none",
                    borderBottom: isScrolled || isMobileMenuOpen ? "1px solid var(--border)" : "none",
                }}
            >
                <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link href="/" onClick={closeMobileMenu} style={{ display: "flex", alignItems: "center", zIndex: 1001, position: "relative" }}>
                        <Image src="/logo-header.png" alt="Qreezy Logo" width={120} height={40} style={{ objectFit: "contain" }} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
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
                        className="mobile-toggle"
                        style={{ color: "var(--foreground)", background: "none", border: "none", cursor: "pointer", zIndex: 1001, position: "relative" }}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <nav style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingTop: "1rem" }}>
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
                    </nav>
                </div>
            </header>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={closeMobileMenu}
                />
            )}

            <style jsx>{`
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: var(--header-height);
                    z-index: 1000;
                    transition: all 0.3s ease;
                }

                .desktop-nav {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }

                .mobile-toggle {
                    display: none;
                }

                .mobile-menu {
                    position: fixed;
                    top: var(--header-height);
                    left: 0;
                    right: 0;
                    background-color: #FFFFFF;
                    padding: 0 2rem;
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
                    z-index: 999;
                    pointer-events: none;
                }

                .mobile-menu-open {
                    max-height: calc(100vh - var(--header-height));
                    opacity: 1;
                    overflow-y: auto;
                    padding: 2rem;
                    pointer-events: auto;
                }

                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 998;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @media (max-width: 992px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Header;