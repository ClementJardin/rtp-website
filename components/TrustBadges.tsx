"use client";

import { FaShieldAlt, FaCertificate, FaUserCheck, FaHeart } from "react-icons/fa";

interface Badge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const badges: Badge[] = [
  {
    icon: <FaCertificate className="text-3xl text-bordeaux" />,
    title: "Kinésithérapeute diplômée",
    description: "Formation spécialisée en rééducation périnéale",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-bordeaux" />,
    title: "Accompagnement personnalisé",
    description: "Programme sur-mesure adapté à ta situation",
  },
  {
    icon: <FaUserCheck className="text-3xl text-bordeaux" />,
    title: "Suivi régulier",
    description: "Disponible 6 jours sur 7 pour t'accompagner",
  },
  {
    icon: <FaHeart className="text-3xl text-bordeaux" />,
    title: "Approche bienveillante",
    description: "Sans tabou, directe et motivante",
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-rose/20"
        >
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex items-center justify-center w-16 h-16 bg-rose/10 rounded-full">
              {badge.icon}
            </div>
            <h3 className="font-bold text-bordeaux text-lg">{badge.title}</h3>
            <p className="text-noir text-sm leading-relaxed">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
