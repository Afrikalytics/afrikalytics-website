import Link from "next/link";

/* ──────────────── SVG icon helpers ──────────────── */
function SearchIcon() {
  return (<svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>);
}
function CheckIcon({ className = "w-4 h-4 text-[#6B9B5F]" }: { className?: string }) {
  return (<svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>);
}
function ShieldIcon() {
  return (<svg className="w-7 h-7 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>);
}
function StarIcon() {
  return (<svg className="w-5 h-5 text-[#F7C700]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>);
}
function DashboardPlaceholder() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl aspect-video flex items-center justify-center">
      <div className="text-center text-slate-300">
        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
        <span className="text-sm">Apercu du dashboard</span>
      </div>
    </div>
  );
}

/* ──────────────── Data ──────────────── */
const features = [
  {
    icon: (<svg className="w-6 h-6 text-[#6B9B5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>),
    title: "Matching IA precis",
    desc: "Notre algorithme analyse les competences, l'experience et les preferences pour creer des connexions pertinentes entre candidats et entreprises.",
  },
  {
    icon: (<svg className="w-6 h-6 text-[#6B9B5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
    title: "Tableau de bord analytique",
    desc: "Suivez vos candidatures, analysez les performances de vos offres et prenez des decisions eclairees grace a des visualisations claires.",
    reverse: true,
  },
  {
    icon: (<svg className="w-6 h-6 text-[#6B9B5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>),
    title: "Communication simplifiee",
    desc: "Messagerie integree, notifications en temps reel et suivi de chaque etape du processus de recrutement au meme endroit.",
  },
];

const testimonials = [
  { initials: "SM", name: "Sophie Martin", role: "UX Designer", text: "Emploi de reve trouve en deux semaines. Le matching IA est impressionnant." },
  { initials: "PD", name: "Pierre Durand", role: "RH Manager", text: "INTOWORK a transforme notre processus. Gain de temps enorme sur chaque embauche." },
  { initials: "LC", name: "Laura Chen", role: "CEO", text: "Interface intuitive, fonctionnalites completes. Exactement ce qu'il nous fallait." },
];

const securityBadges = [
  { label: "RGPD", desc: "Conforme au reglement europeen sur la protection des donnees" },
  { label: "SSL", desc: "Chiffrement de bout en bout de toutes les communications" },
  { label: "SOC 2", desc: "Audit de securite et conformite valide annuellement" },
  { label: "SLA 99,9%", desc: "Disponibilite garantie avec support technique 24/7" },
];

/* ──────────────── Page ──────────────── */
export default function Home() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* ═══ HERO — dark navy with green CTA (intowork.co style) ═══ */}
      <section id="hero" className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-[#6B46C1] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmg0djJoMnY0aC0ydjJoLTR2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6B9B5F] animate-pulse" />
              Notre vision pour les resultats
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-[#F7C700]">#1</span> Plateforme de<br />recrutement !
            </h1>

            <p className="text-lg font-semibold text-white mb-2">Le Profil Parfait. L&apos;employeur ideal !</p>

            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Connectez talents et opportunites grace a notre technologie de matching intelligent. INTOWORK facilite les rencontres entre candidats qualifies et entreprises qui recrutent pour des collaborations reussies et durables.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-2 flex items-center gap-2 mb-10">
              <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-4 py-3 text-slate-400 text-sm">
                <SearchIcon />
                Rechercher un poste, une competence...
              </div>
              <button className="bg-[#6B9B5F] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#5a8a4e] transition-colors shrink-0">
                Rechercher
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              {["Essai gratuit 14 jours", "Aucune carte requise", "Support prioritaire"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-[#6B9B5F]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="py-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center">
          {[
            ["10K+", "Candidats qualifies"],
            ["500+", "Entreprises partenaires"],
            ["95%", "Taux de satisfaction"],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#6B46C1]">{val}</div>
              <div className="text-sm text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ COMMENT CA MARCHE ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#6B9B5F] uppercase tracking-wide mb-2">Simple et efficace</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Comment ca marche ?</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Trois etapes pour transformer votre recrutement ou votre recherche d&apos;emploi
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Creez votre profil", desc: "Candidats : Completez votre profil et uploadez votre CV. Recruteurs : Presentez votre entreprise et vos besoins." },
              { num: "2", title: "IA de matching", desc: "Notre IA analyse et cree des correspondances parfaites basees sur les competences, l'experience et les aspirations." },
              { num: "3", title: "Connectez-vous", desc: "Candidats : Postulez en un clic. Recruteurs : Organisez vos entretiens directement depuis la plateforme." },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg hover:border-[#6B9B5F] transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-[#6B9B5F] text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — Plateforme complete ═══ */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#6B46C1] uppercase tracking-wide mb-2">Fonctionnalites</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Une plateforme complete</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour reussir votre recrutement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Pour les candidats */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#E6EFE4] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#6B9B5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pour les candidats</h3>
              <ul className="space-y-3 mb-6">
                {["Profil professionnel complet", "Recommandations IA personnalisees", "Candidature en un clic", "Notifications en temps reel", "Suivi de candidatures"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600"><CheckIcon />{item}</li>
                ))}
              </ul>
              <Link href="/auth/signup" className="inline-flex items-center text-sm font-semibold text-[#6B9B5F] hover:text-[#5a8a4e] transition-colors">
                Creer mon profil &rarr;
              </Link>
            </div>

            {/* Pour les recruteurs */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#EBE6F7] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#6B46C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pour les recruteurs</h3>
              <ul className="space-y-3 mb-6">
                {["Offres d'emploi illimitees", "ATS integre", "Matching IA avance", "Gestion d'entretiens", "Analytics detaillees"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600"><CheckIcon className="w-4 h-4 text-[#6B46C1]" />{item}</li>
                ))}
              </ul>
              <Link href="/auth/signup" className="inline-flex items-center text-sm font-semibold text-[#6B46C1] hover:text-purple-700 transition-colors">
                Creer mon espace &rarr;
              </Link>
            </div>
          </div>

          {/* Feature badges */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Securise", desc: "Cryptage de niveau bancaire" },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Rapide", desc: "Matching en temps reel" },
              { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", label: "Support 24/7", desc: "Toujours disponible" },
            ].map((badge) => (
              <div key={badge.label} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="w-12 h-12 rounded-full bg-[#E6EFE4] flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#6B9B5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={badge.icon} /></svg>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{badge.label}</h4>
                <p className="text-xs text-slate-500 mt-1">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECURITY ═══ */}
      <section id="security" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Vos donnees sont en securite</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-14">
            Nous appliquons les normes les plus strictes pour proteger vos informations personnelles et professionnelles.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityBadges.map((b) => (
              <div key={b.label} className="bg-white rounded-xl p-6 border-t-4 border-[#6B46C1] shadow-sm">
                <div className="w-14 h-14 rounded-full bg-[#EBE6F7] flex items-center justify-center mx-auto mb-4">
                  <ShieldIcon />
                </div>
                <div className="text-lg font-bold text-slate-900 mb-1">{b.label}</div>
                <p className="text-sm text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-[#6B46C1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold text-[#6B9B5F] uppercase tracking-wide mb-2">Temoignages</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ils nous font confiance</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Des milliers de professionnels utilisent INTOWORK chaque jour
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.initials} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-slate-200 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#6B9B5F] flex items-center justify-center text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-4">
            Des tarifs adaptes a vos besoins
          </h2>
          <p className="text-lg text-slate-500 text-center max-w-2xl mx-auto mb-14">
            Commencez gratuitement et evoluez selon votre croissance.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Gratuit */}
            <div className="rounded-xl p-8 bg-white border border-slate-200">
              <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-[#6B9B5F]">Gratuit</div>
              <div className="mb-2">
                <span className="text-4xl font-extrabold text-slate-900">0<span className="text-lg font-medium">&euro;/mois</span></span>
              </div>
              <p className="text-sm mb-6 text-slate-500">Pour les candidats et petites equipes</p>
              <ul className="space-y-3 mb-8">
                {["5 offres actives", "Matching IA basique", "Support email", "Tableau de bord"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm"><CheckIcon />{item}</li>
                ))}
              </ul>
              <Link href="/auth/signup" className="block text-center py-3 rounded-lg font-semibold text-sm bg-[#6B9B5F] text-white hover:bg-[#5a8a4e] transition-colors">
                Commencer
              </Link>
            </div>

            {/* Pro — highlighted */}
            <div className="rounded-xl p-8 bg-[#6B46C1] text-white ring-4 ring-purple-200 scale-105">
              <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-purple-200">Pro</div>
              <div className="mb-2">
                <span className="text-4xl font-extrabold text-white">79<span className="text-lg font-medium">&euro;/mois</span></span>
              </div>
              <p className="text-sm mb-6 text-purple-200">Pour les equipes RH en croissance</p>
              <ul className="space-y-3 mb-8">
                {["Offres illimitees", "Matching IA avance", "Support prioritaire", "Analytiques detaillees", "API & integrations"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm"><CheckIcon className="w-4 h-4 text-purple-200" />{item}</li>
                ))}
              </ul>
              <Link href="/auth/signup" className="block text-center py-3 rounded-lg font-semibold text-sm bg-white text-[#6B46C1] hover:bg-purple-50 transition-colors">
                Essai gratuit 14 jours
              </Link>
            </div>

            {/* Enterprise */}
            <div className="rounded-xl p-8 bg-white border border-slate-200">
              <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-[#6B46C1]">Enterprise</div>
              <div className="mb-2">
                <span className="text-3xl font-extrabold text-slate-900">Sur mesure</span>
              </div>
              <p className="text-sm mb-6 text-slate-500">Pour les grandes organisations</p>
              <ul className="space-y-3 mb-8">
                {["Tout dans Pro", "SSO & SAML", "SLA garanti 99,9%", "Gestionnaire dedie", "Deploiement sur site"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm"><CheckIcon />{item}</li>
                ))}
              </ul>
              <Link href="/auth/signup" className="block text-center py-3 rounded-lg font-semibold text-sm bg-[#6B46C1] text-white hover:bg-purple-700 transition-colors">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 bg-gradient-to-r from-[#6B9B5F] to-[#6B46C1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Pret a transformer votre carriere ?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers de professionnels qui ont fait le choix de l&apos;excellence avec INTOWORK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#6B46C1] font-bold rounded-lg hover:bg-purple-50 transition-colors text-lg">
              Creer mon compte gratuit
            </Link>
            <Link href="/auth/signin" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg">
              Se connecter
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-6">Aucune carte bancaire &bull; Gratuit &bull; Sans engagement</p>
        </div>
      </section>
    </div>
  );
}
