/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import AppLayout from '../../layouts/app-layout';
//= Components
import Header from '../../components/Architecture/Header';
import Hero from '../../components/Architecture/Hero';
import Numbers from '../../components/Architecture/Numbers';
import Services from '../../components/Architecture/Services';
import Portfolio from '../../components/Architecture/Portfolio';
import Testimonials from '../../components/Architecture/Testimonials';
import Blog from '../../components/Architecture/Blog';
import Footer from '../../components/Footers/ArchitectureFooter';

const HomeArchitecture = () => {
  useEffect(() => {
    document.body.classList.add('index-arch');
    
    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-restaurant', 'index-freelancer',
      'cr-agency', 'mobile-app', 'gr-orange-bg',
      'land-demo2', 'index-main', 'nft-market'
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
      name: "Services",
      href: "#0"
    },
    {
      name: "Works",
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
      href: "/contact-arch"
    }
  ]

  return (
    <>
      <Head>
        <title>Ravo - Home Architecture</title>
      </Head>

      <AppLayout type="architecture" links={nav_links}>
        <Header />
        <main className="position-re">
          <div className="bg-pattern bg-img" style={{ backgroundImage: "url('arch/img/pattern-bg.svg')" }}></div>
          <Hero />
          <Numbers />
          <Services />
          <Portfolio />
          <Testimonials />
          <Blog />
          <Footer />
        </main>
      </AppLayout>
    </>
  )
}

export default HomeArchitecture;