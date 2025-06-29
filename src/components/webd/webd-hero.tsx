import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function WebDHero() {
  const developmentSteps = [
    { number: "1", title: "Requirement Analysis", color: "bg-red-500" },
    { number: "2", title: "UI/UX Development", color: "bg-red-400" },
    { number: "3", title: "Mobile First Approach", color: "bg-red-300" },
    { number: "4", title: "Custom Services", color: "bg-red-200" },
    { number: "5", title: "Well Designed CMS", color: "bg-red-100" },
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
              <span className="text-red-500">Responsive and</span>
              <br />
              <span className="text-red-500">Optimized</span>
              <br />
              <span className="text-gray-900">Website Design</span>
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
            <div className="w-full max-w-md h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Website Design Mockup</span>
            </div>
          </div>
        </div>

        {/* Website Design Services Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-red-500 text-center mb-8">Website Design Services</h2>

          <div className="text-gray-700 leading-relaxed">
            <p>
              We are one of the best social media marketing agencies in Delhi, assisting small businesses, medium
              enterprises, and big brands to flourish in the digital marketing space. We specialize in social media
              management, social listening and response, content creation, and a variety of other services. Our main
              goal is to help businesses to maximize revenue by capitalizing on sales conversions, in addition to
              driving ready-to-buy customers to your brand using proven social media marketing strategies.
            </p>
            <br />
            <p>
              Social media platforms are the best and easiest way to reach your targeted audience and start a two-way
              conversation. Digital Magma, a top social media marketing company in Delhi, have the necessary expertise,
              skills, and knowledge to create the right strategy to help you retain your customers by consistently
              providing them valuable and reliable content. Since more than 3 billion active social media users are
              there, you must have an active and positive presence to build your brand awareness and increase sales.
            </p>
            <br />
            <p>
              Being one of the most trusted and result-driven social media marketing agency in Delhi-NCR, Digital Magma
              will provide you with targeted and precisely designed solutions to tap in to this 'Viral Power' for your
              business. Our social media marketing strategies are tested on different networks and regularly updated to
              walk with the evolving trends of social media.
            </p>
          </div>
        </div>

        {/* Our Website Development Approach Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-500 text-center mb-12">
            Our <span className="text-red-500">Website Development</span> Approach
          </h2>

          {/* Development Steps Timeline */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
              {developmentSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`${step.color} ${
                      index === 0 ? "text-white" : "text-gray-800"
                    } w-16 h-16 rounded-lg flex items-center justify-center font-bold text-xl mb-2 shadow-lg`}
                  >
                    {step.number}
                  </div>
                  <div className="text-center max-w-[120px]">
                    <h3 className="font-bold text-sm text-gray-900 leading-tight">{step.title}</h3>
                  </div>
                  {index === 0 && (
                    <div className="mt-2">
                      <ChevronDown className="w-6 h-6 text-red-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              Lorem Ipsum labore magna ut malesuada vel mollit viverra malesuada qul turpis exercitation at vel Netus
              sunt diam occaecat Quis enim Ut nunc Morbi at enim vulputate Lorem quisque. arcu Quis. Lorem Ipsum Hac
              nulla consectetur odio ipsum dolore Nibh dolor ex ante nisl sem Netus aliquip quis viverra nunc laborum
              ullamco euismod in odio aliquip. Sit posuere egestas. do senectus minim Ultrices.
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
              services at affordable prices. Our SEO models are customized as per the need of the organization to
              deliver measurable results. We offer industry-driven SEO services that ensure maximum reach and the
              high-ranking of your website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
