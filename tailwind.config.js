/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {

      keyframes: {
        order: {
          'from': { "margin-bottom":"0px",'opacity':"0"},
          'to': {  "margin-bottom":"33%",'opacity':"1"},
        },
        cashback: {
          'from': { "margin-bottom":"0px",'opacity':"0"},
          'to': {  "margin-bottom":"21%",'opacity':"1"},
        },
        credit: {
          'from': { "margin-bottom":"0px",'opacity':"0"},
          'to': {  "margin-bottom":"7%",'opacity':"1"},
        }
      }
    },
  },
  plugins: [],
}

