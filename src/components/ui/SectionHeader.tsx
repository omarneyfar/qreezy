import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
    icon?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    centered = true,
    className = "",
    icon
}) => {
    return (
        <div className={cn(
            "mb-12 md:mb-16",
            centered ? "text-center" : "text-left",
            className
        )}>
            {icon && (
                <div className={cn(
                    "flex mb-6",
                    centered ? "justify-center" : "justify-start"
                )}>
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary inline-flex items-center justify-center">
                        {icon}
                    </div>
                </div>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className={cn(
                    "text-lg md:text-xl text-secondary leading-relaxed max-w-2xl",
                    centered ? "mx-auto" : "ml-0"
                )}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
