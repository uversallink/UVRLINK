import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Uversal Link</title>
        <meta
          name="description"
          content="Important disclaimers about Uversal Link's independent service assistance platform."
        />
      </Helmet>
      <Layout>
        <section className="py-24 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-950/30 dark:via-rose-950/30 dark:to-pink-950/30 relative overflow-hidden">
          {/* Decorative diagonal stripes */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="disclaimer-stripes" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="40" height="80" fill="currentColor" className="text-red-400"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#disclaimer-stripes)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
                <AlertTriangle className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Important Information</span>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6">
                Disclaimer
              </h1>

              <p className="text-muted-foreground mb-8">
                Last Updated: January 2, 2026
              </p>

              {/* Important Disclosure */}
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30 mb-12">
                <p className="text-foreground leading-relaxed">
                  <strong>Critical Disclosure:</strong> Uversal Link is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We do not sell, install, or provide internet, cable, or streaming services.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">1. Nature of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Uversal Link provides independent guidance and assistance services only. We help customers understand connectivity options by providing research, comparisons, and educational information. We do not provide the actual internet, cable, or streaming services themselves.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">2. No Provider Relationship</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are not affiliated with, authorized by, endorsed by, sponsored by, or officially partnered with any internet service provider (ISP), cable company, or streaming platform. Any reference to provider names, logos, or trademarks is for descriptive and informational purposes only. All trademarks are the property of their respective owners.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">3. Separate Service Fee</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our assistance services carry a separate fee that is independent from any provider charges. When you use our services, you will be billed separately by us and by any provider you choose to work with. Our fee covers only the guidance and assistance we provide, not the actual connectivity services.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">4. No Guarantees</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We cannot guarantee:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Specific pricing from any service provider</li>
                  <li>Service availability at your location</li>
                  <li>Specific internet speeds or performance levels</li>
                  <li>Channel availability or streaming content</li>
                  <li>Provider installation timelines or service quality</li>
                  <li>That provider terms won't change after our guidance is provided</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All final terms, pricing, and service agreements are determined solely by the providers and are subject to their policies and availability.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">5. Information Accuracy</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  While we strive to provide accurate and current information, we cannot guarantee the accuracy, completeness, or timeliness of all data. Provider offerings, pricing, and availability change frequently. Information we provide is based on publicly available sources and may not reflect real-time updates. You should verify all details directly with providers before making decisions.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">6. Not Professional or Legal Advice</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our assistance services provide general guidance and educational information only. We do not provide professional telecommunications advice, legal counsel, financial planning, or technology consulting. For specific professional advice regarding complex situations, please consult appropriate licensed professionals.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To the fullest extent permitted by law, Uversal Link shall not be liable for:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Provider service outages, technical problems, or quality issues</li>
                  <li>Changes in provider pricing or service terms after guidance is provided</li>
                  <li>Provider installation delays or service unavailability</li>
                  <li>Disputes between you and any service provider</li>
                  <li>Loss of data, business, or revenue related to connectivity services</li>
                  <li>Indirect, consequential, or punitive damages</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our total liability to you for any claims related to our assistance services shall not exceed the amount you paid for those services.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">8. Provider Responsibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Service providers are solely responsible for:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Their service delivery, installation, and technical support</li>
                  <li>Their pricing, terms, and contract requirements</li>
                  <li>Their billing practices and customer service</li>
                  <li>Their network performance and uptime</li>
                  <li>Their equipment and technology</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We have no control over or responsibility for provider actions, policies, or service quality.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">9. User Responsibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  You are responsible for:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Verifying all information with providers directly before making decisions</li>
                  <li>Reading and understanding provider terms and contracts before agreeing</li>
                  <li>Ensuring service availability and compatibility with your needs</li>
                  <li>Managing your relationships and accounts with service providers</li>
                  <li>Paying provider bills directly according to their terms</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">10. Third-Party Content</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our website may contain links to third-party websites or reference third-party information. We do not endorse, control, or assume responsibility for third-party content, websites, or services. Your interactions with third parties are solely between you and them.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">11. Service Modifications</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We reserve the right to modify, suspend, or discontinue any aspect of our assistance services at any time without prior notice. We are not liable for any modifications or discontinuation of services.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">12. Geographic Limitations</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Service provider availability varies by location. Our assistance services are provided based on publicly available information about provider coverage areas. We cannot guarantee service availability in any specific location.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">13. "As-Is" Basis</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our assistance services are provided on an "as-is" and "as-available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">14. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  You agree to indemnify and hold Uversal Link harmless from any claims, damages, or expenses arising from your use of our services, your violation of these terms, or your interactions with service providers.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">15. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For questions about this Disclaimer, please contact us through our Contact Us page. When you call, our greeting will clearly identify us as "Uversal Link, an independent service assistance platform."
                </p>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-muted/30 border border-border">
                <p className="text-center text-muted-foreground">
                  By using Uversal Link's assistance services, you acknowledge that you have read, understood, and agree to this Disclaimer and all associated policies.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Disclaimer;
