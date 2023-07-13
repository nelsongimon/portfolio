"use client";

import { createContext, useState } from "react";

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

  const [language, setLanguage] = useState<AvailableLanguages>("es");

  const changeLanguage = (language: AvailableLanguages) => {
    setLanguage(language);
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
