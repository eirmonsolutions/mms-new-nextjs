import Breadcrumb from '@/components/Breadcrumb'
import Contact_Data from '@/components/Contact_Data'
import Footer from '@/components/Footer'
import Footer_Gallery from '@/components/Footer_Gallery'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb title="Contact Us" />
      <Contact_Data />
      <Footer_Gallery />
      <Footer />

    </>
  )
}

export default page