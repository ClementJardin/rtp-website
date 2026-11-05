/**
 * Le test « 2 minutes » : porte d'entrée du tunnel.
 * 5 questions, une réponse par écran, passage automatique.
 */

export type Option = { id: string; label: string };
export type Question = { id: string; title: string; options: Option[] };

export const questions: Question[] = [
  {
    id: "quand",
    title: "Tes fuites arrivent surtout…",
    options: [
      { id: "course", label: "Quand je cours" },
      { id: "sauts", label: "Quand je saute" },
      { id: "charges", label: "Quand je soulève lourd" },
      { id: "toux", label: "Quand je tousse ou j'éternue" },
      { id: "souvent", label: "Un peu tout le temps" },
    ],
  },
  {
    id: "sport",
    title: "Ton sport, c'est plutôt…",
    options: [
      { id: "running", label: "Running, trail" },
      { id: "crossfit", label: "Crossfit, musculation" },
      { id: "collectif", label: "Sport collectif" },
      { id: "fitness", label: "Fitness, HIIT, danse" },
      { id: "reprise", label: "J'ai arrêté, je veux reprendre" },
    ],
  },
  {
    id: "situation",
    title: "Ta situation",
    options: [
      { id: "pp-recent", label: "J'ai accouché il y a moins d'un an" },
      { id: "pp-ancien", label: "J'ai accouché il y a plus d'un an" },
      { id: "sans-enfant", label: "Je n'ai pas d'enfant" },
    ],
  },
  {
    id: "reeduc",
    title: "Tu as déjà fait une rééducation du périnée ?",
    options: [
      { id: "sans-effet", label: "Oui, mais rien n'a changé au sport" },
      { id: "partiel", label: "Oui, ça a un peu aidé" },
      { id: "jamais", label: "Non, jamais" },
    ],
  },
  {
    id: "objectif",
    title: "Ce que tu veux vraiment",
    options: [
      { id: "reprendre", label: "Reprendre le sport que j'ai lâché" },
      { id: "protection", label: "Arrêter de me protéger « au cas où »" },
      { id: "performer", label: "M'entraîner à fond sans y penser" },
    ],
  },
];

export type Answers = Record<string, string>;

export function labelOf(qid: string, oid: string | undefined) {
  const q = questions.find((x) => x.id === qid);
  return q?.options.find((o) => o.id === oid)?.label ?? "";
}

/** Points de travail personnalisés, déduits des réponses */
export function focusPoints(a: Answers): string[] {
  const points: string[] = [];

  const declencheur: Record<string, string> = {
    course: "Encaisser les impacts répétés de la foulée, même sur la durée.",
    sauts: "Gérer les réceptions de sauts sans appréhension.",
    charges: "Gérer la pression dans ton ventre quand la charge monte.",
    toux: "Retrouver des réflexes de protection automatiques au quotidien.",
    souvent: "Reprendre les bases solidement, puis remonter jusqu'à ton sport.",
  };
  if (a.quand) points.push(declencheur[a.quand]);

  if (a.situation === "pp-recent")
    points.push("Un retour au sport progressif, pensé pour ton post-partum.");
  if (a.situation === "pp-ancien")
    points.push("Il n'est jamais trop tard : on reprend là où ça coince depuis l'accouchement.");

  if (a.reeduc === "sans-effet" || a.reeduc === "partiel")
    points.push("Travailler ton périnée debout et en mouvement, dans ton sport, pas seulement allongée.");
  if (a.reeduc === "jamais")
    points.push("Comprendre ton périnée et apprendre à l'utiliser, sans tabou.");

  if (a.objectif === "protection")
    points.push("Ranger les protections et le legging noir « au cas où ».");
  if (a.objectif === "reprendre")
    points.push("Un plan de reprise étape par étape, jusqu'à ton niveau d'avant.");
  if (a.objectif === "performer")
    points.push("Un périnée qui suit tes entraînements, sans y penser.");

  return points.filter(Boolean).slice(0, 4);
}

/** Récapitulatif texte envoyé à Romane */
export function summary(a: Answers) {
  return questions
    .map((q) => `• ${q.title} → ${labelOf(q.id, a[q.id]) || "—"}`)
    .join("\n");
}
