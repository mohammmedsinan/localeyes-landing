"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, TrendingUp, Eye } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-100 animate-bounce">
              🚨 Don't Stay Invisible!
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Local Search</span> is the key to stop being{" "}
              <span className="relative">
                invisible
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-400 animate-pulse"></div>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>Help your future customers find you.</strong> LocalEyes is an AI platform that will make sure your
              business lands at the top where any potential customers looking for their next favourite spot can find
              you!
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
              <p className="text-gray-700">
                <strong>In today's digital age, 8 out of 10 people</strong> will search online when finding a place to
                eat. LocalEyes helps you optimize your Google and Apple business profiles, manage reviews, and beat the
                increasing AI-driven algorithm.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold animate-pulse shadow-lg"
              >
                🚀 Outrank your competition today!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                📞 Book a Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
              <div>✅ No Credit Card</div>
              <div>✅ Results in Weeks</div>
            </div>
          </div>

          {/* Right Column - Animated Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative">
              {/* Phone Mockup */}
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-gray-100 p-4 flex justify-center">
                    <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
                  </div>

                  {/* Google Maps Interface */}
                  <div className="p-4 space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">Google Maps</span>
                    </div>

                    {/* Search Results */}
                    <div className="space-y-3">
                      {/* Top Result - Highlighted */}
                      <div className="bg-green-50 border-2 border-green-400 rounded-lg p-3 animate-pulse">
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">YOUR</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900">Your Restaurant</h3>
                            <div className="flex items-center space-x-1 mb-1">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">(127 reviews)</span>
                            </div>
                            <p className="text-xs text-gray-600">0.2 mi • Open now</p>
                          </div>
                          <Badge className="bg-green-600 text-white text-xs">#1</Badge>
                        </div>
                      </div>

                      {/* Other Results */}
                      <div className="bg-gray-50 rounded-lg p-3 opacity-60">
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-gray-400 rounded-lg"></div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-700">Competitor A</h3>
                            <div className="flex items-center space-x-1 mb-1">
                              <div className="flex text-yellow-400">
                                {[...Array(4)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                                <Star className="w-3 h-3 text-gray-300" />
                              </div>
                              <span className="text-sm text-gray-600">(89 reviews)</span>
                            </div>
                            <p className="text-xs text-gray-600">0.5 mi • Closes soon</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3 opacity-40">
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-gray-400 rounded-lg"></div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-700">Competitor B</h3>
                            <div className="flex items-center space-x-1 mb-1">
                              <div className="flex text-yellow-400">
                                {[...Array(3)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                                {[...Array(2)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 text-gray-300" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">(45 reviews)</span>
                            </div>
                            <p className="text-xs text-gray-600">0.8 mi • Open</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-full animate-bounce">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-2 rounded-full animate-pulse">
                <Eye className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
