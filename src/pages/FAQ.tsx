import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Are you an official cable or internet service provider?",
    answer: "No. Uversal Link is an independent third-party service assistance platform. We are not a cable, internet, or streaming service provider. We do not own or operate any network infrastructure. Our role is to help guide customers through understanding their connectivity options and assist them with service-related questions."
  },
  {
    question: "Do you sell internet, cable, or streaming plans?",
    answer: "No. We do not sell, install, or activate any internet, cable, or streaming services. We provide educational guidance and assistance to help you understand available options in your area. Any service activation or subscription occurs directly between you and the provider you choose."
  },
  {
    question: "Do you charge for your services?",
    answer: "Yes. Uversal Link charges a separate service fee for the assistance and guidance we provide. This fee covers our consultation services, research, and support. It is completely separate from any charges you may incur with your chosen service provider."
  },
  {
    question: "Will I still be billed by my service provider?",
    answer: "Yes. Your service provider will bill you directly for their internet, cable, or streaming services according to their own pricing and terms. Our assistance fee is separate and does not include or replace provider charges. You will receive two separate bills: one from us for assistance services, and one from your chosen provider for their services."
  },
  {
    question: "Do you need my account passwords or sensitive information?",
    answer: "No. We never request or require your service provider account passwords, social security numbers, or other highly sensitive credentials. We only need basic information to help guide you, such as your location for checking service availability or general preferences for service features."
  },
  {
    question: "Which providers do you support?",
    answer: "We may reference multiple internet, cable, and streaming providers during our guidance process to help you understand your options. We are not affiliated with, endorsed by, or sponsored by any of these providers. All provider names and trademarks belong to their respective owners, and any reference is for informational and descriptive purposes only."
  },
  {
    question: "Are your services refundable?",
    answer: "Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether the service has already been delivered. Please review our Refund Policy page for complete eligibility details and the refund request process."
  },
  {
    question: "How quickly can I get assistance?",
    answer: "Our support team typically responds to assistance requests within 24 hours during business days. Complex inquiries may require additional time for thorough research. We strive to provide helpful guidance as efficiently as possible while ensuring accuracy."
  },
  {
    question: "What information do you need from me to provide assistance?",
    answer: "To provide effective guidance, we typically need your ZIP code or service address to check what providers serve your area, your current internet or TV usage patterns, your budget preferences, and any specific features you're looking for. We do not need sensitive account credentials or personal financial information."
  },
  {
    question: "Can you guarantee I'll get a specific service or price?",
    answer: "No. We cannot guarantee specific services, pricing, or availability, as these are determined solely by the individual service providers. We can help you understand what options may be available based on publicly available information, but final pricing, terms, and availability are controlled by the providers themselves."
  },
  {
    question: "Do you provide technical support for my internet or TV service?",
    answer: "Our assistance focuses on helping you understand service options, comparing features, and guiding you through the selection process. For technical issues with active services, you will need to contact your provider's official technical support team directly, as they manage and troubleshoot their own networks and equipment."
  },
  {
    question: "How do I contact you if I have questions?",
    answer: "You can reach our assistance team through the contact information provided on our Contact Us page. We offer support via phone, email, and our online contact form. Our greeting will clearly identify us as an independent service assistance platform to ensure transparency."
  }
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Uversal Link</title>
        <meta
          name="description"
          content="Frequently asked questions about Uversal Link's independent service assistance platform. Learn about our guidance services and policies."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
                <HelpCircle className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Frequently Asked Questions</span>
              </div>
              
              <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6">
                Questions & Answers
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Learn more about our independent assistance services and how we can help guide you through your connectivity decisions.
              </p>
            </motion.div>

            {/* Important Disclosure */}
            <motion.div
              className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-accent/10 border border-accent/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-center text-foreground leading-relaxed">
                <strong>Important:</strong> We are an independent third-party service assistance startup, launched in 2026, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We provide guidance and support services for a separate fee.
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-2xl px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg text-foreground hover:text-secondary transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Still Have Questions CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our assistance team is here to help guide you through any inquiries.
              </p>
              <a
                href="tel:855-750-6771"
                className="btn-coral inline-flex items-center gap-2"
              >
                Call Now: (855) 750-6771
              </a>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FAQ;
