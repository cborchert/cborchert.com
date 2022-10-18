import Footer from "../../molecules/Footer/Footer";
import Header from "../../molecules/Header/Header";

import styles from "./Page.module.scss";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => (
  <div className={styles.Page}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Page;
