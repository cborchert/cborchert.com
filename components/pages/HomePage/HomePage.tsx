import useTranslation from "../../../utils/hooks/useTranslation";
import Avatar from "../../atoms/Avatar/Avatar";

const dictionary = {
  homePageGreeting: {
    en: "Hi. I'm Chris.",
    fr: "Bonjour ! Moi, c'est Chris.",
  },
  homePageTagline: {
    en: "I make sites, tools, and neat stuff with javascript.",
    fr: "Je crée des sites, des outils, et des trucs cool avec du javascript.",
  },
};

const HomePage = () => {
  const t = useTranslation(dictionary);

  return (
    <div>
      <Avatar />
      <h1>{t("homePageGreeting")}</h1>
      <h2>{t("homePageTagline")}</h2>
    </div>
  );
};

export default HomePage;
