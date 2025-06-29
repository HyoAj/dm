"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { AnimatedWrapper } from "../ui/animated-wrapper"
 

const tabs = [
  { id: "experience", label: "13+ Years of Experience" },
  { id: "tools", label: "Professional Tools" },
  { id: "firm", label: "A Recognised Firm" },
  { id: "strategy", label: "Customized Strategy" },
  { id: "reception", label: "Positive Reception" },
  { id: "results", label: "Delivers Results for Any Industry" },
]

const tabContent: { [key: string]: string } = {
  experience:
    "We have provided services to numerous clients in numerous fields thanks to our extensive experience of 13+ years. Delivering cutting-edge SEO services for our clients is how we put our skills, experience, and knowledge to work.",
  tools:
    "Our professional toolset allows us to analyze, track, and optimize every aspect of your digital presence, ensuring you get the best possible results and a high return on investment.",
  firm: "As a recognized firm in the industry, we pride ourselves on our reputation for excellence and our commitment to client success. Our track record speaks for itself.",
  strategy:
    "Every business is unique. We develop customized strategies tailored to your specific goals, target audience, and market conditions, ensuring a perfect fit for your needs.",
  reception:
    "Our clients' positive feedback and testimonials are a testament to our dedication and the quality of our work. We strive to build long-lasting, successful partnerships.",
  results:
    "Regardless of your industry, our data-driven approach and expert team can deliver measurable results that drive growth and help you achieve your business objectives.",
}

export function WhatWeBringSection() {
  const [activeTab, setActiveTab] = useState(tabs[1].id)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <AnimatedWrapper className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            What do <span className="text-red-500">Digital Magma</span> Bring in for Customers
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our SEO team consists of highly experienced professionals to deliver high value to your business. As search
            algorithms are continuously evolving to serve the best user experience, our SEO experts keep on top of the
            latest algorithm updates. They all are well-versed in improving page rankings and increasing relevant
            traffic. We provide you with result-driven and transparent services through our expertise in both on-page
            and off-page link building along with technical SEO implementation.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <AnimatedWrapper className="flex flex-col space-y-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-4 border border-gray-300 rounded-md text-lg font-medium transition-colors ${
                  activeTab === tab.id ? "bg-red-500 text-white border-red-500" : "bg-white hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </AnimatedWrapper>
          <div className="relative min-h-[250px] bg-gray-200 rounded-lg p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600"
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
