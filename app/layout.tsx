import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://datatym.ai"),
  title: {
    default: "Datatym AI — Leader de l'analyse de données en Afrique",
    template: "%s | Datatym AI",
  },
  description:
    "Plateforme #1 d'intelligence d'affaires en Afrique francophone : études de marché, AI readiness, salary surveys et insights stratégiques par les experts Datatym AI.",
  keywords: [
    "analyse de données Afrique",
    "business intelligence Afrique",
    "études de marché Afrique francophone",
    "Datatym AI",
    "insights stratégiques Afrique",
    "AI readiness Afrique",
    "intelligence économique Afrique",
    "salary survey Sénégal",
    "cabinet d'études Afrique",
    "Marketym",
  ],
  authors: [{ name: "Datatym AI" }],
  creator: "Datatym AI",
  publisher: "MARKETYM by H&C",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://datatym.ai",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://datatym.ai",
    siteName: "Datatym AI",
    title: "Datatym AI — Leader de l'analyse de données en Afrique",
    description:
      "Plateforme leader d'intelligence d'affaires en Afrique francophone : études, insights et rapports stratégiques.",
    images: [
      {
        url: "/android-chrome-512.png",
        width: 512,
        height: 512,
        alt: "Datatym AI — Leader de l'analyse de données en Afrique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datatym AI — Leader de l'analyse de données en Afrique",
    description:
      "Plateforme leader d'intelligence d'affaires en Afrique francophone.",
    images: ["/android-chrome-512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Datatym AI",
  alternateName: "Datatym AI by Marketym",
  url: "https://datatym.ai",
  logo: "https://datatym.ai/android-chrome-512.png",
  description:
    "Plateforme leader d'intelligence d'affaires en Afrique francophone : études de marché, AI readiness, salary surveys et insights stratégiques.",
  email: "contact@datatym.ai",
  telephone: "+221 77 361 90 28",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dakar",
    addressCountry: "SN",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "MARKETYM by H&C",
  },
  areaServed: {
    "@type": "Place",
    name: "Afrique francophone",
  },
  knowsAbout: [
    "Business Intelligence",
    "Études de marché",
    "AI Readiness",
    "Salary Survey",
    "Analyse de données",
    "Afrique francophone",
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Datatym AI",
  url: "https://datatym.ai",
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: "Datatym AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
