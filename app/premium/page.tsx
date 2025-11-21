"use client";

import { Check, Star, Sparkles, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49,000",
    currency: "CFA",
    period: "mois",
    description: "Pour les petites entreprises qui démarrent",
    icon: Star,
    features: [
      "3 rapports par mois",
      "Accès aux études publiques",
      "Dashboard basique",
      "Support par email",
      "Données de 5 pays",
    ],
    woocommerceUrl: "https://abonnement.afrikalytics.com/product/plan-starter",
  },
  {
    name: "Professional",
    price: "98,000",
    currency: "CFA",
    period: "mois",
    description: "Pour les entreprises en croissance",
    icon: Sparkles,
    popular: true,
    features: [
      "10 rapports par mois",
      "Toutes les études premium",
      "Dashboard avancé + Analytics",
      "Support prioritaire",
      "Données de 25+ pays",
      "Alertes personnalisées",
      "Export de données",
    ],
    woocommerceUrl: "https://abonnement.afrikalytics.com/product/plan-professional",
  },
  {
    name: "Enterprise",
    price: "195,000",
    currency: "CFA",
    period: "mois",
    description: "Pour les grandes organisations",
    icon: Crown,
    features: [
      "Rapports illimités",
      "Accès complet à tout",
      "Dashboard sur mesure",
      "Support dédié 24/7",
      "Tous les pays",
      "API personnalisée",
      "Analyses prédictives IA",
      "Consultations mensuelles",
      "Formation d équipe",
    ],
    woocommerceUrl: "https://abonnement.afrikalytics.com/product/plan-enterprise",
  },
];

export default function PremiumPage() {
  const handleSelectPlan = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choisissez Votre Plan Premium
          </h1>
          <p className="text-xl text-primary-100 mb-8">
            Accédez à des insights exclusifs et transformez vos décisions d&apos;affaires
          </p>
          <div className="inline-flex items-center bg-accent-500 text-white px-4 py-2 rounded-full">
            <Sparkles className="h-5 w-5 mr-2" />
            <span className="font-semibold">Satisfait ou remboursé sous 30 jours</span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isPopular = plan.popular;
              
              return (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                    isPopular ? "ring-2 ring-accent-500 transform scale-105" : ""
                  }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 right-0 bg-accent-500 text-white px-4 py-1 text-sm font-semibold">
                      ⭐ Plus Populaire
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-100 p-3 rounded-lg mr-3">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    </div>

                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 ml-2">{plan.currency}/{plan.period}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSelectPlan(plan.woocommerceUrl)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        isPopular
                          ? "bg-accent-500 text-white hover:bg-accent-600"
                          : "bg-primary-600 text-white hover:bg-primary-700"
                      }`}
                    >
                      Choisir {plan.name}
                    </button>

                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Comment fonctionne le paiement ?</h3>
              <p className="text-gray-600">
                Nous acceptons les cartes bancaires, Mobile Money (Orange Money, Wave, MTN) et virements bancaires.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Que se passe-t-il après le paiement ?</h3>
              <p className="text-gray-600">
                Vous recevrez instantanément un email avec vos identifiants de connexion au dashboard.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Puis-je annuler mon abonnement ?</h3>
              <p className="text-gray-600">
                Oui, vous pouvez annuler à tout moment. Aucun frais d&apos;annulation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
