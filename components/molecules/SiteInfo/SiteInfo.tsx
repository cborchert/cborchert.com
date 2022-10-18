import classNames from "classnames";

import useTranslation from "../../../utils/hooks/useTranslation";

import Avatar from "../../atoms/Avatar/Avatar";
import Link from "next/link";

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
    <div className={styles.SiteInfo}>
      <div className={styles.SiteInfo__avatarContainer}>
        <Avatar isSmall />
      </div>
      <div className={styles.SiteInfo__copy}>
        <Link href="/">
          <a className={classNames(styles.SiteInfo__name, "is-color-text")}>
            Chris Borchert
          </a>
        </Link>
        <p className={styles.SiteInfo__position}>{t("siteInfoJsDev")}</p>
      </div>
    </div>
  );
};

export default SiteInfo;
