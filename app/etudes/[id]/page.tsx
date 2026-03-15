"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { API_URL, isSafeEmbedUrl } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Study {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  deadline: string;
  status: string;
  embed_url_particulier: string;
  embed_url_entreprise: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EtudeSondagePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const studyId = params?.id;
  const type = searchParams?.get("type") || "particulier";

  const [etude, setEtude] = useState<Study | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (studyId) {
      fetchEtude();
    }
  }, [studyId]);

  const fetchEtude = async () => {
    try {
      const response = await fetch(`${API_URL}/api/studies/${studyId}`);
      if (response.ok) {
        const data = await response.json();
        setEtude(data);
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-surface-50 flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary-600" />
      </div>
    );
  }

  if (!etude) {
    return (
      <div className="pt-16 min-h-screen bg-surface-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-surface-500 text-lg mb-4">Étude non trouvée</p>
          <Link href="/etudes">
            <Button variant="secondary">Retour aux études</Button>
          </Link>
        </div>
      </div>
    );
  }

  const embedUrl = type === "particulier" ? etude.embed_url_particulier : etude.embed_url_entreprise;

  if (!embedUrl) {
    return (
      <div className="pt-16 min-h-screen bg-surface-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-surface-500 text-lg mb-4">Sondage non disponible</p>
          <Link href="/etudes">
            <Button variant="secondary">Retour aux études</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-surface-50">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-white border-b border-surface-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/etudes"
            className="inline-flex items-center text-surface-400 hover:text-surface-700 mb-4 transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            Retour aux études
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-surface-900 tracking-tight font-heading">
                  {etude.title}
                </h1>
                <Badge
                  variant={type === "particulier" ? "primary" : "accent"}
                >
                  {type === "particulier" ? "Particulier" : "Entreprise"}
                </Badge>
              </div>
              <p className="text-surface-600 mb-4">{etude.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-surface-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{etude.duration}</span>
                </div>
                {etude.deadline && (
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>Jusqu&apos;au {etude.deadline}</span>
                  </div>
                )}
                <Badge variant="primary" size="sm">
                  {etude.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Survey iframe */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <Card variant="default" padding="none" className="overflow-hidden">
          {isSafeEmbedUrl(embedUrl) ? (
            <iframe
              src={embedUrl}
              className="w-full h-[800px] md:h-[900px] border-0"
              title={`Sondage ${etude.title}`}
              sandbox="allow-forms allow-scripts allow-same-origin"
            />
          ) : (
            <div className="flex items-center justify-center h-[400px] text-surface-500">
              <p>Sondage non disponible pour le moment.</p>
            </div>
          )}
        </Card>

        {/* Footer info */}
        <div className="mt-6 text-center text-sm text-surface-500">
          <p>Merci de votre participation ! Vos réponses nous aident à mieux comprendre l&apos;Afrique francophone.</p>
        </div>
      </motion.div>
    </div>
  );
}
