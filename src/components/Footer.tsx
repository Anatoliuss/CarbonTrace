export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Brand */}
          <div className="mb-4">
            <h3 className="text-2xl font-inter-tight font-bold">
              CarbonTrace{' '}
              <span className="text-brand-accent">MENA</span>
              <span className="inline-block w-2 h-2 bg-brand-accent rounded-full ml-1"></span>
            </h3>
          </div>
          <p className="text-slate-300 mb-6 max-w-md mx-auto">
            Transforming ESG reporting across the MENA region with AI-powered, 
            UAE-compliant solutions built for the future of sustainable business.
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <span>📍</span>
            <span>Abu Dhabi, UAE</span>
          </div>
          <div className="text-center text-gulf text-sm mb-2">
            <a href="mailto:hello@carbontracemena.com" className="underline hover:text-brand-accent">hello@carbontracemena.com</a>
            {'  ·  '}
            <a href="tel:+971585993854" className="underline hover:text-brand-accent">+971 55 123 4567</a>
          </div>
        </div>


      </div>
    </footer>
  )
} 