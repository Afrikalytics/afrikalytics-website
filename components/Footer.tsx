"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-surface-700 to-transparent" />

      <motion.footer
        className="bg-surface-950 text-surface-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Afrikalytics AI by Marketym */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Afrikalytics<span className="text-primary-400">.</span> AI by
                Marketym
              </h3>
              <p className="text-surface-400 text-sm leading-relaxed mb-5">
                Afrikalytics AI est une solution d&apos;etudes de marche du
                cabinet MARKETYM by H&C qui est une entreprise du groupe H&C.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-surface-500" />
                  <span className="text-surface-400">Dakar, Senegal</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0 text-surface-500" />
                  <a
                    href="mailto:contact@afrikalytics.com"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    contact@afrikalytics.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-surface-500" />
                  <a
                    href="tel:+221773619028"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    +221 77 361 90 28
                  </a>
                </div>
              </div>
            </div>

            {/* Nos Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Nos Services
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/etudes"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Etudes RH
                  </Link>
                </li>
                <li>
                  <Link
                    href="/etudes"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    AI Readiness Assessment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/etudes"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Salary Surveys
                  </Link>
                </li>
                <li>
                  <Link
                    href="/etudes"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Consulting Strategique
                  </Link>
                </li>
              </ul>
            </div>

            {/* Entreprises */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Entreprises
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/etudes"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Participer a une etude
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Demander une etude sur mesure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/premium"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Acces premium
                  </Link>
                </li>
                <li>
                  <Link
                    href="/etudes"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Benchmarking sectoriel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Contact commercial
                  </Link>
                </li>
              </ul>
            </div>

            {/* Particuliers */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Particuliers
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/etudes"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Participer aux sondages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/etudes"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Salary benchmarks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/etudes"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Tendances carriere
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-surface-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    A propos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-surface-800/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-surface-500 text-xs">
                &copy; 2026 Afrikalytics AI by Marketym. Tous droits
                r&eacute;serv&eacute;s.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/confidentialite"
                  className="text-surface-500 text-xs hover:text-primary-400 transition-colors duration-200"
                >
                  Politique de confidentialit&eacute;
                </Link>
                <Link
                  href="/cgu"
                  className="text-surface-500 text-xs hover:text-primary-400 transition-colors duration-200"
                >
                  Conditions d&apos;utilisation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
