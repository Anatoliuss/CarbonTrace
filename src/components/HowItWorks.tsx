import { DocumentArrowUpIcon, LockClosedIcon, DocumentCheckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

const STEPS = [
  {
    icon: DocumentArrowUpIcon,
    label: 'Upload Bills & Logs',
    desc: 'Drag-and-drop utility bills, meter logs, and activity data.',
  },
  {
    icon: LockClosedIcon,
    label: 'Auto-Normalize & Factor Lock',
    desc: 'Automatic data cleaning and emission factor assignment.',
  },
  {
    icon: DocumentCheckIcon,
    label: 'One-Click Generate',
    desc: 'Instantly create draft AER, CRF, and KPI reports.',
  },
  {
    icon: CheckBadgeIcon,
    label: 'Verify & File',
    desc: 'Collaborate with accredited verifiers for final submission.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-12 bg-pearl/60">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center text-center bg-white rounded-lg shadow p-5">
              <step.icon className="w-10 h-10 text-brand-accent mb-2" aria-label={step.label} />
              <div className="font-semibold mb-1">{step.label}</div>
              <div className="text-gray-700 text-sm">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}