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
      q: "Which UAE reports does CarbonTrace generate?",
      a: "One upload produces the Annual Emissions Report (AER), GHG Inventory CRF, Climate-Risk Adaptation Plan, Carbon-Credit Statement, and the ADX 31-KPI ESG disclosure. We also output ADGM / DFSA ‘comply-or-explain’ templates on request."
    },
    {
      q: "Does it cover Decree-Law 11/2024?",
      a: "Yes—Decree-Law 11 sets the umbrella ESG rules. CarbonTrace automates every document that law references, plus the exchange-specific 31-KPI filing."
    },
    {
      q: "How long does it take to get a draft report?",
      a: "Under 10 minutes once your utility bills, fuel logs, and HR snapshot are uploaded. AER XML + bilingual PDF are generated instantly."
    },
    {
      q: "Do you support both Arabic and English?",
      a: "Yes. All outputs are bilingual. Arabic terminology follows MOCCAE’s official glossary; English uses IFRS S-standard terms."
    },
    {
      q: "What company sizes can use CarbonTrace?",
      a: "We serve single-facility SMEs up to multi-site ADX-listed groups. Pricing tiers scale with number of facilities and reports."
    },
    {
      q: "How do you ensure data accuracy?",
      a: "Emission factors are locked to the MOCCAE 2024 factor library; every field passes unit & range checks, and an audit trail is attached for ISO 14065 verifiers."
    },
  ];

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
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.a}
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