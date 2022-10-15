import classNames from "classnames";
import styles from "./Section.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className, ...props }: Props) => {
  return (
    <section className={classNames(styles.Section, className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
