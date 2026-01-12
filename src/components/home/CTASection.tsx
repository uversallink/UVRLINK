import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Ribbon decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none">
        <svg viewBox="0 0 1400 100" className="absolute top-0 -left-20 w-[120%] h-auto">
          <defs>
            <linearGradient id="ctaRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="50%" stopColor="hsl(340 82% 52%)" />
              <stop offset="100%" stopColor="hsl(var(--gold))" />
            </linearGradient>
          </defs>
          <motion.path
            d="M-50,50 Q200,10 400,60 T800,40 T1200,60 T1450,30"
            fill="none"
            stroke="url(#ctaRibbon)"
            strokeWidth="18"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Need Independent Guidance?
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Talk to a third-party internet advisor. Get independent service guidance for internet, cable TV, and broadband options.
          </p>
          <p className="text-sm text-muted-foreground/80 mb-10 max-w-2xl mx-auto">
            <strong>Not an ISP. No brand affiliation.</strong> We provide advisory services only and are not affiliated with any telecom company.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="tel:855-750-6771" className="btn-coral inline-flex items-center gap-2 text-lg">
              <span>Call for Independent Service Guidance</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:855-750-6771" className="btn-navy inline-flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5" />
              <span>Talk to a Third-Party Advisor</span>
            </a>
          </div>

          {/* Contact options */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-secondary" />
              <span>Advisory support available</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              <span>Independent consultation</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom ribbon */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg viewBox="0 0 1400 100" className="absolute bottom-0 -right-20 w-[120%] h-auto">
          <motion.path
            d="M1450,60 Q1200,20 1000,70 T600,40 T200,60 T-50,30"
            fill="none"
            stroke="url(#ctaRibbon)"
            strokeWidth="18"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
