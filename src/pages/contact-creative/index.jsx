/* eslint-disable @next/next/no-css-tags */
import { useState, useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Creative/Header';
import Contact from '../../components/Creative/Contact';
import Footer from '../../components/Footers/MainFooter';


const ContactCreative = () => {
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


  const [customerName, setcustomerName] = useState('');
  const [customerPhone, setcustomerPhone] = useState('');
  const [customerBookingDate, setcustomerBookingDate] = useState(new Date().toDateString())


  return (
    <>
      <Head>
        <title>Ravo - Contact Creative</title>
      </Head>

      <MainLightLayout defaultTheme="dark" defaultLogoTheme="dark">
        {/* <StickyBar /> */}
        {/* <FixedSearch /> */}
        <Header title="Contact Us." />
        <main className="main-content">
          <Contact />
          <Footer footerClass="main-footer bg-gray-light" creative={true} />
        </main>
      </MainLightLayout>
    </>
  )
}

export default ContactCreative;