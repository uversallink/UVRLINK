import { motion } from "framer-motion";
import { Play, Wifi, Zap, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Disclosure Banner */}
      <div className="absolute top-0 left-0 right-0 bg-accent/10 border-b border-accent/30 py-2 sm:py-3 z-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs sm:text-sm text-foreground flex items-center justify-center gap-1 sm:gap-2">
            <Info className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="leading-tight"><strong>Not an ISP. No brand affiliation.</strong> We provide independent third-party guidance for internet and cable TV services. We are not affiliated, authorized, or endorsed by any telecom/cable company.</span>
          </p>
        </div>
      </div>
      {/* Decorative Ribbon - Background Layer */}
      <div className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-0">
        <svg viewBox="0 0 1400 150" className="absolute top-20 -left-20 w-[120%] h-auto">
          <defs>
            <linearGradient id="heroRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="50%" stopColor="hsl(340 82% 52%)" />
              <stop offset="100%" stopColor="hsl(var(--gold))" />
            </linearGradient>
          </defs>
          <motion.path
            d="M-50,80 Q150,20 350,90 T750,60 T1150,80 T1450,50"
            fill="none"
            stroke="url(#heroRibbon)"
            strokeWidth="25"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-5 sm:space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hidden sm:inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/20 border border-secondary/30">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
              <span className="text-xs sm:text-sm font-medium text-foreground">Independent Connectivity Guidance</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground">
              Get Independent Internet & Cable TV Guidance
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              We help you understand internet, broadband, and cable TV service options. Navigate service provider processes with practical guidance from a third-party advisor.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="tel:855-750-6771" className="btn-coral inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                <span>Call for Independent Service Guidance</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="tel:855-750-6771" className="btn-navy inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Talk to a Third-Party Advisor</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 pt-4 overflow-x-auto">
              <div className="flex-shrink-0">
                <p className="font-display font-bold text-2xl sm:text-3xl text-foreground">2026</p>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Founded</p>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border flex-shrink-0"></div>
              <div className="flex-shrink-0">
                <p className="font-display font-bold text-2xl sm:text-3xl text-foreground">24/7</p>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Support</p>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border flex-shrink-0"></div>
              <div className="flex-shrink-0">
                <p className="font-display font-bold text-2xl sm:text-3xl text-foreground">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Independent</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Family enjoying connectivity assistance"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-6 bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-card border border-border"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm sm:text-base text-foreground">Advisory</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Guidance</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 sm:-top-6 -right-3 sm:-right-6 bg-accent rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-card"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <p className="font-display font-bold text-accent-foreground text-sm sm:text-base">Third-Party</p>
              <p className="font-display font-bold text-accent-foreground text-lg sm:text-2xl">Service</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom ribbon - Background Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0">
        <svg viewBox="0 0 1400 100" className="absolute bottom-0 -right-20 w-[120%] h-auto">
          <motion.path
            d="M1450,50 Q1250,90 1050,40 T650,60 T250,40 T-50,70"
            fill="none"
            stroke="url(#heroRibbon)"
            strokeWidth="20"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
