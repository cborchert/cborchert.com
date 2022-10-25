import {
  LANGUAGES,
  useLanguageContext,
} from "../../../utils/context/LanguageContext";
import En from "../../atoms/En/En";
import Fr from "../../atoms/Fr/Fr";
import Flag from "../Flag/Flag";

import styles from "./LanguageToggle.module.scss";

const LanguageToggle = () => {
  const { toggleLanguage, language } = useLanguageContext();

  return (
    <button
      onClick={toggleLanguage}
      className={styles.LanguageToggle}
      aria-label={
        language === LANGUAGES.EN
          ? "Switch from English to French"
          : "Changer la langue vers l'anglais"
      }
    >
      <Flag isUsa={language === LANGUAGES.EN} />
      <div className={styles.LanguageToggle__info}>
        <En>
          &rarr; <em>FR</em>
        </En>
        <Fr>
          &rarr; <em>EN</em>
        </Fr>
      </div>
    </button>
  );
};

export default LanguageToggle;
