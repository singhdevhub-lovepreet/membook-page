/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'off-black': '#091f17',
        'inky-blue': '#13E39',
        'peacock': '#2f5f5A',
        'true-turquoise': '#20808D',
        'plex-blue': '#2f5f5A',
        'sky': '#20808D',
        'membook-green': '#B8E986',
        'apricot': '#FFD2A6',
        'terra-cotta': '#A84B2F',
      },
      fontFamily: {
        'sans': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'heading': ['Space Grotesk', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'display': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'body': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

