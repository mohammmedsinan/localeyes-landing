"use client"

import { Button } from "@/components/ui/button"
import { Link, Settings, BarChart3 } from "lucide-react"
import { useEffect, useState } from "react"

export function HowItWorksSection() {
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

    const element = document.getElementById("how-it-works-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: "1",
      icon: Link,
      title: "Link Your Business",
      description:
        "We just need your Google listing and our AI will automatically find your information, your business's weak and strong points, and how to make it better.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: "2",
      icon: Settings,
      title: "Put LocalEyes to work",
      description:
        "Our system will tell what and how to improve Your Profile. LocalEyes will automate posting updates, give review response suggestions, and sync your business information everywhere, like your hours and menu.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      number: "3",
      icon: BarChart3,
      title: "Watch Your Business Grow",
      description:
        "You'll be able to watch in real time your ranking go up and become more visible from one easy-to-use screen with minimal work.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section id="how-it-works-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Watch your business{" "}
            <span className="text-green-600 relative">
              shoot up to the top
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-400 animate-pulse"></div>
            </span>{" "}
            with these 3 simple steps!
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Step Number */}
                <div className="text-center mb-6">
                  <div
                    className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform`}
                  >
                    <span className={`text-3xl font-bold ${step.color}`}>{step.number}</span>
                  </div>
                  <div
                    className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md -mt-10 mb-4 hover:scale-110 transition-transform`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-gray-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold animate-pulse shadow-lg"
          >
            🚀 Get Started Now
          </Button>
        </div>
      </div>
    </section>
  )
}
