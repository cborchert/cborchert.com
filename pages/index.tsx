import Head from "next/head";
import type { NextPage } from "next";

import HomePageIntro from "../components/pages/HomePage/HomePageIntro";
import HomePageCurrentRole from "../components/pages/HomePage/HomePageCurrentRole";
import HomePageCurrentStack from "../components/pages/HomePage/HomePageCurrentStack";
import HomePagePortfolio from "../components/pages/HomePage/HomePagePortfolio";
import HomePageGetInTouch from "../components/pages/HomePage/HomePageGetInTouch";

const PageHome: NextPage = () => {
  const yearsOfExperience = new Date().getFullYear() - 2014;
  return (
    <>
      <Head>
        <title>Chris Borchert - Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`Chris Borchert is a web developer in the Paris, France region with ${yearsOfExperience} years of experience creating sites, applications, and tools with JavaScript.`}
        />
      </Head>
      <div id="home">
        <HomePageIntro />
      </div>
      <div id="role">
        <HomePageCurrentRole />
      </div>
      <div id="stack">
        <HomePageCurrentStack />
      </div>
      <div id="portfolio">
        <HomePagePortfolio />
      </div>
      <div id="hire">
        <HomePageGetInTouch />
      </div>
    </>
  );
};

export default PageHome;
