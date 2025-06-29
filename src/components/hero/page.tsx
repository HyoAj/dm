import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import HeroBanner from './HeroBanner'
import Banner01 from './Banner01'

const Hero = () => {
  return (
    <div className='bg-white'>
      <HeroBanner />
      <Banner01 />
    </div>
  )
}

export default Hero