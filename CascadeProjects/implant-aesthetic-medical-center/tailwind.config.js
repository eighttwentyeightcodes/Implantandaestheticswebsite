module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medicalBlue: {
          DEFAULT: '#6EC1E4',
          light: '#E3F4FD',
          dark: '#3694C7',
        },
        medicalGold: {
          DEFAULT: '#C69214', // A rich, classic gold
          light: '#F5E8C7',   // A light, creamy gold for backgrounds
          dark: '#A87900',    // A darker gold for hover states and accents
        },
      },
      boxShadow: {
        medical: '0 4px 24px 0 rgb(6, 174, 245)',
      },
    },
  },
  plugins: [],
};
