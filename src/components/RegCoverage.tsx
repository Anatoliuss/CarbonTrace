import Link from 'next/link'

const REGULATIONS = [
  {
    slug: 'aer',
    title: 'AER',
    desc: 'Annual Emissions Report (MoCCAE)',
  },
  {
    slug: 'climate-risk',
    title: 'Climate-Risk Plan',
    desc: 'Climate risk & adaptation plan (MoCCAE)',
  },
  {
    slug: 'crf',
    title: 'GHG Inventory CRF',
    desc: 'UNFCCC Common Reporting Format',
  },
  {
    slug: 'credit-statement',
    title: 'Carbon-Credit Statement',
    desc: 'Voluntary/regulated credit disclosure',
  },
  {
    slug: 'adx-31-kpi',
    title: 'ADX 31-KPI',
    desc: 'Abu Dhabi Exchange ESG KPIs',
  },
]

export default function RegCoverage() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Regulatory Coverage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {REGULATIONS.map(reg => (
            <Link
              key={reg.slug}
              href={`/docs/regulatory#${reg.slug}`}
              className="block bg-pearl rounded-lg shadow p-5 hover:shadow-lg transition"
            >
              <div className="font-semibold text-lg mb-1">{reg.title}</div>
              <div className="text-gray-700 text-sm">{reg.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}