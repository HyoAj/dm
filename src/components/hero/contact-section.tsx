"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, Users, Globe, Target } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const stats = [
    {
      icon: Briefcase,
      number: "1000+",
      text: "Accounts Handled",
    },
    {
      icon: Users,
      number: "140+",
      text: "teams of Professionals",
    },
    {
      icon: Globe,
      number: "28+",
      text: "Serving Countries",
    },
    {
      icon: Target,
      number: "92%",
      text: "Client Retention",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-rose-100 to-rose-200 w-full py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-rose-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-rose-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-rose-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Side - Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
              Discover How We
              <br />
              Can Grow Your Business
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email:
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone:
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-24 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-base font-semibold rounded-md"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Right Side - Contact Info & Stats */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Contact Information */}
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">+91-9560133711</h3>
              <a
                href="mailto:marketing@digitalmagma.com"
                className="text-xl text-gray-900 underline hover:text-red-500 transition-colors"
              >
                marketing@digitalmagma.com
              </a>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Ready to speak with a marketing expert?
                <br />
                Give us a ring or e-mail.
              </p>
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-300 transform -translate-x-1/2"></div>

            {/* Statistics */}
            <div className="space-y-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="border-b border-gray-800 flex-1 pb-1">
                      <span className="font-bold text-gray-900 text-lg">
                        {stat.number} {stat.text}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
