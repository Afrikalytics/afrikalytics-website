import { Target, Users, Globe, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            À Propos d&apos;Afrikalytics AI by Marketym
          </h1>
          <p className="text-xl text-primary-100">
            Votre partenaire stratégique pour comprendre et naviguer les marchés africains
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Afrikalytics AI by Marketym démocratise l&apos;accès à l&apos;intelligence d&apos;affaires de haute qualité 
              pour les entreprises opérant en Afrique. Nous combinons l&apos;expertise locale, 
              les données en temps réel et l&apos;intelligence artificielle pour fournir des insights 
              actionnables.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Précision</h3>
              <p className="text-gray-600">
                Des données vérifiées et des analyses rigoureuses
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expertise Locale</h3>
              <p className="text-gray-600">
                100+ analystes à travers le continent
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Couverture</h3>
              <p className="text-gray-600">
                25+ pays africains analysés
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                98% de satisfaction client
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre Histoire</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Fondée en 2023 à Dakar, Sénégal, Afrikalytics AI by Marketym est née d&apos;une conviction simple : 
              les entreprises opérant en Afrique méritent d&apos;avoir accès aux mêmes outils d&apos;intelligence 
              d&apos;affaires que leurs homologues sur d&apos;autres continents.
            </p>
            <p className="mb-4">
              Notre équipe de data scientists, analystes et experts sectoriels travaille quotidiennement 
              pour collecter, vérifier et analyser des milliers de points de données à travers le continent.
            </p>
            <p>
              Aujourd&apos;hui, nous servons plus de 500 entreprises, des startups innovantes aux multinationales, 
              en leur fournissant l&apos;intelligence dont elles ont besoin pour réussir sur le continent africain.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
