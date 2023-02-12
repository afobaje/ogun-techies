import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
import StoreContext from "../Components/storeContext";
import { Poppins } from "@next/font/google";
import Head from "next/head";
import Icon from './../public/assets/Icon.svg'

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  

  
  return (
    <main className={poppins.className}>
        <Head>
        <title>Ogun Techies community</title>
        <link rel="shortcut icon" href={Icon.src}  />
      </Head>
      <Layout>
        <StoreContext>
          <Component {...pageProps} />
        </StoreContext>
      </Layout>
    </main>
  );
}
