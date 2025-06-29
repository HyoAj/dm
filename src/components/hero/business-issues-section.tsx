import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BusinessIssuesSection() {
  const statistics = [
    {
      percentage: "75%",
      description: "of searchers do not scroll past the first page of SERPs.",
    },
    {
      percentage: "75%",
      description: "of people use the internet to shopping and purchases the ecommerce products.",
    },
    {
      percentage: "70%",
      description: "of marketers say SEO is their best source of getting qualified leads.",
    },
    {
      percentage: "60%",
      description: "of people use the internet to find local & nearby",
    },
    {
      percentage: "85%",
      description: "company's goods & services to visit within 24 hours.",
    },
  ]

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Issues Section */}
        <div className="border-2 border-gray-300 bg-white p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Are you facing
                <br />
                the same issues?
              </h2>

              <div className="space-y-4">
                {statistics.map((stat, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-0 h-0 border-l-[8px] border-l-red-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent mt-1 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900">{stat.percentage}</span> {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide">
                GET BUSINESS AUDIT
              </Button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Hand drawing business graph on whiteboard"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Partners</h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex items-center">
              <span className="text-4xl font-normal">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-3xl font-bold text-blue-600">Meta</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">📱</span>
              </div>
              <span className="text-2xl font-medium text-gray-900">WhatsApp</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black text-sm font-bold">M</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">mailchimp</span>
            </div>

            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">HubSpot</span>
              <div className="w-2 h-2 bg-orange-500 rounded-full ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
