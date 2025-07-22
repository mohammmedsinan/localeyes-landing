import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function FaqSection() {
  const faqs = [
    {
      question: "Do I need technical knowledge?",
      answer:
        "No. LocalEyes is very intuitive! It's designed for non-technical business owners. Our AI handles all the complex SEO work while you focus on running your restaurant.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. No contracts. Cancel anytime. We're confident you'll love the results, but we want you to feel completely comfortable trying LocalEyes risk-free.",
    },
    {
      question: "Does it work for businesses outside specific regions?",
      answer:
        "Yes, we support any location covered by Google Business Profile and Apple Places. Whether you're in North America, Europe, Asia, or anywhere else, LocalEyes works for your local business.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most restaurants see improvements in their local rankings and review scores within 2-4 weeks. Some see changes even sooner! Our AI works 24/7 to optimize your presence.",
    },
    {
      question: "What if I have multiple restaurant locations?",
      answer:
        "Perfect! LocalEyes is built to handle multiple locations from one dashboard. You can manage all your restaurants, track performance, and maintain consistency across all locations effortlessly.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers!</p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
          >
            📋 See More FAQs
          </Button>
        </div>
      </div>
    </section>
  )
}
