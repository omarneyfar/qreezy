"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    className?: string;
}

const CTA: React.FC<CTAProps> = ({ title, description, buttonText, buttonLink, className = "" }) => {
    return (
        <div className={cn(
            "relative bg-primary text-white p-10 md:p-16 lg:p-20 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20",
            className
        )}>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="shrink-0">
                    <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-14 rounded-xl text-lg group">
                        <Link href={buttonLink}>
                            {buttonText}
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        </div>
    );
};

export default CTA;
