import type { NextPage } from "next";

import HomePageIntro from "../components/pages/HomePage/HomePageIntro";
import HomePageCurrentRole from "../components/pages/HomePage/HomePageCurrentRole";
import HomePageCurrentStack from "../components/pages/HomePage/HomePageCurrentStack";
import HomePagePortfolio from "../components/pages/HomePage/HomePagePortfolio";
import HomePageGetInTouch from "../components/pages/HomePage/HomePageGetInTouch";

const Home: NextPage = () => (
  <>
    <HomePageIntro />
    <HomePagePortfolio />
    <HomePageCurrentRole />
    <HomePageCurrentStack />
    <HomePageGetInTouch />
  </>
);

export default Home;
