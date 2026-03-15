"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  AlertCircle,
  CheckCircle,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import { API_URL } from "@/lib/constants";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// ---------------------------------------------------------------------------
// Contact info data
// ---------------------------------------------------------------------------

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: (
      <a
        href="mailto:contact@afrikalytics.com"
        className="text-primary-600 hover:text-primary-700 transition-colors font-medium"
      >
        contact@afrikalytics.com
      </a>
    ),
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Adresse",
    content: <span className="text-surface-600">Dakar, Senegal</span>,
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Telephone",
    content: (
      <a
        href="tel:+221773619028"
        className="text-surface-600 hover:text-primary-600 transition-colors"
      >
        +221 77 361 90 28
      </a>
    ),
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setError("Une erreur est survenue. Veuillez reessayer.");
      console.error("Erreur:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-surface-50">
      {/* ----------------------------------------------------------------- */}
      {/* Hero */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-surface-950 text-white py-20">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Contactez-Nous
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-surface-300 max-w-2xl mx-auto"
          >
            Notre equipe est la pour repondre a toutes vos questions et vous
            accompagner dans vos projets.
          </motion.p>
        </motion.div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Contact Content */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* -------------------------------------------------------------- */}
            {/* Left column — Contact info + Hours */}
            {/* -------------------------------------------------------------- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold text-surface-900 tracking-tight"
              >
                Informations de Contact
              </motion.h2>

              {/* Contact info cards */}
              {contactItems.map((item) => (
                <motion.div key={item.title} variants={fadeInUp}>
                  <Card variant="default" padding="md">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-primary-50 text-primary-600 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-surface-900 mb-1">
                          {item.title}
                        </h3>
                        {item.content}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Hours card */}
              <motion.div variants={fadeInUp}>
                <Card variant="bordered" padding="md">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary-50 text-primary-600 shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">
                        Horaires
                      </h3>
                      <p className="text-surface-600 text-sm leading-relaxed">
                        Lundi - Vendredi : 9h00 - 18h00 (GMT)
                        <br />
                        Samedi - Dimanche : Ferme
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* Right column — Form */}
            {/* -------------------------------------------------------------- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card variant="elevated" padding="lg">
                  <h2 className="text-2xl font-bold text-surface-900 tracking-tight mb-6">
                    Envoyez-nous un Message
                  </h2>

                  {submitted ? (
                    /* ---------------------------------------------------- */
                    /* Success state */
                    /* ---------------------------------------------------- */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-8"
                    >
                      <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-success-50 text-success-600 text-sm mb-6">
                        <CheckCircle className="h-5 w-5 shrink-0" />
                        <span className="font-medium">
                          Message envoye avec succes !
                        </span>
                      </div>
                      <p className="text-surface-600 mb-6">
                        Nous vous repondrons dans les plus brefs delais.
                      </p>
                      <Button
                        variant="secondary"
                        size="md"
                        onClick={() => setSubmitted(false)}
                      >
                        Envoyer un autre message
                      </Button>
                    </motion.div>
                  ) : (
                    /* ---------------------------------------------------- */
                    /* Form */
                    /* ---------------------------------------------------- */
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Error alert */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-1.5 p-3 rounded-lg bg-danger-50 text-danger-600 text-sm"
                          role="alert"
                        >
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          {error}
                        </motion.div>
                      )}

                      <Input
                        label="Nom complet"
                        name="name"
                        type="text"
                        icon={<User className="h-4 w-4" />}
                        size="lg"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        maxLength={100}
                      />

                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        icon={<Mail className="h-4 w-4" />}
                        size="lg"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean@example.com"
                        maxLength={254}
                      />

                      <Input
                        label="Entreprise"
                        name="company"
                        type="text"
                        icon={<Building2 className="h-4 w-4" />}
                        size="lg"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                        maxLength={150}
                      />

                      <Textarea
                        label="Message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Comment pouvons-nous vous aider ?"
                        maxLength={2000}
                      />

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        loading={isSubmitting}
                        iconRight={<Send className="h-5 w-5" />}
                      >
                        {isSubmitting
                          ? "Envoi en cours..."
                          : "Envoyer le message"}
                      </Button>
                    </form>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
