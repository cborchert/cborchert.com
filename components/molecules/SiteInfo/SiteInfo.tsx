import useTranslation from "../../../utils/hooks/useTranslation";

const dictionary = {
  siteInfoJsDev: {
    en: "javascript developer",
    fr: "développeur javascript",
  },
};

/**
 * Displays the header site information
 */
const SiteInfo = () => {
  const t = useTranslation(dictionary);
  return (
    <div>
      <p>Chris Borchert</p>
      <p>{t("siteInfoJsDev")}</p>
    </div>
  );
};

export default SiteInfo;
