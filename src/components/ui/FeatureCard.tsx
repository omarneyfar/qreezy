import React from "react";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = "" }) => {
    return (
        <div
            className={`feature-card ${className}`}
            style={{
                padding: "2rem",
                borderRadius: "var(--radius)",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--border)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}
        >
            <div style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--primary-light)",
                color: "var(--primary)",
                borderRadius: "10px",
                fontSize: "1.5rem"
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: "1.25rem", color: "var(--foreground)" }}>{title}</h3>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>{description}</p>
        </div>
    );
};

export default FeatureCard;
