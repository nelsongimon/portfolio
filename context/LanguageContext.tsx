"use client";

import { createContext, useEffect, useState } from "react";

type AvailableLanguages = "en" | "es";

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

  const storedLanguage = "es";
  // const storedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") : "en";
  const [language, setLanguage] = useState<AvailableLanguages>(storedLanguage as AvailableLanguages);
  const changeLanguage = (language: AvailableLanguages) => {
    setLanguage(language);
  }

  useEffect(() => {
    // localStorage.setItem("language", language);
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
