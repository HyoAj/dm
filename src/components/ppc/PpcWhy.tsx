import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function PpcWhy() {
  const benefits = [
    "Boosted ROI",
    "Daily Tracking & Monitoring",
    "Certified Professionals",
    "Customised Services",
    "Dedicated Team",
    "24/7 Support",
  ]

  const processes = [
    {
      title: "Keyword Research and Analysis",
      description: "Content focused digital campaigns on websites, SEO, and social media",
    },
    {
      title: "PPC Copywriting",
      description: "Budget-conscious digital campaigns for optimum results.",
    },
    {
      title: "Search Advertising",
      description: "Digital Marketing campaigns to ensure optimum results",
    },
    {
      title: "Conversion/Call/Sales Tracking",
      description: "360-degree campaigns with seamless integration across platforms",
    },
    {
      title: "Performance Reporting",
      description: "Data backed strategy at each stage of the digital marketing campaign",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Why hire a Professional PPC Company Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why <span className="text-red-500">hire a Professional PPC Company?</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left side - Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                  <ChevronRight className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform duration-200" />
                  <span
                    className={`text-lg font-semibold ${index === 0 ? "text-red-500" : "text-gray-900"} group-hover:text-red-500 transition-colors duration-200`}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Right side - Boosted ROI Details */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-500 mb-4">Boosted ROI</h3>
              <p className="text-gray-700 leading-relaxed">
                First-party data is one of the most powerful tools at your organization's disposal, which is why our
                pay-per-click advertising services make using first-party data in digital advertising fast and easy —
                saving time, streamlining and methods.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed">
                With our paid search advertising services, you can target first-party data segments — including your
                favourite ad platforms, from Google Ads to Facebook Advertising. And guess what? You don't have to be a
                data scientist to get started.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed">Data eligible for activation includes:</p>
            </div>
          </div>
        </div>

        {/* Our Processes Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left side - Illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative max-w-md">
                <Image
                  src="/ppc-process-illustration.png"
                  alt="PPC Process Illustration"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right side - Process Steps */}
            <div className="space-y-8">
              {/* Header with CTA */}
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-4xl font-bold text-gray-900">Our Processes</h2>
                <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold">
                  GET BUSINESS AUDIT
                </Button>
              </div>

              {/* Process Steps */}
              <div className="space-y-6">
                {processes.map((process, index) => (
                  <div key={index} className="border-l-4 border-gray-200 pl-6">
                    <h3 className="text-lg font-bold text-red-500 mb-2">{process.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
