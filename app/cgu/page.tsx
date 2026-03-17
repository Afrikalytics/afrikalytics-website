"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-xl">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Conditions Générales d&apos;Utilisation</h1>
              <p className="text-blue-200 mt-1">Dernière mise à jour : Novembre 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
          
          {/* Article 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 1 - Mentions légales</h2>
            <p className="text-gray-700 leading-relaxed">
              Le site <strong>afrikalytics.com</strong> et le dashboard <strong>dashboard.afrikalytics.com</strong> sont édités par :
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700"><strong>MARKETYM by H&C</strong></p>
              <p className="text-gray-600">Entreprise du groupe H&C</p>
              <p className="text-gray-600">Dakar, Sénégal</p>
              <p className="text-gray-600">Email : contact@afrikalytics.com</p>
            </div>
          </section>

          {/* Article 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 2 - Objet</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les modalités d&apos;accès et d&apos;utilisation des services proposés par Afrikalytics AI, plateforme d&apos;intelligence d&apos;affaires et d&apos;études de marché pour l&apos;Afrique francophone.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              En accédant à nos services, vous acceptez sans réserve les présentes CGU.
            </p>
          </section>

          {/* Article 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 3 - Services proposés</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Afrikalytics AI propose les services suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Participation à des études de marché et sondages</li>
              <li>Accès aux résultats et analyses des études (selon le plan souscrit)</li>
              <li>Consultation d&apos;insights et rapports sectoriels</li>
              <li>Dashboard personnalisé pour les membres Premium</li>
            </ul>
          </section>

          {/* Article 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 4 - Plans et tarification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Afrikalytics AI propose plusieurs niveaux d&apos;accès :
            </p>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900">Plan Basic (Gratuit)</h3>
                <p className="text-gray-600 text-sm mt-1">Participation aux études, aperçu des insights, dashboard basic</p>
              </div>
              <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900">Plan Professionnel (295 000 CFA/mois)</h3>
                <p className="text-blue-700 text-sm mt-1">Accès complet aux études, insights, rapports PDF, dashboard avancé</p>
              </div>
              <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900">Plan Entreprise (Sur mesure)</h3>
                <p className="text-purple-700 text-sm mt-1">Tout le plan Professionnel + 5 utilisateurs, études personnalisées, support dédié</p>
              </div>
            </div>
          </section>

          {/* Article 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 5 - Inscription et compte utilisateur</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour accéder à certains services, vous devez créer un compte en fournissant des informations exactes et complètes. Vous êtes responsable de la confidentialité de vos identifiants de connexion.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vous vous engagez à :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li>Fournir des informations véridiques lors de l&apos;inscription</li>
              <li>Maintenir la confidentialité de votre mot de passe</li>
              <li>Nous informer immédiatement de toute utilisation non autorisée de votre compte</li>
              <li>Ne pas partager votre accès avec des tiers</li>
            </ul>
          </section>

          {/* Article 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 6 - Paiement et abonnement</h2>
            <p className="text-gray-700 leading-relaxed">
              Les paiements sont effectués via notre partenaire PayDunya (Orange Money, Wave, Free Money, carte bancaire). L&apos;abonnement Professionnel est mensuel et renouvelable.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              En cas de non-renouvellement, votre compte sera automatiquement rétrogradé au plan Basic.
            </p>
          </section>

          {/* Article 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 7 - Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L&apos;ensemble des contenus présents sur Afrikalytics AI (études, rapports, insights, analyses, graphiques, textes, logos) sont protégés par le droit de la propriété intellectuelle et appartiennent à MARKETYM by H&C ou à ses partenaires.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Toute reproduction, distribution ou utilisation commerciale sans autorisation préalable est strictement interdite.
            </p>
          </section>

          {/* Article 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 8 - Responsabilités</h2>
            <p className="text-gray-700 leading-relaxed">
              Afrikalytics AI s&apos;efforce de fournir des informations fiables et actualisées. Cependant, nous ne garantissons pas l&apos;exactitude, l&apos;exhaustivité ou la pertinence des données pour une utilisation spécifique.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Les décisions prises sur la base de nos études et rapports relèvent de la seule responsabilité de l&apos;utilisateur.
            </p>
          </section>

          {/* Article 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 9 - Résiliation</h2>
            <p className="text-gray-700 leading-relaxed">
              Vous pouvez résilier votre compte à tout moment en nous contactant. En cas de violation des présentes CGU, nous nous réservons le droit de suspendre ou supprimer votre compte sans préavis.
            </p>
          </section>

          {/* Article 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 10 - Droit applicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes CGU sont régies par le droit sénégalais. Tout litige relatif à leur interprétation ou exécution relèvera de la compétence exclusive des tribunaux de Dakar, Sénégal.
            </p>
          </section>

          {/* Article 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article 11 - Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question concernant ces CGU, vous pouvez nous contacter :
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700">Email : <a href="mailto:contact@afrikalytics.com" className="text-blue-600 hover:underline">contact@afrikalytics.com</a></p>
              <p className="text-gray-700 mt-2">Formulaire de contact : <Link href="/contact" className="text-blue-600 hover:underline">afrikalytics.com/contact</Link></p>
            </div>
          </section>

        </div>

        {/* Footer Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
          <Link href="/confidentialite" className="text-blue-600 hover:underline">
            Politique de Confidentialité
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/" className="text-blue-600 hover:underline">
            Accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
