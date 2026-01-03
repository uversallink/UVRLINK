import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Uversal Link</title>
        <meta
          name="description"
          content="Privacy policy for Uversal Link's independent service assistance platform. Learn how we protect your data."
        />
      </Helmet>
      <Layout>
        <section className="py-24 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/30 dark:via-violet-950/30 dark:to-fuchsia-950/30 relative overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="privacy-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <rect width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#privacy-grid)" />
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
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Privacy & Security</span>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6">
                Privacy Policy
              </h1>

              <p className="text-muted-foreground mb-8">
                Last Updated: January 2, 2026
              </p>

              {/* Important Disclosure */}
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30 mb-12">
                <p className="text-foreground leading-relaxed">
                  <strong>Important Disclosure:</strong> Uversal Link is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Uversal Link, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you use our independent assistance services.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect only the information necessary to provide assistance services:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li><strong>Contact Information:</strong> Name, email address, phone number</li>
                  <li><strong>Location Data:</strong> ZIP code or service address to check provider availability</li>
                  <li><strong>Service Preferences:</strong> Your internet speed needs, TV preferences, and budget</li>
                  <li><strong>Communication Records:</strong> Records of our assistance interactions for quality and training</li>
                  <li><strong>Payment Information:</strong> Billing details processed securely through encrypted payment processors</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information for website functionality</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">3. Information We Do NOT Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We never request or collect:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Provider account passwords or login credentials</li>
                  <li>Social Security numbers</li>
                  <li>Bank account numbers or full credit card details (processed by secure third parties)</li>
                  <li>Sensitive personal identification beyond what's necessary for assistance</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">4. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use collected information to:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Provide personalized assistance and guidance services</li>
                  <li>Research service availability in your area</li>
                  <li>Communicate with you about your assistance request</li>
                  <li>Process payments for our services</li>
                  <li>Improve our assistance platform and customer experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Send service updates and important notifications (not marketing unless you opt in)</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">5. Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share limited information with:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li><strong>Service Providers:</strong> Payment processors, hosting services, and communication platforms that help us operate (under strict confidentiality agreements)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, with advance notice to you</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We never share your information with internet, cable, or streaming providers unless you explicitly direct us to assist with contacting them on your behalf.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">6. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>HTTPS encryption for all website communications</li>
                  <li>Secure, encrypted payment processing</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited employee access to personal data on a need-to-know basis</li>
                  <li>Secure data storage with reputable hosting providers</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">7. Your Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To exercise these rights, contact us through our Contact Us page.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">8. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our website uses cookies and similar technologies to enhance functionality, analyze usage, and improve your experience. You can control cookie preferences through your browser settings. Essential cookies required for website operation cannot be disabled.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our website may contain links to third-party websites (including service provider sites for informational purposes). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover we have collected such information, we will delete it promptly.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">11. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We retain your personal information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements. Once no longer needed, data is securely deleted or anonymized.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">12. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We may update this Privacy Policy to reflect changes in our practices or legal requirements. Material changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">13. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For questions or concerns about this Privacy Policy or our data practices, please contact us through our Contact Us page. We will respond to privacy inquiries within 30 days.
                </p>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-muted/30 border border-border">
                <p className="text-center text-muted-foreground">
                  Your privacy is important to us. We are committed to transparent data practices and protecting your personal information.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacy;
