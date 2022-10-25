import Image from "next/image";

import styles from "./Avatar.module.scss";

export const Avatar = () => (
  <Image
    src="/images/avatar.webp"
    alt="Chris Borchert"
    width={100}
    height={100}
    layout="responsive"
    className={styles.Avatar}
    sizes="(max-width: 740px) 70px,100px"
  />
);

export default Avatar;
