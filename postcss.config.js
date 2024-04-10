if (process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {},
      "rucksack-css": {},
    },
  };
} else {
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "rucksack-css": {},
    },
  };
}
