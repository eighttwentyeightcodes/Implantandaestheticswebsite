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
          DEFAULT: '#FFD700',
          light: '#FFF8DC',
          dark: '#FFC300',
        },
      },
      boxShadow: {
        medical: '0 4px 24px 0 rgba(110, 193, 228, 0.15)',
      },
    },
  },
  plugins: [],
};
