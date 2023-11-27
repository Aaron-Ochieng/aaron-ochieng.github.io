/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      allura: ["Allura-Regular", "Allura-Regular"],
      scriptina: ["Scriptina-Regular","Scriptina-Regular"],
      times: ["Times-New-Roman","Times-New-Roman"],
    },
    extend: {},
  },
  plugins: [],
}

