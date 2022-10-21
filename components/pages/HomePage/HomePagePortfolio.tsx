import useTranslation from "../../../utils/hooks/useTranslation";
import Section from "../../atoms/Section/Section";
import HomePagePortfolioItemV2 from "./HomePagePortfolioItemV2";
import HomePagePortfolioItem from "./HomePagePortfolioItem";

import styles from "./HomePagePortfolio.module.scss";

const dictionary = {
  portfolio: {
    en: "Featured Work",
    fr: "Portfolio",
  },
  viewProject: {
    en: "View Project",
    fr: "Voir le projet",
  },
  nciDescription: {
    en: "A public platform allowing users to search for new cars to purchase based on several criteria, to customize the vehicle, simulate a financing offer, and reserve the vehicle by making a payment.",
    fr: "Une plateforme publique permettant aux utilisateurs de rechercher de nouveaux véhicules à acheter en fonction de plusieurs critères, de personnaliser le véhicule, de simuler une offre de financement et de réserver le véhicule en effectuant un paiement.",
  },
  digitalPrideFestDescription: {
    en: "During the first summer of the COVID-19 pandemic, Digital Drag Fest offered a digital experience allowing people around the world to watch and interact with their favorite drag queens from the comfort and safety of their own home.",
    fr: "Pendant l'été 2020, Digital Drag Fest a offert une expérience digitale permettant aux gens du monde entier de regarder et d'interagir avec leurs drag queens préférées depuis le confort et la sécurité de leur propre maison.",
  },
  _5sgDescription: {
    en: "A static site generator (SSG) which focused on ease of development, simplicity of structure, and speed of delivery. It takes in markdown and svelte, and outputs html.",
    fr: "Un générateur de site statique (SSG) qui se concentre sur la facilité de développement, la simplicité de la structure et la vitesse de livraison. Il prend en entrée markdown et svelte, et produit du html.",
  },
  gameBoyGiftDescription: {
    en: "For my brother’s birthday, I simulated a Game Boy and A Link To the Past with simulated functionality. When you put in the appropriate code, it gives you a birthday gift.",
    fr: "Pour l'anniversaire de mon frère lorem ipsum dolor sit amet adem potentas etiam inveniuntur ",
  },
  axelsAdventureDescription: {
    en: "A personal project made for the birthday of a coworker. Full of inside jokes, this sidescrolling game allowed me to work with technologies I normally wouldn’t in my day job.",
    fr: "Un projet personnel fait pour l'anniversaire d'un collègue. Plein de blagues internes, ce jeu de défilement latéral m'a permis de travailler avec des technologies que je n'utilise pas normalement dans mon travail quotidien.",
  },
  hyperloopDescription: {
    en: "A highly animated, interactive calculator app for Virgin’s Hyperloop One which helped users estimate how long a ride in the hyperloop would take compared to train, plain or automoble.",
    fr: "Une application de calcul animée et interactive pour Virgin Hyperloop One qui aidait les utilisateurs à estimer combien de temps un voyage en hyperloop prendrait par rapport à un train, un avion ou une voiture.",
  },
};

const portfolioItems = [
  {
    title: "Renault New Car Inventory",
    date: "2019-2021",
    descriptionKey: "nciDescription",
    // href: "/portfolio/nci",
    video: "/media/nci-cover.mp4",
    loResCoverImage: "/media/nci-cover.jpg",
    bgColor: "#fff",
    stack: ["react", "redux", "flow", "scss", "node"],
    link: "https://www.renault.fr/achat-vehicules-neufs.html",
  },
  {
    title: "Digital Pride Fest",
    date: "2020",
    descriptionKey: "digitalPrideFestDescription",
    // href: "/portfolio/digitalPrideFest",
    video: "/media/digital-pride-fest-cover.mp4",
    loResCoverImage: "/media/digital-pride-fest-cover.jpg",
    bgColor: "#00b5b7",
    stack: ["react", "next", "node", "mongodb", "mux", "stripe", "websockets"],
  },
  {
    title: "Hyperloop One Routes Calculator",
    date: "2017",
    descriptionKey: "hyperloopDescription",
    // href: "/portfolio/hyperloop",
    video: "/media/hyperloop-cover.mp4",
    loResCoverImage: "/media/hyperloop-cover.jpg",
    bgColor: "#3f4456",
    stack: ["react", "svg", "phantomjs", "aws", "node"],
  },
  {
    title: "5sg",
    date: "2021",
    descriptionKey: "_5sgDescription",
    // href: "/portfolio/5sg",
    video: "/media/5sg-cover.mp4",
    loResCoverImage: "/media/5sg-cover.jpg",
    bgColor: "#fff",
    stack: ["svelte", "rollup", "remark", "node"],
    github: "https://github.com/cborchert/5sg",
    npm: "https://www.npmjs.com/package/5sg",
    link: "https://5sg.netlify.app/",
  },
  {
    title: "Axel's Adventure",
    date: "2020",
    descriptionKey: "axelsAdventureDescription",
    // href: "/portfolio/axelsAdventure",
    video: "/media/axels-adventure-cover.mp4",
    loResCoverImage: "/media/axels-adventure-cover.jpg",
    bgColor: "#043b3b",
    stack: ["js", "pixi"],
    github: "https://github.com/cborchert/adventure",
    link: "https://axels-adventure.netlify.app/",
  },
  {
    title: "Game Boy Gift",
    date: "2019",
    descriptionKey: "gameBoyGiftDescription",
    // href: "/portfolio/gameBoyGift",
    video: "/media/game-boy-gift-cover.mp4",
    loResCoverImage: "/media/game-boy-gift-cover.jpg",
    bgColor: "#18b490",
    stack: ["js", "react", "scss", "howler"],
    github: "https://github.com/cborchert/gameboy",
    link: "https://game-boy-gift.netlify.app/",
  },
];

const HomePagePortfolio = () => {
  const t = useTranslation(dictionary);
  return (
    <Section className={styles.HomePagePortfolio}>
      <p className={styles.HomePagePortfolio__title}>{t("portfolio")}</p>
      <div>
        {portfolioItems.map(({ descriptionKey, ...rest }, i) => (
          <HomePagePortfolioItemV2
            left={i % 2 !== 0}
            key={rest.title}
            description={t(descriptionKey) || ""}
            {...rest}
          />
        ))}
      </div>
    </Section>
  );
};

export default HomePagePortfolio;
