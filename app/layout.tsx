import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afrikalytics AI - Intelligence d'Affaires pour l'Afrique",
  description: "Plateforme de business intelligence alimentée par l'IA, spécialisée dans l'analyse du marché africain francophone. Études de marché, insights stratégiques et rapports sectoriels.",
  keywords: ["business intelligence", "Afrique", "études de marché", "analytics", "insights", "Sénégal", "francophone"],
  authors: [{ name: "Marketym" }],
  creator: "Afrikalytics AI by Marketym",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://afrikalytics.com",
    siteName: "Afrikalytics AI",
    title: "Afrikalytics AI - Intelligence d'Affaires pour l'Afrique",
    description: "Plateforme de business intelligence pour l'Afrique francophone",
    images: [
      {
        url: "/android-chrome-512.png",
        width: 512,
        height: 512,
        alt: "Afrikalytics AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Afrikalytics AI",
    description: "Intelligence d'Affaires pour l'Afrique",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
