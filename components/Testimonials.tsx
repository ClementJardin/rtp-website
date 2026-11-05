import { temoignages } from "@/lib/site";

/** Carrousel natif : swipe au pouce, la carte suivante dépasse pour inviter à glisser */
export default function Testimonials() {
  return (
    <div className="snap-row -mx-5 flex scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
      {temoignages.map((t) => (
        <figure
          key={t.name}
          className="flex w-[84%] shrink-0 flex-col justify-between rounded-[1.75rem] bg-sable p-6 text-encre md:w-auto"
        >
          <div>
            <p className="titre text-3xl text-vin">{t.result}</p>
            <blockquote className="mt-4 text-lg leading-relaxed">« {t.text} »</blockquote>
          </div>
          <figcaption className="mt-6 font-semibold text-encre-doux">{t.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
