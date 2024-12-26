import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Footer_Gallery from '@/components/Footer_Gallery'
import Liquor_Data from '@/components/Liquor_Data';
import Navbar from '@/components/Navbar'
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="Liquor" />
      <Liquor_Data />
      <Footer_Gallery />
      <Footer />

    </>
  )
}

export default page