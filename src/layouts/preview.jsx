/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/no-css-tags */
import { useEffect, useRef } from "react";
import Head from "next/head";
import Script from "next/script";
//= Components
import Navbar from "../components/Navbars/MainNavbar";

const PreviewLayout = ({ children }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    var navbar = navbarRef.current;
    
    if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
      else navbar.classList.remove("nav-scroll");
    });
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/landing-preview/css/preview-style.css" />
      </Head>

      <Navbar navbarRef={navbarRef} />
      {children}
    </>
  );
};

export default PreviewLayout;
