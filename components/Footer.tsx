import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-encre pb-28 pt-14 text-sable/80 md:pb-14">
      <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="titre text-3xl text-sable">RTP</p>
          <p className="mt-2 max-w-xs">
            Retrouve Ton Périnée. L&apos;accompagnement en ligne des sportives qui refusent d&apos;arrêter.
          </p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="space-y-2">
            <li><Link className="hover:text-sable" href="/test">Faire le test</Link></li>
            <li><Link className="hover:text-sable" href="/#programme">Le programme</Link></li>
            <li><Link className="hover:text-sable" href="/tarifs">Tarif</Link></li>
            <li><Link className="hover:text-sable" href="/a-propos">Qui suis-je</Link></li>
            <li><Link className="hover:text-sable" href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="space-y-2">
          <p className="font-semibold text-sable">{site.coach}</p>
          <p>Kinésithérapeute</p>
          <a className="block break-all hover:text-sable" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-sable"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram aria-hidden /> {site.instagramHandle}
          </a>
        </div>
      </div>
      <p className="wrap mt-12 text-sm text-sable/50">
        © {new Date().getFullYear()} RTP – Retrouve Ton Périnée
      </p>
    </footer>
  );
}
