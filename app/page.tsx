import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import HeroStart from "@/components/HeroStart";
import Checklist from "@/components/Checklist";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import PriceCard from "@/components/PriceCard";
import Cta from "@/components/Cta";
import { site } from "@/lib/site";

const mythes = [
  {
    myth: "Les fuites, c'est normal quand on fait du sport.",
    truth: "Fréquent ne veut pas dire normal. Ce n'est pas une fatalité.",
  },
  {
    myth: "Il faut juste serrer plus fort.",
    truth: "C'est plus fin que ça. Ton périnée doit apprendre à travailler dans ton sport.",
  },
  {
    myth: "Il vaut mieux éviter les impacts.",
    truth: "Ton périnée peut redevenir fort et compétent, pour tous les sports.",
  },
];

const contenu = [
  {
    title: "Des séances guidées en vidéo",
    desc: "Claires, courtes, adaptées à ton sport.",
  },
  {
    title: "Un programme structuré",
    desc: "Un parcours progressif sur plusieurs semaines, ajusté à tes progrès.",
  },
  {
    title: "Un contact privilégié",
    desc: "Je réponds à tes questions 6 jours sur 7.",
  },
];

const enLigne = [
  {
    title: "Tu as une vie bien remplie",
    desc: "Pas besoin de réorganiser ton emploi du temps pour aller au cabinet.",
  },
  {
    title: "Tu avances depuis chez toi",
    desc: "À ton rythme, sans trajet.",
  },
  {
    title: "Tu travailles dans ton contexte réel",
    desc: "Ton périnée doit fonctionner pendant ton sport, pas seulement allongée sur une table.",
  },
];

const etapes = [
  {
    title: "Tu fais le test",
    desc: "5 questions en 2 minutes. Romane lit tes réponses et te recontacte.",
  },
  {
    title: "Bilan initial en visio",
    desc: "On parle de ta situation, de ton sport, de tes objectifs. On construit ton plan.",
  },
  {
    title: "Ton programme sur-mesure",
    desc: "Des séances vidéo pensées pour toi. Tu progresses à ton rythme.",
  },
  {
    title: "Suivi et ajustements",
    desc: "Questions, ajustements, motivation : je suis là, 6 jours sur 7.",
  },
  {
    title: "Tu reprends ton sport",
    desc: "Tu cours, tu sautes, tu soulèves. Sans fuites, sans y penser.",
  },
];

export default function Home() {
  return (
    <>
      <Header tone="sombre" />
      <main>
        {/* 1. Hero : promesse + 1re question du test */}
        <section className="relative overflow-hidden bg-vin text-sable">
          <div className="wrap grid gap-10 pb-14 pt-24 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-14 md:pb-24 md:pt-32">
            <div className="rise">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/romane.jpg"
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover object-top ring-2 ring-poudre/60"
                  priority
                />
                <p className="text-sm leading-tight text-sable/85">
                  <span className="block font-bold text-sable">Romane, kinésithérapeute</span>
                  Rééducation périnéale et abdominale
                </p>
              </div>

              <h1 className="display mt-7 text-[3.6rem] text-poudre sm:text-7xl lg:text-[6.5rem]">
                Reprends ton sport.
                <span className="block text-sable">Sans fuites.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-sable/85">
                Un accompagnement 100&nbsp;% en ligne et personnalisé, pour les sportives et les
                jeunes mamans. Sans tabou, sans toucher vaginal.
              </p>
            </div>

            <div className="rise [animation-delay:120ms]">
              <HeroStart />
            </div>
          </div>
        </section>

        {/* 2. Problème : auto-identification */}
        <section className="py-16 md:py-24">
          <div className="wrap">
            <h2 className="titre max-w-2xl text-[2.6rem] text-vin md:text-6xl">
              Tu te reconnais&nbsp;?
            </h2>
            <p className="mt-3 max-w-xl text-lg text-encre-doux">
              Tu aimes courir, sauter, t&apos;entraîner… mais ton périnée ne suit plus.
            </p>
            <div className="mt-8">
              <Checklist />
            </div>
          </div>
        </section>

        {/* 3. Idées reçues */}
        <section className="bg-encre py-16 text-sable md:py-24">
          <div className="wrap">
            <h2 className="titre text-[2.6rem] md:text-6xl">On t&apos;a peut-être dit que…</h2>
            <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
              {mythes.map((m) => (
                <li key={m.myth}>
                  <p className="text-xl text-sable/50 line-through decoration-poudre decoration-2">
                    {m.myth}
                  </p>
                  <p className="titre mt-3 text-2xl text-poudre">{m.truth}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Le programme */}
        <section id="programme" className="scroll-mt-16 bg-poudre-pale py-16 md:py-24">
          <div className="wrap grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="font-bold text-vin">RTP, Retrouve Ton Périnée</p>
              <h2 className="titre mt-2 text-[2.6rem] text-vin md:text-6xl">
                Pas une liste d&apos;exercices. Un vrai accompagnement.
              </h2>
              <ul className="mt-8 space-y-5">
                {contenu.map((c) => (
                  <li key={c.title} className="border-l-4 border-vin pl-4">
                    <p className="text-lg font-bold">{c.title}</p>
                    <p className="text-encre-doux">{c.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="titre text-3xl text-vin md:mt-[4.5rem]">Pourquoi en ligne&nbsp;?</h3>
              <p className="mt-2 text-encre-doux">Un accompagnement qui s&apos;adapte à ta vie, pas l&apos;inverse.</p>
              <ul className="mt-6 space-y-5">
                {enLigne.map((c) => (
                  <li key={c.title} className="rounded-2xl bg-white/70 p-5">
                    <p className="text-lg font-bold">{c.title}</p>
                    <p className="text-encre-doux">{c.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Comment ça se passe */}
        <section className="py-16 md:py-24">
          <div className="wrap grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
            <div>
              <h2 className="titre text-[2.6rem] text-vin md:sticky md:top-28 md:text-6xl">
                Comment ça se passe
              </h2>
            </div>
            <ol className="relative">
              {etapes.map((e, i) => (
                <li key={e.title} className="relative flex gap-5 pb-8 last:pb-0">
                  {i < etapes.length - 1 && (
                    <span aria-hidden className="absolute left-[1.15rem] top-11 h-[calc(100%-2.75rem)] w-0.5 bg-vin/20" />
                  )}
                  <span className="titre flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vin text-xl text-sable">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <p className="text-xl font-bold">{e.title}</p>
                    <p className="mt-1 text-encre-doux">{e.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. Témoignages */}
        <section className="bg-vin py-16 text-sable md:py-24">
          <div className="wrap">
            <h2 className="titre text-[2.6rem] md:text-6xl">Elles ont retrouvé leur liberté</h2>
            <p className="mt-2 text-sable/70 md:hidden">Fais glisser pour lire la suite.</p>
            <div className="mt-8">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* 7. Qui suis-je */}
        <section className="py-16 md:py-24">
          <div className="wrap grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sable-fonce">
              <Image
                src="/images/romane.jpg"
                alt="Romane Lemarié, kinésithérapeute spécialisée en rééducation périnéale"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div>
              <h2 className="titre text-[2.6rem] text-vin md:text-6xl">Moi, c&apos;est Romane</h2>
              <div className="mt-6 space-y-4 text-lg">
                <p>
                  Kinésithérapeute spécialisée en rééducation périnéale et abdominale. J&apos;accompagne
                  les femmes sportives et post-partum à retrouver un périnée fonctionnel, fort et
                  compétent.
                </p>
                <p>
                  Mon approche est globale, <strong className="text-vin">sans toucher vaginal</strong>.
                  Directe, décomplexée, et toujours bienveillante.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Cta href="/a-propos" variant="contour" from="home_romane">
                  Mon parcours
                </Cta>
                <Cta href={site.instagram} external variant="contour" from="home_romane_instagram">
                  <FaInstagram aria-hidden /> Me suivre
                </Cta>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Tarif */}
        <section id="tarif" className="scroll-mt-16 bg-sable-fonce py-16 md:py-24">
          <div className="wrap grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <h2 className="titre text-[2.6rem] text-vin md:text-6xl">Un tarif clair</h2>
              <p className="mt-4 max-w-md text-lg text-encre-doux">
                Un prix unique, tout compris, sans engagement. Tu continues ou tu arrêtes quand tu
                veux.
              </p>
            </div>
            <PriceCard from="home_tarif" />
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="py-16 md:py-24">
          <div className="wrap grid gap-8 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <h2 className="titre text-[2.6rem] text-vin md:text-6xl">Tes questions</h2>
            <Faq />
          </div>
        </section>

        {/* 10. CTA final */}
        <section className="bg-vin py-20 text-sable md:py-28">
          <div className="wrap">
            <h2 className="display max-w-3xl text-6xl text-poudre md:text-8xl">
              Tu veux en finir avec les fuites&nbsp;?
            </h2>
            <p className="mt-6 max-w-md text-lg text-sable/85">
              Commence par le test : 5 questions, 2 minutes. Je lis tes réponses et je te dis comment
              je peux t&apos;aider.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-cta-zone>
              <Cta href="/test" variant="poudre" from="home_final">
                Faire le test (2 min)
              </Cta>
              <Cta href={site.instagramDm} external variant="contour-clair" from="home_final_dm">
                <FaInstagram aria-hidden /> M&apos;écrire sur Instagram
              </Cta>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
