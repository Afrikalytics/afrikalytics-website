"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Mail, User, ArrowRight, Shield, CheckCircle } from "lucide-react";
import { API_URL, isSafePaymentUrl } from "@/lib/constants";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Créer la facture PayDunya
      const response = await fetch(`${API_URL}/api/paydunya/create-invoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          plan: "professionnel",
        }),
      });

      const data = await response.json();

      if (data.success && data.payment_url && isSafePaymentUrl(data.payment_url)) {
        // Rediriger vers PayDunya
        window.location.href = data.payment_url;
      } else if (data.success && data.payment_url) {
        setError("URL de paiement invalide. Contactez le support.");
        setLoading(false);
      } else {
        setError(data.detail || "Erreur lors de la création du paiement");
        setLoading(false);
      }
    } catch (err) {
      console.error("Erreur:", err);
      setError("Erreur de connexion. Veuillez réessayer.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-950 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="https://afrikalytics.com" className="inline-block">
            <h1 className="text-3xl font-bold text-white">
              Afrikalytics<span className="text-accent-400">.</span>
            </h1>
          </a>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-heavy overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-white text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-400 rounded-full mb-4">
              <Crown className="h-8 w-8 text-accent-900" />
            </div>
            <h2 className="text-2xl font-bold">Plan Professionnel</h2>
            <p className="text-primary-100 mt-2">Accès complet à toutes les fonctionnalités</p>
            <div className="mt-4">
              <span className="text-4xl font-bold">295 000</span>
              <span className="text-xl ml-2">CFA/mois</span>
            </div>
          </div>

          {/* Features */}
          <div className="p-6 bg-surface-50 border-b">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-surface-700">
                <CheckCircle className="h-4 w-4 text-success-500" />
                Résultats temps réel
              </div>
              <div className="flex items-center gap-2 text-surface-700">
                <CheckCircle className="h-4 w-4 text-success-500" />
                Insights complets
              </div>
              <div className="flex items-center gap-2 text-surface-700">
                <CheckCircle className="h-4 w-4 text-success-500" />
                Rapports PDF
              </div>
              <div className="flex items-center gap-2 text-surface-700">
                <CheckCircle className="h-4 w-4 text-success-500" />
                Support prioritaire
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="bg-danger-50 border border-danger-200 text-danger-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <Input
              label="Nom complet"
              icon={<User className="h-5 w-5" />}
              size="lg"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Votre nom complet"
            />

            <Input
              label="Adresse email"
              icon={<Mail className="h-5 w-5" />}
              size="lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="votre@email.com"
              helper="Vos identifiants de connexion seront envoyés à cette adresse"
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={loading}
              disabled={!name || !email}
              iconRight={!loading ? <ArrowRight className="h-5 w-5" /> : undefined}
            >
              {loading ? "Redirection vers le paiement..." : "Payer 295 000 CFA"}
            </Button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-surface-500 text-sm pt-2">
              <Shield className="h-4 w-4" />
              Paiement sécurisé par PayDunya
            </div>

            {/* Payment Methods */}
            <div className="text-center text-xs text-surface-400 pt-2">
              Orange Money &bull; Wave &bull; Free Money &bull; Carte bancaire
            </div>
          </form>
        </motion.div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <a
            href="https://afrikalytics.com/premium"
            className="text-surface-400 hover:text-white transition text-sm"
          >
            &larr; Retour aux offres
          </a>
        </div>
      </div>
    </div>
  );
}
