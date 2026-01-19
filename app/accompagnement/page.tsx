import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata = {
  title: "Accompagnement RTP - Programme personnalisé",
  description:
    "Découvre le programme RTP : un accompagnement 100% en ligne et personnalisé pour retrouver ton périnée et reprendre ton sport sans fuites urinaires.",
};

export default function AccompagnementPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16 bg-gradient-to-b from-beige to-rose/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bordeaux mb-6">
            L'accompagnement RTP
          </h1>
          <p className="text-xl text-noir">
            Un programme sur-mesure pour retrouver ta liberté de mouvement
          </p>
        </div>
      </section>

      {/* Détails du programme */}
      <Section className="bg-beige-light">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-bordeaux mb-6">
              Un programme 100% personnalisé
            </h2>
            <p className="text-lg text-noir mb-4">
              Contrairement aux protocoles génériques, RTP s'adapte à ta
              situation unique : ton sport, ton niveau, tes objectifs, ton
              histoire.
            </p>
            <p className="text-lg text-noir">
              Chaque exercice est choisi et ajusté pour toi. Pas de programme
              standard, pas de "one size fits all".
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-bordeaux mb-6">
              Ce qui est inclus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-rose/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-bordeaux mb-3">
                  📋 Bilan complet
                </h3>
                <p className="text-noir">
                  Analyse approfondie de ta situation, de ton sport et de tes
                  besoins spécifiques.
                </p>
              </div>
              <div className="bg-rose/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-bordeaux mb-3">
                  🎯 Programme sur-mesure
                </h3>
                <p className="text-noir">
                  Exercices adaptés à ta pratique sportive avec vidéos et
                  explications détaillées.
                </p>
              </div>
              <div className="bg-rose/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-bordeaux mb-3">
                  💬 Suivi régulier
                </h3>
                <p className="text-noir">
                  Ajustements en fonction de tes progrès, réponses à tes
                  questions, motivation.
                </p>
              </div>
              <div className="bg-rose/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-bordeaux mb-3">
                  📱 Accès en ligne
                </h3>
                <p className="text-noir">
                  Plateforme accessible 24/7, où que tu sois. Flexibilité
                  totale.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-bordeaux mb-6">
              Pourquoi ça marche ?
            </h2>
            <div className="space-y-4 text-lg text-noir">
              <p>
                <strong className="text-bordeaux">Personnalisation :</strong>{" "}
                Ton programme est créé pour toi, pas pour une moyenne
                statistique.
              </p>
              <p>
                <strong className="text-bordeaux">Adaptation :</strong> On
                ajuste en fonction de tes progrès et de tes retours. Rien n'est
                figé.
              </p>
              <p>
                <strong className="text-bordeaux">Spécificité :</strong> Les
                exercices sont pensés pour ton sport et tes mouvements
                quotidiens.
              </p>
              <p>
                <strong className="text-bordeaux">Accompagnement :</strong> Tu
                n'es pas seule. Je suis là pour t'aider, te motiver et répondre
                à tes questions.
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
            href="/contact"
            variant="secondary"
            className="px-8 py-4 text-lg"
          >
            Je démarre maintenant
          </Button>
        </div>
      </Section>

      <MobileCTA />
    </main>
  );
}
