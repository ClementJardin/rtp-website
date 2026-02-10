"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Combien de temps dure l'accompagnement RTP ?",
    answer: "L'accompagnement est personnalisé selon tes besoins. En général, le programme s'étend sur 3 mois, avec un suivi régulier et des ajustements selon tes progrès. Chaque situation est unique, donc la durée varie.",
  },
  {
    question: "Est-ce vraiment efficace sans consultation en présentiel ?",
    answer: "Oui, absolument. L'accompagnement en ligne permet de travailler sur ton périnée dans ton contexte réel : ton sport, ton quotidien, tes mouvements. De plus, l'échange est permanent et tu peux poser tes questions à tout moment.",
  },
  {
    question: "Quels sports sont concernés ?",
    answer: "Tous les sports à impact : running, crossfit, sports collectifs, fitness, danse, tennis... Si tu as des fuites à l'effort, l'accompagnement RTP est fait pour toi, quel que soit ton sport.",
  },
  {
    question: "Faut-il avoir déjà fait une rééducation périnéale ?",
    answer: "Non, ce n'est pas obligatoire. RTP s'adresse aussi bien aux femmes qui n'ont jamais fait de rééducation qu'à celles qui ont déjà essayé une approche classique sans résultat satisfaisant dans leur pratique sportive.",
  },
  {
    question: "En combien de temps les résultats sont-ils visibles ?",
    answer: "Une meilleure conscience arrive en quelques semaines, les fuites diminuent progressivement et le vrai objectif est de reprendre l’activité physique sans peur ni retenue. On cherche du solide, pas du rapide.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-bordeaux mb-8 text-center">
        Questions fréquentes
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-rose/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-rose/5 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-bordeaux text-lg pr-4">
                {item.question}
              </span>
              {openIndex === index ? (
                <FaChevronUp className="text-bordeaux flex-shrink-0" />
              ) : (
                <FaChevronDown className="text-bordeaux flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 pt-0">
                <p className="text-noir leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
