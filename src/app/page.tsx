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
      <ProblemSolution />
      <RegCoverage />
      <Features />
      <Team />
      <FAQ />
      <Footer />
    </main>
  )
}