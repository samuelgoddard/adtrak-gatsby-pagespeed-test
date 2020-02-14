module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px",
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
      '5xl': '2.6rem',
      '6xl': '3rem',
      '7xl': '3.5rem',
      '8xl': '4rem',
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      grey: {
        light: "#F9F9F9",
        default: "#F5F5F5",
        medium: "#dbd5d5",
        dark: "#AAB2C0",
      },
      primary: {
        light: "#FF8368",
        default: "#FF6B4A",
        dark: "#CA553B",
        filtered: "#E8654A",
      },
      secondary: {
        light: "#ABE8E8",
        default: "#3B5CC4",
        dark: "#12284C",
      },
    },
    extend: {
      spacing: {
        '36': '9.75rem',
        '76': '20rem',
        '30px': '30px',
        '15px': '20px',
        '5px': '10px',
      },
      fontFamily: {
        display: ["Mont, '-apple-system', 'BlinkMacSystemFont', sans-serif"],
        sans: ["AribauGrotesk, '-apple-system', 'BlinkMacSystemFont', sans-serif"],
        email: ['Helvetica', 'Arial', 'sans-serif']
      },
      opacity: {
        '85': .85,
      }
    },
  },
  plugins: [
    require("tailwindcss-transition")({
      standard: "all .3s ease",
    }),
  ],
  corePlugins: {
    container: false,
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    margin: ['responsive', 'hover', 'focus', 'group-hover'],
    padding: ['responsive', 'hover', 'focus', 'group-hover'],
  }
}
