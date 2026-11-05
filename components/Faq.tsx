import { faq } from "@/lib/site";

/** Accordéon natif (details/summary) : accessible et sans JS */
export default function Faq({ items = faq }: { items?: typeof faq }) {
  return (
    <div className="divide-y-2 divide-vin/10 border-y-2 border-vin/10">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vin/10 text-xl text-vin transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-prose pb-6 text-encre-doux">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
