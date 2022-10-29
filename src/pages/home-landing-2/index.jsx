/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Main/Header3';
import Clients from '../../components/Main/Clients';
import Services from '../../components/Main/Services3';
import About from '../../components/Main/About2';
import Portfolio from '../../components/Main/Portfolio3';
import Section from '../../components/Main/Section2';
import Testimonials from '../../components/Main/Testimonials3';
import Blog from '../../components/Main/Blog2';
import Footer from "../../components/Footers/DigitalFooter";

const HomeLanding2 = () => {
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
        <title>Ravo - Modern Agancy</title>
      </Head>

      <MainLightLayout defaultTheme={'dark'} defaultLogoTheme="dark">
        <StickyBar />
        <FixedSearch />
        <Header />
        <Clients slides={5} />
        <Services />
        <About />
        <Portfolio />
        <Section />
        <Testimonials />
        <Blog grblue={true} />
        <Footer footerClass="purple-light-bg position-re pb-40 mt-80" type="purple-light" />
      </MainLightLayout>
    </>
  )
}

export default HomeLanding2;