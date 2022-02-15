import '../styles/globals.css'
import { Init } from "../libs/icon"
import Head from "next/head";

Init()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Github Asset Management</title>
        <link rel="manifest" href="manifest.json" />
        <link rel="shortcut icon" href="icons/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
