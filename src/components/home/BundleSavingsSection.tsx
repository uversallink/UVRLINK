import { motion } from "framer-motion";
import { Check, TrendingDown, Percent, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const bundles = [
    {
        name: "Multi-Service Guidance",
        savings: "Comprehensive",
        features: ["Internet + TV Research", "Provider Comparison", "Bundle Analysis", "Setup Recommendations"],
        popular: false,
    },
    {
        name: "Full Service Assistance",
        savings: "Complete Package",
        features: ["All Services Research", "Pricing Comparison", "Contract Review", "Priority Support"],
        popular: true,
    },
    {
        name: "Internet Focus",
        savings: "Targeted Help",
        features: ["Internet Provider Search", "Speed Requirements", "Price Comparison", "Quick Setup Guide"],
        popular: false,
    },
];

const BundleSavingsSection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-secondary/5 via-background to-accent/5 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1" fill="currentColor" className="text-foreground" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-4">
                        <Percent className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">Service Options</span>
                    </div>

                    <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                        Multi-Service Research
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Get assistance finding providers offering multiple services. We help you compare bundled packages.
                    </p>
                </motion.div>

                {/* Savings Visual */}
                <motion.div
                    className="max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 shadow-xl">
                        {/* Floating money symbols */}
                        <div className="absolute inset-0">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute text-white/20 font-bold text-4xl"
                                    style={{
                                        left: `${10 + i * 12}%`,
                                        top: '50%',
                                    }}
                                    animate={{
                                        y: [-20, -60, -20],
                                        opacity: [0.2, 0.4, 0.2],
                                    }}
                                    transition={{
                                        duration: 3 + i * 0.3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.2,
                                    }}
                                >
                                    $
                                </motion.div>
                            ))}
                        </div>

                        {/* Center content */}
                        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                            <div className="text-white">
                                <TrendingDown className="w-16 h-16 mx-auto mb-3" />
                                <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">Compare Bundle Options</h3>
                                <p className="text-lg opacity-90">We help you find and compare multi-service packages</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bundles Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {bundles.map((bundle, index) => (
                        <motion.div
                            key={bundle.name}
                            className={`relative ${bundle.popular ? 'md:-mt-4' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {bundle.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-secondary to-accent rounded-full shadow-lg z-10">
                                    <span className="text-white text-sm font-semibold">Most Popular</span>
                                </div>
                            )}

                            <div className={`card-premium h-full ${bundle.popular ? 'border-2 border-secondary shadow-2xl' : ''}`}>
                                {/* Service Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-display font-bold text-2xl text-foreground">
                                        {bundle.name}
                                    </h3>
                                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                                        <TrendingDown className="w-4 h-4 text-green-500" />
                                        <span className="text-green-500 font-semibold text-sm">{bundle.savings}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-6">
                                    {bundle.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-secondary" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="tel:855-750-6771"
                                    className={`w-full inline-block text-center py-3 px-6 rounded-xl font-semibold transition-all ${bundle.popular
                                        ? 'bg-gradient-to-r from-secondary to-accent text-white hover:shadow-lg hover:scale-105'
                                        : 'bg-muted text-foreground hover:bg-muted/80'
                                        }`}
                                >
                                    Call Now: (855) 750-6771
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Benefits */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <Gift className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                            <p className="font-semibold text-foreground">Research Assistance</p>
                            <p className="text-sm text-muted-foreground">All service types</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                            <Check className="w-6 h-6 text-purple-500" />
                        </div>
                        <div>
                            <p className="font-semibold text-foreground">Independent Advice</p>
                            <p className="text-sm text-muted-foreground">No provider ties</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                        <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                            <TrendingDown className="w-6 h-6 text-pink-500" />
                        </div>
                        <div>
                            <p className="font-semibold text-foreground">Price Comparison</p>
                            <p className="text-sm text-muted-foreground">Multiple providers</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BundleSavingsSection;
