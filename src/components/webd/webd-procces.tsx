import { Button } from "@/components/ui/button"

export default function WebDP() {
  const processSteps = [
    { number: "1", title: "Step 1", subtitle: "Requirements", color: "bg-red-500", textColor: "text-white" },
    { number: "2", title: "Step 2", subtitle: "Competitive Analysis", color: "bg-orange-500", textColor: "text-white" },
    { number: "3", title: "Step 3", subtitle: "Wireframe", color: "bg-yellow-500", textColor: "text-white" },
    { number: "4", title: "Step 4", subtitle: "Visual Appeals", color: "bg-green-500", textColor: "text-white" },
    { number: "5", title: "Step 5", subtitle: "Usability Testing", color: "bg-teal-500", textColor: "text-white" },
    { number: "6", title: "Step 6", subtitle: "Development", color: "bg-blue-500", textColor: "text-white" },
    { number: "7", title: "Step 7", subtitle: "Testing & QA", color: "bg-purple-500", textColor: "text-white" },
    { number: "8", title: "Step 8", subtitle: "Launch & Support", color: "bg-gray-900", textColor: "text-white" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">Our Processes</h2>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold">
            GET BUSINESS AUDIT
          </Button>
        </div>

        {/* Process Flow */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-2 mb-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`${step.color} ${step.textColor} relative rounded-full px-6 py-8 flex flex-col items-center justify-center min-w-[140px] min-h-[140px] shadow-lg`}
                >
                  <div className="text-sm font-semibold mb-1">{step.title}</div>

                  {/* White circle in center */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center my-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  </div>

                  <div className="text-xs font-medium text-center leading-tight">{step.subtitle}</div>

                  {/* Arrow pointing down for last step */}
                  {index === processSteps.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>

                {/* Connection line to next step (hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute">
                    <div className="w-8 h-0.5 bg-gray-300 mt-16 ml-32"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>
            Lorem Ipsum labore magna ut malesuada vel mollit viverra malesuada qui turpis exercitation at vel Netus sunt
            diam occaecat Quis enim Ut nunc Morbi at enim vulputate Lorem quisque. arcu Quis. Lorem Ipsum Hac nulla
            consectetur odio ipsum dolore Nibh dolor ex ante nisl sem Netus aliquip quis viverra nunc laborum ullamco
            euismod in odio aliquip. Sit posuere egestas. do senectus minim Ultrices.
          </p>

          <p>
            Do you own a website or a blog that requires an online presence? Want a top rank in Google through Search
            Engine Optimization? Do not worry! Digital Magma, with its highly qualified team, will drive you towards
            your business goals. We are one of the best SEO services companies in Delhi that provide professional SEO
            services at affordable prices. Our SEO models are customized as per the need of the organization to deliver
            measurable results. We offer industry-driven SEO services that ensure maximum reach and the high-ranking of
            your website.
          </p>

          <p>
            Do you own a website or a blog that requires an online presence? Want a top rank in Google through Search
            Engine Optimization? Do not worry! Digital Magma, with its highly qualified team, will drive you towards
            your business goals. We are one of the best SEO services companies in Delhi that provide professional SEO
            services at affordable prices. Our SEO models are customized as per the need of the organization to deliver
            measurable results. We offer industry-driven SEO services that ensure maximum reach and the high-ranking of
            your website.
          </p>
        </div>
      </div>
    </div>
  )
}
