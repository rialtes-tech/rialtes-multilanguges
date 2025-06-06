const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      screens: {
        xs: "375px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",     
    "2xl": "1366px",  
    "3xl": "1536px",  
    "4xl": "1728px",  
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      objectPosition: {
        "35-20": "35% 20%",
        "11-20": "11% 20%",
      },
      container: {
        center: true,
        padding: "1rem",
        // You can add custom breakpoints if needed:
        // screens: {
        //   sm: "576px",
        //   md: "768px",
        //   lg: "992px",
        //   xl: "1200px",
        //   "2xl": "1400px",
        //   "3xl": "1920px",
        // },
      },
    },
  },
  plugins: [
  require('@tailwindcss/typography'),
],
  safelist: [
    "ml-[280px]",
    "w-[calc(100%-280px)]",
    "3xl:ml-[280px]",
    "3xl:w-[calc(100%-280px)]",
    "2xl:ml-[240px]",
    "2xl:w-[calc(100%-240px)]",
    "xl:ml-[200px]",
    "xl:w-[calc(100%-200px)]",
    "lg:ml-[150px]",
    "lg:w-[calc(100%-150px)]",
    "md:ml-[100px]",
    "md:w-[calc(100%-100px)]",
  ],
};



// tailwind container code config