import React from "react";

interface ClientCardProps {
    clientName: string;
    usageDescription: string;
    className?: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ clientName, usageDescription, className = "" }) => {
    return (
        <div
            className={`client-card ${className}`}
            style={{
                padding: "2rem",
                borderRadius: "var(--radius)",
                backgroundColor: "#F9FAFB",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
            }}
        >
            <h4 style={{ fontSize: "1.125rem", color: "var(--foreground)" }}>{clientName}</h4>
            <p style={{ fontSize: "1rem", fontStyle: "italic", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}>
                "{usageDescription}"
            </p>
        </div>
    );
};

export default ClientCard;
