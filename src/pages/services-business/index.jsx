/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Business/Header2';
import Services from '../../components/Business/Services3';
import Features from '../../components/Business/Features';
import Process from '../../components/Business/Process';
import Testimonials from '../../components/Business/Testimonials';
import Clients from '../../components/Business/Clients';
import Pricing from '../../components/Business/Pricing';
import Footer from "../../components/Footers/MainFooter";

const ServicesBusiness = () => {
  useEffect(() => {
    document.body.classList.add('index-bus1');

    const removeClasses = [
      'land-demo2', 'index-corporate',
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
        <title>Ravo - Services Business</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <FixedSearch />
        <Header bg="img/background/22.jpg" />
        <main className="position-re">
          <Services />
          <Features services={true} />
          <Process services={true} />
          <Testimonials curve={false} />
          <Clients />
          <Pricing />
          <Footer footerClass="main-footer bg-dark-blue bg-img" business={true} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default ServicesBusiness;