module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      primary: "#1C3682",
      secundary: "#AA5042",
      gray: {
        200: "#2C2C2C",
        600: "#141414",
        700: "#0A0A0A",
      },
      white: "#ffffff"
    },
    fontFamily: {
      'title': ['Baron Neue', 'arial', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4.25rem',
      '7xl': '5rem',
    },
    skew: {
      '5': '5deg',
    },
    extend: {
     

    },
  },
  plugins: [],
}