"use client";

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
        >
            <div className="container">
                {children}
            </div>
            <style jsx>{`
                .section {
                    padding: 5rem 0;
                }
                @media (max-width: 768px) {
                    .section {
                        padding: 3rem 0;
                    }
                }
                @media (max-width: 480px) {
                    .section {
                        padding: 2rem 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default Section;
