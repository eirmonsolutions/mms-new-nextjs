import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Footer_Gallery from '@/components/Footer_Gallery'
import Wine_Data from '@/components/Wine_Data';
import Navbar from '@/components/Navbar'
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="Wine" />
      <Wine_Data />
      <Footer_Gallery />
      <Footer />

    </>
  )
}

export default page