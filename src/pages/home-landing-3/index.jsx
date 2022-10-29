/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Main/Header2';
import Clients from '../../components/Main/Clients';
import Services from '../../components/Main/Services2';
import About from '../../components/Main/About';
import Process from '../../components/Main/Process2';
import Portfolio from '../../components/Main/Portfolio2';
import Skills from '../../components/Main/Skills';
import Testimonials from '../../components/Main/Testimonials2';
import Blog from '../../components/Main/Blog2';
import Footer from "../../components/Footers/DigitalFooter";

const HomeLanding3 = () => {
  useEffect(() => {
    document.body.classList.add('land-demo2');

    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Ravo - Digital Studio</title>
      </Head>

      <MainLightLayout defaultLogoTheme="dark">
        <StickyBar />
        <FixedSearch />
        <Header />
        <Clients />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Blog />
        <Footer footerClass="pb-40" type="purple-red" />
      </MainLightLayout>
    </>
  )
}

export default HomeLanding3;