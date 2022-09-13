import MainMenu from "../MainMenu/MainMenu";
import SiteInfo from "../SiteInfo/SiteInfo";

/**
 * Displays the global header
 */
const Header = () => (
  <header>
    <SiteInfo />
    <MainMenu />
  </header>
);

export default Header;
