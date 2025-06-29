import { Target, Monitor, Network, FileCheck, BarChart3, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

export default function WhySeo() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Why SEO is important Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why <span className="text-red-500">SEO</span> is important?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Understand The Goal */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-red-500" />
              </div>
              <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Understand The Goal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Organic Search is a primary source of website traffic, and hence, quality leads.
              </p>
            </div>

            {/* Analyse the Digital Assets */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <Monitor className="w-8 h-8 text-red-500" />
              </div>
              <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Analyse the Digital Assets</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet
                integer nunc.
              </p>
            </div>

            {/* Expand the business Reach */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <Network className="w-8 h-8 text-red-500" />
              </div>
              <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expand the business Reach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet
                integer nunc.
              </p>
            </div>

            {/* Measurable Outcome */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <FileCheck className="w-8 h-8 text-red-500" />
              </div>
              <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Measurable Outcome</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet
                integer nunc.
              </p>
            </div>

            {/* Competitor Analysis */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-red-500" />
              </div>
              <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Competitor Analysis</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet
                integer nunc.
              </p>
            </div>

            {/* Know Your Audience */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-red-500" />
              </div>
              <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Know Your Audience</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem Ipsum in Hac molestie dolore platea laborum commodo tristique nunc in fugiat platea enim amet
                integer nunc.
              </p>
            </div>
          </div>
        </div>

        {/* Why hire a Professional SEO Company Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">
            Why <span className="text-red-500">hire a Professional SEO Company?</span>
          </h2>

          {/* Timeline Steps */}
          <div className="flex flex-col lg:flex-row items-center justify-center mb-12 space-y-4 lg:space-y-0 lg:space-x-4 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg min-w-[180px] text-center">
                <div className="text-2xl font-bold mb-1">1</div>
                <div className="text-sm font-semibold">Ease of Services</div>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                <div className="w-0 h-0 border-l-8 border-l-red-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-pink-400 text-white px-6 py-4 rounded-lg shadow-lg min-w-[180px] text-center">
                <div className="text-2xl font-bold mb-1">2</div>
                <div className="text-sm font-semibold">Better Search Rankings</div>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                <div className="w-0 h-0 border-l-8 border-l-pink-400 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-pink-300 text-white px-6 py-4 rounded-lg shadow-lg min-w-[180px] text-center">
                <div className="text-2xl font-bold mb-1">3</div>
                <div className="text-sm font-semibold">Cost-Effective Website</div>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                <div className="w-0 h-0 border-l-8 border-l-pink-300 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-pink-200 text-gray-800 px-6 py-4 rounded-lg shadow-lg min-w-[180px] text-center">
                <div className="text-2xl font-bold mb-1">4</div>
                <div className="text-sm font-semibold">Flexibility of the Website</div>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                <div className="w-0 h-0 border-l-8 border-l-pink-200 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <div className="bg-pink-100 text-gray-800 px-6 py-4 rounded-lg shadow-lg min-w-[180px] text-center">
                <div className="text-2xl font-bold mb-1">5</div>
                <div className="text-sm font-semibold">Website Responsiveness</div>
              </div>
            </div>
          </div>

          {/* Content Text */}
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p>
              Lorem Ipsum labore magna ut malesuada vel mollit viverra malesuada qui turpis exercitation at vel Netus
              sunt diam occaecat Quis enim Ut nunc Morbi at enim vulputate Lorem quisque. arcu Quis. Lorem ipsum Hac
              nulla consectetur odio ipsum dolore Nibh dolor ex aute nisl sem Netus aliquip proin viverra nunc laboris
              ullamco euismod in odio aliquet. Sit posuere egestas. do senectus minim Ultricies.
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
        <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-md">
              <Image
                src="/process-illustration.png"
                alt="Digital Marketing Process Illustration"
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
              {/* Step 1 */}
              <div className="border-l-4 border-gray-200 pl-6">
                <h3 className="text-lg font-bold text-red-500 mb-2">Step 1</h3>
                <p className="text-gray-700 leading-relaxed">
                  Content-focused digital campaigns on websites, SEO, and social media
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-gray-200 pl-6">
                <h3 className="text-lg font-bold text-red-500 mb-2">Step 2</h3>
                <p className="text-gray-700 leading-relaxed">Budget-conscious digital campaigns for optimum results.</p>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-gray-200 pl-6">
                <h3 className="text-lg font-bold text-red-500 mb-2">Step 3</h3>
                <p className="text-gray-700 leading-relaxed">Digital Marketing campaigns to ensure optimum results</p>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-gray-200 pl-6">
                <h3 className="text-lg font-bold text-red-500 mb-2">Step 4</h3>
                <p className="text-gray-700 leading-relaxed">
                  360-degree campaigns with seamless integration across platforms
                </p>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-gray-200 pl-6">
                <h3 className="text-lg font-bold text-red-500 mb-2">Step 5</h3>
                <p className="text-gray-700 leading-relaxed">
                  Data backed strategy at each stage of the digital marketing campaign
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
