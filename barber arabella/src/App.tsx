import type { FC } from 'react'

import AboutSection from './components/AboutSection'
import BookingSection from './components/BookingSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import GallerySection from './components/GallerySection'
import Header from './components/Header'
import Hero from './components/Hero'
import PricingSection from './components/PricingSection'
import ServicesSection from './components/ServicesSection'
import TeamSection from './components/TeamSection'
import TestimonialsSection from './components/TestimonialsSection'

const App: FC = () => (
  <div className="flex min-h-screen flex-col bg-night font-body text-white">
    <Header />
    <main className="flex-1">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
)

export default App
