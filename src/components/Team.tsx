import { LinkedinIcon } from 'lucide-react'

export default function Team() {
  const founders = [
    {
      name: "Anatolii Chuvashlov",
      role: "",
      linkedin: "https://linkedin.com/in/anatolii-chuvashlov",
      photo: "/images/founder-1.jpg"
    },
    {
      name: "Nasser AlMansoor",
      role: "",
      linkedin: "https://linkedin.com/in/nasser-almansoor",
      photo: "/images/founder-2.jpg"
    },
    {
      name: "Asylkhan Kali",
      role: "",
      linkedin: "https://linkedin.com/in/asylkhan-kali",
      photo: "/images/founder-3.jpg"
    }
  ]

  return (
    <section className="py-20 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-inter-tight font-bold text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Regional experts with deep understanding of MENA sustainability challenges and regulatory requirements.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="bg-pearl rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Photo Placeholder */}
              <div className="w-24 h-24 badge-ok mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-inter font-bold text-2xl">
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-inter font-semibold text-slate-900 text-center mb-3">
                {founder.name}
              </h3>

              {/* Role */}
              <p className="text-slate-600 text-center text-sm leading-relaxed mb-4">
                {founder.role}
              </p>

              {/* LinkedIn Link */}
              <div className="flex justify-center">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors duration-300 group-hover:scale-110"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="bg-pearl rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-inter-tight font-bold text-slate-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We're building the future of sustainable business in the MENA region. 
              Ready to transform your ESG reporting? Let's connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 