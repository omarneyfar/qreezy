import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#EF6F60',
                    foreground: '#FFFFFF'
                },
                background: '#FFFFFF',
                foreground: '#1F2937',
                secondary: {
                    DEFAULT: '#6B7280',
                    foreground: '#FFFFFF'
                },
                border: '#E5E7EB',
                input: '#E5E7EB',
                ring: '#EF6F60',
                muted: {
                    DEFAULT: '#F3F4F6',
                    foreground: '#6B7280'
                },
                accent: {
                    DEFAULT: '#F3F4F6',
                    foreground: '#1F2937'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                popover: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#1F2937'
                },
                card: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#1F2937'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
