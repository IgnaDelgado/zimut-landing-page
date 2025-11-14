"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Language, translations, TranslationContent } from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  content: TranslationContent;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("zimut-lang")) as Language | null;
    if (stored && stored !== language) {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("zimut-lang", language);
      document.documentElement.lang = language === "en" ? "en" : "es";
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      content: translations[language],
      setLanguage: (lang: Language) => setLanguageState(lang)
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
