/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cargo-blue':'rgba(52, 71, 171, 0.90)',
        'cargo-gray':'rgba(108, 108, 108, 1)',
        'cargo-gradient':'linear-gradient(90deg, rgba(0, 0, 0, 0.70) -19.7%, rgba(0, 0, 0, 0.00) 59.66%)',
        'cargo-border':'#495AB4;'
      }
    },backgroundImage:{
      'transportOK':"url('./src/img/Group81.png')",
      'arrow':"url('./src/img/Arrow5.png')",
    },
    boxShadow:{
      'cargo-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      'cargo-card-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'
    },
    transitionProperty:{
      'cargo-transition':'all 0.3s cubic-bezier(.25,.8,.25,1);'
    }
  },
  plugins: [],
}

