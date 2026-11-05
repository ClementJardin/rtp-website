import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";
import "./globals.css";

const brico = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-brico",
  display: "swap",
});

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: {
    default: "RTP – Reprends ton sport sans fuites urinaires | Romane, kiné",
    template: "%s | RTP – Retrouve Ton Périnée",
  },
  description:
    "Fuites urinaires au sport ? Accompagnement 100 % en ligne et personnalisé par Romane, kinésithérapeute, pour les sportives et le post-partum. Sans toucher vaginal.",
  keywords: [
    "fuites urinaires sport",
    "rééducation périnéale en ligne",
    "périnée post-partum",
    "incontinence à l'effort",
    "kinésithérapeute périnée",
    "rééducation abdominale",
  ],
  openGraph: {
    title: "RTP – Reprends ton sport sans fuites",
    description:
      "Je t'aide à reprendre ton sport sans fuites urinaires grâce à un accompagnement 100 % personnalisé.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/images/romane.jpg", width: 2048, height: 2048, alt: "Romane Lemarié, kinésithérapeute" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#5A1628",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physiotherapy",
  name: site.name,
  description:
    "Accompagnement en ligne en rééducation périnéale et abdominale pour femmes sportives et post-partum.",
  email: site.email,
  sameAs: [site.instagram],
  founder: { "@type": "Person", name: site.coach, jobTitle: "Kinésithérapeute" },
  areaServed: "FR",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={brico.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
