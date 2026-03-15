"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Crown, ArrowLeft, User, Briefcase, Building2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ---------------------------------------------------------------------------
// Plans data
// ---------------------------------------------------------------------------

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
    buttonVariant: "secondary" as const,
    buttonSize: "md" as const,
    cardVariant: "bordered" as const,
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
    buttonVariant: "primary" as const,
    buttonSize: "lg" as const,
    cardVariant: "elevated" as const,
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
    buttonVariant: "accent" as const,
    buttonSize: "md" as const,
    cardVariant: "bordered" as const,
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PremiumPage() {
  return (
    <div className="pt-16 min-h-screen bg-surface-50">
      {/* ----------------------------------------------------------------- */}
      {/* Hero — dark corporate                                             */}
      {/* ----------------------------------------------------------------- */}
      <div className="bg-surface-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Link
            href="/"
            className="inline-flex items-center text-surface-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour &agrave; l&apos;accueil
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent-500 p-2 rounded-lg">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Acc&egrave;s Premium
              </h1>
            </div>
            <p className="text-surface-300 text-lg max-w-2xl">
              Choisissez le niveau d&apos;acc&egrave;s adapt&eacute; &agrave;
              vos besoins et acc&eacute;dez aux insights strat&eacute;giques
              d&apos;Afrikalytics AI by Marketym
            </p>
          </motion.div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Plans grid                                                        */}
      {/* ----------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => {
            const IconComponent = plan.icon;

            return (
              <motion.div key={plan.name} variants={fadeInUp}>
                <Card
                  variant={plan.cardVariant}
                  padding="lg"
                  className={`relative ${
                    plan.popular
                      ? "ring-2 ring-primary-500 scale-105 shadow-heavy"
                      : ""
                  } ${
                    plan.name === "Entreprise"
                      ? "border-accent-200"
                      : ""
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge
                        variant="accent"
                        size="md"
                        icon={<Crown className="h-3.5 w-3.5" />}
                      >
                        Le plus populaire
                      </Badge>
                    </div>
                  )}

                  {/* Icon & plan name */}
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                        plan.popular
                          ? "bg-primary-100"
                          : plan.name === "Entreprise"
                            ? "bg-accent-100"
                            : "bg-surface-100"
                      }`}
                    >
                      <IconComponent
                        className={`h-7 w-7 ${
                          plan.popular
                            ? "text-primary-600"
                            : plan.name === "Entreprise"
                              ? "text-accent-600"
                              : "text-surface-600"
                        }`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-surface-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-surface-600 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-extrabold text-surface-900 tracking-tight tabular-nums">
                        {plan.price}
                      </span>
                      {plan.priceSuffix && (
                        <span className="text-surface-500 ml-2">
                          {plan.priceSuffix}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-surface-500 mt-2">
                      {plan.users}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-success-500" />
                        <span className="text-surface-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href={plan.buttonLink} className="block">
                    <Button
                      variant={plan.buttonVariant}
                      size={plan.buttonSize}
                      fullWidth
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --------------------------------------------------------------- */}
        {/* Bottom CTA                                                      */}
        {/* --------------------------------------------------------------- */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-surface-600 mb-4">
            Vous avez des questions sur nos offres ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Contactez-nous
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
