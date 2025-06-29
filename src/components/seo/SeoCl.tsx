import { AnimatedWrapper } from "../ui/animated-wrapper"

 

export function SeoCl() {
  const partners = [
    {
      name: "Google",
      logo: (
        <span className="text-4xl font-normal">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </span>
      ),
    },
    { name: "Meta", logo: <span className="text-3xl font-bold text-blue-600">Meta</span> },
    { name: "WhatsApp", logo: <span className="text-2xl font-medium text-gray-900">WhatsApp</span> },
    { name: "Mailchimp", logo: <span className="text-2xl font-bold text-gray-900">mailchimp</span> },
    { name: "HubSpot", logo: <span className="text-2xl font-bold text-orange-500">HubSpot</span> },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <AnimatedWrapper className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Clientele</h2>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  )
}
