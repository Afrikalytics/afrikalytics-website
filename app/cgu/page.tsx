"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Card } from "@/components/ui/Card";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-surface-50">
      {/* Header */}
      <div className="bg-surface-950 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-surface-400 hover:text-white mb-6 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex items-center gap-4"
          >
            <div className="bg-white/10 p-3 rounded-xl">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Conditions Générales d&apos;Utilisation</h1>
              <p className="text-surface-400 mt-1">Dernière mise à jour : Mars 2026</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <Card variant="default" padding="lg" className="space-y-8">

            {/* Article 1 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 1 - Mentions légales</h2>
              <p className="text-surface-700 leading-relaxed">
                Le site <strong>afrikalytics.com</strong> et le dashboard <strong>dashboard.afrikalytics.com</strong> sont édités par :
              </p>
              <div className="bg-surface-50 rounded-lg p-4 mt-4">
                <p className="text-surface-700"><strong>MARKETYM by H&C</strong></p>
                <p className="text-surface-600">Entreprise du groupe H&C</p>
                <p className="text-surface-600">Dakar, Sénégal</p>
                <p className="text-surface-600">Email : contact@afrikalytics.com</p>
              </div>
            </motion.section>

            {/* Article 2 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 2 - Objet</h2>
              <p className="text-surface-700 leading-relaxed">
                Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les modalités d&apos;accès et d&apos;utilisation des services proposés par Afrikalytics AI, plateforme d&apos;intelligence d&apos;affaires et d&apos;études de marché pour l&apos;Afrique francophone.
              </p>
              <p className="text-surface-700 leading-relaxed mt-4">
                En accédant à nos services, vous acceptez sans réserve les présentes CGU.
              </p>
            </motion.section>

            {/* Article 3 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 3 - Services proposés</h2>
              <p className="text-surface-700 leading-relaxed mb-4">
                Afrikalytics AI propose les services suivants :
              </p>
              <ul className="list-disc list-inside text-surface-700 space-y-2 ml-4">
                <li>Participation à des études de marché et sondages</li>
                <li>Accès aux résultats et analyses des études (selon le plan souscrit)</li>
                <li>Consultation d&apos;insights et rapports sectoriels</li>
                <li>Dashboard personnalisé pour les membres Premium</li>
              </ul>
            </motion.section>

            {/* Article 4 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 4 - Plans et tarification</h2>
              <p className="text-surface-700 leading-relaxed mb-4">
                Afrikalytics AI propose plusieurs niveaux d&apos;accès :
              </p>
              <div className="space-y-4">
                <Card variant="bordered" padding="sm" className="border-l-4 border-l-surface-400">
                  <h3 className="font-semibold text-surface-900">Plan Basic (Gratuit)</h3>
                  <p className="text-surface-600 text-sm mt-1">Participation aux études, aperçu des insights, dashboard basic</p>
                </Card>
                <Card variant="bordered" padding="sm" className="border-l-4 border-l-primary-500">
                  <h3 className="font-semibold text-primary-900">Plan Professionnel (295 000 CFA/mois)</h3>
                  <p className="text-primary-700 text-sm mt-1">Accès complet aux études, insights, rapports PDF, dashboard avancé</p>
                </Card>
                <Card variant="bordered" padding="sm" className="border-l-4 border-l-accent-500">
                  <h3 className="font-semibold text-accent-900">Plan Entreprise (Sur mesure)</h3>
                  <p className="text-accent-700 text-sm mt-1">Tout le plan Professionnel + 5 utilisateurs, études personnalisées, support dédié</p>
                </Card>
              </div>
            </motion.section>

            {/* Article 5 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 5 - Inscription et compte utilisateur</h2>
              <p className="text-surface-700 leading-relaxed">
                Pour accéder à certains services, vous devez créer un compte en fournissant des informations exactes et complètes. Vous êtes responsable de la confidentialité de vos identifiants de connexion.
              </p>
              <p className="text-surface-700 leading-relaxed mt-4">
                Vous vous engagez à :
              </p>
              <ul className="list-disc list-inside text-surface-700 space-y-2 ml-4 mt-2">
                <li>Fournir des informations véridiques lors de l&apos;inscription</li>
                <li>Maintenir la confidentialité de votre mot de passe</li>
                <li>Nous informer immédiatement de toute utilisation non autorisée de votre compte</li>
                <li>Ne pas partager votre accès avec des tiers</li>
              </ul>
            </motion.section>

            {/* Article 6 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 6 - Paiement et abonnement</h2>
              <p className="text-surface-700 leading-relaxed">
                Les paiements sont effectués via notre partenaire PayDunya (Orange Money, Wave, Free Money, carte bancaire). L&apos;abonnement Professionnel est mensuel et renouvelable.
              </p>
              <p className="text-surface-700 leading-relaxed mt-4">
                En cas de non-renouvellement, votre compte sera automatiquement rétrogradé au plan Basic.
              </p>
            </motion.section>

            {/* Article 7 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 7 - Propriété intellectuelle</h2>
              <p className="text-surface-700 leading-relaxed">
                L&apos;ensemble des contenus présents sur Afrikalytics AI (études, rapports, insights, analyses, graphiques, textes, logos) sont protégés par le droit de la propriété intellectuelle et appartiennent à MARKETYM by H&C ou à ses partenaires.
              </p>
              <p className="text-surface-700 leading-relaxed mt-4">
                Toute reproduction, distribution ou utilisation commerciale sans autorisation préalable est strictement interdite.
              </p>
            </motion.section>

            {/* Article 8 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 8 - Responsabilités</h2>
              <p className="text-surface-700 leading-relaxed">
                Afrikalytics AI s&apos;efforce de fournir des informations fiables et actualisées. Cependant, nous ne garantissons pas l&apos;exactitude, l&apos;exhaustivité ou la pertinence des données pour une utilisation spécifique.
              </p>
              <p className="text-surface-700 leading-relaxed mt-4">
                Les décisions prises sur la base de nos études et rapports relèvent de la seule responsabilité de l&apos;utilisateur.
              </p>
            </motion.section>

            {/* Article 9 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 9 - Résiliation</h2>
              <p className="text-surface-700 leading-relaxed">
                Vous pouvez résilier votre compte à tout moment en nous contactant. En cas de violation des présentes CGU, nous nous réservons le droit de suspendre ou supprimer votre compte sans préavis.
              </p>
            </motion.section>

            {/* Article 10 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 10 - Droit applicable</h2>
              <p className="text-surface-700 leading-relaxed">
                Les présentes CGU sont régies par le droit sénégalais. Tout litige relatif à leur interprétation ou exécution relèvera de la compétence exclusive des tribunaux de Dakar, Sénégal.
              </p>
            </motion.section>

            {/* Article 11 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">Article 11 - Contact</h2>
              <p className="text-surface-700 leading-relaxed">
                Pour toute question concernant ces CGU, vous pouvez nous contacter :
              </p>
              <div className="bg-surface-50 rounded-lg p-4 mt-4">
                <p className="text-surface-700">Email : <a href="mailto:contact@afrikalytics.com" className="text-primary-600 hover:text-primary-700 hover:underline">contact@afrikalytics.com</a></p>
                <p className="text-surface-700 mt-2">Formulaire de contact : <Link href="/contact" className="text-primary-600 hover:text-primary-700 hover:underline">afrikalytics.com/contact</Link></p>
              </div>
            </motion.section>

          </Card>
        </motion.div>

        {/* Footer Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
          <Link href="/confidentialite" className="text-primary-600 hover:text-primary-700">
            Politique de Confidentialité
          </Link>
          <span className="text-surface-300">|</span>
          <Link href="/contact" className="text-primary-600 hover:text-primary-700">
            Contact
          </Link>
          <span className="text-surface-300">|</span>
          <Link href="/" className="text-primary-600 hover:text-primary-700">
            Accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
