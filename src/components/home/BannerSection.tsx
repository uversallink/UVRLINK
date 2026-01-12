import { motion } from "framer-motion";
import { Wifi, Tv, Shield, Zap, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";
import bannerImage from "@/assets/banner.jpg";

const floatingIcons = [
  { icon: Wifi, delay: 0, position: { top: "15%", left: "10%" } },
  { icon: Tv, delay: 0.2, position: { top: "60%", left: "15%" } },
  { icon: Shield, delay: 0.4, position: { top: "25%", right: "20%" } },
  { icon: Zap, delay: 0.6, position: { top: "70%", right: "12%" } },
  { icon: Globe, delay: 0.8, position: { bottom: "20%", right: "25%" } },
  { icon: Award, delay: 1, position: { top: "45%", right: "8%" } },
];

const BannerSection = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="StreamLink Banner"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/30"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute z-10"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: item.delay }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              <IconComponent className="w-24 h-24 text-white" strokeWidth={1} />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Content Container */}
      <div className="container mx-auto px-4 h-full relative z-20">
        <div className="flex items-center justify-end h-full">
          {/* Right Content */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating Card with Glassmorphism */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 backdrop-blur-sm mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Award className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Independent Advisory Service</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Get the Guidance You Need
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Get help understanding your internet and cable TV service options. Independent, third-party guidance to navigate service provider processes. Not affiliated with any ISP or telecom company.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-center">
                  <p className="font-display font-bold text-3xl text-white mb-1">100%</p>
                  <p className="text-sm text-white/70">Independent</p>
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-3xl text-white mb-1">24/7</p>
                  <p className="text-sm text-white/70">Support</p>
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-3xl text-white mb-1">No</p>
                  <p className="text-sm text-white/70">ISP Ties</p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href="tel:855-750-6771"
                  className="btn-coral inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  <span>Call for Cable TV Service Guidance</span>
                  <Zap className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </section>
  );
};

export default BannerSection;
