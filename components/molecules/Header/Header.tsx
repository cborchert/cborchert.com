import MainMenu from "../MainMenu/MainMenu";
import SiteInfo from "../SiteInfo/SiteInfo";

import styles from "./Header.module.scss";

/**
 * Displays the global header
 */
const Header = () => (
  <header className={styles.Header}>
    <SiteInfo />
    <MainMenu />
  </header>
);

export default Header;
