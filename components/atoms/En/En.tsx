import { LANGUAGES } from "../../../constants/Languages";
import Localized from "../Localized/Localized";

type Props = {
  children: React.ReactNode;
};

/**
 * Displays the child components ONLY if the current language is English
 */
const En = ({ children }: Props) => (
  <Localized language={LANGUAGES.EN}>{children}</Localized>
);

export default En;
