import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = "" }) => {
    return (
        <div className={cn(
            "p-8 rounded-2xl bg-white border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary flex flex-col gap-4 h-full",
            className
        )}>
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl text-2xl shrink-0">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-foreground leading-tight">{title}</h3>
            <p className="text-secondary leading-relaxed">{description}</p>
        </div>
    );
};

export default FeatureCard;
