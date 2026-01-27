"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    className?: string;
}

const CTA: React.FC<CTAProps> = ({ title, description, buttonText, buttonLink, className = "" }) => {
    return (
        <div className={`cta-outer ${className}`}>
            <div className="cta-content">
                <div className="cta-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="cta-action">
                    <Button href={buttonLink}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {buttonText}
                            <ArrowRight size={20} />
                        </span>
                    </Button>
                </div>
            </div>

            {/* Decorative shapes */}
            <div className="cta-shape shape-1"></div>
            <div className="cta-shape shape-2"></div>

            <style jsx>{`
                .cta-outer {
                    position: relative;
                    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
                    color: #FFFFFF;
                    padding: 5rem 4rem;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-premium);
                }

                .cta-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 3rem;
                    text-align: left;
                }

                .cta-text {
                    flex: 1;
                    max-width: 600px;
                }

                h2 {
                    color: #FFFFFF;
                    font-size: clamp(2rem, 4vw, 3rem);
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                }

                p {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 1.2rem;
                    line-height: 1.6;
                }

                .cta-action {
                    flex-shrink: 0;
                }

                .cta-shape {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    z-index: 1;
                }

                .shape-1 {
                    width: 300px;
                    height: 300px;
                    top: -100px;
                    right: -50px;
                }

                .shape-2 {
                    width: 150px;
                    height: 150px;
                    bottom: -50px;
                    left: 10%;
                }

                @media (max-width: 1024px) {
                    .cta-content {
                        flex-direction: column;
                        text-align: center;
                    }
                    .cta-text {
                        max-width: 100%;
                    }
                    .cta-outer {
                        padding: 4rem 2rem;
                    }
                }

                @media (max-width: 640px) {
                    h2 {
                        font-size: 2rem;
                    }
                    p {
                        font-size: 1.1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default CTA;
