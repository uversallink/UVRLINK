import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does installation take?",
    answer: "Professional installation typically takes 2-4 hours depending on your home's setup. Our technicians will install all necessary equipment, set up your WiFi network, and ensure everything is working perfectly before they leave. Self-install kits are also available for internet-only plans and usually take about 30 minutes.",
  },
  {
    question: "Are there any installation fees?",
    answer: "Standard professional installation is FREE with any 12-month agreement. Without an agreement, installation is $99 for internet and $149 for TV + Internet bundles. Self-installation is always free with internet-only plans.",
  },
  {
    question: "Can I keep my current phone number?",
    answer: "Yes! If you add our home phone service, we can port your existing number at no additional charge. The process typically takes 1-2 business days to complete.",
  },
  {
    question: "What equipment is included?",
    answer: "All plans include a WiFi router at no extra cost. TV plans include one HD DVR receiver. Additional receivers for other rooms are $7/month each. Premium and Ultimate TV plans include our WiFi 6E mesh system for whole-home coverage.",
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly in advance. Your first bill will include a prorated amount for the remaining days of that billing cycle plus the next full month. AutoPay is available and saves you $5/month. We accept all major credit cards, debit cards, and bank transfers.",
  },
  {
    question: "What if I need to cancel or change my plan?",
    answer: "You can upgrade your plan at any time with no fees. Downgrades take effect at your next billing cycle. If you cancel within 30 days, you'll receive a full refund. After 30 days, early termination fees may apply if you're on a contract.",
  },
  {
    question: "Is there a data cap on internet plans?",
    answer: "No! All StreamLink internet plans include truly unlimited data. There are no data caps, throttling, or overage charges. Use as much as you need without worrying about limits.",
  },
  {
    question: "What's included with the DVR?",
    answer: "Our cloud DVR lets you record up to 6 shows simultaneously. Storage varies by plan: Starter includes 30 hours, Choice has 100 hours, Premium offers 200 hours, and Ultimate provides unlimited storage. All recordings are accessible from any device.",
  },
  {
    question: "Do you offer any discounts?",
    answer: "Yes! We offer discounts for seniors (10% off), military/veterans (15% off), and first responders (15% off). Bundling services also saves you money—up to $39/month with our Ultimate Bundle. Students get special rates too!",
  },
  {
    question: "What happens if my service goes down?",
    answer: "Our network has 99.9% uptime, but if issues occur, our 24/7 support team is here to help. We'll troubleshoot remotely first, and if needed, send a technician within 24 hours at no charge. We also provide service credits for extended outages.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
