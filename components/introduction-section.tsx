import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function IntroductionSection() {
  const benefits = [
    "Rank higher on Google Maps & Apple Places",
    "Generate more 5-star reviews automatically",
    "Monitor and outrank competitors",
    "Post consistent, AI-generated content",
    "Track rankings, performance, and ROI in real time",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Introducing LocalEyes.ai</h2>
          <p className="text-2xl font-light mb-8">The All-in-One AI Platform for Local Business Growth</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-8">With LocalEyes.ai, you'll:</h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Check className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                👉 Start Your Free Trial Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 bg-transparent"
              >
                👉 Book a Demo
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">20 min</div>
                <div className="text-lg">Setup Time</div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-300 mb-1">245%</div>
                  <div className="text-sm">Avg. Traffic Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-300 mb-1">4.8★</div>
                  <div className="text-sm">Avg. Review Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
