import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en/translation.json";
import translationJP from "../locales/jp/translation.json";

//the translations
const resources = {
  en: {
    translation: translationEN,
  },
  jp: {
    translation: translationJP,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: true,
});

export default i18n;
