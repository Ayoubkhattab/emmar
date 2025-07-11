// next-i18next.config.js

const path = require("path");

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en"],
  },
  localePath: path.resolve("./public/locales"),
};
