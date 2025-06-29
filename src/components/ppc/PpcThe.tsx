import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Monitor,
  Package,
  BarChart3,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  FileCheck,
  Search,
  PenTool,
  Activity,
} from "lucide-react"

export default function PpcThe() {
  const ppcServices = [
    {
      icon: Globe,
      title: "Search Ads",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: Monitor,
      title: "Display Ads",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: Package,
      title: "Product Listing Ads",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: BarChart3,
      title: "Remarketing",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: Smartphone,
      title: "Mobile Advertising",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
    {
      icon: ShoppingCart,
      title: "Google Shopping Ads",
      description:
        "We offer highly effective global SEO services so that you can bring clients for your business from the different corners of the world",
    },
  ]

  const processSteps = [
    { icon: TrendingUp, label: "INDUSTRY & COMPETITOR ANALYSIS" },
    { icon: FileCheck, label: "FULL ACCOUNT AUDIT AND SETUP" },
    { icon: Search, label: "KEYWORD LIST CREATION" },
    { icon: PenTool, label: "HIGH-CONVERTING COPY & EXTENSIONS" },
    { icon: Activity, label: "REGULAR TRACKING & REPORTING" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        {/* What is Included in our PPC Services Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What is Included in our PPC Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ppcServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-red-500" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>

                    <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold">
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
            Your Business through PPC?
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
            Just remember! Result-driven SEO does not just happen! It requires so many things including long-term
            commitment and robust strategies. But when you join your hands with Digital Marketers - a top SEO company in
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
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                      <IconComponent className="w-10 h-10 text-gray-700 group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 max-w-[120px] leading-tight">{step.label}</p>
                  </div>

                  {index < processSteps.length - 1 && (
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
