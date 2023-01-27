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
        <Header />
        <main className="position-re">
          {/* <Features /> */}
          <Hero />
          <Button className="contact-btn" onClick={scrollToBottom}>Contact Us</Button>
          <Services />
          <Gallery />
          <Testimonials />
          {/* <CallAction /> */}
          
          < Footer/>
        </main>
      </AppLayout>
    </>
  )
}

export default HomeRestaurant;









// /* eslint-disable @next/next/no-css-tags */
// import { useEffect } from 'react';
// import Head from 'next/head';
// //= Layout
// import PreviewLayout from '../../layouts/preview';
// //= Components
// import Header from '../../components/Landing-Preview/Header';
// import Feet from '../../components/Landing-Preview/Feet';
// import Demos from '../../components/Landing-Preview/Demos';
// import Counter from '../../components/Landing-Preview/Counter';
// import Portfolio from '../../components/Landing-Preview/Portfolio';
// import Info from '../../components/Landing-Preview/Info';
// import BestFeatures from '../../components/Landing-Preview/BestFeatures';
// import Responsive from '../../components/Landing-Preview/Responsive';
// import AllFeatures from '../../components/Landing-Preview/AllFeatures';
// import Testimonials from '../../components/Landing-Preview/Testimonials';
// import CallToAction from '../../components/Landing-Preview/CallAction';

// const LandingPreview = () => {
//   useEffect(() => {
//     document.body.classList.add('index-main');

//     const removeClasses = [
//       'index-bus1', 'index-corporate',
//       'index-restaurant', 'index-arch',
//       'index-freelancer', 'cr-agency',
//       'land-demo2', 'mobile-app',
//       'gr-orange-bg', 'nft-market'
//     ];

//     document.body.classList.remove(...removeClasses);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Ravo - Landing Preview</title>
//       </Head>

//       <PreviewLayout>
//         <Header />
//         <Feet />
//         <Demos />
//         <Counter />
//         <Portfolio />
//         <Info />
//         <BestFeatures />
//         <Responsive />
//         <AllFeatures />
//         <Testimonials />
//         <CallToAction />
//       </PreviewLayout>
//     </>
//   )
// }

// export default LandingPreview;