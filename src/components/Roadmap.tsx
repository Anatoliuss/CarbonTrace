const ROADMAP = [
    {
      quarter: 'Q3 2025',
      title: 'Beta AER',
      progress: 60,
    },
    {
      quarter: 'Q4 2025',
      title: 'CRF + ADX',
      progress: 30,
    },
    {
      quarter: '2026',
      title: 'Factor API & Credit Ledger',
      progress: 10,
    },
  ]
  
  export default function Roadmap() {
    return (
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROADMAP.map((item) => (
              <div key={item.quarter} className="bg-pearl rounded-lg shadow p-5 flex flex-col">
                <div className="font-semibold text-lg mb-1">{item.quarter}</div>
                <div className="mb-2">{item.title}</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-brand-accent h-2 rounded-full"
                    style={{ width: `${item.progress}%` }}
                    aria-valuenow={item.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    role="progressbar"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-4 text-center">
            Subject to user feedback
          </div>
        </div>
      </section>
    )
  }