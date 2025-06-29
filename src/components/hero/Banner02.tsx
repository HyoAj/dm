import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

const Banner02 = () => {
  return (
     <section className="bg-rose-50 w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore the services</h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Data backed strategy at each stage of the digital marketing campaign
            </p>
          </div>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-base font-semibold self-start lg:self-auto"
            size="lg"
          >
            GET BUSINESS AUDIT
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Social Media Marketing */}
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-6 h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Rocket with social media icons illustration"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Marketing</h3>
              <p className="text-gray-600">
                A good design is the first good impression you would make on your customers.
              </p>
            </CardContent>
          </Card>

          {/* Digital Marketing - Large Card */}
          <Card className="bg-white border-0 shadow-sm md:col-span-1 lg:col-span-2 lg:row-span-1">
            <CardContent className="p-6 h-full">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
                  <p className="text-gray-600">
                    Begin your journey to create revenue-generating digital solutions for your business.
                  </p>
                </div>
                <div className="lg:w-1/2 relative h-48 lg:h-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Digital marketing funnel with laptop and analytics illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PR & Content */}
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-6 h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Person presenting charts and analytics illustration"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PR & Content</h3>
              <p className="text-gray-600">
                A good design is the first good impression you would make on your customers.
              </p>
            </CardContent>
          </Card>

          {/* Web Technology */}
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-6 h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="E-commerce shopping cart and technology illustration"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Technology</h3>
              <p className="text-gray-600">
                A good design is the first good impression you would make on your customers.
              </p>
            </CardContent>
          </Card>

          {/* Branding Identity */}
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-6 h-48 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Person with branding documents and design elements illustration"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Branding Identity</h3>
              <p className="text-gray-600">
                A good design is the first good impression you would make on your customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Banner02