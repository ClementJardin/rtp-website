"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

const links = [
  { href: "/#programme", label: "Le programme" },
  { href: "/tarifs", label: "Tarif" },
  { href: "/a-propos", label: "Qui suis-je" },
  { href: "/contact", label: "Contact" },
];

/**
 * Header minimal. `tone="sombre"` quand la page démarre sur un fond vin.
 * Devient opaque (fond sable) dès qu'on scrolle.
 */
export default function Header({ tone = "clair" }: { tone?: "clair" | "sombre" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = tone === "sombre" && !scrolled && !open;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        dark ? "bg-transparent text-sable" : "bg-sable/95 text-vin shadow-[0_1px_0_rgba(90,22,40,0.12)] backdrop-blur"
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Navigation principale">
        <Link href="/" className="titre text-2xl" aria-label="RTP, retour à l'accueil">
          RTP
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-semibold underline-offset-8 hover:underline ${
                pathname === l.href ? "underline" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/test"
            onClick={() => track("cta_click", { from: "header", to: "/test" })}
            className={`rounded-full px-5 py-2.5 font-bold transition-colors ${
              dark ? "bg-poudre text-vin-fonce hover:bg-poudre-pale" : "bg-vin text-sable hover:bg-vin-clair"
            }`}
          >
            Faire le test
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>
    </header>

      {open && (
        <div id="menu-mobile" className="fixed inset-x-0 bottom-0 top-16 z-40 bg-sable md:hidden">
          <div className="wrap flex h-full flex-col pb-8 pt-6">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="titre block py-3 text-4xl text-vin"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/test"
              onClick={() => {
                setOpen(false);
                track("cta_click", { from: "menu_mobile", to: "/test" });
              }}
              className="mt-auto flex min-h-[56px] items-center justify-center rounded-full bg-vin text-lg font-bold text-sable"
            >
              Faire le test (2 min)
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
