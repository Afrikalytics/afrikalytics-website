import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "À Propos — Datatym AI, expert data en Afrique francophone" },
  description:
    "100+ analystes, 25+ pays couverts, 98% de satisfaction client. Découvrez la mission de Datatym AI : démocratiser l'intelligence d'affaires en Afrique.",
  keywords: [
    "Datatym AI à propos",
    "cabinet analyse Afrique",
    "équipe data Sénégal",
    "expertise africaine",
    "MARKETYM",
    "leader business intelligence Afrique",
  ],
  alternates: { canonical: "https://datatym.ai/about" },
  openGraph: {
    title: "À Propos — Datatym AI, expert data en Afrique francophone",
    description:
      "100+ analystes, 25+ pays couverts. Datatym AI démocratise l'intelligence d'affaires en Afrique francophone.",
    url: "https://datatym.ai/about",
    type: "website",
  },
  twitter: {
    title: "À Propos — Datatym AI",
    description: "Expert data en Afrique francophone : 100+ analystes, 25+ pays couverts.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
