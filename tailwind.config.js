/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 🎨 Використовуємо CSS змінну для шрифту
        manrope: "var(--font-manrope)",
      },
      colors: {
        // 🎨 Custom colors для консистентності по всьому проекту
        primary: "#01F0D0",
        secondary: "#072635",
        accent: "#E66FD2",
      },
      animation: {
        // 🎬 Гладкі анімації для UX
        fadeIn: "fadeIn 0.3s ease-in",
        slideDown: "slideDown 0.3s ease-out",
      },
      keyframes: {
        // 📐 Визначення анімацій
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
};
