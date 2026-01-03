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
    title: "Efficiency",
    description: "We streamline the process of finding connectivity providers, saving you time and effort.",
  },
  {
    icon: Heart,
    title: "Client First",
    description: "Every recommendation we make is based on your specific needs, not provider commissions.",
  },
  {
    icon: Award,
    title: "Independence",
    description: "We maintain complete independence from service providers to give you unbiased guidance.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "We're upfront about our service fees and how we operate. No hidden agendas.",
  },
];

const timeline = [
  { year: "2026", title: "Founded", description: "Uversal Link was founded to provide independent connectivity assistance to consumers." },
  { year: "2026 Q2", title: "Platform Launch", description: "Launched our comprehensive provider research and comparison platform." },
  { year: "2026 Q3", title: "1000 Clients", description: "Reached 1,000 satisfied clients who found their ideal connectivity solutions." },
  { year: "2026 Q4", title: "Expanded Services", description: "Added contract review assistance and ongoing support for all service types." },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Uversal Link Independent Assistance</title>
        <meta
          name="description"
          content="Learn about Uversal Link's mission to provide independent connectivity assistance. Helping customers find the right providers since 2026."
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
                  Helping You Find the Right Connection
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Uversal Link is an independent service that helps you research, compare, and select connectivity providers that match your needs.
                </p>
                <Link to="/contact" className="btn-coral inline-flex items-center gap-2">
                  <span>Call 1-800-ASSIST</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
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
                Join the StreamLink Family
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the difference that comes from a company that truly cares about its customers.
              </p>
              <Link to="/plans" className="btn-coral inline-flex items-center gap-2 text-lg">
                <span>View Our Plans</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
