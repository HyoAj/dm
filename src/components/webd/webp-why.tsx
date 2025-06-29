import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Search, Palette, Clock, Settings, Monitor, TestTube, Users, Award } from "lucide-react"

export default function WebpWhy() {
  const serviceProviderBenefits = [
    {
      icon: Globe,
      title: "Dedicated Web Developer",
      description: "Organic Search is a primary source of website traffic, and hence, quality leads.",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly Websites",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: Search,
      title: "SEO Friendly",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: Palette,
      title: "Custom Made Websites",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: Clock,
      title: "Quick Response Team",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: Settings,
      title: "Flexible Processes",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
  ]

  const developmentBenefits = [
    { icon: Monitor, label: "CROSS-BORDER COMPATIBILITY" },
    { icon: Palette, label: "ATTRACTIVE UI/UX" },
    { icon: TestTube, label: "FULLY TESTED WEBSITES" },
    { icon: Users, label: "USER-FRIENDLY PRODUCT" },
    { icon: Award, label: "HIGH QUALITY STANDARDS" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        {/* Why Should you choose Digital Magma Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 max-w-4xl mx-auto leading-tight">
            Why Should you choose Digital
            <br />
            Magma as your service provider?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceProviderBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="group">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-red-500" />
                    </div>

                    <div className="w-full">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 border-b-2 border-gray-900 pb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Benefits of Our Website Development Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Benefits of Our
            <br />
            Website Development Services
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
            Just remember! Result-driven SEO does not just happen! It requires so many things including long-term
            commitment and robust strategies. But when you join your hands with Digital Marketers - a top SEO company in
            Delhi NCR, you can expect stable and better results. Countless service providers are there charging a hefty
            amount but why pay even a single penny when the traffic is not relevant! Our search engine optimisation
            services, on the other hand, are not just focused on keywords and helping people find you online but driving
            relevant traffic to your website. JUST THINK and decide what you want!
          </p>

          {/* Development Benefits Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mb-12">
            {developmentBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                      <IconComponent className="w-10 h-10 text-gray-700 group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 max-w-[120px] leading-tight">{benefit.label}</p>
                  </div>

                  {index < developmentBenefits.length - 1 && (
                    <div className="hidden lg:block mx-4">
                      <div className="w-8 h-0.5 bg-gray-400"></div>
                      <div className="w-0 h-0 border-l-8 border-l-gray-400 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-8 -mt-2"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-semibold text-lg">
            GET BUSINESS AUDIT
          </Button>
        </div>
      </div>
    </div>
  )
}
