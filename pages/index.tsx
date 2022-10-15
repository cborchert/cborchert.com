import type { NextPage } from "next";

import WaveTransition from "../components/atoms/WaveTransition/WaveTransition";
import HomePageIntro from "../components/pages/HomePage/HomePageIntro";
import HomePageCurrentRole from "../components/pages/HomePage/HomePageCurrentRole";
import HomePageCurrentStack from "../components/pages/HomePage/HomePageCurrentStack";
import HomePagePortfolio from "../components/pages/HomePage/HomePagePortfolio";

const Home: NextPage = () => (
  <>
    <HomePageIntro />
    <WaveTransition theme="light" waveStyle={1}>
      <HomePageCurrentRole />
      <HomePageCurrentStack />
    </WaveTransition>

    <WaveTransition theme="medium" waveStyle={2}>
      <HomePagePortfolio />
    </WaveTransition>

    <WaveTransition theme="dark" waveStyle={3}>
      <HomePageCurrentRole />
      <HomePageCurrentStack />
    </WaveTransition>
  </>
);

export default Home;
