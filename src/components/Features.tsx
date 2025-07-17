import { 
  BoltIcon, 
  GlobeAltIcon, 
  ShieldCheckIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline'

export default function Features() {
  const features = [
    {
      icon: BoltIcon,
      title: "Lightning Fast Generation",
      description: "Generate comprehensive ESG reports in minutes, not weeks. Our AI-powered platform automates data collection and analysis for instant results."
    },
    {
      icon: GlobeAltIcon,
      title: "Bilingual Excellence",
      description: "Native Arabic and English support with region-specific terminology and formatting that meets UAE regulatory standards perfectly."
    },
    {
      icon: ShieldCheckIcon,
      title: "Auditor-Ready Compliance",
      description: "Built specifically for UAE Decree-Law 11/2024 with pre-approved templates and validation checks that ensure regulatory acceptance."
    },
    {
      icon: ChartBarIcon,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards and insights that help you track progress, identify opportunities, and demonstrate impact to stakeholders."
    }
  ]

  return (
    <section className="py-20 bg-pearl text-palm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-inter-tight font-bold text-slate-900 mb-4">
            Why Choose CarbonTrace MENA?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built specifically for the MENA region with deep understanding of local regulations and business needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-pearl rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:bg-opacity-20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-leaf" />
              </div>
              
              <h3 className="text-xl font-inter font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 