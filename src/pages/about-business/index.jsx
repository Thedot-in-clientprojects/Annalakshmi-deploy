/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import AppLayout from '../../layouts/app-layout';
//= Components
import Header from '../../components/Resturant/Header';
import Features from '../../components/Resturant/Features';
import Hero from '../../components/Resturant/Hero';
import Menu from '../../components/Resturant/Menu';
import Services from '../../components/Resturant/Services';
import Gallery from '../../components/Resturant/Gallery';
import Testimonials from '../../components/Resturant/Testimonials';
import CallAction from '../../components/Resturant/CallAction';
import Blog from '../../components/Resturant/Blog';
import Footer from '../../components/Footers/RestaurantFooter';
import AboutOne from '../../components/about/About';

const About = () => {
  useEffect(() => {
    document.body.classList.add('index-restaurant');
    
    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-freelancer', 'nft-market',
      'cr-agency', 'mobile-app', 'gr-orange-bg',
      'land-demo2', 'index-main', 'index-arch'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  const nav_links = [
    {
      name: "About",
      href: "/about-business"
    },
    {
      name: "Menu",
      href: "#0"
    },
    {
      name: "Gallery",
      href: "#0"
    },
    {
      name: "Contact Us",
      href: "#0"
    }
  ]

  return (
    <>
      <Head>
        <title>Annalakshmi Restaurant</title>
      </Head>

      <AppLayout type="restaurant" links={nav_links} navTheme="dark">
        {/* <Header /> */}
        <main className="position-re">
          {/* <Features /> */}
          <AboutOne />
          <Footer />
        </main>
      </AppLayout>
    </>
  )
}

export default About;
