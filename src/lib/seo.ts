import { Metadata } from 'next';

export const siteConfig = {
    name: 'Qreezy',
    url: 'https://qreezy.tn',
    locale: 'fr_TN',
    title: 'Qreezy - Menu Digital & Fidélité pour Restaurants en Tunisie',
    description: 'Solutions digitales pour restaurants: Menu QR code sans contact et programme de fidélité. Modernisez votre restaurant en Tunisie avec Qreezy.',
    keywords: [
        // French - High-Value Competition Keywords
        'menu qr code',
        'qr code menu restaurant',
        'menu digital restaurant',
        'carte menu digital',
        'menu restaurant qr code',
        'menu code qr restaurant',
        'menu numérique restaurant',
        'qr menu',
        'digital menu restaurant',
        'menu digital',
        'QR code restaurant',
        'carte numérique',
        'menu sans contact',
        'menu contactless',

        // French - Competitor Keywords
        'menu qr tunisie',
        'solution menu digital tunisie',
        'créer menu qr code',
        'menu qr code prix',
        'menu digital pas cher',
        'menu qr code gratuit',
        'logiciel menu digital',
        'plateforme menu digital',
        'application menu qr code',

        // French - Loyalty Keywords
        'fidélité restaurant',
        'programme fidélité',
        'programme fidélité digital',
        'carte fidélité digitale',
        'solution fidélité restaurant',
        'fidélisation client restaurant',
        'programme de points restaurant',

        // French - Long-tail & User Intent
        'comment créer menu digital restaurant',
        'comment faire menu qr code',
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
        'menu digital pour restaurant',
        'menu qr code tunis',

        // English - High-Value Keywords
        'qr code menu',
        'digital menu',
        'restaurant qr code menu',
        'qr menu restaurant',
        'digital restaurant menu',
        'contactless menu',
        'qr code for restaurant menu',
        'restaurant menu qr code',
        'digital menu for restaurants',
        'qr code restaurant menu maker',
        'create qr code menu',

        // English - Solution Keywords
        'restaurant digital solutions',
        'digital menu software',
        'qr menu maker',
        'digital menu creator',
        'restaurant QR code generator',
        'contactless dining solutions',
        'restaurant loyalty system',
        'digital ordering system',
        'restaurant technology Tunisia',
        'smart menu solution',
        'restaurant menu digitization',

        // English - Loyalty
        'loyalty program restaurant',
        'digital loyalty card',
        'restaurant loyalty app',
        'customer loyalty program',
        'restaurant rewards program',

        // Location-based
        'menu digital Tunis',
        'menu qr code Tunisie',
        'restaurant digitalisé Tunisie',
        'QR menu Tunis',
        'solution digitale restaurant Tunisie',
        'menu numérique Tunisie',
        'qr code menu Tunisia',
        'digital menu Tunisia',

        // Problem-solving Keywords
        'remplacer menu papier',
        'menu hygiénique restaurant',
        'réduire coûts impression menu',
        'modifier menu facilement',
        'menu multi-langue',
        'menu sans impression',
        'économiser argent menu restaurant',
        'update menu easily',
        'reduce printing costs menu',

        // Service Keywords
        'Qreezy',
        'menu',
        'qr code',
        'fidélité',
        'carte fidelité',
        'restaurant Tunisie',
        'menu digital Tunisie',
        'solutions digitales restaurants',

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

// Service Schema for Digital Menu and Loyalty Solutions
export const digitalMenuServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Menu Solution',
    name: 'Menu Digital QR Code pour Restaurants',
    description: 'Solution de menu digital avec QR code pour restaurants en Tunisie. Créez, gérez et partagez votre menu numérique sans contact.',
    provider: {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
    },
    areaServed: {
        '@type': 'Country',
        name: 'Tunisia',
    },
    offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'TND',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Restaurant Solutions',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Menu Digital QR Code',
                    description: 'Menu restaurant digital accessible par QR code, sans contact, modifiable en temps réel',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Programme Fidélité Digital',
                    description: 'Solution de carte fidélité numérique pour fidéliser vos clients',
                },
            },
        ],
    },
};

// Software Application Schema
export const qrMenuSoftwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Qreezy Menu Digital',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'TND',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '50',
    },
    description: 'Solution complète de menu digital QR code pour restaurants, cafés et hôtels en Tunisie. Créez votre menu numérique en quelques minutes.',
};
