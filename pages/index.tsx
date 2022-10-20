import type { NextPage } from "next";

import HomePageIntro from "../components/pages/HomePage/HomePageIntro";
import HomePageCurrentRole from "../components/pages/HomePage/HomePageCurrentRole";
import HomePageCurrentStack from "../components/pages/HomePage/HomePageCurrentStack";
import HomePagePortfolio from "../components/pages/HomePage/HomePagePortfolio";
import HomePageGetInTouch from "../components/pages/HomePage/HomePageGetInTouch";

const PageHome: NextPage = () => (
  <>
    <div id="home"></div>
    <HomePageIntro />
    <div id="portfolio"></div>
    <HomePagePortfolio />
    <div id="role"></div>
    <HomePageCurrentRole />
    <div id="stack"></div>
    <HomePageCurrentStack />
    <div id="hire"></div>
    <HomePageGetInTouch />
  </>
);

export default PageHome;
