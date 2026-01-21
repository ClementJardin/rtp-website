import Header from "@/components/Header";
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
            Un investissement pour retrouver ta liberté
          </p>
        </div>
      </section>

      {/* Offres */}
      <Section className="bg-beige-light">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-bordeaux mb-4">
              Programme RTP complet
            </h2>
            <p className="text-lg text-noir">
              Un accompagnement personnalisé de A à Z
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-b from-bordeaux to-bordeaux-dark text-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Programme complet</h3>
                <p className="opacity-90">Accompagnement personnalisé</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Bilan initial complet</p>
                    <p className="text-sm opacity-90">
                      Analyse approfondie de ta situation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Programme sur-mesure</p>
                    <p className="text-sm opacity-90">
                      Exercices adaptés à ton sport avec vidéos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Suivi régulier</p>
                    <p className="text-sm opacity-90">
                      Ajustements et réponses à tes questions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Accès plateforme en ligne</p>
                    <p className="text-sm opacity-90">
                      24/7, où que tu sois
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Support et motivation</p>
                    <p className="text-sm opacity-90">
                      Je suis là pour t'accompagner
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-white/20">
                <p className="text-sm opacity-90 mb-2">Tarif sur devis</p>
                <p className="text-lg opacity-90">
                  Contacte-moi pour un devis personnalisé selon tes besoins
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4 text-lg text-noir">
            <p>
              <strong className="text-bordeaux">Pourquoi un devis personnalisé ?</strong>
            </p>
            <p>
              Chaque situation est unique. Ton programme est créé sur-mesure,
              donc le tarif aussi. On discute ensemble de tes besoins et on
              trouve la formule qui te correspond.
            </p>
          </div>
        </div>
      </Section>

      {/* Garantie / Engagement */}
      <Section className="bg-gradient-to-b from-rose/20 to-beige">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-bordeaux">
            Mon engagement
          </h2>
          <p className="text-lg text-noir max-w-2xl mx-auto">
            Je m'engage à t'accompagner jusqu'à ce que tu retrouves ta liberté
            de mouvement. Pas de promesses vides, que des résultats concrets.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-bordeaux to-bordeaux-dark text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prête à investir en toi ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contacte-moi pour discuter de ton projet
          </p>
          <Button
            href="/contact"
            variant="secondary"
            className="px-8 py-4 text-lg"
          >
            Je demande un devis
          </Button>
        </div>
      </Section>

      <MobileCTA />
    </main>
  );
}
