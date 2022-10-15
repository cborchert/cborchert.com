import useTranslation from "../../../utils/hooks/useTranslation";
import Section from "../../atoms/Section/Section";

import styles from "./HomePagePortfolio.module.scss";

const dictionary = {
  portfolio: {
    en: "Portfolio:",
    fr: "Portfolio :",
  },
  portfolioDescription: {
    en: `Since 2014, I’ve been building web sites, applications, and tools for a variety of clients (and, sometimes, just for fun!). Here are some of my personal favorites.`,
    fr: `Depuis 2014, je crée des sites web, des applications, et des outils pour une variété de clients (et, parfois, juste pour le plaisir !). Voici quelques-uns de mes préférés.`,
  },
  viewProject: {
    en: "View Project",
    fr: "Voir le projet",
  },
  nciDescription: {
    en: "A public platform allowing users to search for new cars to purchase based on several criteria, to customize the vehicle, simulate a financing offer, and reserve the vehicle by making a payment.",
    fr: "Une plateforme publique permettant aux utilisateurs de rechercher de nouveaux véhicules à acheter en fonction de plusieurs critères, de personnaliser le véhicule, de simuler une offre de financement et de réserver le véhicule en effectuant un paiement.",
  },
  digitalDragFestDescription: {
    en: "During the first summer of the COVID-19 pandemic, Digital Drag Fest offered a digital experience allowing people around the world to watch and interact with their favorite drag queens from the comfort and safety of their own home.",
    fr: "Pendant l'été 2020, Digital Drag Fest a offert une expérience digitale permettant aux gens du monde entier de regarder et d'interagir avec leurs drag queens préférées depuis le confort et la sécurité de leur propre maison.",
  },
  _5sgDescription: {
    en: "A static site generator (SSG) which focused on ease of development, simplicity of structure, and speed of delivery. It takes in markdown and svelte, and outputs html.",
    fr: "Un générateur de site statique (SSG) qui se concentre sur la facilité de développement, la simplicité de la structure et la vitesse de livraison. Il prend en entrée markdown et svelte, et produit du html.",
  },
  gameBoyGiftDescription: {
    en: "For my brother’s birthday, I simulated a Game Boy and A Link To the Past with simulated functionality. When you put in the appropriate code, it gives you a birthday gift.",
    fr: "Pour l'anniversaire de mon frère...",
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
    video: undefined,
    href: "/portfolio/nci",
  },
  {
    title: "Digital Drag Fest",
    date: "2020",
    descriptionKey: "digitalDragFestDescription",
    video: undefined,
    href: "/portfolio/digitalDragFest",
  },
  {
    title: "5sg",
    date: "2021",
    descriptionKey: "_5sgDescription",
    video: undefined,
    href: "/portfolio/5sg",
  },
  {
    title: "Game Boy Gift",
    date: "2019",
    descriptionKey: "gameBoyGiftDescription",
    video: undefined,
    href: "/portfolio/gameBoyGift",
  },
  {
    title: "Axel's Adventure",
    date: "2020",
    descriptionKey: "axelsAdventureDescription",
    video: undefined,
    href: "/portfolio/axelsAdventure",
  },
  {
    title: "Hyperloop One Routes Calculator",
    date: "2017",
    descriptionKey: "hyperloopDescription",
    video: undefined,
    href: "/portfolio/hyperloop",
  },
];

const HomePagePortfolioItem = ({
  title,
  date,
  description,
  video,
  href,
}: {
  title: string;
  date: string;
  description: string | React.ReactElement;
  video?: string;
  href?: string;
}) => {
  const t = useTranslation(dictionary);
  return (
    <div className={styles.HomePagePortfolio__item}>
      <div className={styles.HomePagePortfolio__video}></div>
      <div className={styles.HomePagePortfolio__content}>
        <p className={styles.HomePagePortfolio__title}>{title}</p>
        <p className={styles.HomePagePortfolio__date}>{date}</p>
        <p className={styles.HomePagePortfolio__description}>{description}</p>
        <a className={styles.HomePagePortfolio__link} href="#">
          {t("viewProject")}
        </a>
      </div>
    </div>
  );
};

const HomePagePortfolio = () => {
  const t = useTranslation(dictionary);
  return (
    <Section>
      <p className="h1">{t("portfolio")}</p>
      <p className="h4">{t("portfolioDescription")}</p>
      <div>
        {portfolioItems.map(({ descriptionKey, ...rest }) => (
          <HomePagePortfolioItem
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
