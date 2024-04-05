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
    extend: {},
    colors: {
      green: {
        paliar: "#738a5d",
      },
      greenLight: {
        paliar: "#dbecdf",
      },
      brown: {
        paliar: "#766b6a",
      },
    },
  },
  plugins: [],
};
