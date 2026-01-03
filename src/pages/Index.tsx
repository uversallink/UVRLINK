import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import SpeedComparisonSection from "@/components/home/SpeedComparisonSection";
import NetworkCoverageSection from "@/components/home/NetworkCoverageSection";
import BundleSavingsSection from "@/components/home/BundleSavingsSection";
import PricingPreview from "@/components/home/PricingPreview";
import BannerSection from "@/components/home/BannerSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Uversal Link - Independent Connectivity Assistance</title>
        <meta
          name="description"
          content="Independent third-party assistance platform helping you navigate internet, cable, and streaming options. Founded 2026. Get personalized guidance for a separate service fee."
        />
      </Helmet>
      <Layout>
        {/* Hero Section - Kept the same */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Pricing Preview */}
        <PricingPreview />

        {/* Banner Section */}
        <BannerSection />

        {/* How It Works Section - New */}
        <HowItWorksSection />

        {/* Speed Comparison Section - New */}
        <SpeedComparisonSection />

        {/* Network Coverage Section - New */}
        <NetworkCoverageSection />

        {/* Bundle Savings Section - New */}
        <BundleSavingsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;

