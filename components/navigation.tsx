"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-blue-600">Local</span>Eyes.ai
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Features
            </a>
            <a href="#who-its-for" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Who It's For
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Blog
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600 font-medium">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6">Start Free Trial</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium">
                Features
              </a>
              <a href="#who-its-for" className="text-gray-600 hover:text-blue-600 font-medium">
                Who It's For
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium">
                Pricing
              </a>
              <a href="#blog" className="text-gray-600 hover:text-blue-600 font-medium">
                Blog
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600 font-medium justify-start">
                  Login
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">Start Free Trial</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
