import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Signpost, Eye, Target, TrendingUp, Clock, Network } from "lucide-react"

export default function PpcHero() {
  const benefits = [
    {
      icon: Signpost,
      title: "Low Barrier to Entry",
      description: "Organic Search is a primary source of website traffic, and hence, quality leads.",
    },
    {
      icon: Eye,
      title: "Improved Brand Visibility",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: Target,
      title: "Granular Targeting",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: TrendingUp,
      title: "Improved Brand Visibility",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: Clock,
      title: "Fast Results",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: Network,
      title: "Expansive Traction Channels",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-pink-300 rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 border border-pink-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-pink-300 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 border border-pink-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-red-500">Google Ads</span>
              <br />
              <span className="text-gray-900">Management</span>
              <br />
              <span className="text-gray-900">Service</span>
            </h1>

            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">
                  Three Service Level Plans to Fit Your Needs & Achieve Your Goals, Started Plan Starting at $119 a
                  Month
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">Certified Google Partner</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="leading-relaxed">Transparent Monthly Reporting</p>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-md bg-transparent"
            >
              GET BUSINESS AUDIT
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/google-ads-dashboard.png"
                alt="Google Ads Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* PPC Services Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-red-500 text-center mb-8">PPC Services</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Do you own a website or a blog that requires an online presence? Want a top rank in Google through Search
              Engine Optimization? Do not worry! Digital Magma, with its highly qualified team, will drive you towards
              your business goals. We are one of the best SEO services companies in Delhi that provide professional SEO
              services at affordable prices. Our SEO models are customized as per the need of the organization to
              deliver measurable results. We offer industry-driven SEO services that ensure maximum reach and the
              high-ranking of your website.
            </p>

            <p>
              Do you own a website or a blog that requires an online presence? Want a top rank in Google through Search
              Engine Optimization? Do not worry! Digital Magma, with its highly qualified team, will drive you towards
              your business goals. We are one of the best SEO services companies in Delhi that provide professional SEO
              services at affordable prices. Our SEO models are customized as per the need of the organization to
              deliver measurable results. We offer industry-driven SEO services that ensure maximum reach and the
              high-ranking of your website.
            </p>

            <p>
              Do you own a website or a blog that requires an online presence? Want a top rank in Google through Search
              Engine Optimization? Do not worry! Digital Magma, with its highly qualified team, will drive you towards
              your business goals. We are one of the best SEO services companies in Delhi that provide professional SEO
              services
            </p>
          </div>
        </div>

        {/* Why PPC is important Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-red-500 text-center mb-16">Why PPC is important?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why <span className="text-red-500">hire a Professional PPC Company?</span>
          </h2>
        </div>
      </div>
    </div>
  )
}
