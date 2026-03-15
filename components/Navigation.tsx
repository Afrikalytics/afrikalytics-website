"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

// =============================================================================
// Navigation — Corporate Premium Design with Framer Motion
// =============================================================================

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "A Propos" },
  { href: "/etudes", label: "Etudes" },
  { href: "/premium", label: "Premium" },
  { href: "/contact", label: "Contact" },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: "easeInOut" as const },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.2, ease: "easeOut" as const },
  }),
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-xl shadow-soft border-b border-surface-200/60 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <BarChart3 className="h-8 w-8 text-primary-600" />
              </motion.div>
              <span className="font-bold text-xl text-surface-900 tracking-tight">
                Afrikalytics<span className="text-primary-600">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative">
                <motion.span
                  className={`text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-primary-600 font-semibold"
                      : "text-surface-600 hover:text-primary-600"
                  }`}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {link.label}
                </motion.span>
                {isActive(link.href) && (
                  <motion.div
                    className="absolute -bottom-[1.19rem] left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link href="https://dashboard.afrikalytics.com/login">
              <Button variant="primary" size="sm">
                Se Connecter
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-surface-600 hover:text-primary-600 transition-all duration-200 focus:outline-none p-2 rounded-lg hover:bg-surface-100"
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-surface-200/60"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-3 pt-3 pb-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-primary-600 font-semibold bg-primary-50"
                        : "text-surface-700 hover:text-primary-600 hover:bg-primary-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
                custom={navLinks.length}
                className="pt-2"
              >
                <Link
                  href="https://dashboard.afrikalytics.com/login"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <Button variant="primary" size="sm" fullWidth>
                    Se Connecter
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
