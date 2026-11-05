import { FaCheck } from "react-icons/fa";
import { inclus, site } from "@/lib/site";
import Cta from "./Cta";

/** Carte tarif unique, réutilisée sur l'accueil et /tarifs */
export default function PriceCard({ from }: { from: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-vin text-sable">
      <div className="p-6 md:p-10">
        <p className="font-semibold text-poudre">Accompagnement RTP complet</p>
        <p className="mt-3 flex items-baseline gap-2">
          <span className="display text-7xl md:text-8xl">{site.price}</span>
          <span className="text-lg text-sable/80">/ {site.pricePeriod}</span>
        </p>
        <p className="mt-2 inline-block rounded-full bg-poudre px-3 py-1 text-sm font-bold text-vin-fonce">
          Sans engagement
        </p>

        <ul className="mt-8 space-y-4">
          {inclus.map((i) => (
            <li key={i.title} className="flex gap-3">
              <FaCheck className="mt-1.5 shrink-0 text-poudre" aria-hidden />
              <span>
                <span className="font-bold text-sable">{i.title}</span>
                <span className="block text-sable/75">{i.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-sable/15 bg-vin-fonce p-6 md:px-10" data-cta-zone>
        <Cta href="/test" variant="poudre" from={from} className="w-full md:w-auto">
          Faire le test pour commencer
        </Cta>
        <p className="mt-3 text-sm text-sable/70">
          Gratuit. Romane vérifie que l&apos;accompagnement te convient avant tout paiement.
        </p>
      </div>
    </div>
  );
}
