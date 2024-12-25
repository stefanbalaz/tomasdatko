const plugin = require("tailwindcss/plugin");

// Centralized font families with styles and weights
const fontFamilies = {
  strenuous: {
    familyName: "Strenuous",
    folderName: "Strenuous",
    fileName: "strenuous.otf",
    styles: [{ weight: "100 900", style: "normal" }],
    format: "opentype",
  },
  cervoThin: {
    familyName: "CervoThin",
    folderName: "Cervo",
    fileName: "CervoNeue-Thin.otf",
    styles: [{ weight: "100", style: "normal" }],
    format: "opentype",
  },
  cervoRegular: {
    familyName: "CervoRegular",
    folderName: "Cervo",
    fileName: "CervoNeue-Regular.otf",
    styles: [{ weight: "100 900", style: "normal" }],
    format: "opentype",
  },
  cervoBold: {
    familyName: "CervoBold",
    folderName: "Cervo",
    fileName: "CervoNeue-Bold.otf",
    styles: [{ weight: "100 900", style: "normal" }],
    format: "opentype",
  },
  dancingscript: {
    familyName: "DancingScript",
    folderName: "Dancing_Script",
    fileName: "DancingScript-VariableFont_wght.ttf",
    styles: [{ weight: "100 900", style: "normal" }],
    format: "truetype",
  },
  caveat: {
    familyName: "Caveat",
    folderName: "Caveat",
    fileName: "Caveat-VariableFont_wght.ttf",
    styles: [
      { weight: "100 900", style: "normal" },
      { weight: "100 900", style: "italic" },
    ],
    format: "truetype",
  },
  hanoble: {
    familyName: "Hanoble",
    folderName: "Hanoble",
    fileName: "Hanoble.otf",
    styles: [{ weight: "100 900", style: "normal" }],
    format: "opentype",
  },
  cinzel: {
    familyName: "Cinzel",
    folderName: "Cinzel",
    fileName: "Cinzel-VariableFont_wght.ttf",
    styles: [{ weight: "100 900", style: "normal" }],
    format: "truetype",
  },
  manrope: {
    familyName: "Manrope",
    folderName: "Manrope",
    fileName: "Manrope-VariableFont_wght.ttf",
    styles: [{ weight: "100 900", style: "normal" }],
    format: "truetype",
  },
};

// Define the base list of fonts
const baseFonts = ["font-sans", "font-mono", "font-serif"];

// Generate the safelist classes for font families from the fontFamilies object
const fontSafelist = Object.keys(fontFamilies).map((font) => `font-${font}`);

// Combine the base fonts with the dynamically generated safelist
const safelist = [...baseFonts, ...fontSafelist];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        "0": "0",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
      },
      colors: {
        primary: {
          light: "#f1f7f9", //CHECKED
          default: "#6899a3", //CHECKED #E7F0F2
          dark: "#0f4752", //CHECKED "#c7dce0" // Button
        },
        secondary: {
          light: "#d6d6d6", //CHECKED
          default: "#5B5B5B", //CHECKED
          dark: "#1e1e1e",
        },
        tertiary: {
          light: "#fff1f1", //CHECKED
          default: "#d84343",
          dark: "#880000",
        },
        neutral: {
          light: "#f5f5f5", //CHECKED
          dark: "#2d3748",
        },
        /*    textColor: "#4f4f4f", */
        textColor: "#5B5B5B",
      },
      fontFamily: Object.fromEntries(
        Object.entries(fontFamilies).map(([key, value]) => [
          key,
          [value.familyName],
        ])
      ),
    },
  },

  darkMode: "class",
  safelist,

  plugins: [
    require("tw-elements/plugin.cjs"),
    plugin(function ({
      addBase,
      theme,
    }: {
      addBase: any;
      theme: (key: string) => any;
    }) {
      // Generate the @font-face rules dynamically from the fontFamilies object
      const fontFaces: any = [];

      Object.values(fontFamilies).forEach((font) => {
        font.styles.forEach(({ weight, style }) => {
          fontFaces.push({
            fontFamily: font.familyName,
            fontStyle: style,
            fontWeight: weight,
            src: `url("/fonts/${font.folderName}/${font.fileName}") format("${font.format}")`,
            fontDisplay: "swap",
          });
        });
        // console.log(fontFaces);
      });

      addBase({
        ":root": {
          "--primary-light": theme("colors.primary.light"),
          "--primary-default": theme("colors.primary.default"),
          "--primary-dark": theme("colors.primary.dark"),
          "--secondary-light": theme("colors.secondary.light"),
          "--secondary-default": theme("colors.secondary.default"),
          "--secondary-dark": theme("colors.secondary.dark"),
          "--tertiary-light": theme("colors.tertiary.light"),
          "--tertiary-default": theme("colors.tertiary.default"),
          "--tertiary-dark": theme("colors.tertiary.dark"),
          "--neutral-light": theme("colors.neutral.light"),
          "--neutral-dark": theme("colors.neutral.dark"),
          "--textColor": theme("colors.textColor"),
        },
      });

      addBase({
        "@font-face": fontFaces,
      });
    }),
  ],
};
