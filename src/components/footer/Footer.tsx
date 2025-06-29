import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const locations = [
  {
    country: 'India',
    flag: '🇮🇳',
    address: [
      'Bethany Corner',
      'Address: 801 S Greenville Ave #103,',
      'Allen, TX 75002, United States',
      'Areas served: Denton and nearby areas',
    ],
  },
  {
    country: 'USA',
    flag: '🇺🇸',
    address: [
      'Bethany Corner',
      'Address: 801 S Greenville Ave #103,',
      'Allen, TX 75002, United States',
      'Areas served: Denton and nearby areas',
    ],
  },
  {
    country: 'UAE',
    flag: '🇦🇪',
    address: [
      'Bethany Corner',
      'Address: 801 S Greenville Ave #103,',
      'Allen, TX 75002, United States',
      'Areas served: Denton and nearby areas',
    ],
  },
]

const pages = [
  'Home',
  'About',
  'Blog',
  'Pricing Single',
  'Contact',
  'Services',
]

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Locations */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image src="/globe.svg" alt="Digital Magma Logo" width={48} height={48} />
            <div>
              <div className="text-2xl font-bold leading-tight">DIGITAL</div>
              <div className="text-2xl font-bold leading-tight">MAGMA</div>
            </div>
          </div>
          {locations.map((loc, idx) => (
            <div key={loc.country} className="mb-6">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <span className="text-red-500">&#128205;</span>
                Location | {loc.country} <span>{loc.flag}</span>
              </div>
              <div className="mt-2 text-sm text-gray-300">
                {loc.address.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Pages */}
        <div>
          <div className="flex items-center gap-2 text-xl font-semibold mb-4">
            <span className="text-red-500">&#128451;</span> Pages
          </div>
          <ul className="space-y-2 text-gray-300">
            {pages.map((page) => (
              <li key={page} className="hover:text-white cursor-pointer transition-colors">{page}</li>
            ))}
          </ul>
          <div className="mt-10 text-lg font-semibold">Get in touch with</div>
          <Button className="mt-2 w-full bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white flex items-center gap-2">
            <span className="text-2xl">&#128222;</span> +1 917 000 1212
          </Button>
          <div className="mt-2 text-sm text-gray-300">marketing@digitalmagma.com</div>
        </div>
        {/* Services */}
        <div>
          <div className="flex items-center gap-2 text-xl font-semibold mb-4">
            <span className="text-red-500">&#128451;</span> Services
          </div>
          <ul className="space-y-2 text-gray-300">
            {pages.map((page) => (
              <li key={page} className="hover:text-white cursor-pointer transition-colors">{page}</li>
            ))}
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <div className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</div>
          <form className="flex gap-2 mb-4">
            <Input type="email" placeholder="Enter Your Email" className="bg-white text-black flex-1" />
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6">Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer