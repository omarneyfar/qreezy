import React from "react";

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
        <div className={`section-header ${centered ? "text-center" : ""} ${className}`} style={{ marginBottom: "3.5rem", textAlign: centered ? "center" : "left" }}>
            {icon && (
                <div style={{
                    display: "flex",
                    justifyContent: centered ? "center" : "flex-start",
                    marginBottom: "1.5rem"
                }}>
                    <div style={{
                        padding: "1.25rem",
                        backgroundColor: "var(--primary-light)",
                        borderRadius: "16px",
                        color: "var(--primary)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {icon}
                    </div>
                </div>
            )}
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: "800" }}>{title}</h2>
            {subtitle && <p style={{ fontSize: "1.125rem", maxWidth: "700px", margin: centered ? "0 auto" : "0", color: "var(--text-secondary)", lineHeight: "1.6" }}>{subtitle}</p>}
        </div>
    );
};

export default SectionHeader;
