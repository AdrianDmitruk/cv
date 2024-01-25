import i18n, { ResourceKey, InitOptions } from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

interface Resources {
  [key: string]: {
    translation: ResourceKey;
  };
}

const resources: Resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

const options: InitOptions = {
  fallbackLng: "en",
  debug: true,
  detection: {
    order: ["queryString", "cookie"],
    caches: ["cookie"],
  },
  interpolation: {
    escapeValue: false,
  },
  resources,
  lng: "en",
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
