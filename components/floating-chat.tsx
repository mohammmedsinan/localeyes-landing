"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingChat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all"
        onClick={() => {
          // Add chat functionality here
          console.log("Chat opened")
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}
