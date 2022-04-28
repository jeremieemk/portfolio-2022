module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          darkGrey: "#121212",
          darkGrey2: "#222222",
          midGrey: "#949494",
          textColor: "#d4d4d4",
          backgroundColor: "#101010"
        },
        fontFamily: {
            poppins: 'Poppins',
          },
      },
    },
    plugins: [],
  }