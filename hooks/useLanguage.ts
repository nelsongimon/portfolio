import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

export default function useLanguage() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return {
    language,
    changeLanguage
  }
}