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
import { Container } from '@mui/material';
import Link from 'next/link';

const SuccessPage = () => {
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
      name: "Contact Us",
      href: "#0"
    },
    {
      name: "Menu",
      href: "#0"
    },
    {
      name: "Gallery",
      href: "#0"
    },
    
  ]

  return (
    <>
      <Head>
        <title>Annalakshmi</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Annalakshmi Restaurant</title>
      </Head>
      <AppLayout type="restaurant" links={nav_links} navTheme="dark">
      <header style={{paddingTop: 80}}   data-scroll-index="0">
          <div className='header-main'>
            <Container style={{color:"#fff"}}>
              <h1>Your Reservation is Done!</h1><br/><h2>We will get back to you soon</h2>
              <Link href="/landing-preview"><button className="header-main-btn" style={{marginLeft: "-1px"}}>Back to Home  </button></Link>
            </Container>
          </div> 
          </header>
      </AppLayout>
    </>
  )
}

export default SuccessPage;
