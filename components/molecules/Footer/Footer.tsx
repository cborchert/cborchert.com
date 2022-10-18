import Link from "next/link";
import useTranslation from "../../../utils/hooks/useTranslation";

import styles from "./Footer.module.scss";

const dictionary = {
  footerCopyright: {
    en: "&copy; Christopher Borchert 2017 - present",
    fr: "&copy; Christopher Borchert 2017 - présent",
  },
};

/**
 * Displays the global footer
 */
const Footer = () => {
  const t = useTranslation(dictionary);
  return (
    <footer className={styles.Footer}>
      <p>{t("footerCopyright")}</p>
      <nav>
        <ul className={styles.Footer__links}>
          <li>
            <Link href="mailto:christopher.borchert@gmail.com" target="_blank">
              Email
            </Link>
          </li>
          <li>
            <Link href="https://github.com/cborchert" target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/christopher-borchert/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
