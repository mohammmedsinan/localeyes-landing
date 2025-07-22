"use client"

import { AlertTriangle, TrendingDown, Clock, Users } from "lucide-react"
import { useEffect, useState } from "react"

export function ChallengeSection() {
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

    const element = document.getElementById("challenge-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const problems = [
    {
      icon: TrendingDown,
      text: "Your Google listing is not bringing in enough new customers.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: AlertTriangle,
      text: "Not enough good reviews showing up.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Clock,
      text: "Old info confusing people and the search engine.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Users,
      text: "Your competitors are getting ahead because they're already investing in it.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section id="challenge-section" className="py-20 bg-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Did you know you're losing up to{" "}
            <span className="text-red-600 relative">
              70% of your customers
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-red-200 animate-pulse"></div>
            </span>{" "}
            by not being optimized?
          </h2>

          <div
            className={`max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="mb-6">
              As online search becomes more AI driven, your business will be at a major disadvantage if it's not
              optimized. <strong>Ranking in the top three will garner over two thirds of all customers</strong>, and
              having positive reviews will be the deciding factor for the majority of future customers choosing you.
            </p>
            <p className="mb-6">
              The honest truth is, getting your restaurant found online can be really complicated, takes too much of
              your valuable time, and costs more than you can spare.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">You're probably dealing with:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`${problem.bgColor} p-6 rounded-xl border-l-4 border-red-400 hover:shadow-lg transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${problem.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-red-200`}
                  >
                    <problem.icon className={`w-6 h-6 ${problem.color}`} />
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`bg-red-600 text-white p-8 rounded-2xl text-center max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <h3 className="text-2xl font-bold mb-4">⚠️ The Reality Check</h3>
          <p className="text-xl leading-relaxed">
            If you haven't taken steps to deal with these factors, you're already behind.{" "}
            <strong>You're losing customers, trust, and revenue.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
