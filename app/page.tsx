import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Challenges from '@/components/Challenges'
import MedalShowcase from '@/components/MedalShowcase'
import Leaderboard from '@/components/Leaderboard'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Challenges />
      <MedalShowcase />
      <Features />
      <Leaderboard />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
