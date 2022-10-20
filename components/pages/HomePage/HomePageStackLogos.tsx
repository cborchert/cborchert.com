import Image from "next/image";
import styles from "./HomePageStackLogos.module.scss";

const logos = [
  "/images/logos/logo-ts.png",
  "/images/logos/logo-react.png",
  "/images/logos/logo-redux.png",
  "/images/logos/logo-jest.png",
  "/images/logos/logo-testing-library.png",
  "/images/logos/logo-sass.png",
  "/images/logos/logo-node.png",
  "/images/logos/logo-next.png",
];

const HomePageStackLogos = () => (
  <div className={styles.HomePageStackLogos}>
    {logos.map((logo) => (
      <div key={logo} className={styles.HomePageStackLogos__logo}>
        <Image src={logo} alt="" width="200" height="200" layout="responsive" />
      </div>
    ))}
  </div>
);

export default HomePageStackLogos;
