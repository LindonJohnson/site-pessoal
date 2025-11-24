import type { Config } from "tailwindcss";

const config: Config = {
  // ✅ ESSENCIAL: Ativa o dark mode via classe
  darkMode: "class",
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      // Adiciona variável CSS personalizada para transição
      backgroundColor: {
        'theme-transition': 'var(--theme-bg)',
      },
      textColor: {
        'theme-transition': 'var(--theme-text)',
      },
      
      // Cores customizadas (opcional)
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      
      // Animações suaves para transição dark/light
      transitionProperty: {
        'theme': 'background-color, color, border-color',
      },
      transitionDuration: {
        'theme': '300ms',
      },
    },
  },
  
  plugins: [],
};

export default config;

// ============================================
// 📋 COMO USAR NO SEU CSS/COMPONENTES:
// ============================================
//
// Opção 1 - Classes Tailwind normais:
// <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
//
// Opção 2 - Com transição suave:
// <div className="bg-white dark:bg-gray-900 transition-theme duration-theme">
//
// Opção 3 - No globals.css com variáveis CSS:
// @layer base {
//   :root {
//     --theme-bg: #ffffff;
//     --theme-text: #000000;
//   }
//   
//   .dark {
//     --theme-bg: #111827;
//     --theme-text: #ffffff;
//   }
// }
//
// ============================================