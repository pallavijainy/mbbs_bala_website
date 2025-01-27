import React from 'react'
import Navbar from './layout/Navbar'
import HeroSection from './component/HeroSection'
import Partners from './component/Partners'
import WhyChoose from './component/WhyChoose'
import ConnectWithCommunity from './component/ConnectWithCommunity'
import ProvenTrackRecord from './component/ProvenTrackRecord'
import Gallery from './component/Gallery'
import MedicalDegrees from './component/MedicalDegrees'
import GetInTouch from './component/GetInTouch'
import ContactUs from './component/ContactUs'
import FAQ from './component/FAQ'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
    <HeroSection/>
    <Partners/>
    <WhyChoose/>
      {/* <HeroSection /> */}
      <ConnectWithCommunity />
      <ProvenTrackRecord />
      <Gallery/>
      <MedicalDegrees/>
      <GetInTouch/>
      {/* <ContactUs/>
      <FAQ/>
      <Footer/> */}
    </>
  )
}

export default App
