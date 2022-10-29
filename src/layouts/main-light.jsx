/* eslint-disable @next/next/no-css-tags */
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "../components/Navbars/MainNavbar";

const MainLayout = ({ children, defaultTheme, defaultLogoTheme }) => {
  const [theme] = useState("light");
  const [logoTheme, setLogoTheme] = useState("light");
  const navbarRef = useRef(null);

  useEffect(() => {
    var navbar = navbarRef.current;
    
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
      setLogoTheme("dark");
    } else {
      navbar.classList.remove("nav-scroll");
      setLogoTheme("light");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        setLogoTheme("dark");
      } else {
        navbar.classList.remove("nav-scroll");
        setLogoTheme("light");
      }
    });
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      
      <Navbar navbarRef={navbarRef} theme={defaultTheme ? defaultTheme : theme} logoTheme={defaultLogoTheme ? defaultLogoTheme : logoTheme} />
      {children}
    </>
  );
};

export default MainLayout;
