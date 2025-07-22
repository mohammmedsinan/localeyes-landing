import { Check } from "lucide-react"

export function FeaturesTable() {
  const features = [
    { feature: "AI Profile Optimization", description: "Smart audits, keyword optimization" },
    { feature: "Review Management", description: "Monitor, categorize, auto-reply to reviews" },
    { feature: "Local Ranking Tracking", description: "Daily ranking insights, progress tracking" },
    { feature: "Competitor Analysis", description: "Track & analyze competitor performance" },
    { feature: "Citation Building", description: "Directory listings & NAP consistency" },
    { feature: "AI Content & Posts", description: "Automated social & GMB content" },
    { feature: "Google Ads AI Setup", description: "Hyper-local ads with AI targeting" },
    { feature: "Auto Updates", description: "Business hours, service updates" },
    { feature: "Real-Time Reports", description: "Performance tracking & insights" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
              <div className="grid grid-cols-2 gap-4">
                <h3 className="text-xl font-bold">Feature</h3>
                <h3 className="text-xl font-bold">What It Does</h3>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {features.map((item, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{item.feature}</span>
                    </div>
                    <span className="text-gray-600">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
