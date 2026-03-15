"use client";

import { Target, Users, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// ---------------------------------------------------------------------------
// Values data
// ---------------------------------------------------------------------------

const values = [
  {
    icon: Target,
    title: "Précision",
    description: "Des données vérifiées et des analyses rigoureuses",
  },
  {
    icon: Users,
    title: "Expertise Locale",
    description: "100+ analystes à travers le continent",
  },
  {
    icon: Globe,
    title: "Couverture",
    description: "25+ pays africains analysés",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "98% de satisfaction client",
  },
] as const;

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* ----------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative bg-surface-950 overflow-hidden py-24">
        {/* Subtle dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            À Propos d&apos;Afrikalytics AI by Marketym
          </h1>
          <p className="text-xl text-surface-300 max-w-2xl mx-auto">
            Votre partenaire stratégique pour comprendre et naviguer les marchés
            africains
          </p>
        </motion.div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Mission                                                           */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-heading text-3xl font-bold text-surface-900 tracking-tight mb-6">
              Notre Mission
            </h2>

            <Card variant="elevated" padding="lg">
              <p className="text-xl text-surface-600 leading-relaxed">
                Afrikalytics AI by Marketym démocratise l&apos;accès à
                l&apos;intelligence d&apos;affaires de haute qualité pour les
                entreprises opérant en Afrique. Nous combinons l&apos;expertise
                locale, les données en temps réel et l&apos;intelligence
                artificielle pour fournir des insights actionnables.
              </p>
            </Card>
          </motion.div>

          {/* --------------------------------------------------------------- */}
          {/* Values grid                                                     */}
          {/* --------------------------------------------------------------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={fadeInUp}>
                <Card
                  variant="interactive"
                  padding="lg"
                  className="text-center h-full"
                >
                  <div className="p-3 rounded-xl bg-primary-50 text-primary-600 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-surface-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-surface-600">{description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* History                                                           */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-surface-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl font-bold text-surface-900 tracking-tight mb-8 text-center">
              Notre Histoire
            </h2>

            <div className="prose prose-lg max-w-none text-surface-600">
              <motion.p
                className="mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Fondée en 2023 à Dakar, Sénégal, Afrikalytics AI by Marketym
                est née d&apos;une conviction simple : les entreprises opérant
                en Afrique méritent d&apos;avoir accès aux mêmes outils
                d&apos;intelligence d&apos;affaires que leurs homologues sur
                d&apos;autres continents.
              </motion.p>
              <motion.p
                className="mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Notre équipe de data scientists, analystes et experts sectoriels
                travaille quotidiennement pour collecter, vérifier et analyser
                des milliers de points de données à travers le continent.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Aujourd&apos;hui, nous servons plus de 500 entreprises, des
                startups innovantes aux multinationales, en leur fournissant
                l&apos;intelligence dont elles ont besoin pour réussir sur le
                continent africain.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
