'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const signupUrl = process.env.NEXT_PUBLIC_SIGNUP_URL || 'https://forms.gle/placeholder'

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-palm text-pearl overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-pearl bg-opacity-5"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter-tight font-bold text-white mb-4">
            CarbonTrace{' '}
            <span className="text-gold">MENA</span>
            <span className="inline-block w-3 h-3 bg-brand-accent rounded-full ml-1"></span>
          </h1>
        </div>

        {/* Main Promise */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter-tight font-bold text-white mb-6 leading-tight">
          Generate UAE-compliant ESG reports in minutes
        </h2>

        {/* One-liner */}
        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Bilingual, auditor-ready, built for Decree-Law 11/2024
        </p>

        {/* CTA Button */}
        <a
          href={signupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-cta font-inter font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
        >
          Get Started Today
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </a>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-blue-100 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 badge-ok"></div>
            <span>UAE Compliance Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 badge-ok"></div>
            <span>Bilingual Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 badge-ok"></div>
            <span>Auditor Approved</span>
          </div>
        </div>
      </div>

      
    </section>
  )
} 