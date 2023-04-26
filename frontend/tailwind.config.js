/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter :['Inter'],
        times:['Times New Roman'],
        cairo:['Cairo'],
        openSan:["'Open Sans'",]
      },
      animation:{
        'map-animation': 'map-animations 1000ms infinite ease',
        'cardSwing' :'cardSwing 250ms '
      },
      boxShadow:{
        'earn-credit-shadow':'10px 10px 5px -3px rgba(0,0,0,0.20)'
      }
    },
  },
  plugins: [],
}