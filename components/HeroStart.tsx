"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { questions } from "@/lib/quiz";

/**
 * La 1re question du test, directement dans le hero :
 * un seul tap depuis Instagram suffit pour entrer dans le tunnel.
 */
export default function HeroStart() {
  const q = questions[0];
  return (
    <div className="rounded-[1.75rem] bg-sable p-5 text-encre shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] md:p-6">
      <div className="flex items-baseline justify-between gap-3">
        <p className="titre text-[1.6rem] text-vin">{q.title}</p>
        <p className="shrink-0 text-sm text-encre-doux">1 sur {questions.length}</p>
      </div>
      <ul className="mt-4 grid gap-2">
        {q.options.map((o) => (
          <li key={o.id}>
            <Link
              href={`/test?${q.id}=${o.id}`}
              onClick={() => track("quiz_start", { from: "hero", answer: o.id })}
              className="flex min-h-[52px] items-center justify-between rounded-2xl border-2 border-vin/15 bg-white px-4 font-semibold transition-colors hover:border-vin active:bg-poudre-pale"
            >
              {o.label}
              <span aria-hidden className="text-vin/40">›</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-encre-doux">
        5 questions, 2 minutes. Romane lit tes réponses et te répond personnellement.
      </p>
    </div>
  );
}
