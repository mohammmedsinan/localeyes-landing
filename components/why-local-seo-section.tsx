import { Badge } from "@/components/ui/badge"
import { Bot, MapPin, Star, TrendingUp } from "lucide-react"

export function WhyLocalSeoSection() {
  const stats = [
    {
      icon: Bot,
      stat: "AI tools like ChatGPT, Gemini, and Apple's Spotlight pull business data from Google Business Profile and Apple Places.",
    },
    { icon: MapPin, stat: "88% of consumers search local businesses on Google Maps within 24 hours." },
    { icon: TrendingUp, stat: '81% of "near me" searches lead to a store visit.' },
    { icon: Star, stat: "95% of buying decisions are influenced by reviews." },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-blue-600 text-white hover:bg-blue-600">2025 Update</Badge>
          <h2 className="text-4xl font-bold mb-6">Why Local SEO Matters More in 2025</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stats.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 bg-gray-800 p-6 rounded-xl">
              <item.icon className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300 text-lg leading-relaxed">{item.stat}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 p-8 rounded-2xl">
          <p className="text-xl font-semibold mb-4">If your data is incomplete, AI ignores you.</p>
          <p className="text-2xl font-bold">The future of search is AI-driven. Get optimized or get left behind.</p>
        </div>
      </div>
    </section>
  )
}
