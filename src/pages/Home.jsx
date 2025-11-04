import React from 'react'
import Navbar from '../components/Navbar'
import AnnouncementBar from '../components/AnnouncementBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import HighlightsSection from '../components/HighlightSection'
import EventsSection from '../components/EventSection'
import Carousel from '../components/Carousel'
import FaqSection from '../components/FaqSection'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import TrustedPartnersSection from '../components/TrustedPartnersSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <AnnouncementBar />
      <HeroSection />
      <Carousel/>
        <AboutSection />
        <HighlightsSection />
        <EventsSection />
        <Carousel />
        <FaqSection />
        <Testimonials />
        <TrustedPartnersSection />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
