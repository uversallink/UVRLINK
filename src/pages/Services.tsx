import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Wifi, Tv, Shield, Smartphone, Home, Gamepad2, Monitor, Cloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import routerImage from "@/assets/router.png";
import remoteImage from "@/assets/remote.png";

const assistanceServices = [
  {
    icon: Wifi,
    title: "Internet Provider Research",
    description: "We help you find and compare internet providers in your area. Research fiber, cable, DSL, and satellite options based on your needs.",
    features: ["Speed comparison", "Price analysis", "Availability check", "Contract review"],
  },
  {
    icon: Home,
    title: "Coverage Analysis",
    description: "Get assistance understanding which providers serve your specific address. We help you navigate coverage maps and availability.",
  },
  {
    icon: Shield,
    title: "Plan Comparison",
    description: "Compare features, pricing, and terms across multiple providers. We help you understand the fine print and make informed decisions.",
  },
  {
    icon: Cloud,
    title: "Setup Guidance",
    description: "Receive recommendations on equipment, installation options, and setup procedures once you choose a provider.",
  },
];

const tvAssistanceServices = [
  {
    icon: Tv,
    title: "TV Provider Comparison",
    description: "Compare cable, satellite, and streaming TV providers. We help you understand channel lineups, pricing, and equipment requirements.",
    info: "Multiple provider options",
  },
  {
    icon: Monitor,
    title: "Channel Research",
    description: "Find out which providers offer the channels and content you want. We help you compare channel packages and on-demand options.",
  },
  {
    icon: Smartphone,
    title: "Streaming Guidance",
    description: "Get assistance comparing streaming services and traditional TV. We help you understand app availability and device compatibility.",
  },
  {
    icon: Gamepad2,
    title: "Bundle Analysis",
    description: "Compare bundled packages from different providers. We help you understand if bundling internet and TV saves you money.",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Uversal Link Assistance Services</title>
        <meta
          name="description"
          content="Learn about Uversal Link's assistance services. We help you research and compare internet, TV, and connectivity providers."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Decorative ribbon */}
          <svg viewBox="0 0 1400 150" className="absolute top-10 -left-20 w-[120%] h-auto pointer-events-none">
            <defs>
              <linearGradient id="servicesRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="50%" stopColor="hsl(340 82% 52%)" />
                <stop offset="100%" stopColor="hsl(var(--gold))" />
              </linearGradient>
            </defs>
            <motion.path
              d="M-50,80 Q150,20 350,90 T750,60 T1150,80 T1450,50"
              fill="none"
              stroke="url(#servicesRibbon)"
              strokeWidth="20"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>

          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Our Assistance Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Independent guidance to help you navigate connectivity options and make informed decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Internet Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
                  <Wifi className="w-4 h-4" />
                  <span className="font-medium">Connectivity Assistance</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Internet Provider Research & Comparison
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We help you research and compare internet providers in your area. Get independent guidance on speeds, pricing, and availability.
                </p>

                <div className="space-y-6">
                  {assistanceServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                        {service.features && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {service.features.map((feature) => (
                              <span key={feature} className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl scale-75"></div>
                  <img
                    src={routerImage}
                    alt="Internet connectivity research illustration"
                    className="relative w-full max-w-md floating"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TV Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative flex justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-75"></div>
                  <img
                    src={remoteImage}
                    alt="TV provider comparison illustration"
                    className="relative w-full max-w-sm floating-delayed"
                  />
                </div>
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                  <Tv className="w-4 h-4" />
                  <span className="font-medium">TV Assistance</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                  TV Provider Comparison
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get help comparing TV providers, channel packages, and streaming options. We guide you through the decision process.
                </p>

                <div className="space-y-6">
                  {tvAssistanceServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                        {service.info && (
                          <span className="inline-block mt-2 px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                            {service.info}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
                Ready for Expert Guidance?
              </h2>
              <p className="text-xl text-primary-foreground/70 mb-8">
                Get personalized assistance finding the right connectivity providers for your needs.
              </p>
              <a href="tel:855-750-6771" className="btn-coral inline-flex items-center gap-2 text-lg">
                <span>Call Now: (855) 750-6771</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
