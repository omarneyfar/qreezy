import React from "react";
import Button from "./Button";

interface CTAProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    className?: string;
}

const CTA: React.FC<CTAProps> = ({ title, description, buttonText, buttonLink, className = "" }) => {
    return (
        <div
            className={`cta-block ${className}`}
            style={{
                backgroundColor: "var(--primary)",
                color: "#FFFFFF",
                padding: "4rem 2rem",
                borderRadius: "var(--radius)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem"
            }}
        >
            <h2 style={{ color: "#FFFFFF", fontSize: "2.25rem" }}>{title}</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.125rem", maxWidth: "600px" }}>{description}</p>
            <Button href={buttonLink}>
                {buttonText}
            </Button>
        </div>
    );
};

export default CTA;
