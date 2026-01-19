import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* 1. Hero très court (message + CTA) */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-24 md:pt-32 bg-gradient-to-b from-beige to-rose/20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-bordeaux mb-6 leading-tight">
            Je t'aide à reprendre ton sport sans fuites urinaires
          </h1>
          <p className="text-xl md:text-2xl text-noir mb-8">
            grâce à un accompagnement 100% personnalisé
          </p>
          <Button
            href="/contact"
            variant="primary"
            className="px-8 py-4 text-lg md:text-xl"
          >
            Je démarre maintenant
          </Button>
        </div>
      </section>

      {/* 2. Problème identifié (fuites à l'effort) */}
      <Section className="bg-beige-light">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6">
            Tu connais cette situation ?
          </h2>
          <div className="space-y-4 text-lg text-noir">
            <p>
              Tu adores ton sport mais chaque saut, chaque course, chaque effort
              te rappelle que quelque chose ne va pas.
            </p>
            <p className="font-semibold text-bordeaux">
              Les fuites urinaires à l'effort ont pris le contrôle.
            </p>
            <p>
              Tu as peut-être déjà fait une rééducation classique, mais ça n'a
              rien changé. Tu refuses d'arrêter ou de te protéger à vie.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Présentation du programme RTP */}
      <Section className="bg-gradient-to-b from-rose/30 to-beige">
        <div className="text-center">
          <div className="inline-block bg-bordeaux text-white px-6 py-2 rounded-full text-xl font-bold mb-6">
            RTP
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6">
            Retrouve Ton Périnée
          </h2>
          <p className="text-xl text-noir mb-4">
            Un programme d'accompagnement en ligne 100% personnalisé
          </p>
          <p className="text-lg text-noir max-w-2xl mx-auto">
            Spécialement conçu pour les femmes sportives qui refusent de
            renoncer à leur passion. Tu vas retrouver ta liberté de mouvement
            et ta confiance.
          </p>
        </div>
      </Section>

      {/* 4. Pour qui est fait l'accompagnement */}
      <Section className="bg-beige-light">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-8 text-center">
            Pour qui ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-rose/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-bordeaux mb-3">
                🏃‍♀️ Sportives
              </h3>
              <p className="text-noir">
                Running, crossfit, sports collectifs, fitness... Tu veux
                continuer à te dépasser sans limites.
              </p>
            </div>
            <div className="bg-rose/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-bordeaux mb-3">
                👶 Post-partum
              </h3>
              <p className="text-noir">
                Tu as accouché et tu veux retrouver ton corps d'avant, sans
                compromis.
              </p>
            </div>
            <div className="bg-rose/20 rounded-2xl p-6 md:col-span-2">
              <h3 className="text-xl font-bold text-bordeaux mb-3">
                💪 Déçues de la rééducation classique
              </h3>
              <p className="text-noir">
                Tu as déjà essayé une rééducation périnéale classique qui n'a
                pas fonctionné. Tu mérites mieux.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Ce que tu y trouves */}
      <Section className="bg-gradient-to-b from-beige to-white">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-8 text-center">
            Ce que tu y trouves
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-bordeaux text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-bordeaux mb-2">
                  Bilan personnalisé complet
                </h3>
                <p className="text-noir">
                  On identifie ensemble tes besoins spécifiques et on crée un
                  plan d'action sur-mesure.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-bordeaux text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-bordeaux mb-2">
                  Exercices adaptés à ton sport
                </h3>
                <p className="text-noir">
                  Pas de protocole générique. Des exercices pensés pour ta
                  pratique sportive et tes objectifs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-bordeaux text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-bordeaux mb-2">
                  Suivi régulier et ajustements
                </h3>
                <p className="text-noir">
                  On adapte le programme en fonction de tes progrès. Tu n'es
                  jamais seule.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-bordeaux text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-bordeaux mb-2">
                  Accompagnement 100% en ligne
                </h3>
                <p className="text-noir">
                  Où que tu sois, quand tu veux. Flexibilité totale pour
                  s'adapter à ta vie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Résultats attendus */}
      <Section className="bg-bordeaux text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Les résultats que tu vas obtenir
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">✅ Zéro fuites</h3>
              <p>
                Tu pratiques ton sport sans aucune fuite urinaire, même à
                l'effort maximum.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">💪 Confiance retrouvée</h3>
              <p>
                Tu retrouves ta liberté de mouvement et ta sérénité pendant
                l'effort.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">🏆 Performance</h3>
              <p>
                Tu peux te concentrer sur tes performances, pas sur tes
                protections.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Comment ça se passe (étapes verticales) */}
      <Section className="bg-beige-light">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-12 text-center">
            Comment ça se passe
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-rose text-bordeaux rounded-full flex items-center justify-center font-bold text-2xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-bordeaux mb-3">
                  Bilan initial
                </h3>
                <p className="text-lg text-noir">
                  On échange en visio pour comprendre ta situation, ton sport,
                  tes objectifs. On crée ton plan personnalisé.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-rose text-bordeaux rounded-full flex items-center justify-center font-bold text-2xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-bordeaux mb-3">
                  Programme sur-mesure
                </h3>
                <p className="text-lg text-noir">
                  Tu reçois tes exercices adaptés, avec vidéos et explications.
                  Tu progresses à ton rythme.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-rose text-bordeaux rounded-full flex items-center justify-center font-bold text-2xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-bordeaux mb-3">
                  Suivi régulier
                </h3>
                <p className="text-lg text-noir">
                  On ajuste ensemble selon tes progrès. Questions, ajustements,
                  motivation : je suis là.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-rose text-bordeaux rounded-full flex items-center justify-center font-bold text-2xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-bordeaux mb-3">
                  Résultats durables
                </h3>
                <p className="text-lg text-noir">
                  Tu retrouves ton autonomie et ta liberté. Tu pratiques ton
                  sport comme tu l'entends, sans limites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Témoignages avant / après (slider swipe) */}
      <Section className="bg-gradient-to-b from-rose/20 to-beige">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-8 text-center">
            Elles ont retrouvé leur liberté
          </h2>
          <TestimonialSlider />
        </div>
      </Section>

      {/* 9. Qui suis-je */}
      <Section className="bg-beige-light">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6">
            Qui suis-je ?
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-noir">
            <p>
              Je suis <strong className="text-bordeaux">Romane</strong>,
              kinésithérapeute spécialisée en rééducation périnéale et
              abdominale.
            </p>
            <p>
              J'accompagne des femmes sportives et post-partum depuis plusieurs
              années. J'ai vu trop de femmes renoncer à leur passion à cause
              des fuites urinaires.
            </p>
            <p className="font-semibold text-bordeaux">
              Mon objectif : te redonner ta liberté de mouvement et ta
              confiance.
            </p>
            <div className="pt-6">
              <Button href="/a-propos" variant="outline" className="px-6 py-3">
                En savoir plus sur mon parcours
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. CTA final + contacts */}
      <Section className="bg-gradient-to-b from-bordeaux to-bordeaux-dark text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prête à reprendre ton sport sans limites ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoins les femmes qui ont retrouvé leur liberté de mouvement
          </p>
          <div className="space-y-4">
            <Button
              href="/contact"
              variant="secondary"
              className="px-8 py-4 text-lg md:text-xl"
            >
              Je démarre maintenant
            </Button>
            <div className="pt-8 space-y-2">
              <p className="text-lg font-semibold">Questions ?</p>
              <p className="opacity-90">
                <a
                  href="mailto:contact@rtp.fr"
                  className="underline hover:opacity-75"
                >
                  contact@rtp.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <MobileCTA />
    </main>
  );
}
