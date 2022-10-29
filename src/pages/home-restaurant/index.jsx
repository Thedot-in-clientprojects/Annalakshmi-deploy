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

const HomeRestaurant = () => {
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
      name: "Home",
      href: "#0"
    },
    {
      name: "About",
      href: "#0"
    },
    {
      name: "Menu",
      href: "#0"
    },
    {
      name: "Services",
      href: "#0"
    },
    {
      name: "Gallery",
      href: "#0"
    },
    {
      name: "testimonials",
      href: "#0"
    },
    {
      name: "Blog",
      href: "#0"
    },
    {
      name: "Contact",
      href: "/contact-creative"
    }
  ]

  return (
    <>
      <Head>
        <title>Ravo - Restaurant</title>
      </Head>

      <AppLayout type="restaurant" links={nav_links} navTheme="dark">
        <Header />
        <main className="position-re">
          
          <Hero />
          <Menu />
          <Services />
          <Gallery />
          <Testimonials />
          <CallAction />
          <Blog />
          <Footer />
        </main>
      </AppLayout>
    </>
  )
}

export default HomeRestaurant;