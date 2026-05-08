import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Conditions Générales d'Utilisation — Datatym AI" },
  description:
    "CGU de Datatym AI : modalités d'accès, plans tarifaires, propriété intellectuelle de la plateforme d'intelligence d'affaires en Afrique francophone.",
  keywords: ["CGU Datatym", "conditions utilisation", "mentions légales Datatym AI"],
  robots: { index: false, follow: true },
  alternates: { canonical: "https://datatym.ai/cgu" },
};

export default function CguLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
