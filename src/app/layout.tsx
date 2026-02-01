import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { organizationSchema, localBusinessSchema, digitalMenuServiceSchema, qrMenuSoftwareSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://qreezy.tn'),
  title: {
    default: 'Qreezy - Menu Digital & Fidélité pour Restaurants en Tunisie',
    template: '%s | Qreezy',
  },
  description: 'Solutions digitales pour restaurants en Tunisie: Menu QR code sans contact et programme de fidélité. Modernisez votre restaurant avec Qreezy.',
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
    'digitalisation restaurant',
    'moderniser restaurant Tunisie',
    'menu interactif restaurant',
    'programme fidélisation client',
    'carte fidélité numérique',
    // English - Primary Keywords
    'digital menu',
    'QR code menu',
    'contactless menu',
    'restaurant digital solutions',
    'loyalty program restaurant',
    'digital menu Tunisia',
    // English - Long-tail
    'QR menu for restaurants',
    'digital menu software',
    'restaurant QR code generator',
    'contactless dining solutions',
    'restaurant loyalty system',
    // Location-based
    'menu digital Tunis',
    'restaurant digitalisé Tunisie',
    'QR menu Tunis',
  ],
  authors: [{ name: 'Qreezy' }],
  creator: 'Qreezy',
  publisher: 'Qreezy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_TN',
    url: 'https://qreezy.tn',
    title: 'Qreezy - Menu Digital & Fidélité pour Restaurants en Tunisie',
    description: 'Solutions digitales pour restaurants en Tunisie: Menu QR code sans contact et programme de fidélité.',
    siteName: 'Qreezy',
    images: [
      {
        url: 'https://qreezy.tn/og-image.png',
        width: 512,
        height: 512,
        alt: 'Qreezy - Solutions Digitales pour Restaurants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qreezy - Menu Digital & Fidélité pour Restaurants en Tunisie',
    description: 'Solutions digitales pour restaurants en Tunisie: Menu QR code sans contact et programme de fidélité.',
    images: ['http://qreezy.tn/og-image.png'],
    creator: '@qreezy',
  },
  alternates: {
    canonical: 'https://qreezy.tn',
  },
  verification: {
    google: 'LtAUFdbyZhGMRNEZfk4axrEQeHmmRoFpIIeahl22Iw8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMenuServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(qrMenuSoftwareSchema) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
