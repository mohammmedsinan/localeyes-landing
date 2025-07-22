"use client"

import { Store, Building2, Users } from "lucide-react"
import { useEffect, useState } from "react"

export function TargetAudienceSection() {
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

    const element = document.getElementById("target-audience-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const audiences = [
    {
      icon: Store,
      title: "Small & Medium Businesses",
      description:
        "Compete with any business, including bigger brands, with one platform. No need to outsource the work.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Building2,
      title: "Large & Franchise Businesses",
      description:
        "Keep track of all locations from one dashboard. Stay consistent and track growth across all branches.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      title: "Marketing Agencies & Freelancers",
      description: "Manage all your clients effectively and scale your services seamlessly.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section id="target-audience-section" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Is LocalEyes.ai{" "}
            <span className="text-blue-600 relative">
              right for you?
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400 animate-pulse"></div>
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            LocalEyes is designed with all types of local businesses in mind!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`${audience.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div
                  className={`w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <audience.icon className={`w-10 h-10 ${audience.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{audience.title}</h3>
                <p className="text-gray-700 leading-relaxed">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
