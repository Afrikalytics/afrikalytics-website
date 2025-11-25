"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, Users, Calendar, ArrowLeft, TrendingUp, FileText, Briefcase } from "lucide-react";

const API_URL = "https://web-production-ef657.up.railway.app";

interface Study {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  deadline: string;
  status: string;
  icon: string;
  embed_url_particulier: string;
  embed_url_entreprise: string;
}

export default function EtudesPage() {
  const [etudes, setEtudes] = useState<Study[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEtudes();
  }, []);

  const fetchEtudes = async () => {
    try {
      const response = await fetch(`${API_URL}/api/studies/active`);
      if (response.ok) {
        const data = await response.json();
        setEtudes(data);
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  const getIconComponent = (icon: string) => {
    switch (icon) {
      case "users":
        return <Users className="h-6 w-6" />;
      case "trending":
        return <TrendingUp className="h-6 w-6" />;
      case "file":
        return <FileText className="h-6 w-6" />;
      case "business":
        return <Briefcase className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  const getIconColors = (index: number) => {
    const colors = [
      { bg: "bg-red-100", text: "text-red-500" },
      { bg: "bg-blue-100", text: "text-blue-500" },
      { bg: "bg-green-100", text: "text-green-500" },
      { bg: "bg-purple-100", text: "text-purple-500" },
      { bg: "bg-orange-100", text: "text-orange-500" },
      { bg: "bg-pink-100", text: "text-pink-500" },
    ];
    return colors[index % colors.length];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ouvert":
        return "bg-green-100 text-green-700";
      case "Fermé":
        return "bg-red-100 text-red-700";
      case "Bientôt":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Études en Cours
          </h1>
          <p className="text-gray-600">
            Participez à nos recherches et contribuez aux insights sur l&apos;Afrique francophone
          </p>
        </div>
      </div>

      {/* Études Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {etudes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucune étude disponible pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {etudes.map((etude, index) => {
              const colors = getIconColors(index);
              return (
                <div
                  key={etude.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Header with icon and status */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`${colors.bg} w-12 h-12 rounded-xl flex items-center justify-center ${colors.text}`}>
                      {getIconComponent(etude.icon)}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(etude.status)}`}>
                      {etude.status}
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {etude.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {etude.description}
                  </p>

                  {/* Metadata */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-500">
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
                    <div className="col-span-2 text-blue-600 font-medium">
                      {etude.category}
                    </div>
                  </div>

                  {/* Participate section */}
                  <p className="text-sm text-gray-500 mb-3">Participer en tant que :</p>
                  
                  {/* Buttons */}
                  <div className="space-y-3">
                    <Link
                      href={`/etudes/${etude.id}?type=particulier`}
                      className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Particulier
                    </Link>
                    <Link
                      href={`/etudes/${etude.id}?type=entreprise`}
                      className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Entreprise
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
