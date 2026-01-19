import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata = {
  title: "À propos - Romane Kinésithérapeute",
  description:
    "Découvre le parcours de Romane, kinésithérapeute spécialisée en rééducation périnéale et abdominale pour femmes sportives.",
};

export default function AProposPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-16 bg-gradient-to-b from-beige to-rose/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bordeaux mb-6">
            À propos
          </h1>
          <p className="text-xl text-noir">
            Qui je suis et pourquoi je fais ce que je fais
          </p>
        </div>
      </section>

      {/* Mon parcours */}
      <Section className="bg-beige-light">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-bordeaux mb-6">
              Bonjour, je suis Romane
            </h2>
            <div className="space-y-4 text-lg text-noir">
              <p>
                Kinésithérapeute spécialisée en rééducation périnéale et
                abdominale, j'accompagne des femmes sportives et post-partum
                depuis plusieurs années.
              </p>
              <p>
                J'ai choisi cette spécialité parce que j'ai vu trop de femmes
                renoncer à leur passion, à leur sport, à leur liberté de
                mouvement à cause des fuites urinaires.
              </p>
              <p className="font-semibold text-bordeaux">
                Ça me révolte. Et ça me motive.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-bordeaux mb-6">
              Ma vision
            </h2>
            <div className="space-y-4 text-lg text-noir">
              <p>
                Je crois que chaque femme mérite de pratiquer son sport sans
                limites, sans compromis, sans protection à vie.
              </p>
              <p>
                Je crois que la rééducation périnéale doit être personnalisée,
                adaptée, et pensée pour le sport. Pas de protocole générique qui
                ne fonctionne pas.
              </p>
              <p>
                Je crois que l'accompagnement en ligne permet une flexibilité et
                une accessibilité que la rééducation classique ne peut pas
                offrir.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-bordeaux mb-6">
              Mon approche
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-rose/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-bordeaux mb-3">
                  🎯 Sur-mesure
                </h3>
                <p className="text-noir">
                  Chaque programme est créé spécifiquement pour toi. Pas de
                  copier-coller.
                </p>
              </div>
              <div className="bg-rose/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-bordeaux mb-3">
                  💪 Orienté résultats
                </h3>
                <p className="text-noir">
                  On vise des résultats concrets et durables. Pas de promesses
                  vides.
                </p>
              </div>
              <div className="bg-rose/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-bordeaux mb-3">
                  🤝 Bienveillant
                </h3>
                <p className="text-noir">
                  Un accompagnement décomplexé, direct, mais toujours
                  bienveillant.
                </p>
              </div>
              <div className="bg-rose/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-bordeaux mb-3">
                  🚀 Motivant
                </h3>
                <p className="text-noir">
                  Je suis là pour te pousser, te motiver, te faire croire en tes
                  capacités.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-bordeaux mb-6">
              Pourquoi RTP ?
            </h2>
            <p className="text-lg text-noir mb-4">
              RTP, c'est Retrouve Ton Périnée. Mais c'est aussi Retrouve Ta
              Puissance, Retrouve Ta Passion, Retrouve Ta Liberté.
            </p>
            <p className="text-lg text-noir">
              C'est un programme pensé pour les femmes qui refusent de renoncer.
              Pour celles qui veulent continuer à se dépasser, à performer, à
              vivre leur sport pleinement.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-bordeaux to-bordeaux-dark text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            On travaille ensemble ?
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
