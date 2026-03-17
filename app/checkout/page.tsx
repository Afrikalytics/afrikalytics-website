"use client";

import { useState } from "react";
import { Crown, Mail, User, ArrowRight, Shield, CheckCircle, Loader2 } from "lucide-react";

const API_URL = "https://web-production-ef657.up.railway.app";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [existingUser, setExistingUser] = useState(false);

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
        },
        body: JSON.stringify({
          email: email,
          name: name,
          plan: "professionnel",
        }),
      });

      const data = await response.json();

      if (data.success && data.payment_url) {
        // Rediriger vers PayDunya
        window.location.href = data.payment_url;
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

  // Vérifier si l'email existe déjà
  const checkExistingUser = async (emailToCheck: string) => {
    if (!emailToCheck || !emailToCheck.includes("@")) return;
    
    try {
      const response = await fetch(`${API_URL}/api/studies`);
      // On ne peut pas vraiment vérifier sans endpoint dédié
      // Pour l'instant on laisse passer
    } catch (err) {
      // Ignorer
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center p-4">
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
              Afrikalytics<span className="text-yellow-400">.</span>
            </h1>
          </a>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
              <Crown className="h-8 w-8 text-yellow-800" />
            </div>
            <h2 className="text-2xl font-bold">Plan Professionnel</h2>
            <p className="text-blue-100 mt-2">Accès complet à toutes les fonctionnalités</p>
            <div className="mt-4">
              <span className="text-4xl font-bold">295 000</span>
              <span className="text-xl ml-2">CFA/mois</span>
            </div>
          </div>

          {/* Features */}
          <div className="p-6 bg-gray-50 border-b">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Résultats temps réel
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Insights complets
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Rapports PDF
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Support prioritaire
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Votre nom complet"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    checkExistingUser(e.target.value);
                  }}
                  required
                  placeholder="votre@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Vos identifiants de connexion seront envoyés à cette adresse
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !name || !email}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Redirection vers le paiement...
                </>
              ) : (
                <>
                  Payer 295 000 CFA
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm pt-2">
              <Shield className="h-4 w-4" />
              Paiement sécurisé par PayDunya
            </div>

            {/* Payment Methods */}
            <div className="text-center text-xs text-gray-400 pt-2">
              Orange Money • Wave • Free Money • Carte bancaire
            </div>
          </form>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <a
            href="https://afrikalytics.com/premium"
            className="text-blue-200 hover:text-white transition text-sm"
          >
            ← Retour aux offres
          </a>
        </div>
      </div>
    </div>
  );
}
