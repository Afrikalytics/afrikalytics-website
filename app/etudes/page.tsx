import Link from "next/link";
import { Clock, Users, Calendar, Tag, ArrowRight } from "lucide-react";

const etudes = [
  {
    id: "barometre-talents",
    title: "Baromètre Acquisition de Talents en Afrique",
    description: "Analyse approfondie des tendances d acquisition de talents sur le continent africain.",
    duration: "15-20 min",
    participants: "1,247",
    deadline: "28 Février 2025",
    category: "RH & Talents",
    status: "En cours",
    isPremium: false,
  },
  {
    id: "transformation-digitale",
    title: "Transformation Digitale des Entreprises Africaines",
    description: "État des lieux de la digitalisation des entreprises en Afrique.",
    duration: "20-25 min",
    participants: "892",
    deadline: "15 Mars 2025",
    category: "Technologie",
    status: "En cours",
    isPremium: false,
  },
  {
    id: "fintech-afrique",
    title: "L Essor des Fintech en Afrique de l Ouest",
    description: "Analyse du boom des technologies financières. Mobile money, néobanques, et services financiers digitaux.",
    duration: "18 min",
    participants: "654",
    deadline: "30 Mars 2025",
    category: "Finance",
    status: "En cours",
    isPremium: true,
  },
  {
    id: "ecommerce-afrique",
    title: "E-commerce et Comportement d Achat en Ligne",
    description: "Comprendre les habitudes d achat en ligne des consommateurs africains.",
    duration: "15 min",
    participants: "523",
    deadline: "10 Avril 2025",
    category: "Commerce",
    status: "Bientôt",
    isPremium: true,
  },
];

export default function EtudesPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Études en Cours</h1>
          <p className="text-xl text-primary-100 mb-6">
            Participez à nos recherches et accédez aux résultats en temps réel
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="font-semibold">{etudes.length}</span> études actives
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="font-semibold">3,316+</span> participants
            </div>
          </div>
        </div>
      </section>

      {/* Études Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {etudes.map((etude) => (
              <div
                key={etude.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          etude.status === "En cours" 
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {etude.status}
                        </span>
                        {etude.isPremium && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                            ⭐ Premium
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{etude.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{etude.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{etude.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{etude.participants} participants</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Jusqu au {etude.deadline}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Tag className="h-4 w-4 mr-2" />
                      <span>{etude.category}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {etude.isPremium ? (
                      <Link
                        href="/premium"
                        className="flex-1 bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors text-center"
                      >
                        Accès Premium
                      </Link>
                    ) : (
                      <Link
                        href={`/etudes/${etude.id}`}
                        className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center inline-flex items-center justify-center"
                      >
                        Participer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Premium */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Accédez à Toutes les Études Premium
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Débloquez l accès illimité à toutes nos études exclusives
          </p>
          <Link
            href="/premium"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center text-lg"
          >
            Voir les Plans Premium
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
