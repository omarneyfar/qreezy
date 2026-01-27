import React from "react";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    type = "button",
    variant = "primary",
    className = "",
    disabled = false
}) => {
    const baseStyles = {
        display: "inline-block",
        padding: "0.75rem 1.5rem",
        borderRadius: "var(--radius)",
        fontWeight: "600",
        fontSize: "1rem",
        textAlign: "center" as const,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s ease",
        opacity: disabled ? 0.6 : 1,
    };

    const variants = {
        primary: {
            backgroundColor: "var(--primary)",
            color: "#FFFFFF",
        },
        secondary: {
            backgroundColor: "var(--primary-light)",
            color: "var(--primary)",
        },
        outline: {
            backgroundColor: "transparent",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
        }
    };

    const style = { ...baseStyles, ...variants[variant] };

    if (href && !disabled) {
        return (
            <Link href={href} style={style} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} style={style} className={className} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
