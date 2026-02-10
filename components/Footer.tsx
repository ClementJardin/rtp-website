"use client";

import Link from "next/link";
import { FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";
import { track } from "@vercel/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bordeaux-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">RTP</h3>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Retrouve Ton Périnée - Accompagnement personnalisé en rééducation périnéale pour femmes sportives.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/retrouve_ton_perinee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => track("external_link_click", { platform: "instagram", location: "footer" })}
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="mailto:romane.lemarie.rtp@gmail.com"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => track("email_click", { location: "footer" })}
                aria-label="Email"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  onClick={() => track("navigation_click", { location: "footer", destination: "home" })}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  onClick={() => track("navigation_click", { location: "footer", destination: "a_propos" })}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  onClick={() => track("navigation_click", { location: "footer", destination: "tarifs" })}
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  onClick={() => track("navigation_click", { location: "footer", destination: "contact" })}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Informations légales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Informations</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <p className="font-semibold text-white">Romane Lemarié</p>
                <p>Kinésithérapeute</p>
              </li>
              <li>
                <a
                  href="mailto:romane.lemarie.rtp@gmail.com"
                  className="hover:text-white transition-colors"
                  onClick={() => track("email_click", { location: "footer_contact" })}
                >
                  romane.lemarie.rtp@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} RTP - Retrouve Ton Périnée. Tous droits réservés.
            </p>
            <p className="flex items-center gap-2">
              Fait avec <FaHeart className="text-rose text-xs" /> pour les femmes sportives
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
