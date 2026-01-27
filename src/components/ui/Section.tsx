import React from "react";

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
            className={`section ${dark ? "bg-primary-light" : ""} ${className}`}
            style={{
                padding: "5rem 0",
            }}
        >
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
