import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import PriceCard from "@/components/PriceCard";
import Faq from "@/components/Faq";
import { faq, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tarif",
  description: `Accompagnement RTP : ${site.price} pour ${site.pricePeriod}, sans engagement. Bilan, programme sur-mesure en vidéo et suivi 6 jours sur 7.`,
};

const engagements = [
  {
    title: "Transparence totale",
    desc: "Un tarif unique, pas de surprise. Tu sais exactement ce que tu paies.",
  },
  {
    title: "Sans engagement",
    desc: `${site.price} pour ${site.pricePeriod}. Tu continues ou tu arrêtes quand tu veux.`,
  },
  {
    title: "Du bilan jusqu'au résultat",
    desc: "Je t'accompagne jusqu'à ce que tu retrouves ta liberté de mouvement.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-12 md:py-20">
          <div className="wrap grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <h1 className="display text-6xl text-vin md:text-8xl">Un tarif clair.</h1>
              <p className="mt-5 max-w-md text-lg text-encre-doux">
                Un accompagnement personnalisé de A à Z, pour retrouver ta liberté. Pas de promesses
                vides, des résultats concrets.
              </p>
              <ul className="mt-10 space-y-6">
                {engagements.map((e) => (
                  <li key={e.title} className="border-l-4 border-vin pl-4">
                    <p className="text-lg font-bold">{e.title}</p>
                    <p className="text-encre-doux">{e.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <PriceCard from="tarifs" />
          </div>
        </section>

        <section className="bg-sable-fonce py-16 md:py-24">
          <div className="wrap grid gap-8 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <h2 className="titre text-[2.6rem] text-vin md:text-6xl">Tes questions</h2>
            <Faq items={faq.filter((f) => !f.q.startsWith("Combien ça coûte"))} />
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
