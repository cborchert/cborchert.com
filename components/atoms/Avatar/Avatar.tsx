import Image from "next/image";

import styles from "./Avatar.module.scss";

export const Avatar = () => (
  <Image
    src="/images/avatar.webp"
    alt="Chris Borchert"
    width={250}
    height={250}
    layout="responsive"
    className={styles.Avatar}
  />
);

export default Avatar;
