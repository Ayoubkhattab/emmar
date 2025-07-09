/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en"],
    localeDetection: true, // اكتشاف لغة الجهاز تلقائياً
  },
  react: {
    useSuspense: false,
  },
};
