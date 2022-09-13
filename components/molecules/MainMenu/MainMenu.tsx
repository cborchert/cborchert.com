import Link from "next/link";
import useTranslation from "../../../utils/hooks/useTranslation";

import styles from "./MainMenu.module.scss";

const dictionary = Object.freeze({
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
});

const links: Array<{ href: string; translationKey: keyof typeof dictionary }> =
  [
    { href: "/", translationKey: "menuHome" },
    { href: "/work", translationKey: "menuWork" },
    { href: "/about", translationKey: "menuAbout" },
    { href: "/availability", translationKey: "menuAvailability" },
  ];

/**
 * Displays the main menu
 */
const MainMenu = () => {
  const t = useTranslation(dictionary);

  return (
    <nav>
      <ul className={styles.MainMenu__list}>
        {links.map(({ href, translationKey }) => (
          <li key={href} className={styles.MainMenu__item}>
            <Link href={href}>
              <a className="is-color-text">{t(translationKey)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
