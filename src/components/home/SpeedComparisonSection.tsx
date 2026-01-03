import { motion } from "framer-motion";
import { Zap, Gauge, Download, Upload, Monitor, Gamepad2, Video, HardDrive, LucideIcon } from "lucide-react";

interface SpeedRecommendation {
    activity: string;
    minimumSpeed: string;
    recommendedSpeed: string;
    icon: LucideIcon;
    iconColor: string;
}

const speedRecommendations: SpeedRecommendation[] = [
    {
        activity: "4K Streaming",
        minimumSpeed: "25 Mbps",
        recommendedSpeed: "50+ Mbps",
        icon: Monitor,
        iconColor: "text-blue-500",
    },
    {
        activity: "Online Gaming",
        minimumSpeed: "25 Mbps",
        recommendedSpeed: "100+ Mbps",
        icon: Gamepad2,
        iconColor: "text-purple-500",
    },
    {
        activity: "Video Calls",
        minimumSpeed: "5 Mbps",
        recommendedSpeed: "25+ Mbps",
        icon: Video,
        iconColor: "text-pink-500",
    },
    {
        activity: "Large Downloads",
        minimumSpeed: "50 Mbps",
        recommendedSpeed: "200+ Mbps",
        icon: HardDrive,
        iconColor: "text-orange-500",
    },
];

const SpeedComparisonSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Animated speed lines background */}
            <div className="absolute inset-0 z-0 opacity-5">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
                        style={{
                            top: `${(i * 100) / 20}%`,
                            width: "100%",
                        }}
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "linear",
                        }}
                    />
                ))}
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-4">
                        <Zap className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium text-foreground">Speed Requirements</span>
                    </div>

                    <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
                        Find the Right Speed for You
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We help you understand what internet speeds you need for your daily activities.
                    </p>
                </motion.div>

                {/* Speed Tiers */}
                <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
                    <motion.div
                        className="card-premium text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                            <Gauge className="w-8 h-8 text-white" />
                        </div>
                        <p className="font-display font-bold text-4xl text-foreground mb-2">Basic</p>
                        <p className="text-muted-foreground">25-100 Mbps</p>
                    </motion.div>

                    <motion.div
                        className="card-premium text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                            <Download className="w-8 h-8 text-white" />
                        </div>
                        <p className="font-display font-bold text-4xl text-foreground mb-2">Standard</p>
                        <p className="text-muted-foreground">100-500 Mbps</p>
                    </motion.div>

                    <motion.div
                        className="card-premium text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                            <Upload className="w-8 h-8 text-white" />
                        </div>
                        <p className="font-display font-bold text-4xl text-foreground mb-2">Premium</p>
                        <p className="text-muted-foreground">500+ Mbps</p>
                    </motion.div>
                </div>

                {/* Visual Illustration */}
                <motion.div
                    className="max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
                        {/* Animated wave patterns */}
                        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 400" preserveAspectRatio="none">
                            <motion.path
                                d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z"
                                fill="rgba(255,255,255,0.1)"
                                initial={{ d: "M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z" }}
                                animate={{ d: "M0,200 Q300,300 600,200 T1200,200 L1200,400 L0,400 Z" }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M0,250 Q300,150 600,250 T1200,250 L1200,400 L0,400 Z"
                                fill="rgba(255,255,255,0.1)"
                                initial={{ d: "M0,250 Q300,150 600,250 T1200,250 L1200,400 L0,400 Z" }}
                                animate={{ d: "M0,250 Q300,350 600,250 T1200,250 L1200,400 L0,400 Z" }}
                                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                            />
                        </svg>

                        {/* Speed lines */}
                        <div className="absolute inset-0">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute h-1 bg-white/20 rounded-full"
                                    style={{
                                        top: `${20 + i * 15}%`,
                                        width: '100%',
                                    }}
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{
                                        duration: 2 + i * 0.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Center content */}
                        <div className="relative z-10 h-full flex items-center justify-center">
                            <div className="text-center text-white">
                                <Zap className="w-20 h-20 mx-auto mb-4" />
                                <h3 className="font-display font-bold text-3xl mb-2">Understanding Your Speed Needs</h3>
                                <p className="text-lg opacity-90">We help you find providers with the right speed for you</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Recommendation Table */}
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="card-premium overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 border-b border-border">
                            <div className="text-muted-foreground font-semibold">Activity</div>
                            <div className="text-center text-muted-foreground font-semibold">Minimum Speed</div>
                            <div className="text-center text-muted-foreground font-semibold">Recommended</div>
                        </div>

                        {/* Table Rows */}
                        {speedRecommendations.map((recommendation, index) => (
                            <motion.div
                                key={recommendation.activity}
                                className="grid grid-cols-3 gap-4 p-6 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-xl ${recommendation.iconColor.replace('text-', 'bg-')}/10 flex items-center justify-center`}>
                                        <recommendation.icon className={`w-6 h-6 ${recommendation.iconColor}`} />
                                    </div>
                                    <span className="font-semibold text-foreground">{recommendation.activity}</span>
                                </div>
                                <div className="text-center">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-600 font-semibold">
                                        {recommendation.minimumSpeed}
                                    </span>
                                </div>
                                <div className="text-center">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 font-semibold">
                                        {recommendation.recommendedSpeed}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <p className="text-muted-foreground mb-4">
                        Need help finding the right speed for your needs?
                    </p>
                    <a href="/contact" className="btn-coral inline-flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Call for Help: 1-800-ASSIST
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SpeedComparisonSection;
