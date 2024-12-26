import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Footer_Gallery from '@/components/Footer_Gallery'
import Beer_Data from '@/components/Beer_Data';
import Navbar from '@/components/Navbar'
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="Beer" />
      <Beer_Data />
      <Footer_Gallery />
      <Footer />

    </>
  )
}

export default page