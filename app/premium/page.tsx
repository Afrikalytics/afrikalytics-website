"use client";

import Link from "next/link";
import { Check, Crown, ArrowLeft, User, Briefcase, Building2 } from "lucide-react";

const plans = [
  {
    name: "Basic",
    icon: User,
    description: "Pour les particuliers et passionnés d'études",
    price: "0",
    priceSuffix: "CFA",
    users: "1 utilisateur",
    features: [
      "Accès insights et résumés des études",
      "Dashboard basic",
      "Participer aux études",
    ],
    popular: false,
    buttonText: "Commencer gratuitement",
    buttonLink: "https://dashboard.afrikalytics.com/register",
  },
  {
    name: "Professionnel",
    icon: Briefcase,
    description: "Pour les experts et décideurs ayant besoin d'insights",
    price: "295,000",
    priceSuffix: "CFA/mois",
    users: "1 utilisateur",
    features: [
      "Accès illimité aux études",
      "Dashboard avancé avec KPIs",
      "Insights IA personnalisés",
      "Export PDF",
      "Support prioritaire",
      "Historique complet",
    ],
    popular: true,
    buttonText: "Choisir Professionnel",
    buttonLink: "/checkout",
  },
  {
    name: "Entreprise",
    icon: Building2,
    description: "Solution complète pour les entreprises",
    price: "Sur mesure",
    priceSuffix: "",
    users: "5 utilisateurs",
    features: [
      "Tout ce qu'il y a dans Professionnel",
      "5 utilisateurs inclus",
      "Rapports et Insights sur mesure",
      "Études personnalisées",
      "Workshops & formations",
      "Support prioritaire dédié",
    ],
    popular: false,
    buttonText: "Nous contacter",
    buttonLink: "/contact",
  },
];

export default function PremiumPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour à l&apos;accueil
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-500 p-2 rounded-lg">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Accès Premium
            </h1>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl">
            Choisissez le niveau d&apos;accès adapté à vos besoins et accédez aux insights stratégiques d&apos;Afrikalytics AI by Marketym
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular 
                    ? "ring-2 ring-blue-500 shadow-xl scale-105" 
                    : "border border-gray-200 shadow-sm"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full inline-flex items-center shadow-lg">
                      <Crown className="h-4 w-4 mr-1" /> Le plus populaire
                    </span>
                  </div>
                )}

                {/* Icon & Plan Name */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                    plan.popular 
                      ? "bg-blue-100" 
                      : plan.name === "Entreprise" 
                        ? "bg-purple-100" 
                        : "bg-gray-100"
                  }`}>
                    <IconComponent className={`h-7 w-7 ${
                      plan.popular 
                        ? "text-blue-600" 
                        : plan.name === "Entreprise" 
                          ? "text-purple-600" 
                          : "text-gray-600"
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.priceSuffix && (
                      <span className="text-gray-500 ml-2">{plan.priceSuffix}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{plan.users}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-blue-500" : "text-green-500"
                      }`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  href={plan.buttonLink}
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : plan.name === "Entreprise"
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            );
          })}
        </div>

        {/* FAQ ou Contact */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Vous avez des questions sur nos offres ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            Contactez-nous
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
