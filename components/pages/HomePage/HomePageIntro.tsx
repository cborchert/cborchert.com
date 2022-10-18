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
      <div className={styles.HomePageIntro__text}>
        <h1 className={styles.HomePageIntro__title}>{t("homePageGreeting")}</h1>
        <div className={styles.HomePageIntro__description}>
          <En>
            <p className={styles.HomePageIntro__mainLine}>
              I make cool things for the web with <em>JavaScript.</em>
            </p>
            <p>
              I’m a <em>freelance web developer</em> based near Paris, France.
            </p>
            <p>
              Since 2014, I’ve been building <em>websites</em>,{" "}
              <em>applications</em>, and <em>tools</em> for a variety of
              clients, and, sometimes, just for fun.
            </p>
          </En>
          <Fr>
            <p>
              Je crée des trucs cools pour le web avec du <em>JavaScript.</em>
            </p>
            <p>
              Je suis <em>développeur web freelance</em> basé dans la région
              parisienne.
            </p>
            <p>
              Depuis 2014, je developpe des <em>sites web</em>, des{" "}
              <em>applications</em>, et des <em>outils</em> pour une variété de
              clients, et parfois, juste pour le fun.
            </p>
          </Fr>
        </div>
      </div>
    </Section>
  );
};

export default HomePageIntro;
