"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Section from "@/components/Section";
import Button from "@/components/Button";
import TestimonialSlider from "@/components/TestimonialSlider";
import ForYouSlider from "@/components/ForYouSlider";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import Image from "next/image";
import { FaCheckCircle, FaHeart, FaInfoCircle, FaArrowRight, FaLightbulb, FaDumbbell, FaClipboardList, FaUserMd, FaComments, FaTrophy, FaInstagram, FaTimes, FaVideo, FaCalendarAlt, FaHeadset, FaLaptop, FaClock, FaHome, FaRunning } from "react-icons/fa";
import { track } from "@vercel/analytics";

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
              href="/tarifs"
              variant="primary"
              className="px-8 py-4 text-lg md:text-xl flex items-center gap-2 max-w-xs md:max-w-sm"
              eventName="cta_click"
              eventData={{ location: "hero", action: "retrouver_mon_perinee" }}
            >
              <FaDumbbell /> Retrouver mon périnée
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Section "Est-ce que tu te reconnais ?" */}
      <Section className="bg-beige-light">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-4">
            Tu te reconnais dans ces situations ?
          </h2>
          <p className="text-lg text-noir max-w-2xl mx-auto">
            Si ces situations te parlent, tu n'es pas seule. Et surtout : il existe des solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              "Tu mets toujours un legging noir… au cas où",
              "Tu contractes les fesses avant chaque saut",
              'Tu fais pipi "par précaution" avant le sport',
              'Tu te dis que "ça passera avec le temps"',
              "Tu as déjà fait une rééducation classique… sans réel changement dans le sport",
            ].map((text, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-rose"
              >
                <p className="text-noir text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-rose/20 to-rose/10 rounded-full px-6 py-3 border border-rose/30">
              <FaHeart className="text-bordeaux text-xl" />
              <p className="text-bordeaux font-semibold text-lg">Si oui, tu n'es pas seule</p>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-bordeaux/10 to-bordeaux/5 rounded-full px-6 py-3 border border-bordeaux/20">
              <FaCheckCircle className="text-bordeaux text-xl" />
              <p className="text-bordeaux font-semibold text-lg">Il existe des solutions</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Déconstruire les idées fausses - Alternance gauche/droite */}
      <Section className="bg-gradient-to-b from-rose/30 to-beige">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-4 text-center">
            On t'a peut-être déjà dit que :
          </h2>
          <p className="text-lg text-noir mb-12 text-center max-w-2xl mx-auto">
            Ces idées reçues ne sont pas la vérité. Découvre une approche différente.
          </p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { 
                myth: "Les fuites, c'est normal quand on fait du sport",
                truth: "Faux. Ce n'est pas une fatalité. Avec la bonne approche, tu peux retrouver ta liberté."
              },
              { 
                myth: "Il faut juste serrer plus fort",
                truth: "Faux. C'est plus complexe que ça. Il faut comprendre et travailler ton périnée dans ton contexte sportif."
              },
              { 
                myth: "Il vaut mieux éviter les impacts",
                truth: "Faux. Tu peux retrouver ta liberté. Ton périnée peut être fort et compétent pour tous les sports."
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-red-100`}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center border-4 border-red-200">
                    <FaTimes className="text-red-500 text-3xl" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-noir text-xl font-bold mb-3 italic">
                    "{item.myth}"
                  </p>
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <div className="h-px bg-bordeaux flex-1 max-w-12"></div>
                    <FaCheckCircle className="text-bordeaux" />
                    <div className="h-px bg-bordeaux flex-1 max-w-12"></div>
                  </div>
                  <p className="text-bordeaux font-semibold">
                    {item.truth}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. RTP comme transformation - Timeline horizontale avec étapes */}
      <Section className="bg-beige-light">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-bordeaux to-bordeaux-dark text-white px-6 py-2 rounded-full text-xl font-bold mb-6 shadow-lg">
            RTP
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-4">
            Retrouve Ton Périnée
          </h2>
          <p className="text-xl text-noir mb-4 font-semibold">
            RTP, ce n'est pas une liste d'exercices.
          </p>
          <p className="text-lg text-noir max-w-2xl mx-auto">
            C'est un accompagnement personnalisé qui contient :
          </p>
        </div>
        
        {/* Timeline horizontale */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Ligne horizontale (desktop) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-rose/30 via-bordeaux/30 to-rose/30"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                { 
                  icon: FaVideo, 
                  title: "Séances guidées en vidéo",
                  desc: "Des vidéos claires pour chaque exercice, adaptées à ton sport"
                },
                { 
                  icon: FaCalendarAlt, 
                  title: "Programme structuré",
                  desc: "Un parcours sur plusieurs semaines, progressif et adapté"
                },
                { 
                  icon: FaHeadset, 
                  title: "Contact privilégié",
                  desc: "Disponible 6 jours sur 7 pour répondre à tes questions"
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative">
                    {/* Point sur la timeline (desktop) */}
                    <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-bordeaux rounded-full border-4 border-beige shadow-lg"></div>
                    </div>
                    
                    {/* Carte */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-rose/20 relative z-0">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-rose/20 to-bordeaux/10 rounded-xl flex items-center justify-center shadow-md">
                          <Icon className="text-bordeaux text-2xl" />
                        </div>
                        <h3 className="font-bold text-bordeaux text-lg">{item.title}</h3>
                        <p className="text-noir text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Distanciel comme avantage - Layout avec grandes cartes */}
      <Section className="bg-gradient-to-b from-beige to-rose/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-4">
            Pourquoi en ligne ?
          </h2>
          <p className="text-lg text-noir max-w-2xl mx-auto">
            Un accompagnement qui s'adapte à ta vie, pas l'inverse
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { 
              icon: FaRunning, 
              title: "Tu es une femme active",
              desc: "Pas besoin de réorganiser ton emploi du temps pour venir au cabinet",
              bg: "from-rose/20 to-rose/10"
            },
            { 
              icon: FaHome, 
              title: "Depuis chez toi",
              desc: "Pas besoin de courir au cabinet, tu progresses à ton rythme",
              bg: "from-bordeaux/10 to-rose/5"
            },
            { 
              icon: FaLaptop, 
              title: "Dans ton contexte réel",
              desc: "Ton périnée doit fonctionner dans ton quotidien et ton sport, pas uniquement sur une table",
              bg: "from-rose/15 to-bordeaux/5"
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-r ${item.bg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50`}
              >
                <div className="flex flex-col md:flex-row items-center gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="text-bordeaux text-3xl" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-bordeaux text-xl mb-2">{item.title}</h3>
                    <p className="text-noir text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 6. Pour qui - Carrousel */}
      <Section className="bg-beige-light">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-4 text-center">
            RTP est fait pour toi si :
          </h2>
          <p className="text-lg text-noir text-center max-w-2xl mx-auto">
            Un accompagnement pensé pour les femmes qui refusent de renoncer
          </p>
        </div>
        
        <ForYouSlider />
      </Section>

      {/* 7. Comment ça se passe (étapes verticales) */}
      <Section className="bg-gradient-to-b from-rose/20 to-beige">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6 text-center">
            Comment ça se passe
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-rose/20">
              <h3 className="text-xl font-bold text-bordeaux mb-3 flex items-center gap-2">
                <FaClipboardList className="text-bordeaux" />
                Bilan initial
              </h3>
              <p className="text-noir leading-relaxed">
                On échange en visio pour comprendre ta situation, ton sport,
                tes objectifs. On crée ton plan personnalisé.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-rose/20">
              <h3 className="text-xl font-bold text-bordeaux mb-3 flex items-center gap-2">
                <FaUserMd className="text-bordeaux" />
                Accompagnement sur-mesure
              </h3>
              <p className="text-noir leading-relaxed">
                Tu reçois ton accompagnement adapté, avec vidéos et explications.
                Tu progresses à ton rythme.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-rose/20">
              <h3 className="text-xl font-bold text-bordeaux mb-3 flex items-center gap-2">
                <FaComments className="text-bordeaux" />
                Suivi régulier
              </h3>
              <p className="text-noir leading-relaxed">
                On ajuste ensemble selon tes progrès. Questions, ajustements,
                motivation : je suis là.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-rose/20">
              <h3 className="text-xl font-bold text-bordeaux mb-3 flex items-center gap-2">
                <FaTrophy className="text-bordeaux" />
                Résultats durables
              </h3>
              <p className="text-noir leading-relaxed">
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

      {/* 8.5. FAQ */}
      <Section className="bg-gradient-to-b from-beige to-rose/20">
        <FAQ />
      </Section>

      {/* 8.7. Badges de confiance */}
      <Section className="bg-beige-light">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-4">
            Pourquoi me faire confiance ?
          </h2>
          <p className="text-lg text-noir max-w-2xl mx-auto">
            Un accompagnement professionnel, personnalisé et bienveillant
          </p>
        </div>
        <TrustBadges />
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
              <Button 
                href="/a-propos" 
                variant="outline" 
                className="px-6 py-3"
                eventName="button_click"
                eventData={{ location: "about_section", action: "en_savoir_plus" }}
              >
                En savoir plus sur moi
              </Button>
              <a
                href="https://www.instagram.com/retrouve_ton_perinee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-bordeaux hover:text-bordeaux-dark transition-colors font-semibold"
                onClick={() => track("external_link_click", { platform: "instagram", location: "about_section" })}
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
                href="/tarifs"
                variant="secondary"
                className="px-8 py-4 text-lg md:text-xl flex items-center gap-2 max-w-xs md:max-w-sm"
                eventName="cta_click"
                eventData={{ location: "final_cta", action: "retrouver_mon_perinee" }}
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
                  onClick={() => track("email_click", { location: "home_final_cta" })}
                >
                  romane.lemarie.rtp@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <MobileCTA />
      <Footer />
    </main>
  );
}
