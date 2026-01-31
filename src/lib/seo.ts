import { Metadata } from 'next';

export const siteConfig = {
    name: 'Qreezy',
    url: 'https://qreezy.tn',
    locale: 'fr_TN',
    title: 'Qreezy - Menu Digital & Fidélité pour Restaurants en Tunisie',
    description: 'Solutions digitales pour restaurants: Menu QR code sans contact et programme de fidélité. Modernisez votre restaurant en Tunisie avec Qreezy.',
    keywords: [
        // French - Primary Keywords
        'menu digital',
        'QR code restaurant',
        'carte numérique',
        'menu sans contact',
        'fidélité restaurant',
        'programme fidélité',
        'solutions digitales restaurants',
        'restaurant Tunisie',
        'menu digital Tunisie',
        'Qreezy',
        // French - Long-tail & User Intent
        'comment créer menu digital restaurant',
        'menu restaurant QR code prix',
        'carte digitale restaurant Tunis',
        'solution menu numérique Tunisie',
        'application menu restaurant',
        'menu en ligne restaurant',
        'digitalisation restaurant',
        'moderniser restaurant Tunisie',
        'menu interactif restaurant',
        'carte QR code sans contact',
        'programme fidélisation client',
        'carte fidélité numérique',
        'augmenter chiffre affaires restaurant',
        'menu digital pour café',
        // English - Primary Keywords
        'digital menu',
        'QR code menu',
        'contactless menu',
        'restaurant digital solutions',
        'loyalty program restaurant',
        'digital menu Tunisia',
        // English - Long-tail & User Intent
        'QR menu for restaurants',
        'how to digitize restaurant menu',
        'digital menu software',
        'restaurant QR code generator',
        'contactless dining solutions',
        'restaurant loyalty system',
        'digital ordering system',
        'restaurant technology Tunisia',
        'smart menu solution',
        // Location-based
        'menu digital Tunis',
        'restaurant digitalisé Tunisie',
        'QR menu Tunis',
        'solution digitale restaurant Tunisie',
        // Problem-solving Keywords
        'remplacer menu papier',
        'menu hygiénique restaurant',
        'réduire coûts impression menu',
        'modifier menu facilement',
        'menu multi-langue',
        "menu",
        "qr code",
        "fidélité",
        "carte fidelité",

    ],
    contact: {
        email: 'contact@qreezy.tn',
        phone: '+216 44785090',
    },
    social: {
        facebook: 'https://facebook.com/qreezy',
        instagram: 'https://instagram.com/qreezy.tn',
        linkedin: 'https://linkedin.com/company/qreezy',
    },
};

interface PageSEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    noindex?: boolean;
}

export function generateMetadata({
    title,
    description,
    keywords = [],
    canonical,
    ogImage,
    noindex = false,
}: PageSEOProps = {}): Metadata {
    const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
    const pageDescription = description || siteConfig.description;
    const pageKeywords = [...siteConfig.keywords, ...keywords];
    const pageUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;
    const pageOgImage = ogImage || `${siteConfig.url}/og-image.png`;

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: pageKeywords,
        authors: [{ name: siteConfig.name }],
        creator: siteConfig.name,
        publisher: siteConfig.name,
        robots: {
            index: !noindex,
            follow: !noindex,
            googleBot: {
                index: !noindex,
                follow: !noindex,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            type: 'website',
            locale: siteConfig.locale,
            url: pageUrl,
            title: pageTitle,
            description: pageDescription,
            siteName: siteConfig.name,
            images: [
                {
                    url: pageOgImage,
                    width: 1200,
                    height: 630,
                    alt: pageTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            images: [pageOgImage],
            creator: '@qreezy',
        },
    };
}

// Structured Data Schemas
export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'TN',
        addressLocality: 'Tunis',
    },
    sameAs: [
        siteConfig.social.facebook,
        siteConfig.social.instagram,
        siteConfig.social.linkedin,
    ],
};

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'TN',
        addressLocality: 'Tunis',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.8065,
        longitude: 10.1815,
    },
    areaServed: {
        '@type': 'Country',
        name: 'Tunisia',
    },
    priceRange: '$$',
    description: siteConfig.description,
};

export function generateProductSchema(product: {
    name: string;
    description: string;
    features: string[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        brand: {
            '@type': 'Brand',
            name: siteConfig.name,
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'TND',
            seller: {
                '@type': 'Organization',
                name: siteConfig.name,
            },
        },
        additionalProperty: product.features.map((feature) => ({
            '@type': 'PropertyValue',
            name: 'Feature',
            value: feature,
        })),
    };
}
