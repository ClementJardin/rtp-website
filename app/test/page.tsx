import type { Metadata } from "next";
import Quiz from "@/components/Quiz";
import { Answers, questions } from "@/lib/quiz";

export const metadata: Metadata = {
  title: "Le test en 2 minutes",
  description:
    "5 questions sur tes fuites à l'effort. Romane, kinésithérapeute, lit tes réponses et te dit comment elle peut t'aider.",
};

/** Tunnel : page sans navigation ni distraction */
export default function TestPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  // Réponses déjà données depuis l'accueil (?quand=course)
  const initial: Answers = {};
  for (const q of questions) {
    const v = searchParams[q.id];
    if (typeof v === "string" && q.options.some((o) => o.id === v)) initial[q.id] = v;
  }
  return (
    <main>
      <Quiz initial={initial} />
    </main>
  );
}
