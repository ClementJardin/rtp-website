"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { track } from "@vercel/analytics";
import Cta from "./Cta";

const items = [
  "Tu mets toujours un legging noir… au cas où",
  "Tu contractes les fesses avant chaque saut",
  "Tu fais pipi « par précaution » avant le sport",
  "Tu te dis que « ça passera avec le temps »",
  "Tu as déjà fait une rééducation… sans vrai changement au sport",
];

/** Auto-diagnostic interactif : on coche ce qui nous ressemble */
export default function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));
  const n = checked.filter(Boolean).length;

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      if (next[i]) track("checklist_tick", { item: i });
      return next;
    });
  };

  return (
    <div>
      <p className="mb-4 font-semibold text-vin">Coche ce qui te ressemble&nbsp;:</p>
      <ul className="grid gap-2.5 md:grid-cols-2">
        {items.map((text, i) => (
          <li key={text}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={checked[i]}
              className={`flex w-full items-center gap-4 rounded-2xl border-2 px-4 py-4 text-left font-semibold transition-colors ${
                checked[i]
                  ? "border-vin bg-vin text-sable"
                  : "border-vin/15 bg-white text-encre hover:border-vin/40"
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                  checked[i] ? "border-poudre bg-poudre text-vin" : "border-vin/30"
                }`}
              >
                {checked[i] && <FaCheck className="text-xs" aria-hidden />}
              </span>
              {text}
            </button>
          </li>
        ))}
      </ul>

      <div aria-live="polite">
        {n > 0 && (
          <div className="step-in mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between" data-cta-zone>
            <p className="titre text-2xl text-vin">
              {n} sur {items.length}. Tu n&apos;es pas seule, et il existe des solutions.
            </p>
            <Cta href="/test" from="checklist" className="shrink-0">
              Faire le test (2 min)
            </Cta>
          </div>
        )}
      </div>
    </div>
  );
}
