import useTranslation from "../../../utils/hooks/useTranslation";
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
  roleDescription: {
    en: `
    <p>
    Since March 2019, I&apos;ve been working with Renault as a frontend
    developer working on their various public platforms, services, and
    e-commerce sites.
  </p>
  <p>
    I&apos;ve been involved in the conception, creation, and maintenance
    of several frontend products and supporting backend services,
    notably:
  </p>
  <ul>
    <li>
      an e-commerce site facilitating the selection, financing, and
      purchace of a new vehicle
    </li>
    <li>
      a platform guiding users through the process of dropping off their
      car at a garage for servicing
    </li>
    <li>
      several multi-step forms allowing the client to request services,
      reserve a trial, get a quote, or order accessories for their
      vehicle
    </li>
  </ul>
  <p>
    In January 2022, I took on the additional role of scrum master for a
    small team of front- and backend developers, and product owners.
  </p>
  <p>
    I currently split my time between developing features, addressing
    impediments to the work, coaching colleagues, facilitating
    communication, ensuring the delivery of features, reviewing code,
    and organizing the various meetings and ceremonies of the team.
  </p>
    `,
    fr: `
    <p>
            Depuis mars 2019, je travaille chez Renault en tant que développeur
            frontend sur leurs différentes plateformes, services, et
            sites e-commerce.
          </p>

          <p>
            J&apos;ai été impliqué dans la conception, la création, et la
            maintenance de plusieurs produits frontend et services backend,
            notamment :
          </p>
          <ul>
            <li>
              un site e-commerce facilitant la sélection, le financement, et
              l&apos;achat d&apos;un nouveau véhicule
            </li>
            <li>
              une plateforme guidant les utilisateurs dans le processus de dépôt
              de leur voiture au garage pour la réparation
            </li>
            <li>
              plusieurs formulaires complèxes permettant au client de demander des
              services, réserver un essai, obtenir un devis, ou commander des
              accessoires pour son véhicule
            </li>
          </ul>
          <p>
            En janvier 2022, j&apos;ai pris en charge le rôle de scrum master
            pour une petite équipe de développeurs frontend et backend, et de
            product owners.
          </p>

          <p>
            Je partage actuellement mon temps entre le développement de
            fonctionnalités, la résolution d&apos;impediments au travail, le
            coaching des collègues, la facilitation de la communication,
            l&apos;assurance de la livraison de fonctionnalités, la revue de
            code, et l&apos;organisation des diverses réunions et cérémonies de
            l&apos;équipe.
          </p>
    `,
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
          {t("roleDescription")}
        </div>
      </div>
    </Section>
  );
};

export default HomePageCurrentRole;
