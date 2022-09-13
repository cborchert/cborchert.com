import { LANGUAGES } from "../../../constants/Languages";
import type { Language } from "../../../constants/Languages";
import { useLanguageContext } from "../../../utils/context/LanguageContext";

type Props = {
  language?: Language;
  children: React.ReactNode;
};

/**
 * Displays the child components ONLY if the current language is the same as the language prop
 */
const Localized = ({ language = LANGUAGES.EN, children }: Props) => {
  const { language: currentLanguage } = useLanguageContext();
  if (language === currentLanguage) return <>{children}</>;
  return null;
};

export default Localized;
