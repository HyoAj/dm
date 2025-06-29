import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedWrapper } from "../ui/animated-wrapper"
 

const comparisonData = [
  {
    title: "DIGITAL MAGMA",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    points: [
      "Dedicated account manager with an in-house team to develop and implement assets",
      "All-in-one platform for optimizing, measuring, and reporting SEO's ROI",
      "Built from your business objectives, market changes, and overall marketing efforts",
      "In-house project management software, 24/7 help desk, and direct client phone line",
    ],
  },
  {
    title: "Typical Agency",
    bgColor: "bg-white",
    borderColor: "border-gray-300",
    points: [
      "Dedicated account manager that'll need your time to develop and implement assets",
      "Third-party toolkits for tracking SEO's performance with subscription costs passed to you",
      "Copy-and-paste checklist for optimizing your site and (hopefully) delivering results",
      "Regular, but unreliable when site issues happen, and you need help now",
    ],
  },
  {
    title: "In-House Team",
    bgColor: "bg-white",
    borderColor: "border-gray-300",
    points: [
      "One or more team members searching for the time to optimize 200+ ranking factors",
      "Free and paid tools for auditing, monitoring, and measuring rankings and traffic",
      "S.M.A.R.T. goals, but difficult to achieve with limited resources, time, and skillsets",
      "Varied with documentation gaps leading to project delays and wasted budget",
    ],
  },
]

export function UsVsThemSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <AnimatedWrapper className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Us vs Them</h2>
        </AnimatedWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comparisonData.map((card, index) => (
            <AnimatedWrapper key={index} delay={index * 0.1}>
              <Card className={`h-full ${card.bgColor} border-2 ${card.borderColor}`}>
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 list-disc list-inside text-gray-600">
                    {card.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
