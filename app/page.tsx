import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ChallengeSection } from "@/components/challenge-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <HowItWorksSection />
        <TargetAudienceSection />
        <TestimonialsSection />
        <FinalCtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
