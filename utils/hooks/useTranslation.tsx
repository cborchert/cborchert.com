import React from "react";
import { useLanguageContext } from "../context/LanguageContext";

type Dictionary = {
  [k: string]: {
    en: string;
    fr: string;
  };
};

/**
 * Returns a function t which takes a key and returns the translation
 */
const useTranslation = (dictionary: Dictionary = {}) => {
  const { language } = useLanguageContext();
  // eslint-disable-next-line react/display-name
  return (key: string, plaintext?: boolean) => {
    const translation = dictionary[key]?.[language] || "";
    if (plaintext) {
      return translation;
    }
    return <span dangerouslySetInnerHTML={{ __html: translation }} />;
  };
};

export default useTranslation;
