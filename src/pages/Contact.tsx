import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Send, MessageCircle, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "Thank you for reaching out. Our assistance team will respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Uversal Link Assistance</title>
        <meta
          name="description"
          content="Get in touch with Uversal Link for independent connectivity guidance. Assistance services available. We're an independent platform, not affiliated with providers."
        />
      </Helmet>
      <Layout>
        {/* Important Disclosure */}
        <div className="bg-accent/10 border-b border-accent/30 py-3">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-foreground">
              <strong>Important:</strong> Uversal Link is an independent third-party service assistance startup, launched in 2026. We are not affiliated with any cable, internet, or streaming provider. When you call, you'll hear: "Thank you for calling Uversal Link, an independent service assistance platform."
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 sm:py-16 md:py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 sm:mb-6">
                Request Assistance
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/70">
                Have questions about connectivity options? We're here to guide you. Reach out for independent assistance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 sm:py-16 bg-background -mt-8 sm:-mt-10 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
              <motion.div
                className="card-premium text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-1">
                  Call for Assistance
                </h3>
                <a href="tel:1-800-274-7478" className="font-medium text-foreground hover:text-accent transition-colors">
                  1-800-ASSIST3
                </a>
                <p className="text-sm text-muted-foreground mt-1">Independent Guidance Platform</p>
              </motion.div>
              
              <motion.div
                className="card-premium text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-1">
                  Our Location
                </h3>
                <p className="font-medium text-foreground">107 Shorewood Ln</p>
                <p className="text-sm text-muted-foreground">Huntsville, AL 35811</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4">
                Why Choose Uversal Link
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We're an independent platform dedicated to providing unbiased guidance for your connectivity needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                className="card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-xl">100%</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  Independent
                </h3>
                <p className="text-muted-foreground">
                  Completely unbiased guidance with no affiliation to any service providers.
                </p>
              </motion.div>

              <motion.div
                className="card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-xl">24/7</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  Always Available
                </h3>
                <p className="text-muted-foreground">
                  Get assistance whenever you need it through our dedicated support line.
                </p>
              </motion.div>

              <motion.div
                className="card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-xl">✓</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  Transparent
                </h3>
                <p className="text-muted-foreground">
                  Clear pricing and honest information about all available options.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4 sm:mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="assistance">Assistance Request</option>
                        <option value="guidance">Service Guidance</option>
                        <option value="general">General Inquiry</option>
                        <option value="refund">Refund Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-coral inline-flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </motion.div>

              {/* Quick Help */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4 sm:mb-6">
                  Quick Help
                </h2>

                <div className="space-y-5 sm:space-y-6">
                  <div className="card-premium">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                          Assistance Chat
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Get quick answers about our guidance services. Connect with our assistance team.
                        </p>
                        <button className="text-secondary font-medium hover:underline">
                          Request Assistance →
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="card-premium">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                      Frequently Asked Questions
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Are you affiliated with providers?",
                        "What does your service fee cover?",
                        "How do refunds work?",
                        "What assistance do you provide?",
                      ].map((question) => (
                        <li key={question}>
                          <a href="/faq" className="text-left text-muted-foreground hover:text-accent transition-colors">
                            {question}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-premium bg-accent text-accent-foreground">
                    <h3 className="font-display font-semibold text-lg mb-2">
                      Need Guidance Now?
                    </h3>
                    <p className="text-accent-foreground/80 text-sm mb-4">
                      Our independent assistance team is ready to help guide you through your options.
                    </p>
                    <a
                      href="tel:1-800-274-7478"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call 1-800-ASSIST3</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
