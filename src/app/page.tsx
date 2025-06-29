import Banner02 from "@/components/hero/Banner02";
import BusinessIssuesSection from "@/components/hero/business-issues-section";
import ContactSection from "@/components/hero/contact-section";
import Hero from "@/components/hero/page";
import ROIApproachSection from "@/components/hero/roi-approach";
import WhyUsSection from "@/components/hero/Service";
import TestimonialsFAQSection from "@/components/hero/testimonials-faq";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Banner02 />
      <WhyUsSection />
      <ROIApproachSection />
      <BusinessIssuesSection />
      <TestimonialsFAQSection />
      <ContactSection />
    </div>
  );
}
