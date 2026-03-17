"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-[#6B46C1]">INTO</span>
          <span className="text-slate-900">WORK</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-[#6B46C1] transition-colors">Fonctionnalites</a>
          <a href="#security" className="text-sm font-medium text-slate-600 hover:text-[#6B46C1] transition-colors">Securite</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-[#6B46C1] transition-colors">Temoignages</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-[#6B46C1] transition-colors">Tarifs</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/auth/signin" className="text-sm font-semibold text-slate-700 hover:text-[#6B46C1] px-4 py-2 transition-colors">
            Connexion
          </Link>
          <Link href="/auth/signup" className="text-sm font-semibold text-white bg-[#6B9B5F] px-5 py-2.5 rounded-lg hover:bg-[#5a8a4e] transition-colors shadow-sm">
            Inscription gratuite
          </Link>
        </div>

        <button type="button" className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-[#6B46C1]">Fonctionnalites</a>
            <a href="#security" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-[#6B46C1]">Securite</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-[#6B46C1]">Temoignages</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-[#6B46C1]">Tarifs</a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link href="/auth/signin" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-slate-700 py-2">Connexion</Link>
              <Link href="/auth/signup" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-white bg-[#6B9B5F] px-4 py-2.5 rounded-lg text-center">Inscription gratuite</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
