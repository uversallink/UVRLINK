import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const Refund = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy - Uversal Link</title>
        <meta
          name="description"
          content="Refund policy for Uversal Link's assistance services. Learn about eligibility and the refund request process."
        />
      </Helmet>
      <Layout>
        <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/30 dark:via-amber-950/30 dark:to-yellow-950/30 relative overflow-hidden">
          {/* Decorative waves */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="currentColor" className="text-orange-400"/>
              <path d="M0,350 Q300,250 600,350 T1200,350 L1200,600 L0,600 Z" fill="currentColor" className="text-amber-400"/>
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
                <RefreshCw className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Refund Information</span>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-6">
                Refund Policy
              </h1>

              <p className="text-muted-foreground mb-8">
                Last Updated: January 2, 2026
              </p>

              {/* Important Disclosure */}
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30 mb-12">
                <p className="text-foreground leading-relaxed">
                  <strong>Important Disclosure:</strong> Uversal Link is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. This refund policy applies only to our assistance service fees, not to provider charges.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">1. Refund Window</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Refund requests for Uversal Link assistance services can be submitted within <strong>7 to 15 days</strong> of your service purchase date, depending on the specific type of assistance provided. The applicable refund window will be communicated to you at the time of purchase.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">2. Eligibility Criteria</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Refund eligibility depends on several factors:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li><strong>Service Delivery Status:</strong> Whether the assistance services have been fully delivered</li>
                  <li><strong>Type of Assistance:</strong> Basic guidance vs. comprehensive research services may have different eligibility criteria</li>
                  <li><strong>Timeline:</strong> Request must be made within the applicable 7-15 day window</li>
                  <li><strong>Good Faith:</strong> Services must not have been misused or requested fraudulently</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">3. Services Eligible for Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following assistance services may be eligible for refund within the applicable window:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Initial consultation fees if no guidance was provided</li>
                  <li>Research services if delivered information was materially inaccurate</li>
                  <li>Assistance packages where service was not delivered as described</li>
                  <li>Fees paid for services we were unable to complete</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">4. Services NOT Eligible for Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Refunds will not be granted for:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Assistance services that have been fully delivered and completed</li>
                  <li>Requests made after the applicable refund window has expired</li>
                  <li>Dissatisfaction with provider services, pricing, or availability (as we do not control provider offerings)</li>
                  <li>Changes in provider terms or availability after our guidance was provided</li>
                  <li>Services used for commercial or resale purposes</li>
                  <li>Fees for services where you received and benefited from the guidance provided</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">5. Important: Provider Charges Are Separate</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This refund policy applies <strong>only to Uversal Link's assistance service fees</strong>. We cannot issue refunds for charges from internet, cable, or streaming service providers. Any refund requests related to provider services must be directed to those providers according to their own refund policies and terms of service.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">6. How to Request a Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To request a refund:
                </p>
                <ol className="text-muted-foreground leading-relaxed mb-6 list-decimal pl-6">
                  <li>Contact us through our Contact Us page or email</li>
                  <li>Include your order number or purchase confirmation details</li>
                  <li>Provide the reason for your refund request</li>
                  <li>Submit your request within the applicable 7-15 day window from purchase date</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We will review your request and respond within 5-7 business days with a decision and next steps.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">7. Refund Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If your refund request is approved:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Refunds will be processed to the original payment method</li>
                  <li>Processing typically takes 7-10 business days after approval</li>
                  <li>You will receive email confirmation once the refund has been processed</li>
                  <li>Actual credit to your account may take additional time depending on your financial institution</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">8. Partial Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In some cases, we may offer partial refunds when:
                </p>
                <ul className="text-muted-foreground leading-relaxed mb-6 list-disc pl-6">
                  <li>Some but not all services have been delivered</li>
                  <li>Services were partially completed before a request was made</li>
                  <li>We determine a partial refund is fair based on the circumstances</li>
                </ul>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">9. Disputes</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you disagree with a refund decision, you may request a review by contacting us within 10 days of the decision. We will conduct a secondary review and provide a final determination. All refund decisions after secondary review are final.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">10. Fraudulent Requests</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We reserve the right to deny refund requests that appear fraudulent or made in bad faith. This includes requests made after services have been fully utilized, repeated refund requests, or requests that misrepresent the services received.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">11. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We may update this Refund Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. The policy in effect at the time of your purchase will govern refund requests for that purchase.
                </p>

                <h2 className="font-display font-bold text-3xl text-foreground mt-8 mb-4">12. Contact for Refund Requests</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For refund requests or questions about this policy, please contact us through our Contact Us page or via the contact information provided at the time of purchase.
                </p>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-muted/30 border border-border">
                <p className="text-center text-muted-foreground mb-4">
                  <strong>Summary:</strong> Refund requests for our assistance services can be submitted within 7 to 15 days of purchase, depending on the type of assistance provided and whether services have been delivered.
                </p>
                <p className="text-center text-muted-foreground">
                  This policy applies only to Uversal Link service fees, not provider charges.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Refund;
