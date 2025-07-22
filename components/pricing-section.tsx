import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter Plan",
      description: "For single-location SMBs",
      popular: false,
    },
    {
      name: "Growth Plan",
      description: "For franchises & multi-locations",
      popular: true,
    },
    {
      name: "Agency Plan",
      description: "For managing multiple clients",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${plan.popular ? "border-blue-500" : "border-gray-200"} relative`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">All core features included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">24/7 support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Free trial included</span>
                </div>
              </div>

              <Button
                className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"} text-white`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              👉 Compare Plans
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 bg-transparent"
            >
              👉 Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
