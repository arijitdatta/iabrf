import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENGLISH from "./assets/translations/en.json";
import BENGALI from "./assets/translations/bn.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { ...ENGLISH },
    bn: { ...BENGALI },
  },
  lng: "bn",
});