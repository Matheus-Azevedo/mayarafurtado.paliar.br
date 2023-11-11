import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mayara Furtado</title>
        <link rel="icon" href="/imgs/faviconlogo.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
