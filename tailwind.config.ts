import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charte graphique sportive : couleurs dynamiques mais moins agressives
        bordeaux: {
          DEFAULT: "#B85C5C", // Bordeaux chaleureux, moins rouge sang
          dark: "#9A4545", // Plus foncé pour les contrastes
          light: "#D47A7A", // Plus clair pour les variantes
        },
        rose: {
          DEFAULT: "#E8B4B4", // Rose doux et chaleureux
          light: "#F2D0D0", // Encore plus clair
          dark: "#D99A9A", // Légèrement plus foncé
        },
        beige: {
          DEFAULT: "#F5F0E8", // Fond principal légèrement plus contrasté
          light: "#FAF7F2", // Très clair
          dark: "#E8E0D4", // Légèrement plus foncé
        },
        noir: {
          DEFAULT: "#2C2418", // Texte principal très foncé pour contraste maximum
          light: "#4A3F2F", // Version plus claire mais toujours lisible
        },
        accent: {
          DEFAULT: "#E67E5A", // Orange corail doux pour les accents dynamiques
          dark: "#C85D3A", // Plus foncé
          light: "#F29A7A", // Plus clair
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
