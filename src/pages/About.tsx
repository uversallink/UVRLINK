import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Award, Users, Zap, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-family.jpg";

const stats = [
  { value: "1000+", label: "Clients Assisted" },
  { value: "2026", label: "Founded" },
  { value: "100%", label: "Independent" },
  { value: "24/7", label: "Support Available" },
];

const values = [
  {
    icon: Zap,
    title: "Educational Focus",
    description: "We help you understand internet and broadband service options through practical guidance and information.",
  },
  {
    icon: Heart,
    title: "User-Centered",
    description: "Every piece of guidance is based on helping you understand your connectivity options and navigate service provider processes.",
  },
  {
    icon: Award,
    title: "Complete Independence",
    description: "We maintain complete independence from all ISPs and telecom companies. No brand affiliation or official partnerships.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "We're clear about what we do and don't do. We provide advisory services only - not official ISP service or support.",
  },
];

const timeline = [
  { year: "2026", title: "Founded", description: "Uversal Link was founded to provide independent third-party guidance for internet and cable TV services." },
  { year: "2026 Q2", title: "Platform Launch", description: "Launched our advisory service to help users understand connectivity options." },
  { year: "2026 Q3", title: "Growing Reach", description: "Expanded our educational resources and guidance services to help more users." },
  { year: "2026 Q4", title: "Ongoing Support", description: "Continued commitment to independent, unbiased guidance for connectivity issues." },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Uversal Link Independent Advisory Service</title>
        <meta
          name="description"
          content="Learn about Uversal Link's independent advisory service. We help you understand internet and cable TV options. Not affiliated with any ISP or telecom company."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Decorative ribbon */}
          <svg viewBox="0 0 1400 150" className="absolute top-10 -left-20 w-[120%] h-auto pointer-events-none">
            <defs>
              <linearGradient id="aboutRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="50%" stopColor="hsl(340 82% 52%)" />
                <stop offset="100%" stopColor="hsl(var(--gold))" />
              </linearGradient>
            </defs>
            <motion.path
              d="M-50,80 Q150,20 350,90 T750,60 T1150,80 T1450,50"
              fill="none"
              stroke="url(#aboutRibbon)"
              strokeWidth="20"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                  Independent Internet & Cable TV Guidance
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Uversal Link is an independent third-party advisory service that helps you understand internet, cable TV, and broadband service options. We are not affiliated with any ISP or telecom company.
                </p>
                <a href="tel:855-750-6771" className="btn-coral inline-flex items-center gap-2">
                  <span>Call for Independent Guidance</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Uversal Link helping clients find connectivity"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground">
                At uversallink.com, we help users understand internet/broadband service options, get practical guidance on connectivity issues, and learn how to navigate service provider processes. We do NOT provide official service, ISP support, or represent any telecom brand.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="card-premium text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Journey
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex gap-6 mb-8 last:mb-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-display font-bold">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="pt-3">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                What We DON'T Do
              </h2>
              <div className="text-left max-w-2xl mx-auto mb-8 space-y-3 text-muted-foreground">
                <p>• We are not an internet service provider (ISP)</p>
                <p>• We are not affiliated, authorized, or endorsed by any telecom/cable company</p>
                <p>• We do not sell official ISP services</p>
                <p>• We do not provide guaranteed technical fixes</p>
                <p>• All mentions of providers are for informational purposes only</p>
              </div>
              <a href="tel:855-750-6771" className="btn-coral inline-flex items-center gap-2 text-lg">
                <span>Call for Independent Guidance</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
