import classNames from "classnames";
import styles from "./Flag.module.scss";

const Flag = ({ isUsa }: { isUsa?: boolean }) => (
  <div className={classNames(styles.Flag, { [styles.isUsa]: isUsa })}>
    <div className={styles.Flag__blue}>
      {[...Array(50)].map((e, i) => (
        <div className={styles.Flag__star} key={i}></div>
      ))}
    </div>
    <div className={styles.Flag__red}>
      {[...Array(13)].map((e, i) => (
        <div className={styles.Flag__stripe} key={i}></div>
      ))}
    </div>
  </div>
);

export default Flag;
