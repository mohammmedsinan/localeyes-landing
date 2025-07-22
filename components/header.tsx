"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/localeyes-logo.svg"
              alt="LocalEyes.ai"
              width={200}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#solution-section"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works-section"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials-section"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Book a Demo
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Book a Demo
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    LocalEyes is an AI platform that will make sure your
                    business lands at the top where any potential customers
                    looking for their next favourite spot can find you!
                    <br />
                    <Input type="email" placeholder="Email" />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="border-blue-600 border text-blue-600 hover:bg-blue-50 bg-transparent">
                    Book Now
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <a href="https://forms.gle/4az5HztK65J4W1CaA" target="_blank">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 animate-pulse">
                Start Free Trial
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Success Stories
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                FAQ
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Book a Demo
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
