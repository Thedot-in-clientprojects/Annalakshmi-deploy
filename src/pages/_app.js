/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React from "react";
import Script from "next/script";
import Head from "next/head";
import ProgressScroll from "../components/Progress-Scroll";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Annalakshmi Restaurant Coimbatore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Component {...pageProps} />
      {/* <ProgressScroll /> */}

      <Script strategy="beforeInteractive" src="/js/bootstrap.bundle.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive"src="/js/simpleParallax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"></Script>
      <Script strategy="beforeInteractive" src="/landing-preview/js/parallax.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/main.js"></Script>
    </>
  );
}

export default MyApp;
