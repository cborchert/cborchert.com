import Link from "next/link";

import styles from "./ButtonLink.module.scss";

const ButtonLink = ({
  children,
  href,
  useAnchor,
  attrs = {},
}: {
  children: React.ReactNode;
  href: string;
  useAnchor: boolean;
  attrs?: Record<string, string>;
}) =>
  useAnchor ? (
    <a className={styles.ButtonLink} href={href} {...attrs}>
      {children}
    </a>
  ) : (
    <Link href={href} {...attrs}>
      <a className={styles.ButtonLink}>{children}</a>
    </Link>
  );

export default ButtonLink;
