import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import BannerSection from "@/components/home/BannerSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Uversal Link - Independent Internet & Cable TV Service Guidance</title>
        <meta
          name="description"
          content="Independent third-party advisory platform helping you understand internet, cable, and broadband service options. We provide guidance and assistance - not affiliated with any ISP or telecom company."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Banner Section */}
        <BannerSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;

