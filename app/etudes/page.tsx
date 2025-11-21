"use client";

import Link from "next/link";
import { Clock, Users, Calendar, ArrowLeft, TrendingUp } from "lucide-react";

const etudes = [
  {
    id: "barometre-talents",
    title: "Baromètre Acquisition Talents",
    description: "Analyse en temps réel du marché de l'acquisition de talents : profils recherchés, coûts de recrutement, débauchage et rétention",
    duration: "15-20 min",
    participants: "1,247",
    deadline: "28 Février 2024",
    category: "RH & Talents",
    status: "Ouvert",
    icon: "users",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    id: "transformation-digitale",
    title: "Transformation Digitale en Afrique",
    description: "Évaluation de la maturité digitale des entreprises africaines francophones",
    duration: "15-20 min",
    participants: "2,847",
    deadline: "15 Mars 2024",
    category: "Digital & IA",
    status: "Ouvert",
    icon: "trending",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
];

export default function EtudesPage() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {etudes.map((etude) => (
            <div
              key={etude.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header with icon and status */}
              <div className="flex justify-between items-start mb-4">
                <div className={`${etude.iconBg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  {etude.icon === "users" ? (
                    <Users className={`h-6 w-6 ${etude.iconColor}`} />
                  ) : (
                    <TrendingUp className={`h-6 w-6 ${etude.iconColor}`} />
                  )}
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {etude.status}
                </span>
              </div>

              {/* Title and description */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {etude.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {etude.description}
              </p>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{etude.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{etude.participants} participants</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Jusqu&apos;au {etude.deadline}</span>
                </div>
                <div className="text-blue-600 font-medium">
                  {etude.category}
                </div>
              </div>

              {/* Participate section */}
              <p className="text-sm text-gray-500 mb-3">Participer en tant que :</p>
              
              {/* Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center">
                  <Users className="h-4 w-4 mr-2" />
                  Particulier
                </button>
                <button className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Entreprise
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
