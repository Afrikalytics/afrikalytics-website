import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Afrikalytics AI by Marketym */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Afrikalytics AI by Marketym</h3>
            <p className="text-gray-400 text-sm mb-4">
              Afrikalytics AI est une solution d'études de marché du cabinet MARKETYM by H&C qui est une entreprise du groupe H&C.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <span>Dakar, Sénégal</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                <span>contact@afrikalytics.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span>+221 77 361 90 28</span>
              </div>
            </div>
          </div>

          {/* Nos Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/etudes" className="hover:text-white transition-colors">
                  Études RH
                </Link>
              </li>
              <li>
                <Link href="/etudes" className="hover:text-white transition-colors">
                  AI Readiness Assessment
                </Link>
              </li>
              <li>
                <Link href="/etudes" className="hover:text-white transition-colors">
                  Salary Surveys
                </Link>
              </li>
              <li>
                <Link href="/etudes" className="hover:text-white transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Consulting Stratégique
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprises */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Entreprises</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/etudes" className="hover:text-white transition-colors">
                  Participer à une étude
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Demander une étude sur mesure
                </Link>
              </li>
              <li>
                <Link href="/premium" className="hover:text-white transition-colors">
                  Accès premium
                </Link>
              </li>
              <li>
                <Link href="/etudes" className="hover:text-white transition-colors">
                  Benchmarking sectoriel
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Particuliers */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Particuliers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/etudes" className="hover:text-white transition-colors">
                  Participer aux sondages
                </Link>
              </li>
              <li>
                <Link href="/etudes" className="hover:text-white transition-colors">
                  Salary benchmarks
                </Link>
              </li>
              <li>
                <Link href="/etudes" className="hover:text-white transition-colors">
                  Tendances carrière
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Communauté
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 Afrikalytics AI by Marketym. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Conditions d&apos;utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
