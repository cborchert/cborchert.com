import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import useTranslation from "../../../utils/hooks/useTranslation";

import styles from "./HomePagePortfolioItemV2.module.scss";

export const dictionary = {
  viewProject: {
    en: "Learn more",
    fr: "En Savoir Plus",
  },
  external: {
    en: "visit",
    fr: "y aller",
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
  stack,
  github,
  npm,
  link,
  left,
}: {
  title: string;
  date: string;
  description: string | React.ReactElement;
  video?: string;
  href?: string;
  bgColor?: string;
  loResCoverImage?: string;
  stack?: string[];
  github?: string;
  npm?: string;
  link?: string;
  left?: boolean;
}) => {
  const t = useTranslation(dictionary);
  const links = [
    { href: npm, name: "npm" },
    { href: github, name: "github" },
    { href: link, name: t("external") },
  ].filter((link) => link.href);

  return (
    <div
      className={classNames(styles.HomePagePortfolioItem, {
        [styles.HomePagePortfolioItem_left]: left,
      })}
    >
      <div className={styles.HomePagePortfolioItem__cover}>
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
          <div
            className={styles.HomePagePortfolioItem__video}
            style={{ backgroundColor: bgColor }}
          >
            {href ? (
              <Link href={href}>
                <a className="no-underline">
                  <video autoPlay loop muted playsInline src={video} />
                </a>
              </Link>
            ) : (
              <video autoPlay loop muted playsInline src={video} />
            )}
          </div>
        )}
      </div>
      <div className={styles.HomePagePortfolioItem__content}>
        <p className={styles.HomePagePortfolioItem__date}>{date}</p>
        {href ? (
          <Link href={href} className={styles.HomePagePortfolioItem__link}>
            <a className={styles.HomePagePortfolioItem__title}>{title}</a>
          </Link>
        ) : (
          <span className={styles.HomePagePortfolioItem__title}>{title}</span>
        )}
        <div className={styles.HomePagePortfolioItem__description}>
          <p className={styles.HomePagePortfolioItem__descriptionText}>
            {description}
          </p>
          {href && (
            <div className={styles.HomePagePortfolioItem__link}>
              <Link href={href} className={styles.HomePagePortfolioItem__link}>
                <a className={styles.HomePagePortfolioItem__linkText}>
                  {t("viewProject")}
                </a>
              </Link>
            </div>
          )}
        </div>
        {stack && (
          <ul className={styles.HomePagePortfolioItem__stack}>
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        )}
        {links.length > 0 && (
          <ul className={styles.HomePagePortfolioItem__stack}>
            {links.map(({ href, name }) => (
              <li key={link}>
                <a href={href} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePagePortfolioItem;
