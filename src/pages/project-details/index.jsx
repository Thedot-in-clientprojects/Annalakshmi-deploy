/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Project/Header';
import Intro from '../../components/Project/Intro';
import Video from '../../components/Project/Video';
import Details from '../../components/Project/Details';
import Description from '../../components/Project/Description';
import NextPrev from '../../components/Project/NextPrev';
import Footer from "../../components/Footers/MainFooter";

const ProjectDetails = () => {
  useEffect(() => {
    const removeClasses = [
      'index-bus1', 'index-main', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'land-demo2', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Ravo - Project Details</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <FixedSearch />
        <div className="wrapper">
          <Header />
          <Intro />
          <Video />
          <Details />
          <Description />
          <NextPrev />
          <Footer footerClass="main-footer bg-dark-blue" />
        </div>
      </MainLightLayout>
    </>
  )
}

export default ProjectDetails;