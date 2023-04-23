import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../public/en/main.json";
import esTranslations from "../public/es/main.json";

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
