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
import { Button } from '@mui/material';

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
        name: "Menu",
        href: "/menu"
    },
    {
      name: "Contact Us",
      href: "#1"
    }
    
    
    
  ]
  const scrollToBottom = () => { window. scrollTo({ top: document. documentElement. scrollHeight, behavior: 'smooth', }); }

  return (
    <>
      <Head>
        <title>Annalakshmi</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Annalakshmi Restaurant</title>
      </Head>
      <AppLayout type="restaurant" links={nav_links} navTheme="dark">
        {/* <Header /> */}
        <main className="position-re">
          {/* <Features /> */}
          <Menu />
          <Button className="contact-btn" onClick={scrollToBottom}>Contact Us</Button>
          <Footer />
        </main>
      </AppLayout>
    </>
  )
}

export default HomeRestaurant;