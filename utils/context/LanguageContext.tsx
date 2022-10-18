import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import type { Language } from "../../constants/Languages";
import { LANGUAGES } from "../../constants/Languages";

type LanguageContext = {
  language: Language;
  setLanguage: (arg0: any) => any;
  toggleLanguage: () => void;
};

type Props = {
  children: React.ReactNode;
};

/**
 * A context for switching between languages
 */
const LanguageContext = createContext<LanguageContext>({
  language: LANGUAGES.EN,
  setLanguage: () => {},
  toggleLanguage: () => {},
});

const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = useCallback(() => {
    if (language === LANGUAGES.EN) {
      setLanguage(LANGUAGES.FR);
    } else {
      setLanguage(LANGUAGES.EN);
    }
  }, [language]);

  useEffect(() => {
    const queriedLanguage = new URLSearchParams(window.location.search).get(
      "lang"
    );
    const preferredLanguage = window.navigator.language;

    let newLanguage: Language = LANGUAGES.EN;

    // the queried language trumps everything
    // TODO: Object.values(LANGUAGES).includes(queriedLanguage) throws an error. Why?
    if (queriedLanguage === LANGUAGES.FR || queriedLanguage === LANGUAGES.EN) {
      newLanguage = queriedLanguage;
    } else {
      // if the user prefers French, we'll use that
      // otherwise we'll use English
      if (preferredLanguage.startsWith(LANGUAGES.FR)) {
        newLanguage = LANGUAGES.FR;
      }
    }

    setLanguage(newLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Get the value of the LanguageContext
 */
function useLanguageContext(): LanguageContext {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
}

export { LanguageProvider, useLanguageContext, LANGUAGES };
