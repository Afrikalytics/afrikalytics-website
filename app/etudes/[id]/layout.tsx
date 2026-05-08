import type { Metadata } from "next";

const API_URL = "https://web-production-ef657.up.railway.app";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const res = await fetch(`${API_URL}/api/studies/${params.id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("not found");
    const etude = await res.json();
    const baseDesc = (etude.description || "").slice(0, 140).trim();
    const description = baseDesc
      ? `${baseDesc}… Participez à cette étude Datatym AI.`
      : "Participez à cette étude Datatym AI sur le marché africain francophone.";

    return {
      title: { absolute: `${etude.title} — Étude Datatym AI` },
      description,
      keywords: [
        etude.category,
        etude.title,
        "étude Afrique francophone",
        "Datatym AI",
        "analyse de données Afrique",
        "business intelligence Afrique",
      ].filter(Boolean),
      alternates: { canonical: `https://datatym.ai/etudes/${params.id}` },
      openGraph: {
        title: `${etude.title} — Étude Datatym AI`,
        description,
        url: `https://datatym.ai/etudes/${params.id}`,
        type: "article",
      },
      twitter: {
        title: `${etude.title} — Datatym AI`,
        description,
      },
    };
  } catch {
    return {
      title: { absolute: "Étude — Datatym AI" },
      description:
        "Participez à cette étude Datatym AI sur le marché africain francophone.",
      alternates: { canonical: `https://datatym.ai/etudes/${params.id}` },
    };
  }
}

export default function EtudeIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
