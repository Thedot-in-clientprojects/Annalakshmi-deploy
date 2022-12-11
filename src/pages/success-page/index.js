import Head from 'next/head';
import React from 'react'
import Navbar from '../../components/Admin/Shared/Navbar'
import Header from '../../components/Resturant/Header';
import AppLayout from '../../layouts/app-layout';
import Footer from '../../components/Footers/RestaurantFooter';


function SuccessPage() {


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
    <div>
    <Head>
        <title>Annalakshmi</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Annalakshmi Restaurant - Booking Success</title>
      </Head>
      <AppLayout type="restaurant" links={nav_links} navTheme="dark">
        <main className="position-re">
            <h1>
                Thank You, We will reach out to you soon :-)
            </h1>
          <Footer />
        </main>
      </AppLayout>
    
    </div>
  )
}

export default SuccessPage