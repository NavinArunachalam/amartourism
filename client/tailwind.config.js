/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,jsx,css}', // Added .css to include your CSS files
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        gloock: ["Gloock", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        segoe: ["Segoe UI", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'travel-blue': 'hsl(var(--travel-blue))',
        'travel-yellow': 'hsl(var(--travel-yellow))',
        'travel-light-blue': 'hsl(var(--travel-light-blue))',
        'travel-dark': 'hsl(var(--travel-dark))',
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        travel: 'var(--shadow-travel)',
      },
      borderRadius: {
        lg: 'var(--radius)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};