/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Creative/Header';
import About from '../../components/Creative/About';
import Numbers from '../../components/Creative/Numbers';
import Team from '../../components/Creative/Team';
import Skills from '../../components/Creative/Skills';
import Services from '../../components/Creative/Services';
import Testimonials from '../../components/Creative/Testimonials';
import Blog from '../../components/Creative/Blog';
import Clients from '../../components/Creative/Clients';
import CallAction from '../../components/Creative/CallAction';
import Footer from '../../components/Footers/MainFooter';

const AboutCreative = () => {
  useEffect(() => {
    document.body.classList.add('cr-agency');

    const removeClasses = [
      'land-demo2', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'index-bus1',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Ravo - About Creative</title>
      </Head>

      <MainLightLayout defaultTheme="dark" defaultLogoTheme="dark">
        <StickyBar />
        <FixedSearch />
        <Header title="About Us." />
        <main className="main-content">
          <About />
          <Numbers />
          <Team />
          <Skills />
          <Services />
          <Testimonials />
          <Blog />
          <Clients pt={true} />
          <CallAction />
          <Footer footerClass="main-footer bg-gray-light" creative={true} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default AboutCreative;