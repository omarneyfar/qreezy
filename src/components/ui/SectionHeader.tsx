import React from "react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    centered = true,
    className = ""
}) => {
    return (
        <div className={`section-header ${centered ? "text-center" : ""} ${className}`} style={{ marginBottom: "3rem", textAlign: centered ? "center" : "left" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{title}</h2>
            {subtitle && <p style={{ fontSize: "1.125rem", maxWidth: "700px", margin: centered ? "0 auto" : "0" }}>{subtitle}</p>}
        </div>
    );
};

export default SectionHeader;
