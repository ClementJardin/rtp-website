"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

/**
 * Bouton collé en bas sur mobile. Apparaît une fois le premier écran
 * dépassé (le hero a déjà son propre appel à l'action).
 */
export default function StickyCta({ label = "Faire le test (2 min)" }: { label?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Masqué quand un autre bouton « test » est déjà à l'écran (zones data-cta-zone)
    const zones = new Set<Element>();
    const update = () => {
      zones.forEach((z) => !document.contains(z) && zones.delete(z));
      setVisible(window.scrollY > window.innerHeight * 0.75 && zones.size === 0);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? zones.add(e.target) : zones.delete(e.target)));
      update();
    });
    const observe = () => document.querySelectorAll("[data-cta-zone]").forEach((el) => io.observe(el));
    observe();
    // La checklist ajoute sa zone dynamiquement
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div
      className={`pb-safe fixed inset-x-0 bottom-0 z-30 px-4 pt-3 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <Link
        href="/test"
        tabIndex={visible ? 0 : -1}
        onClick={() => track("cta_click", { from: "sticky_mobile", to: "/test" })}
        className="flex min-h-[56px] items-center justify-center rounded-full bg-vin text-lg font-bold text-sable shadow-[0_10px_30px_-8px_rgba(63,14,28,0.6)]"
      >
        {label}
      </Link>
    </div>
  );
}
