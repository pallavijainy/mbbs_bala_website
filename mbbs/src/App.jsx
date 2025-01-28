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
import AdmissionSection from './component/AdmissionSection'
import NewCollege from './component/NewCollege'
import WorkProcess from './component/WorkProcess'
import TestimonialSection from './component/TestimonialSection'
import TestimonialCard from './component/TestinomialCard'

const App = () => {
  return (
    <>
    <HeroSection/>
    <Partners/>
      <ConnectWithCommunity />
      <ProvenTrackRecord />
    <WhyChoose/>
    <AdmissionSection/>
    <WorkProcess/>
    <NewCollege/>
    <TestimonialSection/>
    <TestimonialCard/>
      <Gallery/>
      <MedicalDegrees/>
      <GetInTouch/>
      <ContactUs/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
