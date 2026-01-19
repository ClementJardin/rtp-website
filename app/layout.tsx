import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RTP - Retrouve Ton Périnée | Romane Kinésithérapeute",
  description:
    "Accompagnement 100% en ligne et personnalisé pour reprendre ton sport sans fuites urinaires. Programme RTP pour femmes sportives et post-partum.",
  keywords: [
    "rééducation périnéale",
    "fuites urinaires",
    "sport post-partum",
    "kinésithérapeute en ligne",
    "rééducation abdominale",
  ],
  openGraph: {
    title: "RTP - Retrouve Ton Périnée",
    description:
      "Je t'aide à reprendre ton sport sans fuites urinaires grâce à un accompagnement 100% personnalisé.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
