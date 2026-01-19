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
        // Charte graphique : fond #f8f4ec, bordeaux #b7938a - Contraste renforcé
        bordeaux: {
          DEFAULT: "#b7938a", // Bordeaux principal
          dark: "#8a6d63", // Plus foncé pour les contrastes renforcés
          light: "#c5a99f", // Plus clair pour les variantes
        },
        rose: {
          DEFAULT: "#e8d5c4", // Rose subtil harmonisé avec le bordeaux
          light: "#f2e5d8", // Encore plus clair
          dark: "#d4c0b0", // Légèrement plus foncé
        },
        beige: {
          DEFAULT: "#f8f4ec", // Fond principal
          light: "#fbf9f5", // Très clair
          dark: "#ede6dc", // Légèrement plus foncé
        },
        noir: {
          DEFAULT: "#3d352f", // Texte principal beaucoup plus foncé pour meilleur contraste
          light: "#5a4f47", // Version plus claire mais toujours lisible
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
