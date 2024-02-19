/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "501px",
        md: "701px",
        lg: "861px",
      },
      colors: {
        primary: "var(--colors-primary)",
        background: "var(--colors-background)",
        foreground: "var(--colors-foreground)",
        ["text-primary"]: "var(--colors-text-primary)",
        ["text-secondary"]: "var(--colors-text-secondary)",
        ["green"]: "var(--colors-green)",
        ["border"]: "var(--colors-border)",
      },
    },
  },
  plugins: [],
};
