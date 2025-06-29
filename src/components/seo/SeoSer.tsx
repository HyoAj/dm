"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Building2,
  MapPin,
  TrendingUp,
  ShoppingCart,
  Rocket,
  Settings,
  Trophy,
  Megaphone,
  DollarSign,
} from "lucide-react"

export default function SeoSer() {
  const [isVisible, setIsVisible] = useState(false)
  const [processVisible, setProcessVisible] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 100)
    const timer2 = setTimeout(() => setProcessVisible(true), 800)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const seoServices = [
    {
      icon: Globe,
      title: "Global SEO",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: Building2,
      title: "Local SEO",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: MapPin,
      title: "National SEO",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: TrendingUp,
      title: "Enterprise SEO",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce SEO",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: Rocket,
      title: "Start-Up SEO",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
  ]

  const processSteps = [
    { icon: Settings, label: "OPTIMIZATION" },
    { icon: Trophy, label: "IMPROVED RANKING" },
    { icon: Globe, label: "RELEVANT TRAFFIC" },
    { icon: Megaphone, label: "MORE LEADS" },
    { icon: DollarSign, label: "INCREASED ROI" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        {/* Types of SEO Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Types of SEO We Deliver</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {seoServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>

                    <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold transform hover:scale-105 transition-all duration-300">
                      VIEW MORE
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* How Can We Help Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            How Can We Help You Grow
            <br />
            Your Business through SEO?
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
            Just remember! Result-driven SEO does not just happen! It requires so many things including long-term
            commitment and robust strategies. But when you join your hands with Digital Magma - a top SEO company in
            Delhi NCR, you can expect stable and better results. Countless service providers are there charging a hefty
            amount but why pay even a single penny when the traffic is not relevant! Our search engine optimisation
            services, on the other hand, are not just focused on keywords and helping people find you online but driving
            relevant traffic to your website. JUST THINK and decide what you want!
          </p>

          {/* Process Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mb-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="flex items-center">
                  <div
                    className={`text-center transform transition-all duration-700 ${
                      processVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-75"
                    }`}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                    }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                      <IconComponent className="w-10 h-10 text-gray-700 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 max-w-[100px]">{step.label}</p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div
                      className={`hidden lg:block mx-4 transform transition-all duration-500 ${
                        processVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{
                        transitionDelay: `${(index + 1) * 200 + 100}ms`,
                      }}
                    >
                      <div className="w-8 h-0.5 bg-gray-400"></div>
                      <div className="w-0 h-0 border-l-8 border-l-gray-400 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-8 -mt-2"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <Button
            className={`bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-semibold text-lg transform hover:scale-105 transition-all duration-300 ${
              processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: "1200ms",
            }}
          >
            GET BUSINESS AUDIT
          </Button>
        </div>
      </div>
    </div>
  )
}
