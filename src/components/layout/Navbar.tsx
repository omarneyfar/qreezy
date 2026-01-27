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
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative z-[60]">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[350px] p-0">
                            <SheetHeader className="p-6 border-b text-left">
                                <SheetTitle className="text-primary font-bold">Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col p-6 gap-6">
                                {SITE_CONFIG.navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "text-xl font-bold transition-colors",
                                                isActive ? "text-primary border-l-4 border-primary pl-4" : "text-foreground pl-4"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                                <div className="mt-4 px-4">
                                    <Button asChild className="w-full font-bold h-12 rounded-xl text-lg">
                                        <Link href="/devis">Demander un Devis</Link>
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
