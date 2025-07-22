import { AlertTriangle, Clock, DollarSign } from "lucide-react"

export function ProblemSection() {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "It's Complex",
      description: "Local marketing tools are often too technical for non-experts.",
    },
    {
      icon: Clock,
      title: "It's Time-Consuming",
      description:
        "Keeping your business info, posts, and reviews updated is a constant effort you don't have time for.",
    },
    {
      icon: DollarSign,
      title: "It's Resource-Intensive",
      description: "You lack the budget and staff to compete with larger brands.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headline */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Are You Losing Customers You Never Knew You Had?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, customers ask AI tools like ChatGPT and use Google to find local businesses. If your online
              profiles aren't perfectly optimized, you're invisible to them.
            </p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              For most business owners, local SEO is a major challenge:
            </p>
          </div>

          {/* Right Column - Pain Points Grid */}
          <div className="grid gap-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
