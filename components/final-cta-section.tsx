"use client";

import { Button } from "@/components/ui/button";
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
import { Clock, Users, CreditCard } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export function FinalCtaSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("final-cta-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: CreditCard,
      text: "No credit card required",
    },
    {
      icon: Users,
      text: "Expert support from our team",
    },
    {
      icon: Clock,
      text: "Cancel anytime",
    },
  ];

  return (
    <section
      id="final-cta-section"
      className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            🔥 Don't miss out, become a{" "}
            <span className="text-yellow-300 relative">
              local hot spot!
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-300 animate-pulse"></div>
            </span>
          </h2>

          <p
            className={`text-xl mb-8 opacity-90 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <strong>You lose nothing by signing up</strong> and so many future
            regulars if you don't.{" "}
            <span className="text-yellow-300 font-bold">
              Start now and see the results in weeks.
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105 animate-pulse"
            >
              🚀 Start My Free Trial Now
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600 px-12 py-6 text-xl font-bold bg-transparent"
                >
                  📞 Book a Demo
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
          </div>

          {/* Benefits */}
          <div
            className={`flex flex-wrap justify-center gap-8 text-lg transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <benefit.icon className="w-5 h-5 text-yellow-300" />
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Urgency Message */}
          <div
            className={`mt-8 bg-yellow-400 text-gray-900 p-4 rounded-xl inline-block font-bold transition-all duration-1000 delay-1200 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            ⏰ Limited Time: Get 2 months FREE when you start today!
          </div>
        </div>
      </div>
    </section>
  );
}
