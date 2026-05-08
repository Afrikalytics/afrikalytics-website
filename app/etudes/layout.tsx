import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Études de Marché Afrique francophone — Datatym AI" },
  description:
    "Participez aux études sectorielles de Datatym AI : RH, AI readiness, salary surveys, business intelligence. Données exclusives sur les marchés africains.",
  keywords: [
    "études de marché Afrique",
    "sondages Afrique francophone",
    "salary survey Sénégal",
    "étude RH Afrique",
    "AI readiness Afrique",
    "panel africain",
    "Datatym AI études",
  ],
  alternates: { canonical: "https://datatym.ai/etudes" },
  openGraph: {
    title: "Études de Marché Afrique francophone — Datatym AI",
    description:
      "Études sectorielles RH, AI readiness, salary surveys. Données exclusives sur les marchés africains francophones.",
    url: "https://datatym.ai/etudes",
    type: "website",
  },
  twitter: {
    title: "Études de Marché Afrique — Datatym AI",
    description: "Études RH, AI readiness, salary surveys sur l'Afrique francophone.",
  },
};

export default function EtudesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
