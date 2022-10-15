import Link from "next/link";
import useTranslation from "../../../utils/hooks/useTranslation";

import styles from "./SiteInfo.module.scss";

const dictionary = {
  siteInfoJsDev: {
    en: "web developer",
    fr: "développeur web",
  },
};

/**
 * Displays the header site information
 */
const SiteInfo = () => {
  const t = useTranslation(dictionary);
  return (
    <div>
      <Link href="/">
        <a className={`${styles.SiteInfo__name} is-color-text`}>
          Chris Borchert
        </a>
      </Link>
      <p className={styles.SiteInfo__position}>{t("siteInfoJsDev")}</p>
    </div>
  );
};

export default SiteInfo;
