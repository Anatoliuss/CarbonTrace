import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import Footer from '../components/Footer'
import RegCoverage from '@/components/RegCoverage'
import Disclaimer from '@/components/Disclaimer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-4xl mx-auto bg-pearl/80 text-gulf text-center text-sm md:text-base rounded-xl p-4 md:p-6 shadow-sm mb-8">
        Pre-seed, UAE-based, backed by local climate advisors – looking for 3 design-partners.
      </div>
      <RegCoverage />
      <Features />
      <Team />
      <FAQ />
      <Footer />
    </main>
  )
}