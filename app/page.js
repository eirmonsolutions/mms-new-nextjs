import About_Area from '@/components/About_Area';
import Appointment_area from '@/components/Appointment_area';
import Banner from '@/components/Banner';
import Featured_Menu from '@/components/Featured_Menu';
import Features_Area from '@/components/Features_Area';
import Footer from '@/components/Footer';
import Footer_Gallery from '@/components/Footer_Gallery';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About_Area />
      <Featured_Menu />
      <Features_Area />
      <Appointment_area />
      <Footer_Gallery />
      <Footer />
    </>
  )
}

export default page;


export const metadata = {
  title: "M & M Liquor Inc",
  description: "",
  keywords: [""],
  openGraph: {
    title: "M & M Liquor Inc",
  },
  alternates: {
    canonical: "https://mmsliquor.com/",
    shortlink: "https://mmsliquor.com/",
  },

};
