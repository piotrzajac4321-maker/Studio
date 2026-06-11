import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Challenges from '@/components/Challenges'
import Leaderboard from '@/components/Leaderboard'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Challenges />
      <Leaderboard />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
