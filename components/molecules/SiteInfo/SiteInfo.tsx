import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import _debounce from "lodash/debounce";

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

type AvatarSize = "small" | "medium";

/**
 * Displays the header site information
 */
const SiteInfo = () => {
  const t = useTranslation(dictionary);

  const [avatarSize, setAvatarSize] = useState<AvatarSize>("medium");

  // debounce to avoid resizing on every scroll event
  // TODO: Is there a way to get around lint complaining about the deps array
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    _debounce(
      () => setAvatarSize(window.scrollY > 100 ? "small" : "medium"),
      50
    ),
    []
  );

  // Set the avatar size based on the scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.SiteInfo}>
      <div
        className={classNames(
          styles.SiteInfo__avatarContainer,
          styles[`SiteInfo__avatarContainer_${avatarSize}`]
        )}
      >
        <Avatar />
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
