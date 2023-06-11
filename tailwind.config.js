module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./comps/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: "#231800",
        "coffee-light": "#38290A",
        gold: "#E0BF62",
        "esc-black": "#111111",
        "dark-red": "#DB2427",
        "dark-gold": "#373128",
        "dgency-purple": "#1A082A",
        "dgency-light": "#CCA8EC",
        "light-gold": "#B4A27E",
        "dark-coffee": "#232323",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        circle: "circle",
        squeare: "square",
        roman: "upper-roman",
      },
      screens: {
        "3xl": "1600px",
        "4xl": "2000px",
        "5xl": "2380px",
      },
    },

    gradients: (theme) => ({
      // Array definition (defaults to linear gradients).
      topaz: ["30deg", theme("colors.orange.500"), theme("colors.pink.400")],
      "topaz-dark": [
        "30deg",
        theme("colors.orange.700"),
        theme("colors.pink.600"),
      ],
      emerald: [
        "to right",
        theme("colors.green.400"),
        theme("colors.teal.500"),
      ],
      golden: ["to right", "#CA9342", "#E0BF62"],
      "golden-alt": ["to right", "#E0BF62", "#CA9342"],
      relay: ["to top left", "#3A1C71", "#D76D77", "#FFAF7B"],

      // Object definition.
      "mono-circle": {
        type: "radial",
        colors: ["circle", "#CCC", "#000"],
      },
    }),
  },
  variants: {
    gradients: ["responsive", "hover"],
  },
  plugins: [
    require("tailwindcss-plugins/gradients"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
