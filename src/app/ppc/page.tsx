import ContactSection from '@/components/hero/contact-section'
import TestimonialsFAQSection from '@/components/hero/testimonials-faq'
import PpcHero from '@/components/ppc/PpcHero'
import PpcT from '@/components/ppc/PpcT'
import PpcThe from '@/components/ppc/PpcThe'
import PpcWhy from '@/components/ppc/PpcWhy'
import { UsVsThemSection } from '@/components/seo/us-vs-them-section'
import React from 'react'

const PPC = () => {
  return (
    <div>
        <PpcHero />
        <PpcWhy />
        <PpcThe />
        <PpcT />
        <UsVsThemSection />
        <TestimonialsFAQSection />
              <ContactSection />
    </div>
  )
}

export default PPC