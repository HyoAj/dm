import ContactSection from '@/components/hero/contact-section'
import TestimonialsFAQSection from '@/components/hero/testimonials-faq'
import { UsVsThemSection } from '@/components/seo/us-vs-them-section'
import WebDHero from '@/components/webd/webd-hero'
import WebDP from '@/components/webd/webd-procces'
import WebpTech from '@/components/webd/webp-tech'
import WebpWhy from '@/components/webd/webp-why'
import React from 'react'

const WebD = () => {
  return (
    <div>
        <WebDHero />
        <WebDP />
        <WebpWhy />
        <WebpTech />
        <UsVsThemSection />
         <TestimonialsFAQSection />
              <ContactSection />
    </div>
  )
}

export default WebD