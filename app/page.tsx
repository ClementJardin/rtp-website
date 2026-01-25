import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialSlider from "@/components/TestimonialSlider";
import Image from "next/image";
import { FaCheckCircle, FaHeart, FaInfoCircle, FaArrowRight, FaLightbulb, FaDumbbell, FaClipboardList, FaUserMd, FaComments, FaTrophy, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />

      {/* 1. Hero avec nouveau titre fort */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-24 md:pt-32 bg-gradient-to-b from-beige to-rose/20">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-bordeaux mb-6 leading-tight">
            Tu aimes courir, sauter, t'entraîner…
            <br />
            mais ton périnée ne suit plus ?
          </h1>
          <p className="text-xl md:text-2xl text-noir mb-4">
            Je suis Romane, kiné, et je t'aide à reprendre ton sport sans fuites, sans tabou et sans toucher vaginal.
          </p>
          <div className="flex justify-center">
            <Button
              href="/contact"
              variant="primary"
              className="px-8 py-4 text-lg md:text-xl flex items-center gap-2 max-w-xs md:max-w-sm"
            >
              <FaDumbbell /> Retrouver mon périnée
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Section "Est-ce que tu te reconnais ?" - CRUCIALE */}
      <Section className="bg-beige-light">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-8">
            Tu te reconnais dans ces situations ?
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-noir text-left">
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">•</span>
              <p>Tu mets toujours un legging noir… au cas où</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">•</span>
              <p>Tu contractes les fesses avant chaque saut</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">•</span>
              <p>Tu fais pipi "par précaution" avant le sport</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">•</span>
              <p>Tu te dis que "ça passera avec le temps"</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">•</span>
              <p>Tu as déjà fait une rééducation classique… sans réel changement dans le sport</p>
            </div>
          </div>
          <div className="mt-8 space-y-3 text-lg text-bordeaux font-semibold">
            <p className="flex items-center gap-2 justify-center">
              <FaHeart className="text-bordeaux" />
              Si oui, tu n'es pas seule.
            </p>
            <p className="flex items-center gap-2 justify-center">
              <FaCheckCircle className="text-bordeaux" />
              Et surtout : il existe des solutions.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Déconstruire les idées fausses */}
      <Section className="bg-gradient-to-b from-rose/30 to-beige">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6 text-center">
            On t'a peut-être déjà dit que :
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-noir mb-8">
            <div className="flex items-start gap-3">
              <span className="text-red-600 text-xl">❌</span>
              <p>"Les fuites, c'est normal quand on fait du sport"</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-600 text-xl">❌</span>
              <p>"Il faut juste serrer plus fort"</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-600 text-xl">❌</span>
              <p>"Il vaut mieux éviter les impacts"</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. RTP comme transformation (pas un programme) */}
      <Section className="bg-beige-light">
        <div className="text-center">
          <div className="inline-block bg-bordeaux text-white px-6 py-2 rounded-full text-xl font-bold mb-6">
            RTP
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6">
            Retrouve Ton Périnée
          </h2>
          <p className="text-xl text-noir mb-6 font-semibold">
            RTP, ce n'est pas une liste d'exercices.
          </p>
          <p className="text-lg text-noir mb-6">
            C'est un accompagnement personnalisé qui contient :
          </p>
          <div className="max-w-2xl mx-auto space-y-3 text-lg text-noir text-left">
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">✔</span>
              <p>séances guidées en vidéo</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">✔</span>
              <p>programme structuré sur plusieurs semaines</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">✔</span>
              <p>contact privilégié 6 jours sur 7</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Distanciel comme avantage */}
      <Section className="bg-gradient-to-b from-beige to-rose/20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6">
            Pourquoi en ligne ?
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-noir">
            <p>
              Parce que tu es une femme active.
            </p>
            <p>
              Parce que tu n'as pas envie de courir au cabinet.
            </p>
            <p className="font-semibold text-bordeaux">
              Parce que ton périnée doit fonctionner dans ton quotidien et ton sport, pas uniquement sur une table.
            </p>
          </div>
        </div>
      </Section>

      {/* 6. Pour qui / Pas pour qui */}
      <Section className="bg-beige-light">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-8 text-center">
            RTP est fait pour toi si :
          </h2>
          <div className="max-w-2xl mx-auto space-y-3 text-lg text-noir mb-12">
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">✔</span>
              <p>tu es sportive</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">✔</span>
              <p>tu as des fuites à l'effort</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">✔</span>
              <p>tu veux comprendre ton corps</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">✔</span>
              <p>tu refuses d'arrêter le sport</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-bordeaux text-xl">✔</span>
              <p>tu veux retrouver confiance en ton périnée</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Comment ça se passe (étapes verticales) */}
      <Section className="bg-gradient-to-b from-rose/20 to-beige">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6 text-center">
            Comment ça se passe
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-rose/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-bordeaux mb-3 flex items-center gap-2">
                <FaClipboardList className="text-bordeaux" />
                Bilan initial
              </h3>
              <p className="text-noir">
                On échange en visio pour comprendre ta situation, ton sport,
                tes objectifs. On crée ton plan personnalisé.
              </p>
            </div>
            <div className="bg-rose/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-bordeaux mb-3 flex items-center gap-2">
                <FaUserMd className="text-bordeaux" />
                Accompagnement sur-mesure
              </h3>
              <p className="text-noir">
                Tu reçois ton accompagnement adapté, avec vidéos et explications.
                Tu progresses à ton rythme.
              </p>
            </div>
            <div className="bg-rose/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-bordeaux mb-3 flex items-center gap-2">
                <FaComments className="text-bordeaux" />
                Suivi régulier
              </h3>
              <p className="text-noir">
                On ajuste ensemble selon tes progrès. Questions, ajustements,
                motivation : je suis là.
              </p>
            </div>
            <div className="bg-rose/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-bordeaux mb-3 flex items-center gap-2">
                <FaTrophy className="text-bordeaux" />
                Résultats durables
              </h3>
              <p className="text-noir">
                Tu retrouves ta liberté, tu pratiques ton
                sport comme tu l'entends, sans limites.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Témoignages avant / après (slider swipe) */}
      <Section className="bg-beige-light">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-8 text-center">
            Elles ont retrouvé leur liberté
          </h2>
          <TestimonialSlider />
        </div>
      </Section>

      {/* 9. Qui suis-je - Texte plus incarné */}
      <Section className="bg-gradient-to-b from-rose/20 to-beige">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6">
            Qui suis-je ?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-rose shadow-lg">
                  <Image
                    src="/images/romane.jpg"
                    alt="Romane Lemarié - Kinésithérapeute spécialisée en rééducation périnéale"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
              </div>
              <div className="flex-1 text-left md:text-center space-y-4 text-lg text-noir">
                <p>
                  Je m'appelle <strong className="text-bordeaux">Romane Lemarié</strong>,
                  kinésithérapeute spécialisée en rééducation périnéale.
                </p>
                <p>
                  J'accompagne des femmes sportives, post-partum,
                  à retrouver un périnée fonctionnel, fort et compétent.
                </p>
                <p className="font-semibold text-bordeaux">
                  Mon approche est globale, sans toucher vaginal.
                </p>
              </div>
            </div>
            <div className="pt-4 flex flex-col md:flex-row items-center justify-center gap-4">
              <Button href="/a-propos" variant="outline" className="px-6 py-3">
                En savoir plus sur moi
              </Button>
              <a
                href="https://www.instagram.com/retrouve_ton_perinee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-bordeaux hover:text-bordeaux-dark transition-colors font-semibold"
              >
                <FaInstagram className="text-xl" />
                <span>Suis-moi sur Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. CTA final plus engageant */}
      <Section className="bg-gradient-to-b from-bordeaux to-bordeaux-dark text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu veux en finir avec les fuites ?
          </h2>
          <p className="text-xl mb-8 opacity-90 flex items-center justify-center gap-2">
            <FaArrowRight />
            Rejoins l'accompagnement RTP
          </p>
          <div className="space-y-4">
            <div className="flex justify-center">
              <Button
                href="/contact"
                variant="secondary"
                className="px-8 py-4 text-lg md:text-xl flex items-center gap-2 max-w-xs md:max-w-sm"
              >
                <FaDumbbell /> Retrouver mon périnée
              </Button>
            </div>
            <div className="pt-8 space-y-2">
              <p className="text-lg font-semibold">Questions ?</p>
              <p className="opacity-90">
                <a
                  href="mailto:romane.lemarie.rtp@gmail.com"
                  className="underline hover:opacity-75"
                >
                  romane.lemarie.rtp@gmail.com
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
