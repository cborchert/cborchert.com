import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import useTranslation from "../../../utils/hooks/useTranslation";

import LanguageToggle from "../LanguageToggle/LanguageToggle";
import En from "../../atoms/En/En";
import Fr from "../../atoms/Fr/Fr";

import styles from "./MainMenu.module.scss";

const dictionary = Object.freeze({
  menuHome: {
    en: "Home",
    fr: "Accueil",
  },
  menuWork: {
    en: "Portfolio",
    fr: "Portfolio",
  },
  menuRole: {
    en: "Current Role",
    fr: "Rôle actuel",
  },
  menuStack: {
    en: "Current Stack",
    fr: "Stack Actuel",
  },
  menuAvailability: {
    en: "Availability",
    fr: "Disponibilité",
  },
});

const links: Array<{ href: string; translationKey: keyof typeof dictionary }> =
  [
    { href: "/#home", translationKey: "menuHome" },
    { href: "/#portfolio", translationKey: "menuWork" },
    { href: "/#role", translationKey: "menuRole" },
    { href: "/#stack", translationKey: "menuStack" },
    { href: "/#hire", translationKey: "menuAvailability" },
  ];

/**
 * Displays the main menu
 */
const MainMenu = () => {
  const t = useTranslation(dictionary);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <nav>
        <ul className={styles.MainMenu__list}>
          <li className={styles.MainMenu__item}>
            <LanguageToggle />
          </li>
          <li className={styles.MainMenu__item}>
            <button
              className="link is-color-text"
              onClick={() => setIsMenuDrawerOpen(true)}
            >
              menu
            </button>
          </li>
        </ul>
      </nav>
      <div
        className={classNames(styles.MainMenu__drawer, {
          [styles.MainMenu__drawer_open]: isMenuDrawerOpen,
        })}
      >
        <button
          className={styles.MainMenu__drawerClose}
          onClick={() => setIsMenuDrawerOpen(false)}
        >
          <En>close</En>
          <Fr>fermer</Fr>
        </button>
        <ul className={styles.MainMenu__drawerItems}>
          {links.map(({ href, translationKey }) => (
            <li key={href} className={styles.MainMenu__drawerItem}>
              <Link href={href}>
                <a
                  className={classNames(
                    styles.MainMenu__drawerLink,
                    "huge-underline"
                  )}
                  onClick={() => setIsMenuDrawerOpen(false)}
                >
                  {t(translationKey)}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainMenu;
