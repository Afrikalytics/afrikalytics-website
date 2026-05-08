import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Politique de Confidentialité — Datatym AI" },
  description:
    "Politique de confidentialité Datatym AI : collecte des données, finalités, durée de conservation, vos droits sur vos données personnelles.",
  keywords: [
    "confidentialité Datatym",
    "protection données Afrique",
    "RGPD",
    "vie privée Datatym AI",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "https://datatym.ai/confidentialite" },
};

export default function ConfidentialiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
