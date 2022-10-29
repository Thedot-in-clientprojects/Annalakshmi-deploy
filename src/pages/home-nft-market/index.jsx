/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import AppLayout from '../../layouts/app-layout';
//= Components
import Header from '../../components/NFTs/Header';
import Features from '../../components/NFTs/Features';
import Explore from '../../components/NFTs/Explore';
import About from '../../components/NFTs/About';
import Items from '../../components/NFTs/Items';
import Collection from '../../components/NFTs/Collection';
import Creators from '../../components/NFTs/Creators';
import Footer from '../../components/Footers/NFTFooter';

const HomeNFTMarketplace = () => {
  useEffect(() => {
    document.body.classList.add('nft-market');
    
    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-restaurant', 'index-freelancer',
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
      name: "Live Bidding",
      href: "#0"
    },
    {
      name: "Explore",
      href: "#0"
    },
    {
      name: "About",
      href: "#0"
    },
    {
      name: "Collections",
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
        <title>Ravo - NFTs Marketplace</title>
      </Head>

      <AppLayout type="nft-market" links={nav_links}>
        <Header />
        <Features />
        <Explore />
        <About />
        <Items />
        <Collection />
        <Creators />
        <Footer />
      </AppLayout>
    </>
  )
}

export default HomeNFTMarketplace;