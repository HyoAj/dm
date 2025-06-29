import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SeoHero() {
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
              <span className="text-red-500">Unleash Your</span>
              <br />
              <span className="text-gray-900">Digital Marketing</span>
              <br />
              <span className="text-red-500">Superpowers!</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              Our digital marketing agency helps businesses grow and succeed online through a range of services
              including SEO, PPC, social media marketing, and content creation.
            </p>

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
                src="/dashboard-mockup.png"
                alt="Digital Marketing Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* SEO Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-red-500 text-center mb-8">Search Engine Optimisation</h2>

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
      </div>
    </div>
  )
}
