import Link from "next/link";
import { BarChart3, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="h-8 w-8 text-primary-500" />
              <span className="font-bold text-xl text-white">
                Afrikalytics AI
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Plateforme de business intelligence alimentée par l&apos;IA, 
              spécialisée dans l&apos;analyse du marché africain.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>software@hcexecutive.net</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary-500 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/etudes" className="hover:text-primary-500 transition-colors">
                  Études
                </Link>
              </li>
              <li>
                <Link href="/premium" className="hover:text-primary-500 transition-colors">
                  Devenir Premium
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-primary-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-500 transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-500 transition-colors">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Afrikalytics AI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
