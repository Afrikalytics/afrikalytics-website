"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  ChevronRight,
  Filter,
  Search,
  Lightbulb,
  Download,
  Lock,
  Users,
  Building2,
  Loader2,
  BarChart3,
} from "lucide-react";
import { API_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Study {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  deadline: string;
  status: string;
  icon: string;
  is_active: boolean;
  embed_url_particulier: string;
  embed_url_entreprise: string;
}

// ---------------------------------------------------------------------------
// Animations
// ---------------------------------------------------------------------------

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function statusBadgeVariant(status: string): "success" | "danger" | "warning" {
  if (status === "Ouvert") return "success";
  if (status === "Ferm\u00e9") return "danger";
  return "warning";
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PublicEtudesPage() {
  const [studies, setStudies] = useState<Study[]>([]);
  const [filteredStudies, setFilteredStudies] = useState<Study[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Tous");

  useEffect(() => {
    fetchStudies();
  }, []);

  useEffect(() => {
    filterStudiesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studies, searchTerm, filterStatus]);

  const fetchStudies = async () => {
    try {
      const response = await fetch(`${API_URL}/api/studies/active`);
      if (response.ok) {
        const data = await response.json();
        setStudies(data);
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterStudiesData = () => {
    let filtered = studies;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (study) =>
          study.title.toLowerCase().includes(term) ||
          study.description.toLowerCase().includes(term) ||
          study.category.toLowerCase().includes(term)
      );
    }

    if (filterStatus !== "Tous") {
      filtered = filtered.filter((study) => study.status === filterStatus);
    }

    setFilteredStudies(filtered);
  };

  const handlePremiumClick = () => {
    window.location.href = "https://dashboard.afrikalytics.com/login";
  };

  // -------------------------------------------------------------------------
  // Loading state
  // -------------------------------------------------------------------------

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-50">
        <Loader2 className="h-10 w-10 animate-spin text-primary-600" />
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  return (
    <div className="pt-16 min-h-screen bg-surface-50">
      {/* ================================================================= */}
      {/* Hero Section — dark corporate                                     */}
      {/* ================================================================= */}
      <section className="bg-surface-950 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-surface-300">
              <BarChart3 className="h-4 w-4 text-primary-400" />
              Intelligence de march&eacute;
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Nos &Eacute;tudes de March&eacute;
            </h1>
            <p className="text-surface-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Participez &agrave; nos &eacute;tudes et acc&eacute;dez aux insights exclusifs sur les
              march&eacute;s africains francophones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* Main Content                                                      */}
      {/* ================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* --------------------------------------------------------------- */}
        {/* Filter bar                                                      */}
        {/* --------------------------------------------------------------- */}
        <Card variant="default" padding="md" className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <Input
                placeholder="Rechercher une &eacute;tude..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search className="h-4 w-4" />}
              />
            </div>

            {/* Status filter */}
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-surface-400 shrink-0" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full lg:w-auto rounded-lg border border-surface-300 bg-white px-4 py-2.5 text-sm text-surface-700 transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 hover:border-surface-400"
              >
                <option value="Tous">Tous les statuts</option>
                <option value="Ouvert">Ouvert</option>
                <option value="Fermé">Fermé</option>
                <option value="Bientôt">Bientôt</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="mt-4 text-sm text-surface-500">
            {filteredStudies.length} &eacute;tude
            {filteredStudies.length !== 1 ? "s" : ""} trouv&eacute;e
            {filteredStudies.length !== 1 ? "s" : ""}
          </p>
        </Card>

        {/* --------------------------------------------------------------- */}
        {/* Studies grid                                                    */}
        {/* --------------------------------------------------------------- */}
        {filteredStudies.length === 0 ? (
          <Card variant="default" padding="lg" className="text-center">
            <p className="text-surface-500 text-lg">
              Aucune &eacute;tude trouv&eacute;e.
            </p>
          </Card>
        ) : (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {filteredStudies.map((study) => (
              <motion.div key={study.id} variants={fadeInUp}>
                <Card variant="interactive" padding="md" className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-start gap-3 mb-4">
                    <h3 className="text-lg font-bold text-surface-900 leading-snug flex-1">
                      {study.title}
                    </h3>
                    <Badge
                      variant={statusBadgeVariant(study.status)}
                      size="sm"
                      dot
                      aria-label={`Statut : ${study.status}`}
                    >
                      {study.status}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-surface-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-surface-500 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {study.duration}
                    </span>
                    {study.deadline && (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        Jusqu&apos;au {study.deadline}
                      </span>
                    )}
                  </div>

                  {/* Category */}
                  <Badge variant="primary" size="sm" className="mb-4 self-start">
                    {study.category}
                  </Badge>

                  {/* Spacer to push buttons to bottom */}
                  <div className="flex-1" />

                  {/* Actions */}
                  <div className="space-y-2 pt-4 border-t border-surface-100">
                    {/* Participate buttons — only when Ouvert */}
                    {study.status === "Ouvert" && (
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <Button
                          variant="primary"
                          size="md"
                          icon={<Users className="h-4 w-4" />}
                          fullWidth
                          onClick={() => {
                            window.location.href = `/etudes/${study.id}?type=particulier`;
                          }}
                        >
                          Particulier
                        </Button>
                        <Button
                          variant="accent"
                          size="md"
                          icon={<Building2 className="h-4 w-4" />}
                          fullWidth
                          onClick={() => {
                            window.location.href = `/etudes/${study.id}?type=entreprise`;
                          }}
                        >
                          Entreprise
                        </Button>
                      </div>
                    )}

                    {/* Results — always visible */}
                    <Button
                      variant="secondary"
                      size="md"
                      fullWidth
                      icon={<Lock className="h-4 w-4 text-warning-600" />}
                      iconRight={<ChevronRight className="h-4 w-4" />}
                      onClick={handlePremiumClick}
                      className="justify-between"
                    >
                      <span className="inline-flex items-center gap-2">
                        Voir les r&eacute;sultats
                        <Badge variant="warning" size="sm">Premium</Badge>
                      </span>
                    </Button>

                    {/* Insight & Report — only when Ferm&eacute; */}
                    {study.status === "Ferm\u00e9" && (
                      <>
                        <Button
                          variant="secondary"
                          size="md"
                          fullWidth
                          icon={
                            <span className="inline-flex items-center gap-1">
                              <Lock className="h-4 w-4 text-warning-600" />
                              <Lightbulb className="h-4 w-4 text-purple-500" />
                            </span>
                          }
                          iconRight={<ChevronRight className="h-4 w-4" />}
                          onClick={handlePremiumClick}
                          className="justify-between"
                        >
                          <span className="inline-flex items-center gap-2">
                            Lire l&apos;insight
                            <Badge variant="warning" size="sm">Premium</Badge>
                          </span>
                        </Button>

                        <Button
                          variant="secondary"
                          size="md"
                          fullWidth
                          icon={
                            <span className="inline-flex items-center gap-1">
                              <Lock className="h-4 w-4 text-warning-600" />
                              <Download className="h-4 w-4 text-green-500" />
                            </span>
                          }
                          iconRight={<ChevronRight className="h-4 w-4" />}
                          onClick={handlePremiumClick}
                          className="justify-between"
                        >
                          <span className="inline-flex items-center gap-2">
                            T&eacute;l&eacute;charger le rapport
                            <Badge variant="warning" size="sm">Premium</Badge>
                          </span>
                        </Button>
                      </>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* --------------------------------------------------------------- */}
        {/* CTA Section                                                     */}
        {/* --------------------------------------------------------------- */}
        <motion.section
          className="mt-16 rounded-2xl bg-surface-950 p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Acc&eacute;dez &agrave; tous les r&eacute;sultats et insights
          </h2>
          <p className="text-surface-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Devenez membre Premium pour consulter les analyses d&eacute;taill&eacute;es,
            t&eacute;l&eacute;charger les rapports complets et acc&eacute;der &agrave; notre
            intelligence de march&eacute; exclusive.
          </p>
          <Button
            variant="secondary"
            size="lg"
            iconRight={<ChevronRight className="h-5 w-5" />}
            onClick={() => {
              window.location.href = "/premium";
            }}
          >
            D&eacute;couvrir les offres Premium
          </Button>
        </motion.section>
      </main>
    </div>
  );
}
