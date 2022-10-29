/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import SinglePost from '../../components/Blog/SinglePost';
import Footer from "../../components/Footers/MainFooter";

const BlogPost = () => {
  useEffect(() => {
    document.body.classList.add('index-bus1');

    const removeClasses = [
      'index-main', 'index-corporate',
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
        <title>Ravo - Blog Post</title>
      </Head>

      <MainLightLayout defaultTheme="dark" defaultLogoTheme="dark">
        <StickyBar />
        <FixedSearch />
        <main className="position-re pt-100">
          <SinglePost />
          <Footer footerClass="main-footer bg-dark-blue" />
        </main>
      </MainLightLayout>
    </>
  )
}

export default BlogPost;