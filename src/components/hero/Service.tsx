import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function WhyUsSection() {
  const services = [
    {
      title: "Content Driven",
      description: "Content focused digital campaigns on websites, SEO, and social media",
    },
    {
      title: "Cost-Effective",
      description: "Budget-conscious digital campaigns for optimum results.",
    },
    {
      title: "Conversion Focused",
      description: "Digital Marketing campaigns to ensure optimum results",
    },
    {
      title: "Integrated Marketing",
      description: "360-degree campaigns with seamless integration across platforms",
    },
    {
      title: "Data Driven",
      description: "Data backed strategy at each stage of the digital marketing campaign",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Business Needs <span className="text-red-500">Digital Magma Services?</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/placeholder.svg?height=400&width=600"
            width={600}
            height={400}
            alt="Digital Magma Services Illustration"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            {services.map((service, index) => (
              <div key={index} className="space-y-1">
                <p className="text-xl font-bold text-gray-900">{service.title}</p>
                <p className="text-gray-500">{service.description}</p>
                {index < services.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
