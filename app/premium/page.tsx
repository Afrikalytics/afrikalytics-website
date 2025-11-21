"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Crown, ArrowLeft } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Parfait pour les petites entreprises",
    priceMonthly: "49,000",
    priceAnnually: "39,200",
    features: [
      "Accès à 3 études par mois",
      "Dashboard basique",
      "Export PDF",
      "Support email",
      "Historique 6 mois",
    ],
    popular: false,
    woocommerceUrl: "https://abonnement.afrikalytics.com/product/plan-starter",
  },
  {
    name: "Professional",
    description: "Le plus populaire pour les entreprises en croissance",
    priceMonthly: "98,000",
    priceAnnually: "78,400",
    features: [
      "Accès illimité aux études",
      "Dashboard avancé avec KPIs",
      "Insights IA personnalisés",
      "Export Excel & PowerPoint",
      "Support prioritaire",
      "Benchmarks sectoriels",
      "Historique complet",
      "Études personnalisées (2/an)",
    ],
    popular: true,
    woocommerceUrl: "https://abonnement.afrikalytics.com/product/plan-professional",
  },
  {
    name: "Enterprise",
    description: "Solution complète pour les grandes entreprises",
    priceMonthly: "195,000",
    priceAnnually: "156,000",
    features: [
      "Tout du plan Professional",
      "API Access",
      "White-label reports",
      "Dedicated account manager",
      "Études personnalisées illimitées",
      "Workshops & formations",
      "Integration CRM/HRIS",
      "SLA garantie 99.9%",
    ],
    popular: false,
    woocommerceUrl: "https://abonnement.afrikalytics.com/product/plan-enterprise",
  },
];

export default function PremiumPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleSelectPlan = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Crown className="h-8 w-8 text-yellow-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Devenir Premium
            </h1>
          </div>
          <p className="text-gray-600">
            Accédez aux insights avancés d&apos;Afrikalytics
          </p>
        </div>
      </div>

      {/* Toggle Mensuel/Annuel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-white rounded-full p-1 inline-flex shadow-sm border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                !isAnnual 
                  ? "bg-gray-900 text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                isAnnual 
                  ? "bg-gray-900 text-white" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annuel
            </button>
          </div>
          {isAnnual && (
            <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
              -20%
            </span>
          )}
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular 
                  ? "ring-2 ring-blue-500 shadow-lg" 
                  : "border border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-flex items-center">
                    <span className="mr-1">☆</span> Le plus populaire
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    {isAnnual ? plan.priceAnnually : plan.priceMonthly}
                  </span>
                  <span className="text-gray-600 ml-2">CFA</span>
                  <span className="text-gray-500 text-sm">/mois</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => handleSelectPlan(plan.woocommerceUrl)}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {plan.popular ? "Plan sélectionné" : "Sélectionner"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
