"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Users } from "lucide-react";

const API_URL = "https://web-production-ef657.up.railway.app";

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
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!etude) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Étude non trouvée</p>
          <Link href="/etudes" className="text-blue-600 hover:text-blue-700">
            Retour aux études
          </Link>
        </div>
      </div>
    );
  }

  const embedUrl = type === "particulier" ? etude.embed_url_particulier : etude.embed_url_entreprise;

  if (!embedUrl) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Sondage non disponible</p>
          <Link href="/etudes" className="text-blue-600 hover:text-blue-700">
            Retour aux études
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/etudes" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux études
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {etude.title}
                </h1>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  type === "particulier" 
                    ? "bg-blue-100 text-blue-700" 
                    : "bg-purple-100 text-purple-700"
                }`}>
                  {type === "particulier" ? "Particulier" : "Entreprise"}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{etude.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{etude.duration}</span>
                </div>
                {etude.deadline && (
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Jusqu&apos;au {etude.deadline}</span>
                  </div>
                )}
                <div className="text-blue-600 font-medium">
                  {etude.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Survey iframe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <iframe
            src={embedUrl}
            className="w-full h-[800px] md:h-[900px] border-0"
            title={`Sondage ${etude.title}`}
            allow="camera; microphone"
          />
        </div>
        
        {/* Footer info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Merci de votre participation ! Vos réponses nous aident à mieux comprendre l&apos;Afrique francophone.</p>
        </div>
      </div>
    </div>
  );
}
