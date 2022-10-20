import type { AppProps } from "next/app";
import Page from "../components/templates/Page/Page";
import { LanguageProvider } from "../utils/context/LanguageContext";

import "../styles/globals.scss";

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
