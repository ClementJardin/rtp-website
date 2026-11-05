/**
 * Infos centrales du site : modifier ici, ça se répercute partout.
 */
export const site = {
  name: "RTP – Retrouve Ton Périnée",
  coach: "Romane Lemarié",
  role: "Kinésithérapeute spécialisée en rééducation périnéale et abdominale",
  email: "romane.lemarie.rtp@gmail.com",
  instagram: "https://www.instagram.com/retrouve_ton_perinee",
  instagramHandle: "@retrouve_ton_perinee",
  /** Ouvre directement la conversation Instagram (DM) */
  instagramDm: "https://ig.me/m/retrouve_ton_perinee",
  price: "129 €",
  pricePeriod: "4 semaines",
  /**
   * Lien de prise de RDV (Calendly, Cal.com…). Laisser vide si aucun.
   * S'il est renseigné, un bouton « Réserver un appel » s'affiche
   * à la fin du test.
   */
  bookingUrl: "",
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
};

/** Ce qui est inclus dans l'accompagnement */
export const inclus = [
  {
    title: "Bilan initial en visio",
    desc: "On fait le point sur ta situation, ton sport et tes objectifs.",
  },
  {
    title: "Programme sur-mesure",
    desc: "Des séances guidées en vidéo, construites pour ton sport.",
  },
  {
    title: "Suivi 6 jours sur 7",
    desc: "Tu poses tes questions, on ajuste selon tes progrès.",
  },
  {
    title: "Plateforme en ligne 24h/24",
    desc: "Tu t'entraînes où tu veux, quand tu veux.",
  },
  {
    title: "Motivation jusqu'au résultat",
    desc: "Je t'accompagne jusqu'à ce que tu reprennes ton sport sereinement.",
  },
];

export const temoignages = [
  {
    name: "Sarah, 32 ans",
    text: "Après 2 ans à éviter le running à cause des fuites, je cours maintenant 10 km sans problème. Merci Romane !",
    result: "10 km sans fuites",
  },
  {
    name: "Marie, 28 ans",
    text: "La rééducation classique n'avait rien donné. Avec RTP, j'ai retrouvé ma confiance et je peux faire du crossfit normalement.",
    result: "Crossfit sans protection",
  },
  {
    name: "Julie, 35 ans",
    text: "Post-partum difficile. Aujourd'hui je saute, je cours, je fais du sport comme avant. C'est libérateur !",
    result: "Le sport comme avant",
  },
];

export const faq = [
  {
    q: "Combien ça coûte ?",
    a: `${site.price} pour ${site.pricePeriod}, sans engagement. Tu continues ou tu arrêtes quand tu veux. Pas de frais cachés.`,
  },
  {
    q: "Combien de temps dure l'accompagnement ?",
    a: "Ça dépend de toi. En général, l'accompagnement s'étend sur environ 3 mois, avec un suivi régulier et des ajustements selon tes progrès.",
  },
  {
    q: "C'est vraiment efficace à distance ?",
    a: "Oui. En ligne, on travaille ton périnée dans ton contexte réel : ton sport, ton quotidien, tes mouvements. Et l'échange est permanent : tu peux poser tes questions à tout moment.",
  },
  {
    q: "Quels sports sont concernés ?",
    a: "Tous les sports à impact : running, crossfit, sports collectifs, fitness, danse, tennis… Si tu as des fuites à l'effort, RTP est fait pour toi.",
  },
  {
    q: "Faut-il avoir déjà fait une rééducation périnéale ?",
    a: "Non. RTP s'adresse aussi bien aux femmes qui n'en ont jamais fait qu'à celles qui ont essayé une approche classique sans résultat dans leur sport.",
  },
  {
    q: "En combien de temps je vois des résultats ?",
    a: "Une meilleure conscience de ton périnée arrive en quelques semaines. Les fuites diminuent progressivement. Le vrai objectif : reprendre ton sport sans peur ni retenue. On cherche du solide, pas du rapide.",
  },
  {
    q: "Je ne suis pas sûre que ce soit pour moi.",
    a: "Fais le test en 2 minutes. Romane lit tes réponses et te dit si l'accompagnement est adapté à ta situation.",
  },
];
