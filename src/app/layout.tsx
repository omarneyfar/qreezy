import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <div style={{ minHeight: "100vh", paddingTop: "var(--header-height)" }}>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
