import { motion } from "framer-motion";
import { Wifi, Tv, Shield, Headphones, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Fiber-Fast Internet",
    description: "Speeds up to 1 Gig with unlimited data. Perfect for streaming, gaming, and working from home.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    icon: Tv,
    title: "Premium TV Packages",
    description: "300+ HD channels including sports, movies, and premium networks with DVR included.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Built-in network protection keeps your devices safe from threats and intrusions.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert support available around the clock via phone, chat, or in-home service.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
  },
  {
    icon: Zap,
    title: "Easy Installation",
    description: "Professional installation within 24-48 hours. Self-install options also available.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    icon: Globe,
    title: "Whole-Home WiFi",
    description: "WiFi 6E mesh system covers every corner of your home with strong, reliable signal.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
            Why Choose StreamLink?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Experience the perfect blend of speed, entertainment, and reliability with our comprehensive packages.
          </p>
        </motion.div>

        {/* Unique Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {/* Large Feature Card - Spans 2 columns on large screens */}
          {(() => {
            const Icon0 = features[0].icon;
            return (
              <motion.div
                className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0">
                  <img
                    src={features[0].image}
                    alt={features[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-transparent"></div>
                </div>
                <div className="relative p-8 lg:p-12 h-full flex flex-col justify-end min-h-[400px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Icon0 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
                    {features[0].title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                    {features[0].description}
                  </p>
                </div>
              </motion.div>
            );
          })()}

          {/* Medium Feature Card */}
          {(() => {
            const Icon1 = features[1].icon;
            return (
              <motion.div
                className="relative group overflow-hidden rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute inset-0">
                  <img
                    src={features[1].image}
                    alt={features[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-accent/70 to-transparent"></div>
                </div>
                <div className="relative p-8 h-full flex flex-col justify-end min-h-[300px]">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Icon1 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {features[1].title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {features[1].description}
                  </p>
                </div>
              </motion.div>
            );
          })()}

          {/* Medium Feature Card */}
          {(() => {
            const Icon2 = features[2].icon;
            return (
              <motion.div
                className="relative group overflow-hidden rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute inset-0">
                  <img
                    src={features[2].image}
                    alt={features[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-transparent"></div>
                </div>
                <div className="relative p-8 h-full flex flex-col justify-end min-h-[300px]">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Icon2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {features[2].title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {features[2].description}
                  </p>
                </div>
              </motion.div>
            );
          })()}

          {/* Large Feature Card - Spans 2 columns */}
          {(() => {
            const Icon3 = features[3].icon;
            return (
              <motion.div
                className="lg:col-span-2 relative group overflow-hidden rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="absolute inset-0">
                  <img
                    src={features[3].image}
                    alt={features[3].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-transparent"></div>
                </div>
                <div className="relative p-8 lg:p-10 h-full flex flex-col justify-end min-h-[300px]">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Icon3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-white mb-4">
                    {features[3].title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                    {features[3].description}
                  </p>
                </div>
              </motion.div>
            );
          })()}

          {/* Two Small Feature Cards */}
          {(() => {
            const Icon4 = features[4].icon;
            return (
              <motion.div
                className="relative group overflow-hidden rounded-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="absolute inset-0">
                  <img
                    src={features[4].image}
                    alt={features[4].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-transparent"></div>
                </div>
                <div className="relative p-8 h-full flex flex-col justify-end min-h-[300px]">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Icon4 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {features[4].title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {features[4].description}
                  </p>
                </div>
              </motion.div>
            );
          })()}

          {(() => {
            const Icon5 = features[5].icon;
            return (
              <motion.div
                className="relative group overflow-hidden rounded-3xl md:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="absolute inset-0">
                  <img
                    src={features[5].image}
                    alt={features[5].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-transparent"></div>
                </div>
                <div className="relative p-8 h-full flex flex-col justify-end min-h-[300px]">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Icon5 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {features[5].title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {features[5].description}
                  </p>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
