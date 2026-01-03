import { motion } from "framer-motion";
import { Search, Phone, Calendar, Zap } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Share Your Needs",
        description: "Tell us about your internet, cable, and streaming needs. We'll research what options are available in your area.",
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        icon: Phone,
        title: "Get Guidance",
        description: "Our team provides personalized assistance to help you understand your options. We compare features, pricing, and availability.",
        color: "bg-purple-500/10 text-purple-500",
    },
    {
        icon: Calendar,
        title: "Make Informed Decision",
        description: "With our guidance, you can confidently choose the service that fits your needs. We help clarify terms and features.",
        color: "bg-pink-500/10 text-pink-500",
    },
    {
        icon: Zap,
        title: "Connect with Provider",
        description: "Contact your chosen provider directly to set up service. They handle installation and billing according to their terms.",
        color: "bg-orange-500/10 text-orange-500",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 z-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                        How Our Assistance Works
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From initial inquiry to provider connection, we guide you through every step of finding the right connectivity solution.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Connector line (hidden on mobile, shown on larger screens) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0"></div>
                            )}

                            <div className="card-premium text-center relative z-10 h-full">
                                {/* Step number */}
                                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                                    <span className="font-display font-bold text-white text-sm">{index + 1}</span>
                                </div>

                                {/* Icon */}
                                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}>
                                    <step.icon className="w-10 h-10" />
                                </div>

                                {/* Content */}
                                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a href="/contact" className="btn-coral inline-flex items-center gap-2">
                        Get Started Today
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
