import { Button } from "@/components/ui/button"
import { Target, Monitor, ArrowUpRight, ClipboardCheck, BarChart3, Users } from "lucide-react"

export default function ROIApproachSection() {
  const approaches = [
    {
      icon: Target,
      title: "Understand The Goal",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: Monitor,
      title: "Analyse the Digital Assets",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: ArrowUpRight,
      title: "Expand the business Reach",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: ClipboardCheck,
      title: "Measurable Outcome",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: BarChart3,
      title: "Competitor Analysis",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
    {
      icon: Users,
      title: "Know Your Audience",
      description:
        "Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet integer nunc.",
    },
  ]

  return (
    <section className="bg-gray-50 w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 sm:mb-0">ROI Driven Approach</h2>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-base font-semibold self-start sm:self-auto"
            size="lg"
          >
            GET BUSINESS AUDIT
          </Button>
        </div>

        {/* Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon
            return (
              <div key={index} className="relative">
                <div className="mb-6">
                  <div className="w-16 h-16 border-2 border-red-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="w-full h-1 bg-gray-300 rounded-full">
                    <div className="w-3/4 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
