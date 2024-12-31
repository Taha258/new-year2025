import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import EnhancedCountdown from '../components/EnhancedCountdown'
import FeatureCards from '../components/FeatureCards'
import AboutSection from '../components/AboutSection'
import EnhancedFireworks from '../components/EnhancedFireworks'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <EnhancedFireworks />
      <Navigation />
      <Hero />
      <EnhancedCountdown />
      <FeatureCards />
      <AboutSection />
    </main>
  )
}

