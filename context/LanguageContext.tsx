"use client";

import { createContext, useEffect, useState } from "react";

export type AvailableLanguages = "en" | "es";

type LanguageContextType = {
  language: AvailableLanguages;
  changeLanguage: (language: AvailableLanguages) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  changeLanguage: () => { },
});

export default function LanguageProvider({
  children
}: { children: React.ReactNode }) {


  const initialLanguage = localStorage.getItem("selectedLanguage") || "es";

  const [language, setLanguage] = useState<AvailableLanguages>(initialLanguage as AvailableLanguages);
  // const [language, setLanguage] = useState<AvailableLanguages>("es");

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   const selectedLanguage = localStorage.getItem("selectedLanguage");
    //   if (selectedLanguage) {
    //     setLanguage(selectedLanguage as AvailableLanguages);
    //   } else {
    //     localStorage.setItem("selectedLanguage", "es");
    //   }
    // }
  }, []);

  const changeLanguage = (language: AvailableLanguages) => {
    setLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  }

  const data: LanguageContextType = {
    language,
    changeLanguage
  }

  return (
    <LanguageContext.Provider value={data}>
      {children}
    </LanguageContext.Provider>
  );
}
