import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata = {
  title: "Tarifs - Programme RTP",
  description:
    "Découvre les tarifs du programme RTP d'accompagnement personnalisé en rééducation périnéale.",
};

export default function TarifsPage() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16 bg-gradient-to-b from-beige to-rose/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bordeaux mb-6">
            Tarifs
          </h1>
          <p className="text-xl text-noir">
            Un investissement transparent pour retrouver ta liberté
          </p>
        </div>
      </section>

      {/* Offre principale */}
      <Section className="bg-beige-light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-4">
              Programme RTP complet
            </h2>
            <p className="text-lg text-noir">
              Un accompagnement personnalisé de A à Z
            </p>
          </div>

          {/* Carte tarif principale */}
          <div className="bg-gradient-to-b from-bordeaux to-bordeaux-dark text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Badge ou élément visuel */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="bg-rose text-bordeaux px-4 py-2 rounded-full text-sm font-bold">
                Sans engagement
              </div>
            </div>

              <div className="text-center mb-8">
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold">129€</span>
                <span className="text-2xl md:text-3xl opacity-90 ml-2">/ 4 semaines</span>
              </div>
              <p className="text-xl opacity-90 mb-2">Programme complet</p>
              <p className="text-sm opacity-80">Accompagnement personnalisé • Sans engagement</p>
              </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                  <p className="font-semibold text-lg mb-1">Bilan initial complet</p>
                    <p className="text-sm opacity-90">
                    Analyse approfondie de ta situation, ton sport et tes objectifs
                    </p>
                  </div>
                </div>
              <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                  <p className="font-semibold text-lg mb-1">Programme sur-mesure</p>
                    <p className="text-sm opacity-90">
                    Exercices adaptés à ton sport avec vidéos guidées
                    </p>
                  </div>
                </div>
              <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                  <p className="font-semibold text-lg mb-1">Suivi régulier</p>
                    <p className="text-sm opacity-90">
                    Ajustements et réponses à tes questions 6 jours sur 7
                    </p>
                  </div>
                </div>
              <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                  <p className="font-semibold text-lg mb-1">Accès plateforme en ligne</p>
                    <p className="text-sm opacity-90">
                    24/7, où que tu sois, à ton rythme
                    </p>
                  </div>
                </div>
              <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                  <p className="font-semibold text-lg mb-1">Support et motivation</p>
                    <p className="text-sm opacity-90">
                    Je suis là pour t'accompagner jusqu'à tes résultats
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-white/20">
              <Button
                href="/contact"
                variant="secondary"
                className="w-full md:w-auto px-8 py-4 text-lg font-bold"
                eventName="cta_click"
                eventData={{ location: "tarifs_card", action: "commander_programme" }}
              >
                Je démarre maintenant
              </Button>
            </div>
          </div>

          {/* Section valeur */}
          <div className="mt-12 text-center space-y-4">
            <h3 className="text-2xl font-bold text-bordeaux">
              Ce que tu obtiens
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-rose/20">
                <p className="text-3xl font-bold text-bordeaux mb-2">100%</p>
                <p className="text-noir font-semibold">Personnalisé</p>
                <p className="text-sm text-noir/70 mt-2">
                  Programme créé spécifiquement pour toi
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-rose/20">
                <p className="text-3xl font-bold text-bordeaux mb-2">6/7</p>
                <p className="text-noir font-semibold">Jours de suivi</p>
                <p className="text-sm text-noir/70 mt-2">
                  Disponible pour t'accompagner
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-rose/20">
                <p className="text-3xl font-bold text-bordeaux mb-2">24/7</p>
                <p className="text-noir font-semibold">Accès plateforme</p>
                <p className="text-sm text-noir/70 mt-2">
                  Où que tu sois, quand tu veux
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Garantie / Engagement */}
      <Section className="bg-gradient-to-b from-rose/20 to-beige">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-bordeaux">
            Mon engagement
          </h2>
          <p className="text-lg text-noir">
            Je m'engage à t'accompagner jusqu'à ce que tu retrouves ta liberté
            de mouvement. Pas de promesses vides, que des résultats concrets.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="font-semibold text-bordeaux mb-2">✓ Transparence totale</p>
              <p className="text-sm text-noir">
                Un tarif unique, pas de surprise. Tu sais exactement ce que tu paies.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="font-semibold text-bordeaux mb-2">✓ Sans engagement</p>
              <p className="text-sm text-noir">
                129€ pour 4 semaines, tu es libre de continuer ou d'arrêter quand tu veux.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="font-semibold text-bordeaux mb-2">✓ Accompagnement complet</p>
              <p className="text-sm text-noir">
                Du bilan initial jusqu'à tes résultats, je suis là pour toi.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-bordeaux to-bordeaux-dark text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prête à retrouver ta liberté ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoins les femmes qui ont retrouvé leur périnée
          </p>
          <Button
            href="/contact"
            variant="secondary"
            className="px-8 py-4 text-lg"
            eventName="cta_click"
            eventData={{ location: "tarifs_final", action: "commencer_programme" }}
          >
            Je démarre maintenant
          </Button>
        </div>
      </Section>

      <MobileCTA />
      <Footer />
    </main>
  );
}
