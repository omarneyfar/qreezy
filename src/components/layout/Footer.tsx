import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-border py-16 md:py-20">
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="inline-block">
                            <Image src="/logo-header.png" alt="Qreezy Logo" width={100} height={35} className="object-contain" />
                        </Link>
                        <p className="text-secondary text-base max-w-xs">{SITE_CONFIG.tagline}</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="text-foreground font-bold text-lg">Solutions</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/digital-menu" className="text-secondary hover:text-primary transition-colors">Menu Digital</Link>
                            <Link href="/qreezy-fidelite" className="text-secondary hover:text-primary transition-colors">Qreezy Fidélité</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="text-foreground font-bold text-lg">Entreprise</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/about" className="text-secondary hover:text-primary transition-colors">À propos</Link>
                            <Link href="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link>
                            <Link href="/how-it-works" className="text-secondary hover:text-primary transition-colors">Comment ça marche</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="text-foreground font-bold text-lg">Légal</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/privacy-policy" className="text-secondary hover:text-primary transition-colors">Politique de Confidentialité</Link>
                            <Link href="/terms-of-service" className="text-secondary hover:text-primary transition-colors">Conditions d&apos;Utilisation</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-secondary text-sm">
                        © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
