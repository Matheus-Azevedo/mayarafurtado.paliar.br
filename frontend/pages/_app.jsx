import Head from "next/head";
import "../styles/all.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mayara Furtado</title>
        <link rel="icon" href="/faviconlogo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
