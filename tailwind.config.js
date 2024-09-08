/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-08": "#141414",
        "black-06": "#0f0f0f",
        "grey-60": "#999",
        "black-15": "#262626",
        "black-10": "#1a1a1a",
        "absolute-white": "#fff",
        "red-45": "#e60000",
        red: {
          "100": "#ff2626",
          "200": "rgba(229, 0, 0, 0)",
        },
        darkslategray: "#474747",
        dimgray: {
          "100": "#595959",
          "200": "#525252",
          "300": "#4d4d4d",
        },
        "black-20": "#333",
        "black-12": "#1f1f1f",
        "grey-75": "#bfbfbf",
        gray: "rgba(0, 0, 0, 0.6)",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        archivo: "Archivo",
      },
      borderRadius: {
        "81xl": "100px",
        "32xl": "51px",
        "48xl": "67px",
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      base: "16px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "4xl": "23px",
      "11xl": "30px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      "21xl": "40px",
      "13xl": "32px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      'above-350px':'350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  corePlugins: {
    preflight: false,
  },
};
