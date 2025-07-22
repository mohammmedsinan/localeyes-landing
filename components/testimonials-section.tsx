"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function TestimonialsSection() {
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

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      rating: 5,
      text: "We were stuck at 3.7 stars - in just 8 weeks, LocalEyes took us to 4.5! Our Google Maps traffic doubled.",
      author: "Amira K.",
      role: "Restaurant Owner, Riyadh",
      improvement: "+0.8 stars",
      metric: "Traffic doubled",
    },
    {
      rating: 5,
      text: "I used to pay agencies $1000+ per month. Now I manage all locations in one app at a fraction of the cost.",
      author: "John P.",
      role: "Franchise Owner, Toronto",
      improvement: "90% cost savings",
      metric: "All locations managed",
    },
  ]

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Don't believe it's that easy?{" "}
            <span className="text-yellow-400 relative">
              Here's what our clients have to say.
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 animate-pulse"></div>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-white mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Metrics */}
              <div className="flex space-x-4 mb-6">
                <div className="bg-green-500/20 px-3 py-1 rounded-full">
                  <span className="text-green-300 font-semibold text-sm">{testimonial.improvement}</span>
                </div>
                <div className="bg-blue-500/20 px-3 py-1 rounded-full">
                  <span className="text-blue-300 font-semibold text-sm">{testimonial.metric}</span>
                </div>
              </div>

              {/* Author */}
              <div className="border-t border-white/20 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-gray-300">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Button
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 text-lg font-semibold bg-transparent"
          >
            📖 Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  )
}
