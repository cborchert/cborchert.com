import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import En from "../../atoms/En/En";
import Fr from "../../atoms/Fr/Fr";
import Section from "../../atoms/Section/Section";

import styles from "./HomePageGetInTouch.module.scss";

const HomePageGetInTouch = () => (
  <Section>
    <div className={styles.HomePageGetInTouch}>
      <p className={styles.HomePageGetInTouch__title}>
        <En>Get In Touch:</En>
        <Fr>Contacter moi :</Fr>
      </p>
      <p className={styles.HomePageGetInTouch__subtitle}>
        <En>Questions? Want to work together?</En>
        <Fr>Avez vous des questions ? Vous voulez travailler ensemble ?</Fr>
      </p>
      <div>
        <ButtonLink
          href="mailto:christopher.borchert@gmail.com"
          useAnchor
          attrs={{
            target: "_blank",
            rel: "noreferrer",
          }}
        >
          <En>Drop Me a Line</En>
          <Fr>Parlons en !</Fr>
        </ButtonLink>
      </div>
    </div>
  </Section>
);

export default HomePageGetInTouch;
