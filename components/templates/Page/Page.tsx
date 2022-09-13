import Footer from "../../molecules/Footer/Footer";
import Header from "../../molecules/Header/Header";

type Props = {
  children: React.ReactNode;
};

const Page = ({ children }: Props) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Page;
