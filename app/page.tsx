"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  Users,
  FileText,
  Building2,
  User,
  ArrowRight,
  Clock,
  Sparkles,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { API_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Study {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  status: string;
}

// ---------------------------------------------------------------------------
// Services data
// ---------------------------------------------------------------------------
const services = [
  {
    icon: <Users className="h-6 w-6" />,
    iconBg: "bg-primary-50 text-primary-600",
    title: "Etudes RH",
    description: "Analyses approfondies des tendances RH en Afrique",
    items: [
      "Salary Surveys sectoriels",
      "Tendances de recrutement",
      "Satisfaction employes",
      "Benchmarks RH",
    ],
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    iconBg: "bg-success-50 text-success-600",
    title: "AI Readiness",
    description: "Evaluation de la maturite IA des entreprises",
    items: [
      "Diagnostic IA complet",
      "Roadmap transformation",
      "Benchmarks sectoriels",
      "Recommandations strategiques",
    ],
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    iconBg: "bg-warning-50 text-warning-600",
    title: "Business Intelligence",
    description: "Insights strategiques pour l'Afrique francophone",
    items: [
      "Analyses de marche",
      "Tendances economiques",
      "Opportunites sectorielles",
      "Veille concurrentielle",
    ],
  },
  {
    icon: <FileText className="h-6 w-6" />,
    iconBg: "bg-accent-50 text-accent-600",
    title: "Rapports Executifs",
    description: "Publications de recherche detaillees",
    items: [
      "Etudes sectorielles",
      "Syntheses executives",
      "Recommandations actionnables",
      "Formats personnalises",
    ],
  },
];

// ---------------------------------------------------------------------------
// Hero stat items
// ---------------------------------------------------------------------------
const heroStats = [
  { value: "2,847", label: "Participants actifs" },
  { value: "15+", label: "Pays couverts" },
  { value: "95%", label: "Satisfaction clients" },
];

// ---------------------------------------------------------------------------
// Trust indicators
// ---------------------------------------------------------------------------
const trustItems = [
  "Donnees securisees",
  "Methodologie certifiee",
  "Experts sectoriels",
];

// ===========================================================================
// Home Page
// ===========================================================================
export default function Home() {
  const [studies, setStudies] = useState<Study[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudies();
  }, []);

  const fetchStudies = async () => {
    try {
      const response = await fetch(`${API_URL}/api/studies/active`);
      if (response.ok) {
        const data = await response.json();
        // Prendre les 3 dernieres etudes
        setStudies(data.slice(0, 3));
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper to map study status to Badge variant
  const statusBadgeVariant = (status: string) => {
    if (status === "Ouvert") return "success";
    if (status === "Ferme") return "danger";
    return "warning";
  };

  return (
    <div className="pt-16">
      {/* ================================================================= */}
      {/* HERO SECTION - Dark corporate                                     */}
      {/* ================================================================= */}
      <section className="relative bg-surface-950 text-white py-20 lg:py-28 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-600/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Eyebrow badge */}
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge variant="primary" size="md" dot>
                  Plateforme BI pour l&apos;Afrique francophone
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-heading text-4xl md:text-5xl lg:text-display-lg tracking-tight mb-6 leading-tight"
              >
                L&apos;Intelligence Business
                <span className="text-accent-400 block mt-1">
                  pour l&apos;Afrique
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-surface-300 mb-8 max-w-lg"
              >
                Des insights strategiques et des analyses de donnees pour
                eclairer vos decisions business en Afrique francophone.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
                <Link href="/etudes">
                  <Button
                    variant="primary"
                    size="lg"
                    iconRight={<ArrowRight className="h-5 w-5" />}
                  >
                    Decouvrir nos Insights
                  </Button>
                </Link>
                <Link href="/etudes">
                  <Button variant="secondary" size="lg">
                    Participer aux Etudes
                  </Button>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-6"
              >
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-sm text-surface-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-success-500" />
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={stagger}
                className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-surface-800"
              >
                {heroStats.map((stat) => (
                  <motion.div key={stat.label} variants={fadeInUp}>
                    <div className="text-3xl md:text-4xl font-extrabold text-accent-400 tracking-tight tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-surface-400 text-sm mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Feature cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerSlow}
              className="space-y-4"
            >
              {[
                {
                  icon: <TrendingUp className="h-7 w-7 text-success-600" />,
                  iconBg: "bg-success-50",
                  title: "Analyses de Marche",
                  desc: "Donnees actualisees sur 15+ pays africains francophones",
                },
                {
                  icon: <BarChart3 className="h-7 w-7 text-primary-600" />,
                  iconBg: "bg-primary-50",
                  title: "Insights Strategiques",
                  desc: "Rapports executifs et recommandations actionnables",
                },
                {
                  icon: <Sparkles className="h-7 w-7 text-accent-600" />,
                  iconBg: "bg-accent-50",
                  title: "Intelligence IA",
                  desc: "Diagnostics AI Readiness et roadmaps de transformation",
                },
              ].map((card) => (
                <motion.div key={card.title} variants={scaleIn}>
                  <Card
                    variant="interactive"
                    padding="md"
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`p-2.5 rounded-lg ${card.iconBg} shrink-0`}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-surface-900 font-semibold text-lg tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-surface-500 text-sm mt-1">
                        {card.desc}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* AFRIKALYTICS AI BY MARKETYM                                       */}
      {/* ================================================================= */}
      <section className="py-20 bg-surface-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <Badge variant="accent" size="sm" dot>
              A propos
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl tracking-tight text-primary-600 mb-6"
          >
            Afrikalytics AI by Marketym
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-surface-600 text-lg mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Cabinet d&apos;analyse et de recherche specialise dans
            l&apos;environnement business africain francophone. Nous proposons
            des etudes RH, AI readiness, salary surveys et des insights
            strategiques pour comprendre les dynamiques economiques du continent.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/etudes">
              <Button variant="primary" size="lg">
                Nos Etudes &amp; Insights
              </Button>
            </Link>
            <Link href="/etudes">
              <Button variant="secondary" size="lg">
                Participer a une Etude
              </Button>
            </Link>
            <Link href="/etudes">
              <Button
                variant="ghost"
                size="lg"
                iconRight={<ArrowRight className="h-5 w-5" />}
              >
                Etudes Sectorielles
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================================================================= */}
      {/* NOS SERVICES DE RECHERCHE                                         */}
      {/* ================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="primary" size="sm" dot>
                Services
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl tracking-tight text-surface-900 mb-4"
            >
              Nos Services de Recherche
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-surface-600 max-w-2xl mx-auto"
            >
              Des etudes approfondies et des analyses strategiques pour eclairer
              vos decisions business en Afrique francophone
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card variant="interactive" padding="md" className="h-full">
                  <div
                    className={`p-2.5 rounded-lg ${service.iconBg} inline-flex mb-4`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-surface-900 tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-surface-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="text-sm text-surface-500 space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* DERNIERES PUBLICATIONS - DYNAMIQUE                                */}
      {/* ================================================================= */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="success" size="sm" dot>
                Publications
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl tracking-tight text-surface-900"
            >
              Dernieres Publications
            </motion.h2>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
            </div>
          ) : studies.length === 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center text-surface-500 py-12"
            >
              <Globe className="h-12 w-12 mx-auto mb-4 text-surface-300" />
              <p>Aucune etude disponible pour le moment.</p>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {studies.map((study) => (
                <motion.div key={study.id} variants={fadeInUp}>
                  <Card
                    variant="interactive"
                    padding="md"
                    className="h-full flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-heading text-xl font-bold text-surface-900 tracking-tight flex-1 pr-2">
                        {study.title}
                      </h3>
                      <Badge
                        variant={statusBadgeVariant(study.status)}
                        size="sm"
                        dot
                      >
                        {study.status}
                      </Badge>
                    </div>

                    <p className="text-primary-600 font-medium text-sm mb-2">
                      {study.category}
                    </p>

                    <p className="text-surface-600 text-sm mb-4 line-clamp-3 flex-1">
                      {study.description}
                    </p>

                    <div className="flex items-center text-surface-400 text-sm mb-5">
                      <Clock className="h-4 w-4 mr-1.5" />
                      <span>{study.duration}</span>
                    </div>

                    <Link
                      href={
                        study.status === "Ouvert"
                          ? `/etudes/${study.id}?type=particulier`
                          : `/etudes`
                      }
                      className="mt-auto"
                    >
                      <Button
                        variant={
                          study.status === "Ouvert" ? "primary" : "ghost"
                        }
                        size="sm"
                        fullWidth
                        iconRight={<ArrowRight className="h-4 w-4" />}
                      >
                        {study.status === "Ouvert"
                          ? "Participer"
                          : "Voir les resultats"}
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link href="/etudes">
              <Button
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="h-5 w-5" />}
              >
                Voir toutes les etudes
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* PARTICIPEZ A NOS ETUDES                                           */}
      {/* ================================================================= */}
      <section className="py-20 bg-surface-950 text-white relative overflow-hidden">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge variant="accent" size="sm" dot>
                Participez
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl tracking-tight mb-4"
            >
              Participez a nos Etudes
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-surface-400 max-w-xl mx-auto"
            >
              Rejoignez notre communaute de professionnels et contribuez a la
              recherche business en Afrique francophone.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Pour les Entreprises */}
            <motion.div variants={fadeInUp}>
              <Card
                variant="interactive"
                padding="lg"
                className="text-center h-full flex flex-col"
              >
                <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-surface-900 tracking-tight mb-3">
                  Pour les Entreprises
                </h3>
                <p className="text-surface-600 mb-6">
                  Participez a nos etudes sectorielles et beneficiez
                  d&apos;insights exclusifs
                </p>
                <ul className="text-sm text-surface-500 space-y-2.5 mb-8 flex-1">
                  {[
                    "Benchmarking sectoriel gratuit",
                    "Rapports personnalises",
                    "Networking avec vos pairs",
                    "Visibilite dans nos publications",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-success-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Building2 className="h-5 w-5" />}
                  >
                    Inscrire mon Entreprise
                  </Button>
                </Link>
              </Card>
            </motion.div>

            {/* Pour les Particuliers */}
            <motion.div variants={fadeInUp}>
              <Card
                variant="interactive"
                padding="lg"
                className="text-center h-full flex flex-col"
              >
                <div className="bg-success-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <User className="h-8 w-8 text-success-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-surface-900 tracking-tight mb-3">
                  Pour les Particuliers
                </h3>
                <p className="text-surface-600 mb-6">
                  Contribuez a nos recherches et accedez a nos donnees
                </p>
                <ul className="text-sm text-surface-500 space-y-2.5 mb-8 flex-1">
                  {[
                    "Salary benchmarks personnalises",
                    "Tendances de votre secteur",
                    "Conseils carriere",
                    "Acces prioritaire aux etudes",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-success-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/etudes" className="mt-auto">
                  <Button
                    variant="secondary"
                    size="lg"
                    fullWidth
                    icon={<User className="h-5 w-5" />}
                  >
                    Participer aux Sondages
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* BOTTOM CTA STRIP                                                  */}
      {/* ================================================================= */}
      <section className="gradient-primary py-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-2xl md:text-3xl tracking-tight text-white mb-4"
          >
            Pret a transformer vos decisions avec la data ?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-primary-100 mb-8 max-w-xl mx-auto"
          >
            Rejoignez les entreprises qui font confiance a Afrikalytics pour
            leurs decisions strategiques en Afrique.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/register">
              <Button
                variant="accent"
                size="lg"
                iconRight={<ArrowRight className="h-5 w-5" />}
              >
                Creer un compte gratuit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                icon={<ShieldCheck className="h-5 w-5" />}
              >
                Contacter l&apos;equipe
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
