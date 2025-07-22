import { Bot, BarChart3, Star, FileText, Users, MapPin } from "lucide-react"

export function CoreFeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Profile Optimization",
      description:
        "Get AI-generated descriptions, keyword suggestions, and visual recommendations to make your profile stand out.",
    },
    {
      icon: BarChart3,
      title: "Local Ranking & Insights",
      description:
        "Track your performance on a local map, monitor keyword rankings, and get a clear view of where you stand.",
    },
    {
      icon: Star,
      title: "AI-Powered Review Management",
      description:
        "Get real-time alerts for new reviews, use AI to generate professional responses instantly, and boost your ratings.",
    },
    {
      icon: FileText,
      title: "AI-Generated Content & Posting",
      description:
        "Keep your customers engaged with unique, high-quality posts, scheduled automatically for the best times.",
    },
    {
      icon: Users,
      title: "Competitor Analysis",
      description: "Uncover the weaknesses of your local competitors and identify opportunities to outrank them.",
    },
    {
      icon: MapPin,
      title: "Citation & NAP Consistency",
      description:
        "Ensure your business Name, Address, and Phone number (NAP) are accurate across all online directories to build trust.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">All The Tools You Need To Succeed in Local Search</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
