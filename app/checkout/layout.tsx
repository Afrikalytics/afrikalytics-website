import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Paiement sécurisé — Datatym AI Premium" },
  description:
    "Activez votre accès Premium à Datatym AI. Paiement sécurisé via PayDunya — Orange Money, Wave, Free Money, carte bancaire.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://datatym.ai/checkout" },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
