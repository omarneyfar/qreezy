"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetHeader
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center",
                isScrolled ? "bg-white/80 backdrop-blur-md border-bottom border-border shadow-sm" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-[60] flex items-center shrink-0">
                    <Image
                        src="/logo-header.png"
                        alt="Qreezy Logo"
                        width={120}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {SITE_CONFIG.navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-semibold transition-colors hover:text-primary",
                                    isActive ? "text-primary" : "text-foreground"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <Button asChild className="ml-4 font-bold rounded-xl shadow-lg shadow-primary/20">
                        <Link href="/devis">Demander un Devis</Link>
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <div className="lg:hidden flex items-center">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative z-[60]">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-full sm:w-[420px] p-0"
                        >
                            <SheetHeader className="p-6 border-b text-left flex flex-row items-center">
                                <SheetTitle></SheetTitle>
                                <Image
                                    src="/logo-header.png"
                                    alt="Qreezy Logo"
                                    width={100}
                                    height={34}
                                    className="object-contain"
                                />
                            </SheetHeader>
                            <nav className="flex flex-col p-6">
                                {SITE_CONFIG.navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "py-4 text-base font-medium transition-colors border-b border-border/50 last:border-0",
                                                isActive
                                                    ? "text-primary font-semibold"
                                                    : "text-foreground hover:text-primary"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                                <div className="mt-8">
                                    <Button
                                        asChild
                                        className="w-full font-semibold h-12 rounded-lg text-base"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Link href="/devis">
                                            Demander un Devis
                                        </Link>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
