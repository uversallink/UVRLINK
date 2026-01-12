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
    title: "Internet Service Guidance",
    description: "We help you understand internet service options in your area. Learn about fiber, cable, DSL, and satellite connectivity.",
    features: ["Understanding speed needs", "Provider information", "Coverage education", "Terms clarification"],
  },
  {
    icon: Home,
    title: "Broadband Navigation",
    description: "Get help navigating broadband service provider processes. We provide guidance on understanding coverage and availability.",
  },
  {
    icon: Shield,
    title: "Service Comparison Education",
    description: "Learn how to compare features, pricing, and terms across different service types. We help you understand the differences.",
  },
  {
    icon: Cloud,
    title: "Practical Guidance",
    description: "Receive educational guidance on connectivity issues. We help you understand your options without providing guaranteed technical fixes.",
  },
];

const tvAssistanceServices = [
  {
    icon: Tv,
    title: "Cable TV Service Help",
    description: "Get independent cable TV assistance. We help you understand cable, satellite, and streaming TV options.",
    info: "Educational guidance only",
  },
  {
    icon: Monitor,
    title: "Channel Information",
    description: "Learn about channel packages and content offerings. We provide information to help you understand your options.",
  },
  {
    icon: Smartphone,
    title: "Streaming Education",
    description: "Get help understanding streaming services and traditional TV differences. We explain app availability and device compatibility.",
  },
  {
    icon: Gamepad2,
    title: "Service Bundle Information",
    description: "Learn about bundled service packages. We help you understand the differences between bundle options.",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Independent Internet & Cable TV Guidance</title>
        <meta
          name="description"
          content="Learn about our independent advisory services for internet, cable TV, and broadband. We help you understand service options - not affiliated with any ISP."
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
                Independent Advisory Services
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                We help you understand internet, cable TV, and broadband service options. Get practical guidance on connectivity issues and learn how to navigate service provider processes.
              </p>
              <p className="text-sm text-muted-foreground/80">
                <strong>Not an ISP. No brand affiliation.</strong> We provide independent third-party guidance only.
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
                  <span className="font-medium">Internet Guidance</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Internet Service Guidance
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get help understanding your internet and broadband options. We provide educational guidance to help you navigate service provider processes. We are not an ISP.
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
                  <span className="font-medium">Cable TV Guidance</span>
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Cable TV Service Help
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get independent cable TV assistance. We help you understand TV service options, channel packages, and streaming alternatives. Educational guidance only.
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
                Need Independent Guidance?
              </h2>
              <p className="text-xl text-primary-foreground/70 mb-4">
                Talk to a third-party internet advisor. Get independent service guidance for your connectivity needs.
              </p>
              <p className="text-sm text-primary-foreground/60 mb-8">
                <strong>Disclaimer:</strong> Not an ISP. No brand affiliation. We provide advisory services only.
              </p>
              <a href="tel:855-750-6771" className="btn-coral inline-flex items-center gap-2 text-lg">
                <span>Call for Independent Service Guidance</span>
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
