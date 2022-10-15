import Image from "next/image";
import AvatarStars, { AvatarShootingStar } from "./AvatarStars";

import styles from "./Avatar.module.scss";

const AvatarBlob = () => (
  <svg
    width="410"
    height="366"
    viewBox="0 0 410 366"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.Avatar__blob}
  >
    <path
      d="M78.7115 258.454C2.12504 235.374 -55.5651 151.732 91.3413 40.3385C225.913 -61.7018 414.488 54.9104 405.033 122.907C395.578 190.903 418.261 154.119 405.012 240.432C392.407 322.547 328.403 339.495 198.825 362.613C69.2457 385.732 155.298 281.535 78.7115 258.454Z"
      fill="#303"
      fillOpacity="0.5"
    />
  </svg>
);
const AvatarBlobTwo = () => (
  <svg
    width="347"
    height="355"
    viewBox="0 0 347 355"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.Avatar__blobTwo}
  >
    <path
      d="M193.021 34.2913C107.79 86.9801 77.1938 -62.182 19.9668 81.8612C-15.4931 184.593 -16.6584 301.482 126.18 301.482C250.377 301.482 286.888 409.176 315.901 319.024C344.913 228.871 357.391 263.823 336.854 155.491C315.901 44.9612 336.854 -54.6243 193.021 34.2913Z"
      fill="#003"
      fillOpacity="0.5"
    />
  </svg>
);

export const AvatarImage = () => (
  <Image
    src="/images/avatar.webp"
    alt="Chris Borchert, looking hopefully towards the future"
    width={200}
    height={200}
    className={styles.Avatar__image}
  />
);

/**
 * Display Chris' avatar
 */
const Avatar = () => (
  <div className={styles.Avatar__container}>
    <div className={styles.Avatar}>
      <AvatarBlob />
      <AvatarBlobTwo />
      <AvatarStars className={styles.Avatar__stars} />
      <AvatarShootingStar className={styles.Avatar__shootingStar} />
      <AvatarImage />
    </div>
  </div>
);

export default Avatar;
