'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What is UAE Decree-Law 11/2024 and how does CarbonTrace help with compliance?",
      answer: "UAE Decree-Law 11/2024 mandates comprehensive ESG reporting for companies operating in the UAE. CarbonTrace MENA provides automated tools and templates specifically designed to meet these requirements, ensuring your reports are compliant and auditor-ready from day one."
    },
    {
      question: "How long does it take to generate an ESG report with CarbonTrace?",
      answer: "Our platform can generate comprehensive ESG reports in minutes, not weeks. The exact time depends on your data availability, but most clients see their first report within 2-4 hours of initial setup."
    },
    {
      question: "Do you support both Arabic and English reporting?",
      answer: "Yes, CarbonTrace MENA provides native bilingual support with region-specific terminology and formatting. All reports are automatically generated in both Arabic and English, meeting UAE regulatory standards."
    },
    {
      question: "What types of companies can use CarbonTrace MENA?",
      answer: "We serve companies of all sizes across the MENA region, from startups to multinational corporations. Our platform is particularly valuable for companies required to comply with UAE ESG regulations or those looking to demonstrate sustainability leadership."
    },
    {
      question: "How does CarbonTrace ensure data accuracy and compliance?",
      answer: "Our platform uses AI-powered validation and built-in compliance checks based on UAE regulatory requirements. We also provide audit trails and documentation to support your reporting process and ensure regulatory acceptance."
    },
    {
      question: "What support do you provide during implementation?",
      answer: "We offer comprehensive onboarding, training, and ongoing support. Our team includes regional experts who understand local regulations and can help you navigate the ESG reporting process effectively."
    }
  ]

  return (
    <section className="py-20 bg-pearl text-palm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-inter-tight font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about CarbonTrace MENA and ESG reporting
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
              <AccordionTrigger className="text-left font-inter font-semibold text-slate-900 hover:text-brand-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:hello@carbontrace.mena"
            className="inline-flex items-center gap-2 btn-cta font-inter font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  )
} 