import "../styles/globals.css";
import "../styles/aia-v2.css";
import "../styles/aia-res.css";

import Head from "next/head";
import { LocModalProvider } from "../contexts/LocModalContext";

function MyApp({ Component, pageProps }) {
  return (
    <LocModalProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </LocModalProvider>
  );
}

export default MyApp;
