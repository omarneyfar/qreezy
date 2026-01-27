import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "", dark = false }) => {
    return (
        <section
            id={id}
            className={cn(
                "py-12 md:py-20 lg:py-24",
                dark ? "bg-primary/5" : "bg-white",
                className
            )}
        >
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
