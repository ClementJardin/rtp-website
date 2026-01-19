"use client";

import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par un vrai endpoint)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16 bg-gradient-to-b from-beige to-rose/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bordeaux mb-6">
            Contact
          </h1>
          <p className="text-xl text-noir">
            On discute de ton projet ?
          </p>
        </div>
      </section>

      {/* Formulaire de contact */}
      <Section className="bg-beige-light">
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="text-center bg-rose/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-bordeaux mb-4">
                Message envoyé !
              </h2>
              <p className="text-lg text-noir mb-6">
              Je te réponds dans les plus brefs délais.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="primary"
                className="px-6 py-3"
              >
                Envoyer un autre message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-bordeaux font-semibold mb-2"
                >
                  Ton prénom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-rose focus:border-bordeaux focus:outline-none transition-colors"
                  placeholder="Ton prénom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-bordeaux font-semibold mb-2"
                >
                  Ton email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-rose focus:border-bordeaux focus:outline-none transition-colors"
                  placeholder="ton@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-bordeaux font-semibold mb-2"
                >
                  Ton message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-rose focus:border-bordeaux focus:outline-none transition-colors resize-none"
                  placeholder="Parle-moi de ta situation, de ton sport, de tes objectifs..."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full md:w-auto px-8 py-4 text-lg"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </div>
            </form>
          )}

          {/* Contact direct */}
          <div className="mt-12 pt-12 border-t border-rose/30">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-bordeaux">
                Ou contacte-moi directement
              </h2>
              <p className="text-lg text-noir">
                <a
                  href="mailto:contact@rtp.fr"
                  className="text-bordeaux hover:underline font-semibold"
                >
                  contact@rtp.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-bordeaux to-bordeaux-dark text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prête à commencer ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoins les femmes qui ont retrouvé leur liberté
          </p>
          <Button
            href="/"
            variant="secondary"
            className="px-8 py-4 text-lg"
          >
            Découvrir le programme
          </Button>
        </div>
      </Section>

      <MobileCTA />
    </main>
  );
}
