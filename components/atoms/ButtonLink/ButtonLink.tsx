import Link from "next/link";

import styles from "./ButtonLink.module.scss";

const ButtonLink = ({
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link href={href} {...rest}>
    <a className={styles.ButtonLink}>{children}</a>
  </Link>
);

export default ButtonLink;
