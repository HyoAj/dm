import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Banner01 = () => {
  return (
    <div className='bg-white flex flex-col md:flex-col justify-between items-center'>
         <div>
             <h1 className='text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-red-600'>
                We Define Business Success
             </h1>
             <h1 className='text-4xl md:text-5xl font-extrabold text-center leading-tight mb-4 text-black'>
                Like no one does
             </h1>
         </div>
          <section className="bg-white w-full">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="relative h-80 lg:h-full lg:order-last">
            <Image
              src="/banner.png"
              alt="Dashboard analytics shown on a computer monitor"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-red-500 sm:text-3xl">We Define Businesses</h2>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Like no one does
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 mx-auto lg:mx-0">
              Lorem Ipsum labore magna ut malesuada vel mollit viverra malesuada qui turpis exercitation at vel Netus
              sunt diam occaecat Quis enim Ut nunc Morbi at anim vulputate Lorem ipsum Hac nulla consectetaur odio ipsum
              dolore Nibh dolor ex aute nisi sem Netus aliquip proin viverra nunc laboris ullamco eiusmod in odio
              aliqua. Sit posuere egestas. do senectus minim Ultricies
            </p>
            <div className="mt-8 flex justify-center gap-x-6 lg:justify-start">
              <Button
                className="rounded-md border-2 border-red-500 bg-transparent px-8 py-3 text-base font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                variant="outline"
                size="lg"
              >
                GET BUSINESS AUDIT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='bg-white w-full'>
         <div className="relative h-80  lg:h-screen lg:order-last">
            <Image
              src="/Ss01.png"
              alt="Dashboard analytics shown on a computer monitor"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
      </div>
 </div>
 
    </div>
  )
}

export default Banner01