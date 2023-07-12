"use client";

import { createContext, useEffect, useState } from "react";

export type AvailableLanguages = "en" | "es";

type LanguageContextType = {
  language: AvailableLanguages;
  changeLanguage: (language: AvailableLanguages) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  changeLanguage: () => { }
});

export default function LanguageProvider({
  children
}: { children: React.ReactNode }) {

  // const storedLanguage = localStorage.getItem("language") || "es";
  // const [language, setLanguage] = useState<AvailableLanguages>(storedLanguage as AvailableLanguages);
  const [language, setLanguage] = useState<AvailableLanguages>(() => {
    if (typeof window !== undefined && localStorage.getItem("language")) {
      return localStorage.getItem("language") as AvailableLanguages;
    }
    return "es";
  });
  const changeLanguage = (language: AvailableLanguages) => {
    setLanguage(language);
  }

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

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
