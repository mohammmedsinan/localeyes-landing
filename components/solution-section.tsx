"use client"

import { Button } from "@/components/ui/button"
import { Check, MapPin, Star, TrendingUp, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

export function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("solution-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const solutions = [
    {
      icon: MapPin,
      title: "Getting you seen",
      description: "We'll make sure your place pops up higher on Google Maps and Apple Maps.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Star,
      title: "Bringing in awesome reviews",
      description: "We'll get you those 5-star reviews and build real trust with new diners.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: TrendingUp,
      title: "Surpass the competition",
      description: "We'll make sure you're the hot spot in your area.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Calendar,
      title: "Keeping things fresh online",
      description:
        "We'll maintain a consistent schedule for you, so your online presence is always up to date and thriving.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section id="solution-section" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            LocalEyes.ai is the{" "}
            <span className="text-blue-600 relative">
              one-stop-shop
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400 animate-pulse"></div>
            </span>{" "}
            for your SEO needs!
          </h2>

          <div
            className={`max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="mb-6">
              Let's be realistic, you probably don't have the time or capacity to learn how the algorithm works, right?
              Well, that's where LocalEyes comes in.
            </p>
            <p className="mb-6 font-semibold text-blue-600">
              You don't need to learn about SEO or how to apply it to your business, because we'll handle it for you
              from A to Z.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">We'll help you with:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`${solution.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <solution.icon className={`w-8 h-8 ${solution.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-2xl text-center max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <h3 className="text-2xl font-bold mb-4">🚀 You'll see results in no time!</h3>
          <p className="text-xl leading-relaxed mb-6">
            And LocalEyes does all that and more for <strong>a fraction of the cost</strong> you would be paying for
            these services elsewhere.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
            Start Your Free Trial Now!
          </Button>
        </div>

        {/* Before/After Visual */}
        <div
          className={`mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Before */}
          <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
            <h4 className="text-lg font-bold text-red-600 mb-4 text-center">❌ BEFORE LocalEyes</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">3.2★ rating (12 reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Ranking #8 in local search</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Outdated business info</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Low online visibility</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <h4 className="text-lg font-bold text-green-600 mb-4 text-center">✅ AFTER LocalEyes</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">4.8★ rating (127 reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">Ranking #1 in local search</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">Perfect business profiles</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-gray-700">245% increase in visibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
