import useTranslation from "../../../utils/hooks/useTranslation";
import Avatar from "../../atoms/Avatar/Avatar";
import En from "../../atoms/En/En";
import Fr from "../../atoms/Fr/Fr";
import Section from "../../atoms/Section/Section";

import styles from "./HomePageIntro.module.scss";

const dictionary = {
  homePageGreeting: {
    en: "Hi there, I’m Chris.",
    fr: "Bonjour ! Moi, c'est Chris.",
  },
};

const HomePageIntro = () => {
  const t = useTranslation(dictionary);

  return (
    <Section className={styles.HomePageIntro}>
      <Avatar />
      <div className={styles.HomePageIntro__text}>
        <h1 className={styles.HomePageIntro__title}>{t("homePageGreeting")}</h1>
        <div className={styles.HomePageIntro__description}>
          <En>
            <p>
              I’m a <em>freelance web developer</em> based near Paris, France.
            </p>
            <p>
              I make sites, app, and cool things for the web with{" "}
              <em>JavaScript</em>.
            </p>
          </En>
          <Fr>
            <p>
              Je suis <em>développeur web freelance</em> basé dans la région
              parisienne.
            </p>
            <p>
              Je crée des sites, des applis, et trucs cool pour le web avec du{" "}
              <em>JavaScript</em>.
            </p>
          </Fr>
        </div>
      </div>
    </Section>
  );
};

export default HomePageIntro;
