import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic Guidance",
    price: "Contact",
    description: "Quick assistance for simple inquiries",
    speed: "Email Support",
    channels: "1-2 Providers",
    features: [
      "Availability check",
      "Basic provider comparison",
      "Email guidance",
      "FAQ access",
    ],
    popular: false,
  },
  {
    name: "Standard Assistance",
    price: "Contact",
    description: "Comprehensive research and guidance",
    speed: "Phone + Email",
    channels: "3-5 Providers",
    features: [
      "Detailed availability research",
      "Multi-provider comparison",
      "Phone consultation",
      "Feature explanation",
      "Terms clarification",
      "Follow-up support",
    ],
    popular: true,
  },
  {
    name: "Premium Support",
    price: "Contact",
    description: "Full-service assistance package",
    speed: "Priority Access",
    channels: "All Providers",
    features: [
      "Comprehensive market research",
      "All provider comparisons",
      "Priority phone support",
      "Contract review assistance",
      "Provider contact facilitation",
      "Ongoing guidance",
      "Refund eligible",
    ],
    popular: false,
  },
];

const PricingPreview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Assistance Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible guidance options to match your needs. Separate service fee for our assistance.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-primary text-primary-foreground scale-105 shadow-2xl"
                  : "bg-card text-card-foreground border border-border shadow-card"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-5xl">${plan.price}</span>
                  <span className={`${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/mo</span>
                </div>
              </div>

              {/* Speed & Channels */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-current/10">
                <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                  plan.popular ? "bg-primary-foreground/20" : "bg-secondary/20 text-secondary"
                }`}>
                  {plan.speed}
                </div>
                <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                  plan.popular ? "bg-primary-foreground/20" : "bg-accent/20 text-accent"
                }`}>
                  {plan.channels}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-accent" : "bg-secondary"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-accent-foreground" : "text-secondary-foreground"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : ""}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/plans"
                className={`w-full py-4 rounded-full font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:shadow-lg"
                    : "bg-primary text-primary-foreground hover:shadow-lg"
                }`}
              >
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all plans link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/plans"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            <span>Compare all plans in detail</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
