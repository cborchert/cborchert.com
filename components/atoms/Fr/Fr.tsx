import { LANGUAGES } from "../../../constants/Languages";
import Localized from "../Localized/Localized";

type Props = {
  children: React.ReactNode;
};

/**
 * Displays the child components ONLY if the current language is French
 */
const Fr = ({ children }: Props) => (
  <Localized language={LANGUAGES.FR}>{children}</Localized>
);

export default Fr;
