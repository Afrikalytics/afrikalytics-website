import Link from "next/link";
import { TrendingUp, BarChart3, Users, FileText, Building2, User, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                L&apos;Intelligence Business
                <span className="text-yellow-400 block">pour l&apos;Afrique</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                Des insights stratégiques et des analyses de données pour éclairer vos décisions business en Afrique francophone.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/etudes"
                  className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Découvrir nos Insights
                </Link>
                <Link
                  href="/etudes"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Participer aux Études
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">2,847</div>
                  <div className="text-blue-200 text-sm mt-1">Participants actifs</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">15+</div>
                  <div className="text-blue-200 text-sm mt-1">Pays couverts</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">95%</div>
                  <div className="text-blue-200 text-sm mt-1">Satisfaction clients</div>
                </div>
              </div>
            </div>

            {/* Right Side - 3 Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-green-500 mb-3" />
                <h3 className="text-gray-900 font-semibold text-lg">Analyses</h3>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <BarChart3 className="h-8 w-8 text-blue-500 mb-3" />
                <h3 className="text-gray-900 font-semibold text-lg">Insights</h3>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="h-8 w-8 text-purple-500 mb-3" />
                <h3 className="text-gray-900 font-semibold text-lg">Équipe</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Afrikalytics AI */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Afrikalytics AI
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Cabinet d&apos;analyse et de recherche spécialisé dans l&apos;environnement business africain francophone. Nous proposons des études RH, AI readiness, salary surveys et des insights stratégiques pour comprendre les dynamiques économiques du continent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/etudes"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Nos Études &amp; Insights
            </Link>
            <Link
              href="/etudes"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Participer à une Étude
            </Link>
            <Link
              href="/etudes"
              className="text-gray-700 px-6 py-3 font-semibold hover:text-blue-600 transition-colors"
            >
              Études Sectorielles
            </Link>
          </div>
        </div>
      </section>

      {/* Nos Services de Recherche */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services de Recherche
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des études approfondies et des analyses stratégiques pour éclairer vos décisions business en Afrique francophone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Études RH */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Études RH</h3>
              <p className="text-gray-600 text-sm mb-4">
                Analyses approfondies des tendances RH en Afrique
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Salary Surveys sectoriels</li>
                <li>• Tendances de recrutement</li>
                <li>• Satisfaction employés</li>
                <li>• Benchmarks RH</li>
              </ul>
            </div>

            {/* AI Readiness */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Readiness</h3>
              <p className="text-gray-600 text-sm mb-4">
                Évaluation de la maturité IA des entreprises
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Diagnostic IA complet</li>
                <li>• Roadmap transformation</li>
                <li>• Benchmarks sectoriels</li>
                <li>• Recommandations stratégiques</li>
              </ul>
            </div>

            {/* Business Intelligence */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Business Intelligence</h3>
              <p className="text-gray-600 text-sm mb-4">
                Insights stratégiques pour l&apos;Afrique francophone
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Analyses de marché</li>
                <li>• Tendances économiques</li>
                <li>• Opportunités sectorielles</li>
                <li>• Veille concurrentielle</li>
              </ul>
            </div>

            {/* Rapports Exécutifs */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rapports Exécutifs</h3>
              <p className="text-gray-600 text-sm mb-4">
                Publications de recherche détaillées
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Études sectorielles</li>
                <li>• Synthèses exécutives</li>
                <li>• Recommandations actionnables</li>
                <li>• Formats personnalisés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dernières Publications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Dernières Publications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Publication 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Salary Survey 2024 - Secteur Tech
              </h3>
              <p className="text-gray-700 font-medium mb-3">
                Analyse complète des rémunérations dans la tech en Afrique francophone
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Étude sur 1,200+ professionnels dans 8 pays. Découvrez les tendances salariales, les écarts de rémunération et les compétences les plus valorisées.
              </p>
              <Link href="/etudes" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                Lire l&apos;étude <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Publication 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI Readiness Index Afrique 2024
              </h3>
              <p className="text-gray-700 font-medium mb-3">
                État de la maturité IA des entreprises africaines
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Évaluation de 500+ entreprises sur leur préparation à l&apos;IA. Benchmarks sectoriels et roadmaps de transformation digitale.
              </p>
              <Link href="/etudes" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                Découvrir <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Publication 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tendances RH Post-COVID
              </h3>
              <p className="text-gray-700 font-medium mb-3">
                Impact durable sur le marché du travail africain
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Analyse des nouvelles dynamiques RH : télétravail, reconversion, nouvelles attentes des talents en Afrique francophone.
              </p>
              <Link href="/etudes" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                Consulter <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Participez à nos Études */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Participez à nos Études
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pour les Entreprises */}
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pour les Entreprises</h3>
              <p className="text-gray-600 mb-6">
                Participez à nos études sectorielles et bénéficiez d&apos;insights exclusifs
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8 text-left">
                <li className="flex justify-center">• Benchmarking sectoriel gratuit</li>
                <li className="flex justify-center">• Rapports personnalisés</li>
                <li className="flex justify-center">• Networking avec vos pairs</li>
                <li className="flex justify-center">• Visibilité dans nos publications</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Inscrire mon Entreprise
              </Link>
            </div>

            {/* Pour les Particuliers */}
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pour les Particuliers</h3>
              <p className="text-gray-600 mb-6">
                Contribuez à nos recherches et accédez à nos données
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-8 text-left">
                <li className="flex justify-center">• Salary benchmarks personnalisés</li>
                <li className="flex justify-center">• Tendances de votre secteur</li>
                <li className="flex justify-center">• Conseils carrière</li>
                <li className="flex justify-center">• Accès prioritaire aux études</li>
              </ul>
              <Link
                href="/etudes"
                className="block w-full border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Participer aux Sondages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
