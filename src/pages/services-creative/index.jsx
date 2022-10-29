/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Creative/Header';
import Services from '../../components/Creative/Services';
import SecHalf from '../../components/Creative/SecHalf';
import States from '../../components/Creative/States';
import Testimonials from '../../components/Creative/Testimonials';
import Clients from '../../components/Creative/Clients';
import CallAction from '../../components/Creative/CallAction';
import Blog from '../../components/Creative/Blog';
import Footer from '../../components/Footers/MainFooter';

const ServicesCreative = () => {
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
        <title>Ravo - Services Creative</title>
      </Head>

      <MainLightLayout defaultTheme="dark" defaultLogoTheme="dark">
        <StickyBar />
        <FixedSearch />
        <Header title="Services." />
        <main className="main-content">
          <Services />
          <SecHalf />
          <States />
          <Testimonials />
          <Clients />
          <CallAction />
          <Blog />
          <Footer footerClass="main-footer bg-gray-light" creative={true} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default ServicesCreative;