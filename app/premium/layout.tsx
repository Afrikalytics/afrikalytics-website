import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Offres Premium — Insights Data Afrique | Datatym AI" },
  description:
    "Accédez à l'intelligence d'affaires premium de Datatym AI : dashboard avancé, insights IA, rapports exclusifs sur l'Afrique francophone. Dès 295 000 CFA/mois.",
  keywords: [
    "abonnement business intelligence Afrique",
    "rapports sectoriels Afrique",
    "dashboard KPI Sénégal",
    "Datatym Premium",
    "plan analyse données entreprise",
    "insights IA Afrique",
  ],
  alternates: { canonical: "https://datatym.ai/premium" },
  openGraph: {
    title: "Offres Premium Datatym AI — Intelligence d'Affaires Afrique",
    description:
      "Dashboard avancé, insights IA, rapports exclusifs sur l'Afrique francophone. Plans à partir de 295 000 CFA/mois.",
    url: "https://datatym.ai/premium",
    type: "website",
  },
  twitter: {
    title: "Premium Datatym AI",
    description: "Dashboard avancé, insights IA et rapports exclusifs sur l'Afrique francophone.",
  },
};

export default function PremiumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
