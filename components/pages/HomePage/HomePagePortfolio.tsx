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
    en: "A public platform allowing users to search for and purchase a new vehicle from a Renault dealership. The user is able to filter based on several criteria such as location, price, color, brand, model, and fuel type. The user can then customize the vehicle, simulate a financing offer, and reserve the vehicle by making a payment.",
    fr: "Une plateforme publique permettant aux utilisateurs de rechercher et d'acheter un nouveau véhicule auprès d'un concessionnaire Renault. L'utilisateur peut filtrer en fonction de plusieurs critères tels que localisation, prix, couleur, marque, modèle et type d'énergie. L'utilisateur peut ensuite personnaliser le véhicule, simuler une offre de financement et réserver le véhicule en effectuant un paiement.",
  },
  digitalPrideFestDescription: {
    en: "During the first summer of the COVID-19 pandemic, Digital Pride Fest offered a remote digital  experience allowing people around the world to interact with their favorite drag queens in real time from the comfort and safety of their own homes. The final product included real-time chat and video, a ticketing and tipping system with payments processed through Stripe, a site for the performers to broadcast from, and an admin panel to manage the various shows and tickets.",
    fr: "Durant le pic de la pandemie COVID-19 en l'été 2020, Digital Pride Fest a offert une expérience digitale à distance permettant aux gens du monde entier de communiquer avec leurs drag queens préférées en temps réel, depuis le confort et la sécurité de leur propre maison. Le produit final comprenait un chat et une vidéo en temps réel, un système de billetterie et de pourboire avec des paiements traités par Stripe, un site pour les artistes pour diffuser en direct et un tableau de bord pour gérer les différents spectacles et billets.",
  },
  _5sgDescription: {
    en: "A static site generator (SSG) available on npm which focused on ease of development, simplicity of structure, and speed of delivery. It took in markdown and svelte, and output static html with partially hydrated pages.",
    fr: "Un générateur de site statique (SSG) disponible sur npm qui se concentrait sur la facilité de développement, la simplicité de la structure et la rapidité de la livraison. Il produisait du html statique avec des pages partiellement hydratées à partir de markdown et svelte.",
  },
  gameBoyGiftDescription: {
    en: "For my brother&apos;s birthday, I created simulated a functioning Game Boy and A Link To the Past with css and js. When you put in the appropriate code, it gives you a birthday gift.",
    fr: "Pour l'anniversaire de mon frère, j'ai simulé un Game Boy et le jeu A Link To the Past avec du css et du js. Quand vous entrez le code approprié, il vous donne un cadeau d'anniversaire.",
  },
  axelsAdventureDescription: {
    en: "A personal project made for the birthday of a coworker. Full of inside jokes, this sidescrolling game allowed me to work with technologies I normally wouldn&apos;t in my day job.",
    fr: "Un projet personnel fait pour l'anniversaire d'un collègue. Plein d'humour, ce jeu de défilement horizontal m'a permis de travailler avec des technologies que je n'utilise pas habituellement dans mon travail quotidien.",
  },
  hyperloopDescription: {
    en: "A highly interactive, animated calculator app created for Virgin&apos;s Hyperloop One which helped users estimate how long a ride in the hyperloop would take compared to train, plain or automoble. User's could also create and download a pdf of their results.",
    fr: "Une calculatrice animée et très interactive créé pour Virgin Hyperloop One qui aidait les utilisateurs à estimer combien de temps un voyage en hyperloop prendrait par rapport à un train, un avion ou une voiture. Les utilisateurs pouvaient également créer et télécharger un document pdf de leurs résultats.",
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
    stack: ["react", "redux", "flow", "scss", "node", "aem", "aws"],
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
