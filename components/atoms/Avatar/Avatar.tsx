import classNames from "classnames";

import Image from "next/image";

import styles from "./Avatar.module.scss";

export const Avatar = ({
  className,
  isSmall,
}: {
  className?: string;
  isSmall?: boolean;
}) => (
  <Image
    src="/images/avatar.webp"
    alt="Chris Borchert"
    width={isSmall ? 50 : 250}
    height={isSmall ? 50 : 250}
    className={classNames(styles.Avatar, className, { "is-small": isSmall })}
  />
);

export default Avatar;
