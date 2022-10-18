import En from "../../atoms/En/En";
import Fr from "../../atoms/Fr/Fr";
import Section from "../../atoms/Section/Section";

import styles from "./HomePageCurrentStack.module.scss";

const HomePageCurrentStack = () => (
  <Section>
    <div className={styles.HomePageCurrentStack}>
      <p className={styles.HomePageCurrentStack__title}>
        <En>Technologies Used:</En>
        <Fr>Technologies Utilisées :</Fr>
      </p>
      <div className={styles.HomePageCurrentStack__content}>
        <ul className={styles.HomePageCurrentStack__technologies}>
          <li>
            JavaScript + Flow (<En>for types</En>
            <Fr>pour du typeage</Fr>)
          </li>
          <li>React</li>
          <li>Redux</li>
          <li>Jest + React Testing Library</li>
          <li>NodeJS</li>
          <li>SCSS</li>
          <li>Webpack</li>
          <li>Git</li>
        </ul>
        <div className={styles.HomePageCurrentStack__logos}></div>
      </div>
    </div>
  </Section>
);

export default HomePageCurrentStack;
