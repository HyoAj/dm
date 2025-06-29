import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PpcT() {
  const features = [
    "13+ Years of Experience",
    "Professional Tools",
    "A Recognised Firm",
    "Customized Strategy",
    "Positive Reception",
    "Delivers Results for Any Industry",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* We got Data to prove it Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
          {/* Left side - Mobile Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src="/mobile-seo-metrics.png"
                alt="SEO Metrics Mobile Display"
                width={300}
                height={600}
                className="drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">We got Data to prove it</h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At EZ Rankings - Best SEO Company India, we understand that no single plan can serve all. That's why we
                focus on delivering service plans that can fulfill plans for large as well as small businesses. Based on
                our experience, we've crafted the most effective, yet economical SEO services that can serve businesses
                at large. For your personalized strategy, better connect with us today!
              </p>

              <p>
                At EZ Rankings - Best SEO Company India, we understand that no single plan can serve all. That's why we
                focus on delivering service plans that can fulfill plans for large as well as small businesses. Based on
                our experience, we've crafted the most effective, yet economical SEO services that can serve businesses
                at large. For your personalized strategy, better connect with us today!
              </p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold">
              GET BUSINESS AUDIT
            </Button>
          </div>
        </div>

        {/* What do Digital Magma Bring Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                What do <span className="text-red-500">Digital Magma</span>
                <br />
                Bring in for Customers
              </h2>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold lg:block hidden">
                GET BUSINESS AUDIT
              </Button>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Our SEO team consists of highly experienced professionals to deliver high value to your business. As
              search algorithms are continuously evolving to serve the best user experience, our SEO experts keep on top
              of the latest algorithm updates. They all are well-versed in improving page rankings and increasing
              relevant traffic. We provide you with result-driven and transparent service through our expertise in both
              on-page and off-page link building along with technical SEO implementation.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 border-l-4 ${
                    index === 0
                      ? "border-red-500 bg-red-50"
                      : index === 1
                        ? "border-red-500 bg-red-500 text-white"
                        : "border-gray-200 bg-gray-50"
                  } transition-all duration-300 hover:border-red-500 hover:bg-red-50 cursor-pointer`}
                >
                  <span className={`font-semibold ${index === 1 ? "text-white" : "text-red-500"}`}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold lg:hidden w-full">
              GET BUSINESS AUDIT
            </Button>
          </div>

          {/* Right side - Experience Details */}
          <div className="bg-gray-100 p-8 rounded-lg h-full flex items-center">
            <div>
              <p className="text-gray-700 leading-relaxed">
                We have provided services to numerous clients in numerous fields thanks to our extensive experience of
                13+ years. Delivering cutting-edge SEO services to our clients is how we put our skills, experience, and
                knowledge to work. We have provided services to numerous clients in numerous fields thanks to our
                extensive experience of 13+ years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
