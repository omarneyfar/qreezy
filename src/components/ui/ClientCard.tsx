import React from "react";
import { cn } from "@/lib/utils";

interface ClientCardProps {
    clientName: string;
    usageDescription: string;
    className?: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ clientName, usageDescription, className = "" }) => {
    return (
        <div className={cn(
            "p-8 rounded-2xl bg-slate-50 border border-border flex flex-col gap-4",
            className
        )}>
            <h4 className="text-lg font-bold text-foreground">{clientName}</h4>
            <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
                <p className="text-secondary italic text-lg leading-relaxed">
                    &ldquo;{usageDescription}&rdquo;
                </p>
            </div>
        </div>
    );
};

export default ClientCard;
