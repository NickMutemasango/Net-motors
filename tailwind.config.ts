import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        Benz:"url('../public/images/cle.svg')",
        Ben:"url('../public/images/mid.svg')",
        Bee:"url('../public/images/small.svg')",
      },
      colors:{
        red: "#990303",
        yellow:"#F0C74B",
        lightred:"#C46C6A",
        grey:"#EFEBEB",
        lightered:"#D09191"
      }
    },
  },
  plugins: [],
};
export default config;
