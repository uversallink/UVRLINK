import { motion } from "framer-motion";
import { MapPin, CheckCircle, Search } from "lucide-react";
import { useState } from "react";

const coverageStats = [
    { label: "Cities Covered", value: "500+" },
    { label: "Happy Customers", value: "2M+" },
    { label: "Network Uptime", value: "99.9%" },
    { label: "Avg. Speed", value: "850 Mbps" },
];

const NetworkCoverageSection = () => {
    const [zipCode, setZipCode] = useState("");

    const handleCheckAvailability = (e: React.FormEvent) => {
        e.preventDefault();
        // This would typically check availability via an API
        console.log("Checking availability for:", zipCode);
    };

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Animated background circles */}
            <div className="absolute inset-0 z-0 opacity-10">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-4">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-medium text-foreground">Nationwide Coverage</span>
                        </div>

                        <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
                            Available in Your Neighborhood
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Our fiber-optic network reaches millions of homes across the country.
                            Check if StreamLink is available at your address and discover the speeds you can get.
                        </p>

                        {/* Availability Checker */}
                        <form onSubmit={handleCheckAvailability} className="mb-8">
                            <div className="flex gap-3">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        placeholder="Enter your ZIP code"
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none transition-colors"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn-coral whitespace-nowrap px-8"
                                >
                                    Check Now
                                </button>
                            </div>
                        </form>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {coverageStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="p-4 rounded-xl bg-card border border-border"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <p className="font-display font-bold text-3xl text-foreground mb-1">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative max-w-lg mx-auto">
                            {/* Main large image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
                                    alt="Network Coverage Map"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                
                                {/* Floating badge on main image */}
                                <motion.div
                                    className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-display font-bold text-xl text-foreground">500+</p>
                                            <p className="text-sm text-muted-foreground">Cities</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Small image top right */}
                            <motion.div
                                className="absolute -top-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80"
                                    alt="Happy Customer"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent"></div>
                            </motion.div>

                            {/* Small image bottom left */}
                            <motion.div
                                className="absolute -bottom-8 -left-8 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-background"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
                                    alt="Customer Support"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-transparent"></div>
                            </motion.div>

                            {/* Decorative pulse effect */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/20 blur-3xl -z-10"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NetworkCoverageSection;
