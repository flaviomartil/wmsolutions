/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3748',
        secondary: '#38A169',
        background: '#EDF2F7',
        highlight: '#48BB78',
        accent: '#1A202C',
        textPrimary: '#2D3748',
        textSecondary: '#4A5568',
        light: '#FFFFFF',
        button: '#38A169'
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-image.jpg')"
      }
    }
  },
  plugins: []
}