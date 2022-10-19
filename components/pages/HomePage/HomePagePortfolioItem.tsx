import Image from "next/image";
import Link from "next/link";

import useTranslation from "../../../utils/hooks/useTranslation";

import styles from "./HomePagePortfolioItem.module.scss";

export const dictionary = {
  viewProject: {
    en: "View Project",
    fr: "Voir le projet",
  },
};

const HomePagePortfolioItem = ({
  title,
  date,
  description,
  video,
  href,
  bgColor,
  loResCoverImage,
}: {
  title: string;
  date: string;
  description: string | React.ReactElement;
  video?: string;
  href: string;
  bgColor?: string;
  loResCoverImage?: string;
}) => {
  const t = useTranslation(dictionary);
  return (
    <div
      className={styles.HomePagePortfolioItem}
      style={{ backgroundColor: bgColor }}
    >
      {loResCoverImage && (
        <div className={styles.HomePagePortfolioItem__loResCoverImage}>
          <Image
            src={loResCoverImage}
            alt=""
            layout="responsive"
            width="205"
            height="115"
          />
        </div>
      )}
      {video && (
        <div className={styles.HomePagePortfolioItem__video}>
          <video autoPlay loop muted playsInline src={video} />
        </div>
      )}
      <div className={styles.HomePagePortfolioItem__content}>
        <Link href={href} className={styles.HomePagePortfolioItem__link}>
          <a className={styles.HomePagePortfolioItem__title}>{title}</a>
        </Link>
        <p className={styles.HomePagePortfolioItem__date}>{date}</p>
        <div className={styles.HomePagePortfolioItem__description}>
          <p className={styles.HomePagePortfolioItem__descriptionText}>
            {description}
          </p>
        </div>
        <div className={styles.HomePagePortfolioItem__link}>
          <Link href={href} className={styles.HomePagePortfolioItem__link}>
            <a className={styles.HomePagePortfolioItem__linkText}>
              {t("viewProject")}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePagePortfolioItem;
