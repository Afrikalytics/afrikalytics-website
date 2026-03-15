"use client";

import { useEffect, useState } from "react";
import {
  Clock,
  Calendar,
  ChevronRight,
  Filter,
  Search,
  Lightbulb,
  Download,
  Lock,
  Users,
  Building2,
} from "lucide-react";
import { API_URL } from "@/lib/constants";

interface Study {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  deadline: string;
  status: string;
  icon: string;
  is_active: boolean;
  embed_url_particulier: string;
  embed_url_entreprise: string;
}

export default function PublicEtudesPage() {
  const [studies, setStudies] = useState<Study[]>([]);
  const [filteredStudies, setFilteredStudies] = useState<Study[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tous");

  useEffect(() => {
    fetchStudies();
  }, []);

  useEffect(() => {
    filterStudies();
  }, [studies, searchTerm, filterStatus]);

  const fetchStudies = async () => {
    try {
      const response = await fetch(`${API_URL}/api/studies/active`);
      if (response.ok) {
        const data = await response.json();
        setStudies(data);
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterStudies = () => {
    let filtered = studies;

    if (searchTerm) {
      filtered = filtered.filter(
        (study) =>
          study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== "Tous") {
      filtered = filtered.filter((study) => study.status === filterStatus);
    }

    setFilteredStudies(filtered);
  };

  const handlePremiumClick = () => {
    window.location.href = "https://dashboard.afrikalytics.com/login";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Nos Études de Marché</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Participez à nos études et accédez aux insights exclusifs sur les marchés africains
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une étude..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Tous">Tous les statuts</option>
                <option value="Ouvert">Ouvert</option>
                <option value="Fermé">Fermé</option>
                <option value="Bientôt">Bientôt</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-500">
            {filteredStudies.length} étude{filteredStudies.length !== 1 ? "s" : ""} trouvée
            {filteredStudies.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Studies Grid */}
        {filteredStudies.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <p className="text-gray-500 text-lg">Aucune étude trouvée.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{study.title}</h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ml-3 ${
                      study.status === "Ouvert"
                        ? "bg-green-100 text-green-700"
                        : study.status === "Fermé"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {study.status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{study.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{study.duration}</span>
                  </div>
                  {study.deadline && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Jusqu&apos;au {study.deadline}</span>
                    </div>
                  )}
                </div>

                <div className="text-blue-600 font-medium text-sm mb-4">{study.category}</div>

                {/* Boutons */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {/* Boutons Participer - Seulement si Ouvert */}
                  {study.status === "Ouvert" && (
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <a
                        href={`/etudes/${study.id}?type=particulier`}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        <Users className="h-5 w-5" />
                        <span className="font-medium">Particulier</span>
                      </a>
                      <a
                        href={`/etudes/${study.id}?type=entreprise`}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                      >
                        <Building2 className="h-5 w-5" />
                        <span className="font-medium">Entreprise</span>
                      </a>
                    </div>
                  )}

                  {/* Bouton Résultats - Toujours visible avec 🔒 */}
                  <button
                    onClick={handlePremiumClick}
                    className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                  >
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-yellow-600" />
                      <span className="font-medium">Voir les résultats</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Premium</span>
                    </div>
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Boutons Insight & Rapport - Seulement si Fermé */}
                  {study.status === "Fermé" && (
                    <>
                      <button
                        onClick={handlePremiumClick}
                        className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                      >
                        <div className="flex items-center gap-2">
                          <Lock className="h-5 w-5 text-yellow-600" />
                          <Lightbulb className="h-5 w-5 text-purple-500" />
                          <span className="font-medium">Lire l&apos;insight</span>
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Premium</span>
                        </div>
                        <ChevronRight className="h-5 w-5" />
                      </button>

                      <button
                        onClick={handlePremiumClick}
                        className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                      >
                        <div className="flex items-center gap-2">
                          <Lock className="h-5 w-5 text-yellow-600" />
                          <Download className="h-5 w-5 text-green-500" />
                          <span className="font-medium">Télécharger le rapport</span>
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Premium</span>
                        </div>
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Accédez à tous les résultats et insights
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Devenez membre Premium pour consulter les analyses détaillées, télécharger les rapports complets et accéder à notre intelligence de marché exclusive.
          </p>
          <a
            href="/premium"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Découvrir les offres Premium
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </main>

    </div>
  );
}
