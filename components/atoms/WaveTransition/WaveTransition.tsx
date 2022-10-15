import classNames from "classnames";
import styles from "./WaveTransition.module.scss";

const Wave1 = () => (
  <svg
    width="1200"
    height="76"
    viewBox="0 0 1200 76"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.WaveTransition__wave}
  >
    <path d="M6.10352e-05 26.3814V75.9995H1200V10.7609C1098.08 35.8762 823.908 74.1617 542.529 26.3814C261.15 -21.3989 63.6016 6.47297 6.10352e-05 26.3814Z" />
  </svg>
);

const Wave2 = () => (
  <svg
    width="1200"
    height="202"
    viewBox="0 0 1200 202"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.WaveTransition__wave}
  >
    <path d="M354.019 82.1923C161.544 211.589 32.2098 101 0.000152588 18V202H1200V53.9944C1131.17 38.2869 1121.28 -66.235 924.259 66.218C677.982 231.784 594.612 -79.5531 354.019 82.1923Z" />
  </svg>
);

const Wave3 = () => (
  <svg
    width="1200"
    height="109"
    viewBox="0 0 1200 105"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.WaveTransition__wave}
  >
    <path d="M480 66.4422C286 108.443 32.2097 85.2545 3.58129e-05 24.4425L1.15574e-05 108.442L1200 108.442L1200 0.00265122C1130 24.4427 1109.31 89.4634 902 50.4447C634 0.0042231 566.583 47.6972 480 66.4422Z" />
  </svg>
);

const WaveTransition = ({
  waveStyle,
  theme,
  children,
}: {
  waveStyle: 1 | 2 | 3;
  theme: "light" | "medium" | "dark";
  children: React.ReactNode;
}) => (
  <div className={classNames(styles.WaveTransition, styles[`theme-${theme}`])}>
    {waveStyle === 1 && <Wave1 />}
    {waveStyle === 2 && <Wave2 />}
    {waveStyle === 3 && <Wave3 />}
    <div className={styles.WaveTransition__content}>{children}</div>
  </div>
);

export default WaveTransition;
