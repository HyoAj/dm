"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react"

export default function TestimonialsFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const testimonials = [
    {
      text: "We have been working with Digital Magma for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. We highly recommend Digital Magma to any company looking to grow their online presence.",
      name: "John Smith",
      title: "Marketing Director at XYZ Corp",
      image: "/placeholder.svg?height=120&width=120",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "What is Digital Magma ™",
      answer:
        "Digital Magma is a comprehensive digital marketing agency that specializes in data-driven strategies to help businesses grow their online presence and achieve measurable results.",
    },
    {
      question: "Why is Digital Marketing Important for Small Business?",
      answer:
        "Digital marketing is crucial for small businesses as it provides cost-effective ways to reach target audiences, compete with larger companies, and measure ROI effectively.",
    },
    {
      question: "What is a 360 Degree Digital Marketing strategy?",
      answer:
        "A 360-degree digital marketing strategy encompasses all digital touchpoints and channels to create a cohesive, integrated approach that maximizes brand visibility and customer engagement.",
    },
    {
      question: "How is Digital Marketing helps in growth hacking?",
      answer:
        "Digital marketing provides the tools and channels necessary for growth hacking by enabling rapid testing, data collection, and scalable customer acquisition strategies.",
    },
    {
      question: "Is growth hacking replacing digital marketing?",
      answer:
        "Growth hacking doesn't replace digital marketing but rather complements it by focusing on rapid, experimental approaches to achieve growth within the digital marketing framework.",
    },
    {
      question: "What is Growth Hacking? Why Is it Important?",
      answer:
        "Growth hacking is a marketing technique focused on rapid experimentation and data-driven strategies to achieve fast business growth, particularly important for startups and scaling businesses.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      {/* Testimonials Section */}
      <section className="bg-rose-50 w-full py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative Quote Marks */}
        <div className="absolute top-8 left-8 text-6xl text-rose-200 font-serif opacity-50">"</div>
        <div className="absolute bottom-8 right-8 text-6xl text-rose-200 font-serif opacity-50 rotate-180">"</div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Testimonials</h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </Button>

            {/* Testimonial Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">"{testimonials[0].text}"</p>
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <h4 className="text-red-500 font-bold text-lg">{testimonials[0].name}</h4>
                  <p className="text-gray-600">{testimonials[0].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-6 h-6 text-gray-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
