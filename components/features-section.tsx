import { Shield, Star, FileText, MapPin } from "lucide-react"

export function FeaturesSection() {
  const pillars = [
    {
      icon: Shield,
      title: "Optimized Local Presence",
      description: "AI audits your profiles & keeps them complete",
      color: "text-blue-600",
    },
    {
      icon: Star,
      title: "High-Quality Reviews & Smart Replies",
      description: "Increase ratings with automated review requests & AI replies",
      color: "text-yellow-600",
    },
    {
      icon: FileText,
      title: "Consistent Content & Updates",
      description: "AI-generated posts & updates on autopilot",
      color: "text-green-600",
    },
    {
      icon: MapPin,
      title: "NAP Consistency & Citations",
      description: "Correct Name, Address, Phone info across directories",
      color: "text-purple-600",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The 4 Pillars of LocalEyes.ai</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border">
              <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6`}>
                <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ {pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
