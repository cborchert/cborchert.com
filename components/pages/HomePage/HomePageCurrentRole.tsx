import useTranslation from "../../../utils/hooks/useTranslation";
import En from "../../atoms/En/En";
import Fr from "../../atoms/Fr/Fr";
import Section from "../../atoms/Section/Section";
import styles from "./HomePageCurrentRole.module.scss";

const dictionary = {
  currentRole: {
    en: "Current Role",
    fr: "Rôle actuel",
  },
  jsDevAndScrumLine1: {
    en: "JavaScript Developer",
    fr: "Développeur JavaScript",
  },
  jsDevAndScrumLine2: {
    en: "& Scrum Master",
    fr: "& Scrum Master",
  },
  renault: {
    en: "Renault Group",
    fr: "Group Renault",
  },
};

const HomePageCurrentRole = () => {
  const t = useTranslation(dictionary);

  return (
    <Section className={styles.HomePageCurrentRole}>
      <div className={styles.HomePageCurrentRole__body}>
        <div className={styles.HomePageCurrentRole__header}>
          <p className={styles.HomePageCurrentRole__title}>
            {t("currentRole")}
          </p>
          <p className={styles.HomePageCurrentRole__subtitle}>
            {t("jsDevAndScrumLine1")}
          </p>
          <p className={styles.HomePageCurrentRole__subtitle}>
            {t("jsDevAndScrumLine2")}
          </p>
          <p className={styles.HomePageCurrentRole__company}>{t("renault")}</p>
        </div>
        <div className={styles.HomePageCurrentRole__bodyCopy}>
          <En>
            <p>
              Since March 2019, I&apos;ve been working with Renault as a
              fullstack JavaScript developer helping to create and maintain the
              various public platforms, services, and e-commerce sites.
            </p>
            <p>
              I&apos;ve been involved in the conception, creation, and
              maintenance of several frontend and backend projects, notably:
            </p>
            <ul>
              <li>the React component system driven by a headless CMS (AEM)</li>
              <li>
                e-commerce sites facilitating the selection, financing, and
                purchace of a new vehicle and accessories
              </li>
              <li>
                a platform guiding users through the process of dropping off
                their car at a garage for servicing
              </li>
              <li>
                several multi-step forms allowing the client to request
                services, reserve a trial, get a quote, or order accessories for
                their vehicle
              </li>
            </ul>
            <p>
              In January 2022, I took on the additional role of scrum master for
              a small team of front- and backend developers, and product owners.
            </p>
            <p>
              I currently split my time between several responsibilities,
              including:
            </p>
            <ul>
              <li>developing features</li>
              <li>reviewing code</li>
              <li>addressing impediments to the work</li>
              <li>coaching and onboarding colleagues</li>
              <li>
                facilitating communication between the team and the product
                owners
              </li>
              <li>
                organizing the various meetings and ceremonies of the team
              </li>
              <li>
                and ensuring the quarterly delivery schedule (following the SAFE
                framework)
              </li>
            </ul>
            <p>
              On a daily basis, I communicate in French and English and use a
              variety of technologies such as server-rendered React, Redux, Flow
              (for types), Node, React Testing Library (and, formerly, Enzyme),
              SCSS, and AEM.
            </p>
          </En>
          <Fr>
            <p>
              Depuis mars 2019, je travaille chez Renault en tant que
              développeur JavaScript fullstack, en aidant à créer et maintenir
              les diverses plateformes, services, et sites e-commerce publics.
            </p>
            <p>
              J&apos;ai été impliqué dans la conception, la création, et la
              maintenance de plusieurs projets frontend et backend, notamment:
            </p>
            <ul>
              <li>
                un système de composants React piloté par un CMS headless (AEM)
              </li>
              <li>
                des sites e-commerce facilitant la sélection, le financement, et
                l&apos;achat d&apos;un nouveau véhicule et d&apos;accessoires
              </li>
              <li>
                une plateforme guidant les utilisateurs à travers le processus
                de dépôt de leur voiture chez un garage pour la réparation
              </li>
              <li>
                plusieurs formulaires multi-étapes permettant au client de
                demander des services, réserver une essai, obtenir un devis, ou
                commander des accessoires pour leur véhicule
              </li>
            </ul>
            <p>
              En janvier 2022, j&apos;ai pris en charge le rôle de scrum master
              pour une petite équipe de développeurs front- et backend, et de
              product owners.
            </p>
            <p>
              Actuellement, je partage mon temps entre plusieurs
              responsabilités, notamment:
            </p>
            <ul>
              <li>le développement de fonctionnalités</li>
              <li>le traitement des anomolies critiques</li>
              <li>du code review</li>
              <li>la résolution des obstacles de travail</li>
              <li>l&apos;onboarding et le coaching des collègues</li>
              <li>
                la facilitation de la communication entre l&apos;équipe et les
                product owners
              </li>
              <li>
                l&apos;organisation des diverses réunions et cérémonies de
                l&apos;équipe
              </li>
              <li>
                et l&apos;assurance du calendrier de livraison trimestriel
                (suivant le cadre SAFE)
              </li>
            </ul>
            <p>
              Au quotidien, je communique en français et en anglais et utilise
              une variété de technologies telles que React rendu côté serveur,
              Redux, Flow (pour les types), Node, React Testing Library (et,
              précédemment, Enzyme), SCSS, et AEM.
            </p>
          </Fr>
        </div>
      </div>
    </Section>
  );
};

export default HomePageCurrentRole;
