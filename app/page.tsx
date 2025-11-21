import Link from "next/link";
import { ArrowRight, BarChart3, Brain, Globe, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intelligence d&apos;Affaires pour l&apos;Afrique
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Analyses alimentées par l&apos;IA • Données en temps réel • Insights actionnables
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/premium"
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Devenir Premium
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/etudes"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors inline-flex items-center justify-center"
              >
                Voir les Études
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div>
                <div className="text-4xl font-bold text-accent-400">10K+</div>
                <div className="text-primary-200 mt-2">Entreprises analysées</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-400">25+</div>
                <div className="text-primary-200 mt-2">Pays couverts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-400">500+</div>
                <div className="text-primary-200 mt-2">Rapports publiés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent-400">98%</div>
                <div className="text-primary-200 mt-2">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Afrikalytics AI ?
            </h2>
            <p className="text-xl text-gray-600">
              Des outils puissants pour des décisions éclairées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligence Artificielle</h3>
              <p className="text-gray-600">
                Analyses prédictives et insights générés par IA pour anticiper les tendances du marché africain.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Données en Temps Réel</h3>
              <p className="text-gray-600">
                Accès instantané aux données les plus récentes sur les marchés africains.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Couverture Panafricaine</h3>
              <p className="text-gray-600">
                Analyses détaillées de 25+ pays africains avec une compréhension locale profonde.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyses Sectorielles</h3>
              <p className="text-gray-600">
                Études spécialisées par secteur : finance, tech, santé, agriculture, et plus.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Communauté d&apos;Experts</h3>
              <p className="text-gray-600">
                Réseau de plus de 100 analystes et experts locaux à travers le continent.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapports Personnalisés</h3>
              <p className="text-gray-600">
                Créez des rapports sur mesure adaptés à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à Transformer Vos Décisions d&apos;Affaires ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez des centaines d&apos;entreprises qui font confiance à Afrikalytics AI.
          </p>
          <Link
            href="/premium"
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center text-lg"
          >
            Commencer Maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
