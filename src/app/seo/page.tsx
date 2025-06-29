import ContactSection from '@/components/hero/contact-section'
import TestimonialsFAQSection from '@/components/hero/testimonials-faq'
import { SeoCl } from '@/components/seo/SeoCl'
import SeoHero from '@/components/seo/SeoHero'
import SeoSer from '@/components/seo/SeoSer'
import { UsVsThemSection } from '@/components/seo/us-vs-them-section'
import { WhatWeBringSection } from '@/components/seo/what-we-bring-section'
import WhySeo from '@/components/seo/WhySeo'
import React from 'react'

const Seo = () => {
  return (
    <div>
        <SeoHero />
        <WhySeo />
        <SeoSer />
        <WhatWeBringSection />
        <UsVsThemSection />
        <SeoCl />
        <TestimonialsFAQSection />
              <ContactSection />
    </div>
  )
}

export default Seo