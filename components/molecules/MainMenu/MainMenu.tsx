import Link from "next/link";
import useTranslation from "../../../utils/hooks/useTranslation";

const dictionary = {
  menuHome: {
    en: "Home",
    fr: "Accueil",
  },
  menuWork: {
    en: "Work",
    fr: "Portfolio",
  },
  menuAbout: {
    en: "About",
    fr: "À propos",
  },
  menuAvailability: {
    en: "Availability",
    fr: "Disponibilité",
  },
};

/**
 * Displays the main menu
 */
const MainMenu = () => {
  const t = useTranslation(dictionary);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">{t("menuHome")}</Link>
        </li>
        <li>
          <Link href="/work">{t("menuWork")}</Link>
        </li>
        <li>
          <Link href="/about">{t("menuAbout")}</Link>
        </li>
        <li>
          <Link href="/availability">{t("menuAvailability")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
