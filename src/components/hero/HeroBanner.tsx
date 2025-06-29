import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const HeroBanner = () => {
  return (
    <section className="relative bg-white overflow-hidden border-b border-black/10 pb-12">
      {/* Wavy background accent */}
      <div className="absolute left-0 bottom-0 w-full h-2/3 pointer-events-none select-none z-0">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#FDE7E4" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-12 px-4 md:px-8">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-red-600">Unleash Your</span><br />
            <span className="text-black">Digital Marketing</span><br />
            <span className="text-red-600">Superpowers!</span>
          </h1>
          <p className="text-lg md:text-xl text-black mb-8">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <Button
            variant="outline"
            className="border-2 border-red-500 text-red-600 font-bold px-8 py-3 rounded-xl hover:bg-red-50 hover:text-red-700 transition-colors text-lg shadow-none"
          >
            GET BUSINESS AUDIT
          </Button>
        </div>
        {/* Right: Dashboard Image & Stat Bubbles */}
        <div className="flex-1 flex flex-col items-center relative mt-12 md:mt-0">
          {/* Dashboard Image Placeholder */}
          <div className="relative w-[420px] h-[320px] md:w-[540px] md:h-[360px] rounded-2xl shadow-xl overflow-hidden">
            <Image
              src="/ss.png"
              alt="Dashboard UI"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Top-right stat bubble */}
            <div className="absolute -top-8 right-0 bg-[#F9B7A7] text-white text-center rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-lg border-4 border-white">
              <span className="text-3xl font-bold">1020</span>
              <span className="text-base font-semibold">Client Testimonials</span>
            </div>
            {/* Bottom-left stat bubble */}
            <div className="absolute -bottom-12 -left-12 bg-black text-white text-center rounded-full w-48 h-48 flex flex-col items-center justify-center shadow-lg border-4 border-white">
              <span className="text-3xl md:text-4xl font-extrabold">7,839,684</span>
              <span className="text-base font-semibold">leads generated</span>
            </div>
            {/* Bottom-right stat bubble */}
            <div className="absolute -bottom-10 -right-10 bg-black text-white text-center rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg border-4 border-white">
              <span className="text-3xl font-bold">30%</span>
              <span className="text-base font-semibold">ROI increased</span>
            </div>
          </div>
        </div>
      </div>
       
    </section>
  )
}

export default HeroBanner