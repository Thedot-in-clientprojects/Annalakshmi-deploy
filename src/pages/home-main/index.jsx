/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Main/Header1';
import IntroUp from '../../components/Main/IntroUp';
import IntroOutBox from '../../components/Main/IntroOut';
import Services from '../../components/Main/Services1';
import Portfolio from '../../components/Main/Portfolio1';
import Section from '../../components/Main/Section';
import Process from '../../components/Main/Process1';
import Testimonials from '../../components/Main/Testimonials1';
import Numbers from '../../components/Main/Numbers';
import Team from '../../components/Main/Team';
import CallToAction from '../../components/Main/CallAction';
import Blog from '../../components/Main/Blog1';
import Footer from "../../components/Footers/MainFooter";

const HomeMain = () => {
  useEffect(() => {
    document.body.classList.add('index-main');

    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'land-demo2', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Ravo - Home Main</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <FixedSearch />
        <Header />
        <IntroUp />
        <IntroOutBox />
        <Services />
        <Portfolio />
        <Section />
        <Process />
        <Testimonials />
        <Numbers />
        <Team />
        <CallToAction />
        <Blog />
        <Footer footerClass="main-footer bg-dark-blue" />
      </MainLightLayout>
    </>
  )
}

export default HomeMain;