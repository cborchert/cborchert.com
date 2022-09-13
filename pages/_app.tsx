import type { AppProps } from "next/app";
import Footer from "../components/molecules/Footer/Footer";
import Header from "../components/molecules/Header/Header";
import Page from "../components/templates/Page/Page";

import "../styles/globals.scss";
import { LanguageProvider } from "../utils/context/LanguageContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </LanguageProvider>
  );
}

export default MyApp;
