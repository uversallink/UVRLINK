import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Uversal Link</title>
        <meta
          name="description"
          content="Terms and conditions for using Uversal Link's independent service assistance platform."
        />
      </Helmet>
      <Layout>
        <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/30 dark:via-emerald-950/30 dark:to-teal-950/30 relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 border-4 border-green-400 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-emerald-400 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
                <FileText className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Legal</span>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6">
                Terms & Conditions
              </h1>

              <p className="text-muted-foreground mb-8">
                Last Updated: January 2, 2026
              </p>

              {/* Important Disclosure */}
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30 mb-12">
                <p className="text-foreground leading-relaxed">
                  <strong>Important Disclosure:</strong> Uversal Link is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We provide guidance and assistance services for a separate fee that is independent of any provider charges.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">1. Service Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Uversal Link provides independent assistance and guidance services to help customers understand and navigate connectivity options including internet, cable, and streaming services. We do not sell, install, activate, or provide any internet, cable, or streaming services ourselves.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">2. Independent Service Fee</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our service charges a separate assistance fee for the guidance, research, and support we provide. This fee is completely independent from any charges imposed by service providers. You acknowledge that you will be billed separately by:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Uversal Link for our assistance services</li>
                  <li>Your chosen service provider for their internet, cable, or streaming services</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">3. No Provider Affiliation</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are not affiliated with, endorsed by, sponsored by, or authorized by any internet, cable, or streaming service provider. Any reference to provider names, services, or trademarks is for descriptive and informational purposes only. All trademarks belong to their respective owners.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">4. No Guarantees</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We cannot guarantee specific pricing, service availability, speeds, or features from any service provider. All final terms, pricing, and service agreements are between you and your chosen provider. Information we provide is based on publicly available data and may change without notice.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">5. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  You agree to:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Provide accurate information when requesting assistance</li>
                  <li>Understand that final service arrangements are between you and the provider</li>
                  <li>Review and accept the provider's terms before signing up for their services</li>
                  <li>Contact providers directly for technical support and billing issues related to their services</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Uversal Link provides assistance services on an "as-is" basis. We are not responsible for:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Provider service outages, technical issues, or quality problems</li>
                  <li>Changes to provider pricing or service terms</li>
                  <li>Provider installation delays or service unavailability</li>
                  <li>Disputes between you and any service provider</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">7. Refund Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Refund requests may be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether services have been delivered. Please refer to our Refund Policy page for complete details on eligibility and the refund request process.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">8. Privacy and Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We collect only the information necessary to provide assistance services. We never request or require your provider account passwords or highly sensitive credentials. Please review our Privacy Policy for details on data collection and usage.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">9. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We reserve the right to modify these terms at any time. Material changes will be communicated through our website. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">10. Contact</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For questions about these Terms & Conditions, please contact us through our Contact Us page. When calling, you will hear: "Thank you for calling Uversal Link, an independent service assistance platform."
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  These terms are governed by applicable federal and state laws. Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">12. Entire Agreement</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  These Terms & Conditions, along with our Privacy Policy, Refund Policy, and Disclaimer, constitute the entire agreement between you and Uversal Link regarding the use of our assistance services.
                </p>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-muted/30 border border-border">
                <p className="text-center text-muted-foreground">
                  By using our assistance services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
