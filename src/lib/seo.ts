import { Metadata } from 'next';

export const siteConfig = {
    name: 'Qreezy',
    url: 'https://qreezy.tn',
    locale: 'fr_TN',
    title: 'Menu QR Code & Fidélité Restaurant Tunisie | Solution Digitale | Qreezy',
    description: 'Qreezy : Solution de Menu QR Code et Programme de Fidélité digital pour restaurants en Tunisie. Modernisez votre établissement et boostez vos ventes. Devis gratuit !',
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
            languages: {
                'fr-TN': `${siteConfig.url}/`,
                'en-US': `${siteConfig.url}/en`,
                'ar-TN': `${siteConfig.url}/ar`,
            },
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
        verification: {
            google: 'LtAUFdbyZhGMRNEZfk4axrEQeHmmRoFpIIeahl22Iw8',
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
        streetAddress: 'Tunis, Tunisie',
        addressCountry: 'TN',
        addressLocality: 'Tunis',
        postalCode: '1000',
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
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
    ],
    sameAs: [
        siteConfig.social.facebook,
        siteConfig.social.instagram,
        siteConfig.social.linkedin,
    ],
    priceRange: 'TND',
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

// New Schemas for Phase 1
export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
        '@type': 'SearchAction',
        target: `${siteConfig.url}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
    },
};

export const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: siteConfig.url,
        },
    ],
};

export const webpageSchema = {
    '@context': 'https://schema.org',
    '@id': `${siteConfig.url}/#webpage`,
    '@type': 'WebPage',
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    breadcrumb: { '@id': `${siteConfig.url}/#breadcrumb` },
    inLanguage: siteConfig.locale,
};

// Phase 2: FAQ and Product Schemas
export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Comment créer un menu QR code pour mon restaurant ?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Avec Qreezy, vous pouvez créer votre menu QR code en quelques minutes. Inscrivez-vous, téléchargez votre menu ou ajoutez vos plats manuellement, et générez votre code QR unique à imprimer sur vos tables.',
            },
        },
        {
            '@type': 'Question',
            name: 'Quels sont les avantages d’un menu digital par rapport à un menu papier ?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Le menu digital réduit les coûts d’impression, permet des mises à jour instantanées des prix et des plats, améliore l’hygiène (sans contact) et offre une expérience client moderne et interactive.',
            },
        },
        {
            '@type': 'Question',
            name: 'Est-il possible de modifier le menu en temps réel ?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Oui, absolument. Toute modification effectuée sur votre tableau de bord Qreezy est instantanément visible par vos clients lorsqu’ils scannent le code QR, sans avoir à réimprimer quoi que ce soit.',
            },
        },
        {
            '@type': 'Question',
            name: 'Comment fonctionne le programme de fidélité Qreezy ?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Qreezy Fidélité permet à vos clients de cumuler des points via leur smartphone à chaque visite. C’est une solution 100% digitale qui remplace les cartes de fidélité en papier souvent perdues ou oubliées.',
            },
        },
        {
            '@type': 'Question',
            name: 'Quel est le prix du menu digital Qreezy en Tunisie ?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Qreezy propose des tarifs flexibles adaptés aux besoins des restaurateurs tunisiens. Contactez notre équipe pour un devis personnalisé et profitez d’un essai gratuit pour tester toutes nos fonctionnalités.',
            },
        },
    ],
};

export const qreezyProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Qreezy Digital Menu & Loyalty Solution',
    image: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    brand: {
        '@type': 'Brand',
        name: siteConfig.name,
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'TND',
        lowPrice: '99',
        highPrice: '500',
        offerCount: '3',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '120',
    },
};
