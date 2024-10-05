/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "image-2": "url('/assets/images/background/bg2.png')",
        "image-1": "url('/assets/images/background/bg1.png')",
        "contact": "url('/assets/images/background/contact.png')",
        "rectangle": "url('/assets/images/background/rectangle.png')",
        "project": "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/images/background/project-title.png')",
      },
      width: {
        'full-body': 'calc(100% + 3rem)',
      },
      fontFamily: {
        "DFVN-1": ['DFVNFont1', 'sans-serif'],
        "DFVN-2": ['DFVNFont2', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
