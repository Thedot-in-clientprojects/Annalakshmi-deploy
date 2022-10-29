/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import AppLayout from '../../layouts/app-layout';
//= Components
import Contact from '../../components/Architecture/Contact';
import Footer from '../../components/Footers/ArchitectureFooter';

const ContactArchitecture = () => {
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
      href: "/home-architecture"
    },
    {
      name: "About",
      href: "/home-architecture"
    },
    {
      name: "Services",
      href: "/home-architecture"
    },
    {
      name: "Works",
      href: "/home-architecture"
    },
    {
      name: "testimonials",
      href: "/home-architecture"
    },
    {
      name: "Blog",
      href: "/home-architecture"
    },
    {
      name: "Contact",
      href: "#0"
    }
  ]

  return (
    <>
      <Head>
        <title>Ravo - Contact Architecture</title>
      </Head>

      <AppLayout type="architecture" links={nav_links}>
        <main className="position-re">
          <div className="bg-pattern bg-img" style={{ backgroundImage: "url('arch/img/pattern-bg.svg')" }}></div>
          <Contact />
          <Footer hideTop={true} />
        </main>
      </AppLayout>
    </>
  )
}

export default ContactArchitecture;