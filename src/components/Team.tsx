import { LinkedinIcon } from 'lucide-react'

export default function Team() {
  const founders = [
    {
      name: "Anatolii Chuvashlov",
      role: "CEO",
      linkedin: "https://www.linkedin.com/in/anatolii-chuvashlov-004bb128a",
      photo: "/images/founder-1.jpg"
    },
    {
      name: "Nasser AlMansoor",
      role: "CFO",
      linkedin: "https://www.linkedin.com/in/naser-mansour-54622a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      photo: "/images/founder-2.jpg"
    },
    {
      name: "Asylkhan Kali",
      role: "CTO",
      linkedin: "https://www.linkedin.com/in/asylkhankali?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4IUFOHTyQIqzp35Fk885yQ%3D%3D",
      photo: "/images/founder-3.jpg"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 rounded-lg shadow">
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
      </div>
    </section>
  )
} 