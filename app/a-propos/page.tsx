import type { Metadata } from "next";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import Cta from "@/components/Cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Qui suis-je",
  description:
    "Romane Lemarié, kinésithérapeute spécialisée en rééducation périnéale et abdominale. Une approche globale, sans toucher vaginal, pensée pour les sportives.",
};

const approche = [
  { title: "Sur-mesure", desc: "Chaque programme est créé pour toi. Pas de copier-coller." },
  { title: "Orientée résultats", desc: "On vise du concret et du durable. Pas de promesses vides." },
  { title: "Bienveillante", desc: "Directe et décomplexée, mais toujours dans la bienveillance." },
  { title: "Motivante", desc: "Je suis là pour te pousser et te faire croire en tes capacités." },
];

const convictions = [
  "Chaque femme mérite de pratiquer son sport sans limites, sans compromis, sans protection à vie.",
  "La rééducation périnéale doit être personnalisée et pensée pour le sport. Pas de protocole générique.",
  "L'accompagnement en ligne offre une souplesse et une accessibilité que le cabinet ne permet pas.",
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-12 md:py-20">
          <div className="wrap grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <h1 className="display text-6xl text-vin md:text-8xl">Bonjour, moi c&apos;est Romane.</h1>
              <div className="mt-6 space-y-4 text-lg">
                <p>
                  Je suis <strong>{site.coach}</strong>, kinésithérapeute spécialisée en rééducation
                  périnéale et abdominale.
                </p>
                <p>
                  J&apos;accompagne les femmes sportives et post-partum à retrouver un périnée
                  fonctionnel, fort et compétent.
                </p>
                <p className="font-bold text-vin">Mon approche est globale, sans toucher vaginal.</p>
              </div>
            </div>
            <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-[2rem] bg-sable-fonce md:order-2">
              <Image
                src="/images/romane.jpg"
                alt="Romane Lemarié, kinésithérapeute"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </section>

        <section className="bg-encre py-16 text-sable md:py-24">
          <div className="wrap">
            <h2 className="titre text-[2.6rem] md:text-6xl">Ce en quoi je crois</h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {convictions.map((c) => (
                <li key={c} className="titre text-2xl leading-tight text-poudre">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="wrap">
            <h2 className="titre text-[2.6rem] text-vin md:text-6xl">Ma façon de travailler</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {approche.map((a) => (
                <li key={a.title} className="rounded-2xl bg-poudre-pale p-6">
                  <p className="titre text-3xl text-vin">{a.title}</p>
                  <p className="mt-2 text-encre-doux">{a.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-sable-fonce py-16 md:py-24">
          <div className="wrap max-w-3xl">
            <h2 className="titre text-[2.6rem] text-vin md:text-6xl">Pourquoi RTP&nbsp;?</h2>
            <p className="mt-6 text-lg">
              RTP, c&apos;est Retrouve Ton Périnée. Mais c&apos;est aussi Retrouve Ta Puissance,
              Retrouve Ta Passion, Retrouve Ta Liberté.
            </p>
            <p className="mt-4 text-lg">
              Un programme pour les femmes qui refusent de renoncer. Pour celles qui veulent
              continuer à se dépasser, à performer, à vivre leur sport pleinement.
            </p>
          </div>
        </section>

        <section className="bg-vin py-16 text-sable md:py-24">
          <div className="wrap">
            <h2 className="display max-w-2xl text-6xl text-poudre md:text-7xl">On travaille ensemble&nbsp;?</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-cta-zone>
              <Cta href="/test" variant="poudre" from="a_propos">
                Faire le test (2 min)
              </Cta>
              <Cta href={site.instagram} external variant="contour-clair" from="a_propos_instagram">
                <FaInstagram aria-hidden /> Me suivre sur Instagram
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
