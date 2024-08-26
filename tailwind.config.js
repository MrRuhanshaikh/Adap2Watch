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
      // mq1825: {
      //   raw: "screen and (max-width: 1825px)",
      // },
      // mq1700: {
      //   raw: "screen and (max-width: 1700px)",
      // },
      // mq1575: {
      //   raw: "screen and (max-width: 1575px)",
      // },
      // mq1350: {
      //   raw: "screen and (max-width: 1350px)",
      // },
      // mq1325: {
      //   raw: "screen and (max-width: 1325px)",
      // },
      // mq1250: {
      //   raw: "screen and (max-width: 1250px)",
      // },
      // mq925: {
      //   raw: "screen and (max-width: 925px)",
      // },
      // mq900: {
      //   raw: "screen and (max-width: 900px)",
      // },
      // mq825: {
      //   raw: "screen and (max-width: 825px)",
      // },
      // mq450: {
      //   raw: "screen and (max-width: 450px)",
      // },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
