import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact — Datatym AI, cabinet data Afrique francophone" },
  description:
    "Contactez Datatym AI à Dakar : études personnalisées, partenariats, support. Email contact@datatym.ai • +221 77 361 90 28.",
  keywords: [
    "contact Datatym AI",
    "cabinet data Dakar",
    "étude personnalisée Afrique",
    "partenariat intelligence d'affaires",
    "Sénégal data",
    "consulting Afrique francophone",
  ],
  alternates: { canonical: "https://datatym.ai/contact" },
  openGraph: {
    title: "Contact — Datatym AI, cabinet data Afrique francophone",
    description:
      "Contactez l'équipe Datatym AI à Dakar pour vos études personnalisées et partenariats.",
    url: "https://datatym.ai/contact",
    type: "website",
  },
  twitter: {
    title: "Contact — Datatym AI",
    description: "Études personnalisées et partenariats data en Afrique francophone.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
