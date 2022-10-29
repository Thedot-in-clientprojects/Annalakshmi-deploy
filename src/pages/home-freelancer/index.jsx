/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import AppLayout from '../../layouts/app-layout';
//= Components
import Header from '../../components/Freelancer/Header';
import Hero from '../../components/Freelancer/Hero';
import Portfolio from '../../components/Freelancer/Portfolio';
import Resume from '../../components/Freelancer/Resume';
import Testimonial from '../../components/Freelancer/Testimonials';
import Contact from '../../components/Freelancer/Contact';
import Footer from '../../components/Footers/FreelancerFooter';

const HomeFreelancer = () => {
  useEffect(() => {
    document.body.classList.add('index-freelancer');
    
    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-restaurant', 'nft-market',
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
      name: "Portfolio",
      href: "#0"
    },
    {
      name: "Resume",
      href: "#0"
    },
    {
      name: "testimonials",
      href: "#0"
    },
    {
      name: "Contact",
      href: "#0"
    }
  ]

  return (
    <>
      <Head>
        <title>Ravo - Freelancer</title>
      </Head>

      <AppLayout type="freelancer" links={nav_links} navTheme="dark">
        <Header />
        <main className="position-re">
          <Hero />
          <Portfolio />
          <Resume />
          <Testimonial />
          <Contact />
          <Footer />
        </main>
      </AppLayout>
    </>
  )
}

export default HomeFreelancer;