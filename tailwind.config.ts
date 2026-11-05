import type { Config } from "tailwindcss";

/**
 * Système de design RTP
 * - vin     : bordeaux profond, couleur de marque (fonds forts, CTA)
 * - poudre  : rose poudré (accents sur fond vin, états sélectionnés)
 * - sable   : beige clair rosé (fond principal)
 * - encre   : noir (texte, section contraste)
 */
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vin: {
          DEFAULT: "#5A1628",
          clair: "#7A2238",
          fonce: "#3F0E1C",
        },
        poudre: {
          DEFAULT: "#EBC9C3",
          pale: "#F5E1DC",
        },
        sable: {
          DEFAULT: "#F7EFEA",
          fonce: "#EEE2DA",
        },
        encre: {
          DEFAULT: "#1A1012",
          doux: "#4D3B3F",
        },
      },
      fontFamily: {
        sans: ["var(--font-brico)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
