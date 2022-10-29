/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Corporate/Header2';
import Hero from '../../components/Corporate/Hero2';
import Services from '../../components/Corporate/Services';
import Team from '../../components/Corporate/Team';
import Testimonials from '../../components/Corporate/Testimonials';
import Brands from '../../components/Corporate/Brands';
import Blog from '../../components/Corporate/Blog';
import Footer from "../../components/Footers/CorporateFooter";

const AboutCorporate = () => {
  useEffect(() => {
    document.body.classList.add('index-corporate');

    const removeClasses = [
      'land-demo2', 'index-bus1',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <div>
      <h1>huhiihi</h1>
    </div>
  )
}

export default AboutCorporate;