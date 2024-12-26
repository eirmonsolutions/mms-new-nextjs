import About_Area from '@/components/about-page/About_Area'
import About_Explore from '@/components/about-page/About_Explore'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Footer_Gallery from '@/components/Footer_Gallery'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="About Us"/>
      <About_Area />
      <About_Explore />
      <Footer_Gallery />
      <Footer />

    </>
  )
}

export default page