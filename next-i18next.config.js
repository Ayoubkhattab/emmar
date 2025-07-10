// lib/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "../public/locales//ar/common.json";
import en from "../public/locales/en/common.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    fallbackLng: "ar",
    supportedLngs: ["ar", "en"],
    lng: "ar",
    resources: {
      ar: { common: ar },
      en: { common: en },
    },
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
