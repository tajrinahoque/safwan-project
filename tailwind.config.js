/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
          colors:{
        'primary':"#00413D",
        'secondary':"#E5745D",
      },
      fontFamily:{
        "jost":["Jost", "sans-serif"],
        "vol":["Vollkorn", "serif"]

      },
      maxWidth:{
        "container":"1170px"
      }

    },
  },
  plugins: [
     require('flowbite/plugin')
  ],
}
 