import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Tv, Wifi, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import FAQSection from "@/components/plans/FAQSection";
import AvailabilityChecker from "@/components/plans/AvailabilityChecker";
import ComparisonTable from "@/components/plans/ComparisonTable";

const assistanceTiers = [
  {
    name: "Basic Guidance",
    description: "Email Support",
    price: "Contact",
    features: ["Provider search", "Email consultation", "Availability check", "Basic comparison"],
  },
  {
    name: "Standard Guidance",
    description: "Phone Support",
    price: "Contact",
    features: ["All Basic features", "Phone consultation", "Multi-provider comparison", "Contract review assistance"],
  },
  {
    name: "Premium Guidance",
    description: "Priority Support",
    price: "Contact",
    popular: true,
    features: ["All Standard features", "Priority support", "Setup recommendations", "Negotiation tips", "Ongoing assistance"],
  },
  {
    name: "Concierge Service",
    description: "Full Service",
    price: "Contact",
    features: ["All Premium features", "Dedicated specialist", "Follow-up support", "Equipment guidance", "Installation coordination", "Billing assistance"],
  },
];

const focusAreas = [
  {
    name: "Internet Only",
    description: "Internet Research",
    info: "Speed comparison",
    features: ["Provider research", "Speed analysis", "Price comparison"],
  },
  {
    name: "TV Only",
    description: "TV Research",
    info: "Channel analysis",
    features: ["Channel comparison", "Streaming options", "Equipment guidance"],
  },
  {
    name: "Combined Services",
    description: "Full Research",
    info: "Bundle analysis",
    popular: true,
    features: ["All service types", "Bundle comparison", "Cost analysis", "Provider coordination"],
  },
  {
    name: "Business Solutions",
    description: "Business Research",
    info: "Commercial options",
    features: ["Business providers", "Contract analysis", "SLA review", "Scalability planning"],
  },
];

const servicePackages = [
  {
    name: "Quick Start",
    description: "Basic + Internet Focus",
    info: "Email support only",
    features: ["Provider search", "Availability check", "Email guidance"],
  },
  {
    name: "Complete Guidance",
    description: "Standard + Combined Services",
    info: "Phone & email support",
    popular: true,
    features: ["Multi-service research", "Bundle analysis", "Phone consultation", "Contract review"],
  },
  {
    name: "Full Service",
    description: "Concierge + All Services",
    info: "Priority dedicated support",
    features: ["Comprehensive research", "Dedicated specialist", "Installation coordination", "Ongoing assistance"],
  },
];

const Plans = () => {
  return (
    <>
      <Helmet>
        <title>Assistance Plans - Uversal Link Service Options</title>
        <meta
          name="description"
          content="Compare Uversal Link assistance plans. Get help finding internet and TV providers with our guidance packages."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Choose Your Assistance Level
              </h1>
              <p className="text-xl text-primary-foreground/70">
                Flexible guidance options to help you find the right connectivity providers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bundle Deals */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Service Packages</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Combined Service Options
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {servicePackages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  className={`relative rounded-3xl p-8 ${
                    pkg.popular
                      ? "bg-accent text-accent-foreground scale-105 shadow-2xl"
                      : "bg-card border border-border shadow-card"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 right-6">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="font-display font-bold text-xl mb-2">{pkg.name}</h3>
                  <p className={`text-sm mb-2 ${pkg.popular ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </p>
                  <p className={`text-xs mb-4 ${pkg.popular ? "text-accent-foreground/60" : "text-muted-foreground/70"}`}>
                    {pkg.info}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="font-display font-bold text-3xl">Contact</span>
                    </div>
                    <span className={`text-sm ${pkg.popular ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                      Pricing varies by service needs
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:855-750-6771"
                    className={`w-full inline-block text-center py-3 rounded-full font-semibold transition-all ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground hover:shadow-lg"
                        : "bg-accent text-accent-foreground hover:shadow-lg"
                    }`}
                  >
                    Call Now: (855) 750-6771
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Internet Plans */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-4">
                <Wifi className="w-4 h-4" />
                <span className="font-medium">Assistance Tiers</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                Choose Your Support Level
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {assistanceTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  className={`rounded-2xl p-6 ${
                    tier.popular
                      ? "bg-secondary text-secondary-foreground ring-2 ring-secondary"
                      : "bg-card border border-border"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tier.popular && (
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                      Best Value
                    </span>
                  )}
                  <h3 className="font-display font-bold text-lg">{tier.name}</h3>
                  <p className={`text-lg font-semibold mb-2 ${tier.popular ? "" : "text-secondary"}`}>
                    {tier.description}
                  </p>
                  <div className="mb-4">
                    <span className="font-display font-bold text-2xl">{tier.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className={`w-4 h-4 ${tier.popular ? "text-primary" : "text-secondary"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-block text-center py-3 rounded-full font-medium transition-all ${
                      tier.popular
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4">
                <Tv className="w-4 h-4" />
                <span className="font-medium">Focus Areas</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                What Do You Need Help With?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  className={`rounded-2xl p-6 ${
                    area.popular
                      ? "bg-accent text-accent-foreground ring-2 ring-accent"
                      : "bg-card border border-border"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {area.popular && (
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display font-bold text-lg">{area.name}</h3>
                  <p className={`text-lg font-semibold mb-2 ${area.popular ? "" : "text-accent"}`}>
                    {area.description}
                  </p>
                  <p className={`text-sm mb-4 ${area.popular ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
                    {area.info}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {area.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className={`w-4 h-4 ${area.popular ? "text-primary" : "text-accent"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:855-750-6771"
                    className={`w-full inline-block text-center py-3 rounded-full font-medium transition-all ${
                      area.popular
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    Call for Help: (855) 750-6771
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Availability Checker */}
        <AvailabilityChecker />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:855-750-6771" className="btn-coral inline-flex items-center gap-2">
                <span>Call Now: (855) 750-6771</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:855-750-6771" className="btn-navy inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(855) 750-6771</span>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Plans;
