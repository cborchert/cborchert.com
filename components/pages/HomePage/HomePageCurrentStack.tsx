import En from "../../atoms/En/En";
import Fr from "../../atoms/Fr/Fr";
import Section from "../../atoms/Section/Section";
import HomePageStackLogos from "./HomePageStackLogos";

import styles from "./HomePageCurrentStack.module.scss";

const HomePageCurrentStack = () => (
  <Section>
    <div className={styles.HomePageCurrentStack}>
      <div className={styles.HomePageCurrentStack__content}>
        <div>
          <p className={styles.HomePageCurrentStack__title}>
            <En>Preferred Stack:</En>
            <Fr>Technologies Préférées :</Fr>
          </p>
          <ul className={styles.HomePageCurrentStack__technologies}>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Jest</li>
            <li>React Testing Library</li>
            <li>SCSS</li>
            <li>NodeJS</li>
            <li>NextJS</li>
          </ul>
        </div>
        <div className={styles.HomePageCurrentStack__logos}>
          <HomePageStackLogos />
        </div>
      </div>
    </div>
  </Section>
);

export default HomePageCurrentStack;
