// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neugray: {
          bg: '#e0e5ec',
          text: '#2d3748',
          accent: '#4299e1',
        },
      },
      boxShadow: {
        'neumorph': '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
        'neumorph-sm': '5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff',
        'neumorph-pressed': 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff',
      }
    },
  },
  plugins: [],
}