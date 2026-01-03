import { motion } from "framer-motion";
import { Play, Wifi, Zap, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Disclosure Banner */}
      <div className="absolute top-0 left-0 right-0 bg-accent/10 border-b border-accent/30 py-3 z-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-foreground flex items-center justify-center gap-2">
            <Info className="w-4 h-4" />
            <span><strong>Independent Service:</strong> We are an independent third-party assistance platform launched in 2026. We provide guidance services for a separate fee and are not affiliated with any provider.</span>
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Independent Connectivity Guidance</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
              Find Your Perfect Connection
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              We help guide you through internet, cable, and streaming options. Get personalized assistance to find services that match your needs and budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/plans" className="btn-coral inline-flex items-center justify-center gap-2">
                <span>Call Now: 1-800-ASSIST</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-navy inline-flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                <span>Contact Support</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="font-display font-bold text-3xl text-foreground">2026</p>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="font-display font-bold text-3xl text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Assistance</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="font-display font-bold text-3xl text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Independent</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card border border-border"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">Expert</p>
                  <p className="text-sm text-muted-foreground">Guidance</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-accent rounded-2xl p-4 shadow-card"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <p className="font-display font-bold text-accent-foreground text-lg">Service Fee</p>
              <p className="font-display font-bold text-accent-foreground text-3xl">Varies<span className="text-lg">*</span></p>
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
