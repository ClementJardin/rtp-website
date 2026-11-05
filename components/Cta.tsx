"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { track } from "@vercel/analytics";

type Variant = "vin" | "poudre" | "sable" | "contour" | "contour-clair";

const styles: Record<Variant, string> = {
  vin: "bg-vin text-sable hover:bg-vin-clair",
  poudre: "bg-poudre text-vin-fonce hover:bg-poudre-pale",
  sable: "bg-sable text-vin hover:bg-white",
  contour: "border-2 border-vin text-vin hover:bg-vin hover:text-sable",
  "contour-clair": "border-2 border-poudre/60 text-sable hover:border-poudre hover:bg-white/5",
};

interface CtaProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Emplacement du bouton, remonté dans Vercel Analytics */
  from: string;
  external?: boolean;
}

/** Bouton d'action unique du site, avec suivi analytics */
export default function Cta({
  href,
  children,
  variant = "vin",
  className = "",
  from,
  external,
}: CtaProps) {
  const cls = `inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[1.05rem] font-bold transition-colors duration-200 active:scale-[0.98] ${styles[variant]} ${className}`;
  const onClick = () => track("cta_click", { from, to: href });

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
