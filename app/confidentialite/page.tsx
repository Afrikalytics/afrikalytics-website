"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ConfidentialitePage() {
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
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Politique de Confidentialité</h1>
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

            {/* Introduction */}
            <motion.section variants={fadeInUp}>
              <p className="text-surface-700 leading-relaxed">
                Chez <strong>Afrikalytics AI by Marketym</strong>, nous attachons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </motion.section>

            {/* Article 1 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">1. Responsable du traitement</h2>
              <p className="text-surface-700 leading-relaxed">
                Le responsable du traitement des données est :
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
              <h2 className="text-xl font-bold text-surface-900 mb-4">2. Données collectées</h2>
              <p className="text-surface-700 leading-relaxed mb-4">
                Nous collectons les données suivantes :
              </p>

              <h3 className="font-semibold text-surface-800 mt-4 mb-2">Données d&apos;identification</h3>
              <ul className="list-disc list-inside text-surface-700 space-y-1 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Entreprise (optionnel)</li>
              </ul>

              <h3 className="font-semibold text-surface-800 mt-4 mb-2">Données de connexion</h3>
              <ul className="list-disc list-inside text-surface-700 space-y-1 ml-4">
                <li>Adresse IP</li>
                <li>Date et heure de connexion</li>
                <li>Type de navigateur</li>
              </ul>

              <h3 className="font-semibold text-surface-800 mt-4 mb-2">Données de participation aux études</h3>
              <ul className="list-disc list-inside text-surface-700 space-y-1 ml-4">
                <li>Réponses aux sondages et questionnaires</li>
                <li>Données démographiques (si fournies volontairement)</li>
              </ul>

              <h3 className="font-semibold text-surface-800 mt-4 mb-2">Données de paiement</h3>
              <ul className="list-disc list-inside text-surface-700 space-y-1 ml-4">
                <li>Historique des transactions (via PayDunya)</li>
                <li>Nous ne stockons jamais vos données bancaires ou de mobile money</li>
              </ul>
            </motion.section>

            {/* Article 3 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">3. Finalités du traitement</h2>
              <p className="text-surface-700 leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-surface-700 space-y-2 ml-4">
                <li>Créer et gérer votre compte utilisateur</li>
                <li>Fournir l&apos;accès aux services selon votre plan</li>
                <li>Traiter vos paiements et abonnements</li>
                <li>Produire des études et analyses agrégées et anonymisées</li>
                <li>Améliorer nos services</li>
                <li>Vous envoyer des communications importantes (rappels d&apos;abonnement, nouveautés)</li>
                <li>Répondre à vos demandes de contact</li>
              </ul>
            </motion.section>

            {/* Article 4 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">4. Base légale du traitement</h2>
              <p className="text-surface-700 leading-relaxed mb-4">
                Nous traitons vos données sur les bases légales suivantes :
              </p>
              <ul className="list-disc list-inside text-surface-700 space-y-2 ml-4">
                <li><strong>Exécution du contrat</strong> : pour fournir nos services</li>
                <li><strong>Consentement</strong> : pour les communications marketing</li>
                <li><strong>Intérêt légitime</strong> : pour améliorer nos services et produire des études</li>
                <li><strong>Obligation légale</strong> : pour respecter nos obligations fiscales et légales</li>
              </ul>
            </motion.section>

            {/* Article 5 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">5. Partage des données</h2>
              <p className="text-surface-700 leading-relaxed">
                Vos données personnelles ne sont jamais vendues à des tiers.
              </p>
              <p className="text-surface-700 leading-relaxed mt-4">
                Elles peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside text-surface-700 space-y-2 ml-4 mt-2">
                <li><strong>PayDunya</strong> : pour le traitement des paiements</li>
                <li><strong>Resend</strong> : pour l&apos;envoi d&apos;emails transactionnels</li>
                <li><strong>Hébergeurs</strong> (Railway, Vercel) : pour le stockage sécurisé des données</li>
              </ul>
              <p className="text-surface-700 leading-relaxed mt-4">
                Les réponses aux études sont anonymisées avant toute publication ou partage avec des clients.
              </p>
            </motion.section>

            {/* Article 6 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">6. Durée de conservation</h2>
              <p className="text-surface-700 leading-relaxed mb-4">
                Nous conservons vos données pendant :
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="primary">Compte actif</Badge>
                  <p className="text-surface-700">Pendant toute la durée de votre inscription</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="default">Compte inactif</Badge>
                  <p className="text-surface-700">3 ans après la dernière connexion</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="success">Données de paiement</Badge>
                  <p className="text-surface-700">10 ans (obligation légale comptable)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="accent">Réponses études</Badge>
                  <p className="text-surface-700">Conservées anonymisées indéfiniment</p>
                </div>
              </div>
            </motion.section>

            {/* Article 7 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">7. Sécurité des données</h2>
              <p className="text-surface-700 leading-relaxed mb-4">
                Nous mettons en oeuvre des mesures de sécurité pour protéger vos données :
              </p>
              <ul className="list-disc list-inside text-surface-700 space-y-2 ml-4">
                <li>Chiffrement HTTPS sur tous nos sites</li>
                <li>Mots de passe hashés avec algorithme bcrypt</li>
                <li>Tokens d&apos;authentification sécurisés (JWT)</li>
                <li>Protection contre les attaques par force brute (rate limiting)</li>
                <li>Hébergement sur des serveurs sécurisés en Europe</li>
                <li>Sauvegardes régulières des données</li>
              </ul>
            </motion.section>

            {/* Article 8 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">8. Vos droits</h2>
              <p className="text-surface-700 leading-relaxed mb-4">
                Conformément à la réglementation applicable, vous disposez des droits suivants :
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="font-semibold text-surface-800">Droit d&apos;accès</h3>
                  <p className="text-surface-600 text-sm">Obtenir une copie de vos données personnelles</p>
                </div>
                <div className="border-l-4 border-success-500 pl-4">
                  <h3 className="font-semibold text-surface-800">Droit de rectification</h3>
                  <p className="text-surface-600 text-sm">Corriger des données inexactes ou incomplètes</p>
                </div>
                <div className="border-l-4 border-danger-500 pl-4">
                  <h3 className="font-semibold text-surface-800">Droit à l&apos;effacement</h3>
                  <p className="text-surface-600 text-sm">Demander la suppression de vos données</p>
                </div>
                <div className="border-l-4 border-warning-500 pl-4">
                  <h3 className="font-semibold text-surface-800">Droit à la portabilité</h3>
                  <p className="text-surface-600 text-sm">Recevoir vos données dans un format structuré</p>
                </div>
                <div className="border-l-4 border-accent-500 pl-4">
                  <h3 className="font-semibold text-surface-800">Droit d&apos;opposition</h3>
                  <p className="text-surface-600 text-sm">Vous opposer à certains traitements (marketing)</p>
                </div>
              </div>
              <p className="text-surface-700 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@afrikalytics.com" className="text-primary-600 hover:text-primary-700 hover:underline">contact@afrikalytics.com</a>
              </p>
            </motion.section>

            {/* Article 9 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">9. Cookies</h2>
              <p className="text-surface-700 leading-relaxed">
                Notre site utilise des cookies essentiels au fonctionnement du service (authentification, préférences). Nous n&apos;utilisons pas de cookies publicitaires ou de tracking tiers.
              </p>
              <p className="text-surface-700 leading-relaxed mt-4">
                En utilisant notre site, vous acceptez l&apos;utilisation de ces cookies fonctionnels.
              </p>
            </motion.section>

            {/* Article 10 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">10. Modifications</h2>
              <p className="text-surface-700 leading-relaxed">
                Nous pouvons modifier cette politique de confidentialité à tout moment. En cas de modification substantielle, nous vous en informerons par email ou via une notification sur le site.
              </p>
            </motion.section>

            {/* Article 11 */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl font-bold text-surface-900 mb-4">11. Contact</h2>
              <p className="text-surface-700 leading-relaxed">
                Pour toute question concernant cette politique ou vos données personnelles :
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
          <Link href="/cgu" className="text-primary-600 hover:text-primary-700">
            Conditions Générales d&apos;Utilisation
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
