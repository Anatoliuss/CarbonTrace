import { 
  ExclamationTriangleIcon, 
  ClockIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline'

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-pearl text-palm flex justify-center items-center min-h-[60vh]">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl sm:text-4xl font-inter-tight font-bold text-slate-900 mb-8 text-center">
          The ESG Reporting Challenge
        </h2>
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 badge-ok flex items-center justify-center">
                <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-inter font-semibold text-slate-900 mb-2">
                Complex Compliance Requirements
              </h3>
              <p className="text-slate-600 leading-relaxed">
                UAE Decree-Law 11/2024 introduces strict ESG reporting standards that many businesses struggle to understand and implement correctly.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-inter font-semibold text-slate-900 mb-2">
                Time-Consuming Manual Processes
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Traditional ESG reporting requires weeks of data collection, analysis, and documentation that could be automated and streamlined.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <DocumentTextIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-inter font-semibold text-slate-900 mb-2">
                Language and Format Barriers
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Reports need to be in both Arabic and English, with specific formatting requirements that vary by industry and company size.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 